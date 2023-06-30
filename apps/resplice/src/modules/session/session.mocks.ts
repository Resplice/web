import type { Session, SessionItem } from '$modules/session/session.types'

export const currentSession: Session = {
	id: 1,
	expiry: 0,
	accessToken: new Uint8Array([1, 2, 3])
}

export const sessions: SessionItem[] = [
	{
		id: 2,
		device: 'iPhone XR',
		lastLocation: 'Minneapolis, MN'
	}
]
