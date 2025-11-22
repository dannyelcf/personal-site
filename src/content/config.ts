import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      excerpt: z.string().optional(),
      date: z.coerce.date(),
      lastmod: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      weight: z.number().optional(),
      cover: image().optional(),
      categories: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      contributors: z.array(z.string()).default([]),
      pinned: z.boolean().default(false),
      homepage: z.boolean().default(false),
      toc: z.boolean().default(true),
      giscus: z.number().optional(),
    }),
});

export const collections = { blog };
