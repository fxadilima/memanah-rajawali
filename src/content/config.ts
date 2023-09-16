// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';
// 2. Define your collection(s)
const sdyxzCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        image: z.string().optional(),
        ilustrasi: z.string().optional(),
        relatedPages: z.array(reference('sdyxz')).optional(),
    })
});

const dgsdCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string().optional(),
    })
});

const yttljCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(), 
        image: z.string().optional()
    })
});

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        description: z.string().optional(),
    }),
});

const tutorialCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        author: z.string(),
        tags: z.array(z.string()),
        keywords: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'sdyxz': sdyxzCollection,
    'dgsd': dgsdCollection,
    'yttlj': yttljCollection,
    'blog': blogCollection,
    'tutorial': tutorialCollection,
};
