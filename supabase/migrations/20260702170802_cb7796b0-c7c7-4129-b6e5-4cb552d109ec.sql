
ALTER TABLE public.appointments
  ALTER COLUMN emergency_contact_name DROP NOT NULL,
  ALTER COLUMN emergency_contact_relationship DROP NOT NULL,
  ALTER COLUMN emergency_contact_phone DROP NOT NULL,
  ALTER COLUMN gender DROP NOT NULL;

DROP POLICY IF EXISTS "Anyone can view appointments" ON public.appointments;

REVOKE SELECT ON public.appointments FROM anon;
