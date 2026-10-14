// Personal facts. `placeholder: true` renders a visible badge so nothing untrue ships silently.
export const site = {
  name: 'Reza Afsariazar',
  url: 'https://rezaafsariazar.com',
  location: 'Karlsruhe',
  country: 'Germany',
  email: 'Rezaafsariazar@gmail.com',
  github: 'https://github.com/Rezaafsariazar',
  linkedin: 'https://www.linkedin.com/in/rezaafsariazar',
  // Set to null once you have a real CV file in /public.
  cv: null as string | null,
};

// Experience and education. `period.placeholder` marks dates that still need to be filled in.
export const cv = [
  {
    group: 'experience' as const,
    org: 'BWIM',
    period: { value: 'Dates to add', placeholder: true },
    role: {
      en: 'Research assistant (Hi-Wi)',
      de: 'Wissenschaftliche Hilfskraft (Hi-Wi)',
    },
    detail: {
      en: 'Analysing mobility quality across German cities.',
      de: 'Analyse der Mobilitätsqualität in deutschen Städten.',
    },
  },
  {
    group: 'education' as const,
    org: 'HfWU Nürtingen-Geislingen',
    period: { value: 'Dates to add', placeholder: true },
    role: {
      en: 'M.Sc. Sustainable Mobility',
      de: 'M.Sc. Nachhaltige Mobilität',
    },
    detail: {
      en: 'Focus on mobility data, GIS and urban planning.',
      de: 'Schwerpunkt Mobilitätsdaten, GIS und Stadtplanung.',
    },
  },
];

export const skills = [
  {
    title: { en: 'Mobility & planning', de: 'Mobilität & Planung' },
    items: {
      en: ['Mobility data analysis', 'Mobility quality assessment', 'Urban planning'],
      de: ['Mobilitätsdatenanalyse', 'Bewertung der Mobilitätsqualität', 'Stadtplanung'],
    },
  },
  {
    title: { en: 'Geospatial', de: 'Geodaten' },
    items: { en: ['GIS', 'PostGIS', 'MapLibre GL', '3D city models'], de: ['GIS', 'PostGIS', 'MapLibre GL', '3D-Stadtmodelle'] },
  },
  {
    title: { en: 'Development', de: 'Entwicklung' },
    items: { en: ['TypeScript', 'React', 'three.js', 'FastAPI'], de: ['TypeScript', 'React', 'three.js', 'FastAPI'] },
  },
];
