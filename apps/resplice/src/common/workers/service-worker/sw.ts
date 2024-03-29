// Look here for an example implementation:
// https://github.com/elk-zone/elk/tree/main/service-worker
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
// import { clientsClaim } from 'workbox-core'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
// import { onPush } from '$common/workers/service-worker/push-notifications'

declare const self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting()
		// clientsClaim()
	}
})

// clean old assets
cleanupOutdatedCaches()

// self.__WB_MANIFEST is default injection point
const cacheEntries = self.__WB_MANIFEST
if (import.meta.env.DEV) cacheEntries.push({ url: '/', revision: Math.random().toString() })

precacheAndRoute(cacheEntries)

// let allowlist: undefined | RegExp[]
// if (import.meta.env.DEV) allowlist = [/^\/$/]

// to allow work offline
// registerRoute(new NavigationRoute(createHandlerBoundToURL('/'), { allowlist }))

// Only cache external assets in production
if (import.meta.env.PROD) {
	// Cache fonts
	registerRoute(
		/^https:\/\/fonts\.googleapis\.com/,
		new StaleWhileRevalidate({
			cacheName: 'google-fonts'
		})
	)
	// Cache cloudinary images
	registerRoute(
		/^https:\/\/res\.cloudinary\.com/,
		new StaleWhileRevalidate({
			cacheName: 'cloudinary-images'
		})
	)
}

// self.addEventListener('push', onPush)
// self.addEventListener('notificationclick', onNotificationClick)
// self.addEventListener('fetch', onShareTarget)
