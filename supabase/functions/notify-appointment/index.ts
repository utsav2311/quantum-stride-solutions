import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

const RECIPIENT = 'whatsapp:+916200396319'

const BodySchema = z.object({
  full_name: z.string().min(1).max(200),
  phone: z.string().min(3).max(40),
  email: z.string().email().max(320),
  appointment_type: z.string().min(1).max(100),
  appointment_date: z.string().min(1).max(40),
  appointment_time: z.string().min(1).max(40),
  special_requests: z.string().max(2000).optional().default(''),
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

    const { full_name, phone, email, appointment_type, appointment_date, appointment_time, special_requests } = parsed.data

    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')
    const twilioApiKey = Deno.env.get('TWILIO_API_KEY')
    const fromNumber = Deno.env.get('TWILIO_WHATSAPP_FROM')

    if (!lovableApiKey) throw new Error('Missing LOVABLE_API_KEY')
    if (!twilioApiKey) throw new Error('Missing TWILIO_API_KEY')
    if (!fromNumber) throw new Error('Missing TWILIO_WHATSAPP_FROM')

    const body = [
      '🩺 *New Appointment Request*',
      '',
      `*Name:* ${full_name}`,
      `*Phone:* ${phone}`,
      `*Email:* ${email}`,
      `*Service:* ${appointment_type}`,
      `*Date:* ${appointment_date}`,
      `*Time:* ${appointment_time}`,
      `*Notes:* ${special_requests || '—'}`,
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
