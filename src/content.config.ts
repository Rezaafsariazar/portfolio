import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const t = z.object({ en: z.string(), de: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    type: t,
    status: z.enum(['live', 'archived', 'placeholder']).default('live'),
    summary: t,
    stack: z.array(z.string()),
    links: z.array(z.object({ kind: z.enum(['demo', 'source']), href: z.string().url() })).default([]),
  }),
});

export const collections = { projects };
