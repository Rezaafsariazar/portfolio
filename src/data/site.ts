// Single source of truth for content. `placeholder: true` items render with a visible badge.
export const site = {
  name: 'Reza Afsariazar',
  url: 'https://rezaafsariazar.com',
  location: 'Karlsruhe',
  coords: '49.0069° N · 8.4037° E',
  tagline: 'Maps, sun and software for real cities.',
  description:
    'Reza Afsariazar builds maps, sun and shade tools and software for real cities. Based in Karlsruhe. Portfolio with ShadeKA, a shade-aware walking-route planner.',
  email: { value: 'hello@rezaafsariazar.com', placeholder: true },
  github: 'https://github.com/Rezaafsariazar',
  linkedin: { value: 'https://www.linkedin.com/in/your-handle', placeholder: true },
  cv: { href: '/Reza-Afsariazar-CV.pdf', placeholder: true },
};

export const projects = [
  {
    year: '2026',
    kind: 'Web app · Live',
    title: 'ShadeKA',
    placeholder: false,
    body: 'A shade-aware walking-route planner for Karlsruhe. It prefers shaded streets, computes shadows from building and tree geometry for the chosen time of day, and shows the route in a 3D city view.',
    tags: ['React 19', 'TypeScript', 'MapLibre GL', 'three.js', 'FastAPI', 'PostGIS'],
    links: [
      { label: 'Live demo', href: 'https://shadeka.rezaafsariazar.com' },
      { label: 'Source', href: 'https://github.com/Rezaafsariazar/Shadeka' },
    ],
  },
  {
    year: 'Year',
    kind: 'Type',
    title: 'Next project',
    placeholder: true,
    body: 'One or two sentences: the problem, what you built, and the result.',
    tags: ['Stack', 'Stack', 'Stack'],
    links: [],
  },
  {
    year: 'Year',
    kind: 'Type',
    title: 'Another project',
    placeholder: true,
    body: 'Three projects is enough. Put the strongest one first.',
    tags: ['Stack', 'Stack'],
    links: [],
  },
];

export const about = {
  text: 'Short intro in your own words: where you studied or work, what you are looking for, and what you care about.',
  placeholder: true,
  skills: [
    { h: 'Frontend', p: 'React, TypeScript, WebGL' },
    { h: 'Geo', p: 'PostGIS, MapLibre, OpenStreetMap' },
    { h: 'Backend', p: 'FastAPI, PostgreSQL' },
  ],
};
