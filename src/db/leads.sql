-- Create leads table for Compliance Test
CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  full_name text,
  company text,
  title text,
  email text,
  score int,
  answers jsonb
);

-- RLS Policies (Optional but recommended)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow insert from public (for anonymous users taking the test)
CREATE POLICY "Enable insert for all users" ON leads FOR INSERT WITH CHECK (true);

-- Allow select only for admins (assuming admin role or specific user)
-- Adjust this based on your actual auth setup.
-- For now, we might want to just allow service_role to read, or authenticated users if there are any admins.
