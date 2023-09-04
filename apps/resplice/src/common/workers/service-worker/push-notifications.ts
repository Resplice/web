import proto from '@resplice/proto'

declare const self: ServiceWorkerGlobalScope

export async function onPush(event: PushEvent) {
	console.log('onPush', event)

	// If any client is focused don't trigger OS notification
	if (await isClientFocused()) return

	const messageBytes = new Uint8Array(event.data.arrayBuffer())
	const message = proto.Message.decode(messageBytes)

	if (message.payload.$case !== 'event') return

	self.registration.showNotification(message.payload.event.payload.$case)
}

async function isClientFocused() {
	const clients = await self.clients.matchAll({
		type: 'window',
		includeUncontrolled: true
	})
	return clients.some((client) => client.focused)
}
