import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const t = z.object({ en: z.string(), de: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(50),
    period: z.string().default(''),
    kind: t,
    state: z.enum(['live', 'in-progress', 'archived', 'planned']).default('live'),
    summary: t,
    role: t.optional(),
    highlights: z.array(t).default([]),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ kind: z.enum(['demo', 'source', 'report']), href: z.string().url() })).default([]),
    figure: z.enum(['shadow-plate']).optional(),
  }),
});

export const collections = { projects };
