import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://resplice.com',
	integrations: [
		tailwind(),
		svelte(),
		icon({
			iconDir: 'src/assets/icons'
		}),
		sitemap()
	],
	devToolbar: {
		enabled: false
	}
})
