import proto, { serializeCommand, deserializeMessage } from '@resplice/proto'
import {
	publicKeyEncrypt,
	fetchFactory,
	importPublicKey,
	generateAesKey,
	exportKey,
	joinBuffers
} from '@resplice/utils'

export interface Protocol {
	isBot(token: string): Promise<boolean>
	getIpAddress(): Promise<string>
	startAuth(payload: proto.auth.StartAuth): Result
	verifyPhone(payload: proto.auth.VerifyPhone): Result
	createAccount(payload: proto.auth.CreateAccount): Result
	startSession(payload: proto.auth.StartSession): Result
	redirectToApp(respliceAppUrl: string, message: AppMessage): void
}

type Result = Promise<
	{ event: proto.auth.AuthChanged; error: null } | { event: null; error: proto.Error }
>

type CryptoKeys = {
	client: CryptoKey
	server: CryptoKey
	accessKey: Uint8Array
}
type AppMessage = {
	phone: string
	persist: boolean
}

export function protocolFactory(respliceEndpoint: string): Protocol {
	const fetch = fetchFactory(respliceEndpoint)
	const localFetch = fetchFactory('/api')

	let cryptoKeys: CryptoKeys | null = null
	let cmdCount = 0

	async function startAuth(payload: proto.auth.StartAuth): Result {
		try {
			const [publicKeyEncoded, clientAesKey, serverAesKey] = await Promise.all([
				fetch.get<string>({ endpoint: '/public-key', content: 'text' }),
				generateAesKey(),
				generateAesKey()
			])
			const publicKey = await importPublicKey(publicKeyEncoded.trim())
			const exportedKeys = joinBuffers(await exportKey(clientAesKey), await exportKey(serverAesKey))
			const accessKey = await publicKeyEncrypt(publicKey, exportedKeys)

			cryptoKeys = {
				client: clientAesKey,
				server: serverAesKey,
				accessKey
			}

			const command: proto.Command['payload'] = { $case: 'startAuth', startAuth: payload }
			return await executeAuthStep(command)
		} catch (err) {
			console.error(err)
			const error = {
				type: proto.ErrorType.UNRECOGNIZED,
				fields: [],
				attemptsRemaining: 0
			}
			return { event: null, error }
		}
	}

	async function executeAuthStep(
		payload: proto.Command['payload'],
		headers?: Record<string, string>
	): Result {
		try {
			if (!cryptoKeys) throw new Error('Crypto keys not initialized')

			const command: proto.Command & { id: number } = {
				id: ++cmdCount,
				payload: payload
			}
			const serializedCommand = await serializeCommand(
				command,
				cryptoKeys.client,
				cryptoKeys.accessKey
			)

			const messageBytes = await fetch.post<ArrayBuffer>({
				endpoint: '/run',
				data: serializedCommand,
				headers
			})

			const { event, state, error } = await deserializeMessage(
				new Uint8Array(messageBytes),
				cryptoKeys.server
			)

			if (error) {
				return { event: null, error: error }
			}

			if (state) {
				throw new Error('State not supported.')
			}

			if (event.payload?.$case !== 'authChanged') {
				throw new Error(`Event: ${event.payload?.$case} not supported.`)
			}

			return { event: event.payload.authChanged, error: null }
		} catch (err) {
			console.error(err)
			const error = {
				type: proto.ErrorType.UNRECOGNIZED,
				fields: [],
				attemptsRemaining: 0
			}
			return { event: null, error }
		}
	}

	function redirectToApp(respliceAppUrl: string, msg: AppMessage) {
		if (!cryptoKeys) throw new Error('Crypto keys not initialized')

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
		const message = {
			...msg,
			cryptoKeys,
			initialCommandId: ++cmdCount
		}
		appIframe.onload = () => {
			window.addEventListener('message', (e) => {
				if (e.origin === respliceAppUrl) location.replace(respliceAppUrl)
			})
			appIframe.contentWindow?.postMessage(message, src)
		}
	}

	return {
		isBot(token) {
			return localFetch.post<boolean>({
				endpoint: '/recaptcha',
				data: JSON.stringify({ token }),
				content: 'json'
			})
		},
		getIpAddress() {
			return fetch.get<string>({ endpoint: '/ip-address', content: 'text' })
		},
		startAuth,
		verifyPhone: (verifyPhone) => executeAuthStep({ $case: 'verifyPhone', verifyPhone }),
		createAccount: (createAccount) => executeAuthStep({ $case: 'createAccount', createAccount }),
		startSession: (startSession) => executeAuthStep({ $case: 'startSession', startSession }),
		redirectToApp
	}
}

export function errorTypeToString(errorType: proto.ErrorType): string {
	return proto.errorTypeToJSON(errorType)
}

export function errorFieldToString(errorField: proto.InputField): string {
	return proto.inputFieldToJSON(errorField)
}

export const ErrorType = proto.ErrorType

export const contextKey = 'protocol'
