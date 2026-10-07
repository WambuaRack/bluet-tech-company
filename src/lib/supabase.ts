import { createClient } from '@supabase/supabase-js';
const u = import.meta.env.PUBLIC_SUPABASE_URL, k = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
export const supabase: any = u && k ? createClient(u, k) : null;
export const esc = (s: any) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as any)[c]);
export const img = (p: string) => !p ? '' : /^https?:/.test(p) ? p : import.meta.env.PUBLIC_IMAGEKIT_ENDPOINT ? `${import.meta.env.PUBLIC_IMAGEKIT_ENDPOINT}/${p}?tr=w-800,q-75,f-auto` : p;
export const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
