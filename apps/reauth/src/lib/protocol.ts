import proto, { serializeCommand, deserializeMessage } from '@resplice/proto'
import {
	publicKeyEncrypt,
	fetchFactory,
	importPublicKey,
	generateAesKey,
	exportKey,
	btob64,
	joinBuffers
} from '@resplice/utils'

export interface Protocol {
	isBot(token: string): Promise<boolean>
	startAuth(payload: proto.auth.StartAuth): Result
	verifyEmail(payload: proto.auth.VerifyEmail): Result
	verifyPhone(payload: proto.auth.VerifyPhone): Result
	createAccount(payload: proto.auth.CreateAccount): Result
	startSession(payload: proto.auth.StartSession): Result
	redirectToApp(respliceAppUrl: string, message: AppMessage): void
}

type Result = Promise<
	| {
			event: proto.auth.AuthChanged
			error: null
	  }
	| {
			event: null
			error: proto.Error
	  }
>

type CryptoKeys = {
	client: CryptoKey
	server: CryptoKey
}
type AppMessage = {
	phone: string
	email: string
}

export function protocolFactory(respliceEndpoint: string): Protocol {
	const fetch = fetchFactory(respliceEndpoint)
	const localFetch = fetchFactory('/api')

	let cryptoKeys: CryptoKeys | null = null
	let cmdCount = 0

	async function startAuth(payload: proto.auth.StartAuth): Result {
		try {
			const [publicKeyEncoded, clientAesKey, serverAesKey] = await Promise.all([
				fetch.get<string>({ endpoint: '/reset', content: 'text' }),
				generateAesKey(),
				generateAesKey()
			])
			const publicKey = await importPublicKey(publicKeyEncoded.trim())
			const exportedKeys = joinBuffers(await exportKey(clientAesKey), await exportKey(serverAesKey))
			const serializedKeys = btob64(await publicKeyEncrypt(publicKey, exportedKeys))

			cryptoKeys = {
				client: clientAesKey,
				server: serverAesKey
			}

			const command: proto.Command['payload'] = { $case: 'startAuth', startAuth: payload }
			const headers = { 'X-Crypto-Keys': serializedKeys }
			return await executeAuthStep(command, headers)
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

			const commandId = ++cmdCount
			const command: proto.Command = {
				id: commandId,
				payload: payload
			}
			const serializedCommand = await serializeCommand(command, cryptoKeys.client)

			const messageBytes = await fetch.post<ArrayBuffer>({
				endpoint: '/auth',
				data: serializedCommand,
				headers
			})
			const message = await deserializeMessage(new Uint8Array(messageBytes), cryptoKeys.server)
			if (!message.payload) throw new Error(`Unable to decode message payload: ${message}`)

			if (message.payload.$case === 'error') {
				return { event: null, error: message.payload.error }
			}

			if (message.payload.$case === 'stream') {
				throw new Error('Event Stream not supported.')
			}

			const event = message.payload.event

			if (event.payload?.$case !== 'authChanged') {
				throw new Error(`Message payload: ${event.payload?.$case} not supported.`)
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
			nextCommandId: ++cmdCount,
			cryptoKeys: cryptoKeys
		}
		appIframe.contentWindow?.postMessage(message, src)
		location.replace(respliceAppUrl)
	}

	return {
		async isBot(token) {
			return localFetch.post<boolean>({
				endpoint: '/recaptcha',
				data: JSON.stringify({ token }),
				content: 'json'
			})
		},
		startAuth,
		verifyEmail: (verifyEmail) => executeAuthStep({ $case: 'verifyEmail', verifyEmail }),
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
