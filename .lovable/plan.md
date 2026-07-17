# WhatsApp Booking Notifications

When a visitor submits the appointment form, send a WhatsApp message with the full booking details to **+91 62003 96319**.

## Provider: Twilio WhatsApp

Automated WhatsApp sending requires a business API provider. We'll use **Twilio** (already supported as a Lovable connector, works with the WhatsApp sandbox for testing and a verified sender for production).

### What you'll need to do
1. Create a free Twilio account at twilio.com.
2. Activate the **WhatsApp Sandbox** (Messaging → Try it out → Send a WhatsApp message). Twilio gives you a sandbox sender number and a join code.
3. From the recipient phone (+91 62003 96319), send the join code (e.g. `join <two-words>`) via WhatsApp to the sandbox number — this opts the number in.
4. In Lovable, I'll trigger the Twilio connector so you can log in and link the account.

For production (no sandbox), you later request WhatsApp Sender approval from Twilio; the code stays the same.

## Implementation

### 1. Connect Twilio
- Link the Twilio connector to the project. This exposes `TWILIO_API_KEY` (used with the Lovable connector gateway; account SID is handled automatically).

### 2. Edge function `notify-appointment`
- New Supabase edge function at `supabase/functions/notify-appointment/index.ts`.
- Accepts POST with the appointment payload.
- Calls Twilio via the gateway (`POST /Messages.json`) using `whatsapp:` prefixed `To`/`From` numbers.
- CORS headers, Zod validation, structured error response.
- Recipient number `whatsapp:+916200396319` hardcoded (destination is fixed).
- Sender number stored as a secret `TWILIO_WHATSAPP_FROM` (e.g. `whatsapp:+14155238886` for sandbox) — requested via `add_secret` after Twilio is linked.

### 3. Message format (full details)
```
🩺 New Appointment Request

Name: {full_name}
Phone: {phone}
Email: {email}
Service: {appointment_type}
Date: {appointment_date}
Time: {appointment_time}
Notes: {special_requests or "—"}
```

### 4. Wire form to the function
- Update `src/components/AppointmentForm.tsx`: after the successful `supabase.from("appointments").insert(...)`, call `supabase.functions.invoke("notify-appointment", { body: {...} })`.
- Notification failure is logged but does not block the user's success toast (booking is already saved).

## Files
- add: `supabase/functions/notify-appointment/index.ts`
- edit: `src/components/AppointmentForm.tsx`
- secret: `TWILIO_WHATSAPP_FROM` (requested after connector is linked)

## Notes / limits
- Twilio sandbox only sends to numbers that have joined via the join code — so the +91 62003 96319 number must send the join phrase once.
- Sandbox templates are free-form for 24h after the recipient's last message; for production, an approved WhatsApp template is required for unsolicited notifications. Since this is a notification triggered by a form-fill (business-initiated), you'll want the production WhatsApp sender + a simple approved template eventually. I'll leave a TODO comment for the template SID.
