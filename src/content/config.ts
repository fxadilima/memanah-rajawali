// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { optional } from 'zod';
// 2. Define your collection(s)
const sdyxzCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        image: z.string().optional(),
        ilustrasi: z.string().optional()
    })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'sdyxz': sdyxzCollection
};
