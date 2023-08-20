import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    cover: z.object({
      image: z.string(),
      thumbnail: z.string(),
      author: z.string(),
      source: z.string(),
    }),
  }),
});

export const collections = {
  blog: blogCollection,
};
