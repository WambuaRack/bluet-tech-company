import { site } from '../lib/site';
import { services } from '../lib/data';
const pages = ['', 'about', 'services', 'products', 'work', 'news', 'careers', 'contact', 'membership', 'privacy', 'terms', ...services.map((s) => `services/${s.slug}`)];
export const GET = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((p) => `<url><loc>${site.url}/${p}</loc></url>`).join('')}</urlset>`,
  { headers: { 'Content-Type': 'application/xml' } });
