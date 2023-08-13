import {
	publicKeyEncrypt,
	encrypt,
	fetchFactory,
	importPublicKey,
	decrypt,
	buildIV,
	generateAesKey,
	exportKey,
	btob64
} from '@resplice/utils'
import proto from '@resplice/proto'

export interface Protocol {
	isBot(token: string): Promise<boolean>
	startAuth(payload: proto.auth.StartAuth): AuthResult
	verifyEmail(payload: proto.auth.VerifyEmail): AuthResult
	verifyPhone(payload: proto.auth.VerifyPhone): AuthResult
	createAccount(payload: proto.auth.CreateAccount): AuthResult
	startSession(payload: proto.auth.CreateSession): AuthResult
	redirectToApp(respliceAppUrl: string, message: AppMessage): void
}

type AuthResult = Promise<
	| {
			authInfo: proto.auth.AuthInfo
			error: null
	  }
	| {
			authInfo: null
			error: proto.Error
	  }
>

type AppMessage = {
	phone: string
	email: string
}

export function protocolFactory(respliceEndpoint: string): Protocol {
	const fetch = fetchFactory(respliceEndpoint)
	const localFetch = fetchFactory('/api')

	let cryptoKeys: {
		client: CryptoKey
		server: CryptoKey
	} | null = null
	let cmdCount = 0

	async function startAuth(payload: proto.auth.StartAuth): AuthResult {
		try {
			const [publicKeyEncoded, clientAesKey, serverAesKey] = await Promise.all([
				fetch.get<string>({ endpoint: '/public-key', content: 'text' }),
				generateAesKey(),
				generateAesKey()
			])
			const publicKey = await importPublicKey(publicKeyEncoded.trim())
			const serializedClientKey = btob64(
				await publicKeyEncrypt(publicKey, await exportKey(clientAesKey))
			)
			const serializedServerKey = btob64(
				await publicKeyEncrypt(publicKey, await exportKey(serverAesKey))
			)
			cryptoKeys = {
				client: clientAesKey,
				server: serverAesKey
			}

			const { authInfo, error } = await executeAuthStep(
				{ $case: 'startAuth', startAuth: payload },
				{
					'X-Client-Encryption-Key': serializedClientKey,
					'X-Server-Encryption-Key': serializedServerKey
				}
			)

			if (error) return { authInfo: null, error }

			return { authInfo, error: null }
		} catch (err) {
			console.error(err)
			const error = {
				type: proto.ErrorType.UNRECOGNIZED,
				fields: []
			}
			return { authInfo: null, error }
		}
	}

	async function executeAuthStep(
		payload: proto.auth.Command['payload'],
		headers?: Record<string, string>
	): AuthResult {
		try {
			if (!cryptoKeys) throw new Error('Crypto keys not initialized')

			const commandId = ++cmdCount
			const clientIV = buildIV(commandId)
			const serializedCommand = await encrypt(
				cryptoKeys.client,
				clientIV,
				proto.auth.Command.encode({ payload }).finish()
			)
			const authCommand = proto.auth.Message.encode({
				id: commandId,
				type: proto.auth.MessageType.COMMAND,
				payload: serializedCommand
			}).finish()

			const serializedAuthMessage = await fetch.post<ArrayBuffer>({
				endpoint: '/auth',
				data: authCommand,
				headers
			})
			const authMessage = proto.auth.Message.decode(new Uint8Array(serializedAuthMessage))

			if (authMessage.type === proto.auth.MessageType.AUTH_INFO) {
				const serverIV = buildIV(authMessage.id)
				const encodedAuthInfo = await decrypt(cryptoKeys.server, serverIV, authMessage.payload)
				return { authInfo: proto.auth.AuthInfo.decode(encodedAuthInfo), error: null }
			}

			if (authMessage.type === proto.auth.MessageType.ERROR) {
				const error = proto.Error.decode(authMessage.payload)
				return { authInfo: null, error }
			}

			throw new Error(`Message Type ${authMessage.type} not supported`)
		} catch (err) {
			console.error(err)
			const error = {
				type: proto.ErrorType.UNRECOGNIZED,
				fields: []
			}
			return { authInfo: null, error }
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
			clientKey: cryptoKeys.client,
			serverKey: cryptoKeys.server
		}
		appIframe.contentWindow?.postMessage(message, src)
		location.replace(respliceAppUrl)
	}

	return {
		async isBot(token) {
			try {
				return localFetch.post<boolean>({
					endpoint: '/recaptcha',
					data: token,
					content: 'json'
				})
			} catch {
				return false
			}
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

export function errorFieldToString(errorField: proto.ErrorField): string {
	return proto.errorFieldToJSON(errorField)
}

export const ErrorType = proto.ErrorType

export const contextKey = 'protocol'
