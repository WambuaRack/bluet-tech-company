export const nav = [
  { href: '/', label: 'Home' }, { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' }, { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Insights' }, { href: '/careers', label: 'Careers' },
];
export const services = [
  { slug: 'software', title: 'Custom software', text: 'Web and mobile products built around how your team actually works.' },
  { slug: 'cloud', title: 'Cloud and DevOps', text: 'Migrations, CI/CD and infrastructure that stays up and stays affordable.' },
  { slug: 'ai', title: 'AI and automation', text: 'Practical models and workflows that remove repetitive work.' },
  { slug: 'design', title: 'Product design', text: 'Research, interface design and design systems your developers will enjoy.' },
  { slug: 'security', title: 'Cybersecurity', text: 'Audits, hardening and monitoring for systems that hold real data.' },
  { slug: 'support', title: 'Managed IT support', text: 'A named team that answers, fixes and plans ahead for you.' },
];
export const jobs = [
  { title: 'Senior Full-stack Engineer', where: 'Nairobi / Remote', type: 'Full-time' },
  { title: 'Product Designer', where: 'Nairobi', type: 'Full-time' },
  { title: 'DevOps Engineer', where: 'Remote', type: 'Contract' },
];

export const serviceDetails: Record<string, string[]> = {
  software: ['Web apps, mobile apps and internal tools', 'APIs and integrations with the systems you already use', 'Testing, documentation and a clean hand-over'],
  cloud: ['Migration planning and execution', 'Automated build and deploy pipelines', 'Monitoring, backups and cost reviews'],
  ai: ['Workflow audit to find tasks worth automating', 'Chatbots, document processing and forecasting', 'Staff training and ongoing tuning'],
  design: ['User research and prototypes', 'Interface design for web and mobile', 'A design system your developers can reuse'],
  security: ['Security audit and risk report', 'Hardening of servers, networks and accounts', 'Monitoring and incident response plans'],
  support: ['Helpdesk with agreed response times', 'Device and software management', 'Quarterly planning and reporting'],
};
