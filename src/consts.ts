// Site-wide text + the pillar taxonomy. Single source of truth.

export const SITE = {
  title: 'FarseerTech',
  owner: 'Yusuf Tinwala',
  role: 'Owner / Voice behind FarseerTech',
  positioning: 'Calm engineering judgment for hyperscale agentic products.',
  tagline: 'Seeing the production bill before it arrives.',
  description:
    'A personal technical publication by Yusuf Tinwala on building hyperscale, agentic, production-grade systems — AIOps, agentic architecture, reliability, product judgment, and engineering leadership.',
  url: 'https://farseertech.com',
  social: {
    rss: '/rss.xml',
    linkedin: '',
    github: '',
    x: '',
    email: '',
  },
};

export type PillarId =
  | 'field-notes'
  | 'building-organizations'
  | 'building-product'
  | 'building-software';

export interface Pillar {
  id: PillarId;
  name: string;
  short: string;
  blurb: string;
  /** CSS color token — the pillar's single dominant accent. */
  accent: string;
  /** Bare hex of the accent, for inline SVG / JSON-LD / theme-color. */
  accentHex: string;
  /** Icon name registered in Icon.astro. */
  icon: PillarId;
}

export const PILLARS: Record<PillarId, Pillar> = {
  'field-notes': {
    id: 'field-notes',
    name: 'Field Notes',
    short: 'Field Notes',
    blurb: 'Production lessons, operating scars, and sharp technical observations.',
    accent: 'var(--coral)',
    accentHex: '#f5634f',
    icon: 'field-notes',
  },
  'building-organizations': {
    id: 'building-organizations',
    name: 'Building Organizations',
    short: 'Organizations',
    blurb: 'Engineering leadership, team design, accountability, and operating rhythms.',
    accent: 'var(--teal)',
    accentHex: '#15a99b',
    icon: 'building-organizations',
  },
  'building-product': {
    id: 'building-product',
    name: 'Building Product',
    short: 'Product',
    blurb: 'AI product strategy, agentic experiences, and product judgment that survives customers.',
    accent: 'var(--violet)',
    accentHex: '#9e68df',
    icon: 'building-product',
  },
  'building-software': {
    id: 'building-software',
    name: 'Building Software',
    short: 'Software',
    blurb: 'Architecture, AIOps, agentic systems, reliability, and scale.',
    accent: 'var(--indigo)',
    accentHex: '#5f6ff0',
    icon: 'building-software',
  },
};

export const PILLAR_ORDER: PillarId[] = [
  'field-notes',
  'building-organizations',
  'building-product',
  'building-software',
];

export const NAV = [
  { label: 'Field Notes', href: '/field-notes' },
  { label: 'Building Organizations', href: '/building-organizations' },
  { label: 'Building Product', href: '/building-product' },
  { label: 'Building Software', href: '/building-software' },
  { label: 'About', href: '/about' },
];
