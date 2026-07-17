import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3.23.8'

const RECIPIENT = 'whatsapp:+916200396319'

const BodySchema = z.object({
  appointment_id: z.string().uuid(),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { appointment_id } = parsed.data

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')
    const twilioApiKey = Deno.env.get('TWILIO_API_KEY')
    const fromNumber = Deno.env.get('TWILIO_WHATSAPP_FROM')

    if (!supabaseUrl || !serviceRoleKey) throw new Error('Missing Supabase env')
    if (!lovableApiKey) throw new Error('Missing LOVABLE_API_KEY')
    if (!twilioApiKey) throw new Error('Missing TWILIO_API_KEY')
    if (!fromNumber) throw new Error('Missing TWILIO_WHATSAPP_FROM')

    // Verify appointment exists server-side; only send notification for real bookings.
    const admin = createClient(supabaseUrl, serviceRoleKey)
    const { data: appointment, error: fetchErr } = await admin
      .from('appointments')
      .select('id, full_name, phone, email, appointment_type, appointment_date, appointment_time, special_requests, created_at')
      .eq('id', appointment_id)
      .maybeSingle()

    if (fetchErr) {
      console.error('appointment lookup failed:', fetchErr)
      return new Response(JSON.stringify({ error: 'Lookup failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (!appointment) {
      return new Response(JSON.stringify({ error: 'Appointment not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Only allow notifications for very recently-created appointments to prevent replay abuse.
    const createdAt = new Date(appointment.created_at as string).getTime()
    if (Number.isFinite(createdAt) && Date.now() - createdAt > 5 * 60 * 1000) {
      return new Response(JSON.stringify({ error: 'Appointment too old for notification' }), {
        status: 409,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const body = [
      '🩺 *New Appointment Request*',
      '',
      `*Name:* ${appointment.full_name}`,
      `*Phone:* ${appointment.phone}`,
      `*Email:* ${appointment.email}`,
      `*Service:* ${appointment.appointment_type}`,
      `*Date:* ${appointment.appointment_date}`,
      `*Time:* ${appointment.appointment_time}`,
      `*Notes:* ${appointment.special_requests || '—'}`,
    ].join('\n')

    const response = await fetch('https://connector-gateway.lovable.dev/twilio/Messages.json', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'X-Connection-Api-Key': twilioApiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: RECIPIENT,
        From: fromNumber,
        Body: body,
      }).toString(),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error(`Twilio gateway request failed [${response.status}]: ${errorBody}`)
      return new Response(
        JSON.stringify({ error: 'Provider request failed', status: response.status, details: errorBody }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const data = await response.json()
    return new Response(JSON.stringify({ success: true, sid: data.sid }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('notify-appointment error:', err)
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
