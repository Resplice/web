import proto, { type Command, serializeCommand, deserializeEvent } from '@resplice/proto'
import type { Fetch } from '@resplice/utils'

type ExecuteOptions = {
	fetch: Fetch
}
type ExecuteResult<E> = Promise<
	| {
			event: E
			errors: null
	  }
	| {
			event: null
			errors: string[]
	  }
>
export async function executeHttpCommand<E>(
	command: Command,
	{ fetch }: ExecuteOptions
): ExecuteResult<E> {
	try {
		const serializedCommand = await serializeCommand(command)

		const resBinary = await fetch.post<ArrayBuffer>({
			endpoint: '/core',
			data: serializedCommand
		})

		const event = await deserializeEvent(new Uint8Array(resBinary))
		const payload = event.payload as E

		if (event.type === proto.EventType.ERROR)
			return { event: null, errors: errors_as_strings(event.payload.errors) }

		return { event: payload, errors: null }
	} catch (error) {
		console.error(error)
		return { event: null, errors: errors_as_strings([proto.Errors.UNRECOGNIZED]) }
	}
}

function errors_as_strings(errors: proto.Errors[]): string[] {
	return errors.map((e) => proto.errorsToJSON(e))
}
