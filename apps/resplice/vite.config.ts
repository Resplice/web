import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import pwaConfig from './vite-pwa.config'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(), splitVendorChunkPlugin(), VitePWA(pwaConfig)],
	resolve: {
		alias: {
			$assets: resolve('./src/assets'),
			$modules: resolve('./src/modules'),
			$services: resolve('./src/common/services'),
			$common: resolve('./src/common')
		}
	}
})
