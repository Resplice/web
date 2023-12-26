import { defineCollection, z } from 'astro:content'

const changelogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string()
	})
})

export const collections = {
	changelog: changelogCollection
}
