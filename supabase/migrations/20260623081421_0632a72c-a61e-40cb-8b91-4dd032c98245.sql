DROP POLICY IF EXISTS "Anyone can submit a contact form" ON public.contact_submissions;

CREATE POLICY "Anyone can submit a contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 100
  AND length(btrim(email)) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(message)) BETWEEN 1 AND 2000
  AND (company IS NULL OR length(company) <= 120)
  AND (phone IS NULL OR length(phone) <= 30)
  AND (source_page IS NULL OR length(source_page) <= 255)
  AND (referrer IS NULL OR length(referrer) <= 500)
  AND (utm_source IS NULL OR length(utm_source) <= 150)
  AND (utm_medium IS NULL OR length(utm_medium) <= 150)
  AND (utm_campaign IS NULL OR length(utm_campaign) <= 150)
  AND (utm_term IS NULL OR length(utm_term) <= 150)
  AND (utm_content IS NULL OR length(utm_content) <= 150)
);