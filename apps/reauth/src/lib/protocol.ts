import {
	publicKeyEncrypt,
	encrypt,
	fetchFactory,
	importPublicKey,
	decrypt,
	buildServerIV,
	buildClientIV,
	generateAesKey,
	exportKey
} from '@resplice/utils'
import proto from '@resplice/proto'

type Result<T> = Promise<
	| {
			event: T
			error: null
	  }
	| {
			event: null
			error: ErrorResult
	  }
>

type ErrorResult = {
	type: string
	fields?: string[]
}

export interface Protocol {
	isBot(token: string): Promise<boolean>
	startAuth(payload: Omit<proto.auth.StartAuth, 'encryptionKey'>): Result<proto.auth.AuthChanged>
	verifyAuthEmail(payload: proto.auth.VerifyAuthEmail): Result<proto.auth.AuthChanged>
	verifyAuthPhone(payload: proto.auth.VerifyAuthPhone): Result<proto.auth.AuthChanged>
	createAccount(payload: proto.auth.CreateAccount): Result<proto.auth.AuthChanged>
	redirectToApp(respliceAppUrl: string, message: proto.auth.StartSession): void
}

export function protocolFactory(respliceEndpoint: string): Protocol {
	const fetch = fetchFactory(respliceEndpoint)
	const localFetch = fetchFactory('/api')

	let aesKey: CryptoKey | null = null

	async function startAuth(payload: proto.auth.StartAuth): Result<proto.auth.AuthChanged> {
		try {
			const publicKeyBytes = await fetch.get<ArrayBuffer>({ endpoint: '/public-key' })
			const publicKey = await importPublicKey(publicKeyBytes)
			aesKey = await generateAesKey()
			const encryptionKey = await exportKey(aesKey)

			const encodedCommand = proto.auth.StartAuth.encode({ ...payload, encryptionKey }).finish()
			const serializedCommand = publicKeyEncrypt(publicKey, encodedCommand)

			const encryptedAuthChange = await fetch.post<ArrayBuffer>({
				endpoint: '/auth',
				data: serializedCommand
			})

			const serverIV = buildServerIV(0, true)
			const authChangeBytes = await decrypt(aesKey, serverIV, new Uint8Array(encryptedAuthChange))
			// TODO: This could decode into an error
			const authChange = proto.auth.AuthChanged.decode(authChangeBytes)

			return { event: authChange, error: null }
		} catch (err) {
			console.error(err)
			const error = {
				type: errorToString(proto.ErrorType.UNRECOGNIZED)
			}
			return { event: null, error }
		}
	}

	async function executeAuthStep<P>(
		payload: P,
		protoMod: any,
		counter: number
	): Result<proto.auth.AuthChanged> {
		try {
			if (!aesKey) throw new Error('AES key not initialized')

			const clientIV = buildClientIV(counter, true)
			const serializedCommand = encrypt(aesKey, clientIV, protoMod.encode(payload).finish())

			const encryptedAuthChange = await fetch.post<ArrayBuffer>({
				endpoint: '/auth',
				data: serializedCommand
			})

			const serverIV = buildServerIV(counter, true)
			const authChangeBytes = await decrypt(aesKey, serverIV, new Uint8Array(encryptedAuthChange))
			// TODO: This could decode into an error
			const authChange = proto.auth.AuthChanged.decode(authChangeBytes)

			return { event: authChange, error: null }
		} catch (err) {
			console.error(err)
			const error = {
				type: errorToString(proto.ErrorType.UNRECOGNIZED)
			}
			return { event: null, error }
		}
	}

	function redirectToApp(respliceAppUrl: string, message: proto.auth.StartSession) {
		const src = `${respliceAppUrl}/mailbox.html`
		const appIframe = document.createElement('iframe')
		appIframe.src = src
		appIframe.width = '0'
		appIframe.height = '0'
		appIframe.style.position = 'absolute'
		appIframe.style.width = '0'
		appIframe.style.height = '0'
		appIframe.style.border = '0'
		appIframe.style.visibility = 'hidden'
		document.body.appendChild(appIframe)
		appIframe.contentWindow?.postMessage(message, src)
		location.replace(respliceAppUrl)
	}

	return {
		async isBot(token) {
			try {
				return localFetch.post<boolean>({
					endpoint: '/recaptcha',
					data: token,
					useBinary: false
				})
			} catch {
				return false
			}
		},
		startAuth,
		verifyAuthEmail: (payload) => executeAuthStep(payload, proto.auth.VerifyAuthEmail, 1),
		verifyAuthPhone: (payload) => executeAuthStep(payload, proto.auth.VerifyAuthPhone, 2),
		createAccount: (payload) => executeAuthStep(payload, proto.auth.CreateAccount, 3),
		redirectToApp
	}
}

function errorToString(error: proto.ErrorType): string {
	return proto.errorTypeToJSON(error)
}

export const contextKey = 'protocol'
