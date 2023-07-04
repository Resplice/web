import proto, { mocks, type Event } from '@resplice/proto'
import type { Fetch } from '@resplice/utils'

function encodeEvent(event: Event, encoder: any) {
	return proto.Event.encode({
		eventId: event.id,
		eventType: event.type,
		payload: encoder(event.payload).finish(),
		payloadEncryptionKey: new Uint8Array(0)
	}).finish()
}

const mockFetch = {
	get: async () => undefined as any,
	post: async ({ commandType }) => {
		switch (commandType) {
			case proto.CommandType.START_SESSION:
				return encodeEvent(
					mocks.events.sessionStarted as Event,
					proto.sessions.SessionStarted.encode
				)
		}
	},
	patch: async () => undefined as any,
	put: async () => undefined as any,
	delete: async () => undefined as any
} as Fetch

export default mockFetch
