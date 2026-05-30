import { defineCollection, z } from "astro:content";

export const quotes = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().optional(),
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
  }),
});
