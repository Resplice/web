import type { Options } from 'vite-plugin-pwa'

export default {
	strategies: 'injectManifest',
	srcDir: 'src/common/workers/service-worker',
	filename: 'sw.ts',
	useCredentials: true,
	manifest: {
		name: 'Resplice',
		short_name: 'Resplice',
		description: 'Information sharing platform',
		id: '/',
		start_url: '.',
		display: 'standalone',
		scope: '/',
		theme_color: '#1BBC9B',
		background_color: '#36393F',
		icons: [
			{
				src: 'favicon.ico',
				sizes: '64x64 32x32 24x24 16x16',
				type: 'image/x-icon'
			},
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any'
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		],
		shortcuts: [
			{
				name: 'Invite a Contact',
				short_name: 'Invite',
				description: 'Invite a contact to join Resplice via email, phone, or handle',
				url: '/invite',
				icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }]
			},
			{
				name: 'Scan QR Code',
				short_name: 'QR Code',
				description: 'Scan someones QR code to start sharing with them',
				url: '/invite/qr/scan',
				icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }]
			}
		],
		protocol_handlers: [
			{
				protocol: 'web+resplice',
				url: '/invite/{handle}?handle=%s'
			}
		],
		screenshots: [],
		related_applications: []
	},
	devOptions: { enabled: true, type: 'module', navigateFallback: 'index.html' }
} satisfies Partial<Options>
