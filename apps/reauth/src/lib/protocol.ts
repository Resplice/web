import { fetchFactory } from '@resplice/utils'
import proto, { type Command, serializeCommand, deserializeEvent } from '@resplice/proto'

export interface Protocol {
	isBot: (token: string) => Promise<boolean>
	startAuth: (payload: proto.auth.StartAuth) => Promise<proto.auth.AuthStarted>
	verifyAuthEmail: (payload: proto.auth.VerifyAuthEmail) => Promise<proto.auth.AuthEmailVerified>
	verifyAuthPhone: (payload: proto.auth.VerifyAuthPhone) => Promise<proto.auth.AuthPhoneVerified>
	createAccount: (payload: proto.accounts.CreateAccount) => Promise<proto.accounts.AccountCreated>
}

export function protocolFactory(respliceEndpoint: string): Protocol {
	const fetch = fetchFactory(respliceEndpoint)
	const localFetch = fetchFactory('/api')

	async function executeCommand<E>(command: Command): Promise<E> {
		const serializedCommand = await serializeCommand(command)

		const resBinary = await fetch.post<ArrayBuffer>({
			endpoint: '/auth',
			data: serializedCommand
		})

		return deserializeEvent(new Uint8Array(resBinary))
	}

	return {
		isBot(token) {
			return localFetch.post<boolean>({
				endpoint: '/recaptcha',
				data: token,
				useBinary: false
			})
		},
		startAuth: (payload) => executeCommand({ type: proto.CommandType.START_AUTH, payload }),
		verifyAuthEmail: (payload) =>
			executeCommand({ type: proto.CommandType.VERIFY_AUTH_EMAIL, payload }),
		verifyAuthPhone: (payload) =>
			executeCommand({ type: proto.CommandType.VERIFY_AUTH_PHONE, payload }),
		createAccount: (payload) => executeCommand({ type: proto.CommandType.CREATE_ACCOUNT, payload })
	}
}

export const contextKey = 'protocol'
