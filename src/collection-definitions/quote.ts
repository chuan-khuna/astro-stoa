import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const quotes = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/quotes" }),
  schema: z.object({
    author: z.string().optional(),
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
  }),
});
