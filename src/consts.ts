// Site-wide config for the FarseerTech publication.

export const SITE = {
  title: 'FarseerTech',
  owner: 'Yusuf Tinwala',
  role: 'Owner / Voice',
  positioning: 'Calm engineering judgment for hyperscale agentic products.',
  tagline: 'Seeing the production bill before it arrives.',
  description:
    'A personal technical publication by Yusuf Tinwala on building hyperscale, agentic, production-grade systems — ownership, reliability, product judgment, and engineering leadership.',
  url: 'https://farseertech.com',
  ogImage: '/icons/social-card-1200x630.png',
  social: {
    rss: '/rss.xml',
    linkedin: '',
    github: '',
    x: '',
    email: '',
  },
};

// Single left-hand navigation — the only nav on the site.
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Field Notes', href: '/field-notes/ai-velocity-manufacturing-liabilities' },
  { label: 'About', href: '/about' },
];

// The one published field note. Drives the home feature + RSS + <head>.
export const FEATURED = {
  series: 'Paid in Production',
  number: '№ 01',
  kicker: 'Field Note',
  title: 'Your AI velocity is manufacturing liabilities',
  highlight: 'manufacturing liabilities',
  dek: 'For the people accountable when the AI ships.',
  description:
    "Agents make creation cheap — they don't make ownership cheap. The durable artifact nobody signed up to own is where production bills are born.",
  date: new Date('2026-05-30'),
  href: '/field-notes/ai-velocity-manufacturing-liabilities',
  comic: '/images/post01-comic.png',
};
