ALTER TABLE public.appointments
  ALTER COLUMN date_of_birth DROP NOT NULL,
  ALTER COLUMN preferred_location DROP NOT NULL,
  ALTER COLUMN emergency_contact_name DROP NOT NULL,
  ALTER COLUMN emergency_contact_relationship DROP NOT NULL,
  ALTER COLUMN emergency_contact_phone DROP NOT NULL;