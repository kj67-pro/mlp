CREATE TABLE public.pony_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 40),
  score integer NOT NULL CHECK (score >= 0 AND score < 100000000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.pony_scores TO anon, authenticated;
GRANT ALL ON public.pony_scores TO service_role;
ALTER TABLE public.pony_scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read scores" ON public.pony_scores FOR SELECT USING (true);
CREATE POLICY "Anyone can add scores" ON public.pony_scores FOR INSERT WITH CHECK (true);
CREATE INDEX pony_scores_created_idx ON public.pony_scores (created_at DESC);