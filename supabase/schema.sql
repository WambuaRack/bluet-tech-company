-- Run in Supabase: SQL Editor > New query > Run
create table admins (user_id uuid primary key references auth.users on delete cascade);
create function is_admin() returns boolean language sql security definer stable set search_path = public
  as $$ select exists (select 1 from admins where user_id = auth.uid()) $$;

create table news (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, summary text, body text, image text, published boolean not null default false, created_at timestamptz not null default now());
create table products (id uuid primary key default gen_random_uuid(), slug text unique not null, name text not null, tagline text, description text, image text, published boolean not null default false, created_at timestamptz not null default now());
create table jobs (id uuid primary key default gen_random_uuid(), title text not null, location text, type text, description text, "open" boolean not null default true, created_at timestamptz not null default now());
create table contacts (id uuid primary key default gen_random_uuid(), name text not null check (length(name) between 1 and 120), email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'), message text not null check (length(message) <= 5000), created_at timestamptz not null default now());
create table members (id uuid primary key default gen_random_uuid(), name text not null check (length(name) between 1 and 120), email text not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'), interest text, created_at timestamptz not null default now());
create table applications (id uuid primary key default gen_random_uuid(), name text not null check (length(name) between 1 and 120), email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'), role text, resume_url text, message text check (length(message) <= 5000), created_at timestamptz not null default now());

alter table admins enable row level security; alter table news enable row level security; alter table products enable row level security;
alter table jobs enable row level security; alter table contacts enable row level security; alter table members enable row level security; alter table applications enable row level security;

create policy "own admin row" on admins for select using (user_id = auth.uid());
create policy "public read news" on news for select using (published);
create policy "public read products" on products for select using (published);
create policy "public read jobs" on jobs for select using ("open");
create policy "public submit contact" on contacts for insert to anon, authenticated with check (true);
create policy "public join" on members for insert to anon, authenticated with check (true);
create policy "public apply" on applications for insert to anon, authenticated with check (true);
create policy "admin all news" on news for all using (is_admin()) with check (is_admin());
create policy "admin all products" on products for all using (is_admin()) with check (is_admin());
create policy "admin all jobs" on jobs for all using (is_admin()) with check (is_admin());
create policy "admin all contacts" on contacts for all using (is_admin()) with check (is_admin());
create policy "admin all members" on members for all using (is_admin()) with check (is_admin());
create policy "admin all applications" on applications for all using (is_admin()) with check (is_admin());

-- Starter content
insert into news (slug, title, summary, body, published) values
 ('welcome-to-bluet', 'Welcome to the new Bluet Tech website', 'Our new site is live.', E'We have launched a new home for Bluet Tech.\n\nFollow along for product updates and company news.', true);
insert into jobs (title, location, type, description) values ('Senior Full-stack Engineer', 'Remote', 'Full-time', 'Build and ship customer-facing products end to end.');
insert into products (slug, name, tagline, description, published) values ('bluet-pay', 'Bluet Pay', 'Payments for small retailers', 'Accept mobile payments and track sales in one dashboard.', true);

-- AFTER creating your admin user (Authentication > Users > Add user), make them an admin:
-- insert into admins (user_id) select id from auth.users where email = 'wambuashedrack11@gmail.com';
