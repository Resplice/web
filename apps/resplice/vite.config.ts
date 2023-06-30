import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$modules: resolve('./src/modules'),
			$services: resolve('./src/common/services'),
			$common: resolve('./src/common')
		}
	}
})
