import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const notes = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});
