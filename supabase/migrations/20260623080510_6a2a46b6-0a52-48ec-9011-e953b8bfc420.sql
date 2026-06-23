CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  source_page TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT contact_submissions_name_len CHECK (char_length(name) BETWEEN 1 AND 100),
  CONSTRAINT contact_submissions_email_len CHECK (char_length(email) BETWEEN 3 AND 255),
  CONSTRAINT contact_submissions_message_len CHECK (char_length(message) BETWEEN 1 AND 2000),
  CONSTRAINT contact_submissions_company_len CHECK (company IS NULL OR char_length(company) <= 120),
  CONSTRAINT contact_submissions_phone_len CHECK (phone IS NULL OR char_length(phone) <= 30)
);

GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX contact_submissions_created_at_idx ON public.contact_submissions (created_at DESC);