# Bluet Tech website (Astro + Tailwind v4 + Supabase)

## Setup
1. `npm install`
2. Create a Supabase project. In the SQL Editor run `supabase/schema.sql` (tables, row-level security, starter content).
3. Authentication > Users > Add user (your admin email and a strong password), then run the last commented line in `schema.sql` with your email to make it an admin. Turn off public sign-ups: Authentication > Providers > Email > disable "Allow new users to sign up".
4. `cp .env.example .env` and fill in the Supabase URL and anon key (Project settings > API). Optional: `PUBLIC_GA_ID`, `PUBLIC_SITE_URL`, ImageKit values.
5. Edit company details (address, phone, email) in `src/lib/site.ts` and update the domain in `public/robots.txt`.
6. `npm run dev`, then open `/admin` to sign in.

## What is in Supabase
News, Products, Jobs (editable at /admin), plus form submissions (Messages, Members, Applications) that admins can read and delete. Visitors can only read published content and submit forms; everything else needs an admin session (enforced by row-level security, not just the UI).

## Notes
- Analytics (Google Analytics) loads only after a visitor accepts the cookie banner.
- Work page projects are markdown files in `src/content/projects/`.
- News article titles and descriptions are set in the browser after load; for best search indexing, move news to server rendering later.
- Legal pages are templates. Have a lawyer review them before launch.
- Deploy: `npm run build`, upload `dist/` to Netlify, Vercel or Cloudflare Pages.
