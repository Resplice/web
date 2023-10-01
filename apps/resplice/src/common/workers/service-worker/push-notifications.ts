import proto from '@resplice/proto'

declare const self: ServiceWorkerGlobalScope

export async function onPush(ev: PushEvent) {
	console.log('onPush', ev)

	// If any client is focused don't trigger OS notification
	if (await isClientFocused()) return

	const eventBytes = new Uint8Array(ev.data.arrayBuffer())
	const event = proto.Event.decode(eventBytes)

	self.registration.showNotification(event.payload.$case)
}

async function isClientFocused() {
	const clients = await self.clients.matchAll({
		type: 'window',
		includeUncontrolled: true
	})
	return clients.some((client) => client.focused)
}
