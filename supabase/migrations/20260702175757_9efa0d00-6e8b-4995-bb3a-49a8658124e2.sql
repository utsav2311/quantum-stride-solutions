
-- Revoke SELECT from anon/authenticated so appointments aren't exposed via Data API / GraphQL
REVOKE SELECT ON public.appointments FROM anon, authenticated;

-- Replace overly permissive INSERT policy with basic input validation
DROP POLICY IF EXISTS "Anyone can create appointments" ON public.appointments;

CREATE POLICY "Anyone can create appointments"
ON public.appointments
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(full_name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(phone)) BETWEEN 3 AND 40
  AND length(btrim(appointment_type)) BETWEEN 1 AND 100
  AND length(btrim(appointment_time)) BETWEEN 1 AND 40
  AND appointment_date >= CURRENT_DATE
  AND appointment_date <= CURRENT_DATE + INTERVAL '2 years'
  AND coalesce(length(special_requests), 0) <= 2000
);
