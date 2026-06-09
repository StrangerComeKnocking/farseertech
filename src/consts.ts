// Site-wide config for FarseerTech.

export const SITE = {
  title: 'FarseerTech',
  owner: 'Yusuf Tinwala',
  role: 'Founder',
  positioning: 'Solving complicated engineering problems, frugally.',
  tagline: 'Seeing the production bill before it arrives.',
  description:
    'FarseerTech is an engineering practice that solves complicated problems frugally — simpler systems, leaner teams, lower cost. Field notes and senior engineering judgment from Yusuf Tinwala.',
  url: 'https://farseertech.com',
  ogImage: '/icons/social-card-1200x630.png',
  // Only `rss` is wired up today; the rest are placeholders for future links.
  social: {
    rss: '/rss.xml',
    linkedin: '',
    github: '',
    x: '',
    email: '',
  },
};

// The published field notes (newest first). Drives the home feature, RSS, and the nav.
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

export const FIELD_NOTES = [FEATURED];

// Left-hand navigation. "Field Notes" expands to list the notes while you're in that section.
export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Field Notes',
    href: FIELD_NOTES[0].href,
    section: '/field-notes',
    children: FIELD_NOTES.map((n) => ({ label: n.title, href: n.href })),
  },
  { label: 'About', href: '/about' },
];
