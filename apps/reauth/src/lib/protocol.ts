import { fetchFactory } from '@resplice/utils'
import proto, { type Command, serializeCommand, deserializeEvent } from '@resplice/proto'

type Result<T> = Promise<
	| {
			event: T
			errors: null
	  }
	| {
			event: null
			errors: string[]
	  }
>

export interface Protocol {
	isBot: (token: string) => Promise<boolean>
	startAuth: (payload: proto.auth.StartAuth) => Result<proto.auth.AuthStarted>
	verifyAuthEmail: (payload: proto.auth.VerifyAuthEmail) => Result<proto.auth.AuthEmailVerified>
	verifyAuthPhone: (payload: proto.auth.VerifyAuthPhone) => Result<proto.auth.AuthPhoneVerified>
	createAccount: (payload: proto.accounts.CreateAccount) => Result<proto.accounts.AccountCreated>
}

export function protocolFactory(respliceEndpoint: string): Protocol {
	const fetch = fetchFactory(respliceEndpoint)
	const localFetch = fetchFactory('/api')

	async function executeCommand<E>(command: Command): Promise<E> {
		try {
			const serializedCommand = await serializeCommand(command)

			const resBinary = await fetch.post<ArrayBuffer>({
				endpoint: '/auth',
				data: serializedCommand
			})

			const event = await deserializeEvent(new Uint8Array(resBinary))

			if (event.type === proto.EventType.ERROR)
				return { event: null, errors: errors_as_strings(event.payload.errors) } as E

			return { event: event.payload, errors: null } as E
		} catch (error) {
			console.error(error)
			return { event: null, errors: errors_as_strings([proto.Errors.UNRECOGNIZED]) } as E
		}
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
		startAuth: (payload) => executeCommand({ type: proto.CommandType.START_AUTH, payload }),
		verifyAuthEmail: (payload) =>
			executeCommand({ type: proto.CommandType.VERIFY_AUTH_EMAIL, payload }),
		verifyAuthPhone: (payload) =>
			executeCommand({ type: proto.CommandType.VERIFY_AUTH_PHONE, payload }),
		createAccount: (payload) => executeCommand({ type: proto.CommandType.CREATE_ACCOUNT, payload })
	}
}

function errors_as_strings(errors: proto.Errors[]): string[] {
	return errors.map((e) => proto.errorsToJSON(e))
}

export const contextKey = 'protocol'
