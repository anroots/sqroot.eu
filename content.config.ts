import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const comment = z.object({
  id: z.number(),
  author: z.string(),
  author_url: z.string().optional().nullable(),
  date: z.string(),
  content: z.string(),
})

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: { include: 'posts/**/*.md', prefix: '/' },
      schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        date: z.date(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        excerpt: z.string().optional(),
        comments: z.array(comment).optional(),
        readingTime: z.string().optional(),
        wordCount: z.number().optional(),
      }),
    }),
    pages: defineCollection({
      type: 'page',
      source: { include: 'pages/*.md', prefix: '/' },
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        image: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yml',
      schema: z.object({
        position: z.number(),
        name: z.string(),
        description: z.string(),
        image: z.string().optional(),
        video: z.string().optional(),
        website: z.string().optional(),
        github: z.string().optional(),
      }),
    }),
    gists: defineCollection({
      type: 'page',
      source: { include: 'gists/*.md', prefix: '/gists' },
      schema: z.object({
        title: z.string(),
        gistId: z.string(),
        owner: z.string().optional(),
        url: z.string(),
        createdAt: z.string().optional(),
        files: z.array(z.string()),
      }),
    }),
  },
})
