// EDIT THESE: one place for company details used in the footer, contact page and structured data.
export const site = {
  name: 'Bluet Tech',
  url: (import.meta.env.PUBLIC_SITE_URL as string) || 'https://bluet.tech',
  description: 'Bluet Tech builds custom software, cloud and AI systems for growing companies.',
  email: 'wambuashedrack11@gmail.com',
  phone: '+254 727 177155',
  address: ['Bluet Tech', '00100, Nairobi', 'Kenya'],
  hours: 'Mon to Fri, 8:00 to 17:00 EAT',
  gaId: (import.meta.env.PUBLIC_GA_ID as string) || '',
};
export const nav = [
  { href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' }, { href: '/work', label: 'Work' }, { href: '/news', label: 'News' }, { href: '/careers', label: 'Careers' },
];
