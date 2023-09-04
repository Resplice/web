import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		splitVendorChunkPlugin(),
		VitePWA({
			strategies: 'injectManifest',
			srcDir: 'src/common/workers/service-worker',
			filename: 'sw.ts',
			devOptions: { enabled: true, type: 'module', navigateFallback: 'index.html' }
		})
	],
	resolve: {
		alias: {
			$modules: resolve('./src/modules'),
			$services: resolve('./src/common/services'),
			$common: resolve('./src/common')
		}
	}
})
