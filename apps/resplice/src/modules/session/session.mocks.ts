import type { Session, SessionItem } from '$modules/session/session.types'

export const currentSession: Session = {
	id: 1,
	email: 'han@falcon.com',
	phone: '+16452135555',
	cryptoKeys: {
		client: new CryptoKey(),
		server: new CryptoKey(),
		accessKey: new Uint8Array([1, 2, 3])
	},
	initialCommandId: 1,

}

export const sessions: SessionItem[] = [
	{
		id: 2,
		device: 'iPhone XR',
		lastLocation: 'Minneapolis, MN'
	}
]
