import type { Session, SessionItem } from '$modules/session/session.types'

export const currentSession: Session = {
	id: 1,
	cryptoKeys: {
		client: {} as CryptoKey,
		server: {} as CryptoKey,
		accessKey: new Uint8Array([1, 2, 3])
	},
	persisted: true,
	ipAddress: '172.16.194.50',
	userAgent:
		'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
}

export const sessions: SessionItem[] = [
	{
		id: 2,
		device: 'iPhone XR',
		lastLocation: 'Minneapolis, MN'
	}
]
