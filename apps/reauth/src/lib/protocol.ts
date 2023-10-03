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
	accessToken: string
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
				endpoint: '/auth',
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
		redirectToApp: (respliceAppUrl, message) =>
			location.replace(
				`${respliceAppUrl}?resplice-access-token=${message.accessToken}&persist=${message.persist}`
			)
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
