/**
 * @param challenge Challenge generated on the server.
 * @param rpDomain The relaying party's domain. e.g. resplice.com
 * @param account The account to create a credential for.
 */
type PasskeyCreationOptions = {
	challenge: Uint8Array
	rpDomain: string
	account: {
		id: number
		handle: string
		name: string
	}
}
export function createPasskey({ challenge, rpDomain, account }: PasskeyCreationOptions) {
	return navigator.credentials.create({
		publicKey: {
			rp: {
				id: rpDomain,
				name: 'Resplice'
			},
			user: {
				id: Uint8Array.from(`${account.id}`, (c) => c.charCodeAt(0)),
				name: account.handle,
				displayName: account.name
			},
			challenge,
			pubKeyCredParams: [{ alg: -8, type: 'public-key' }],
			authenticatorSelection: {
				authenticatorAttachment: 'cross-platform'
			},
			attestation: 'direct',
			timeout: 60000
		}
	})
}

/**
 * @param challenge Challenge generated on the server.
 * @param account The account to create a credential for.
 */
type PasskeyRetrievalOptions = {
	challenge: Uint8Array
	accountId: number
}
export function getPasskey({ challenge, accountId }: PasskeyRetrievalOptions) {
	return navigator.credentials.get({
		publicKey: {
			challenge,
			allowCredentials: [
				{
					id: Uint8Array.from(`${accountId}`, (c) => c.charCodeAt(0)),
					type: 'public-key',
					transports: []
				}
			],
			timeout: 60000
		}
	})
}
