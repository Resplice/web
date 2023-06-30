import proto, { type Command, serializeCommand, deserializeEvent } from '@resplice/proto'
import type { Fetch } from '@resplice/utils'

// export async function sendCommand(cache: DB, commuter: ConnCommuter, command: Command) {
// 	const [counter] = await cache.insert('events', command)
// 	commuter.postMessage({
// 		type: ConnCommandType.SEND,
// 		message: { counter, command }
// 	})
// }

type ExecuteOptions = {
	fetch: Fetch
	endpoint: string
}
async function executeHttpCommand<E>(
	command: Command,
	{ fetch, endpoint }: ExecuteOptions
): Promise<E> {
	try {
		const serializedCommand = await serializeCommand(command)

		const resBinary = await fetch.post<ArrayBuffer>({
			endpoint,
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

function errors_as_strings(errors: proto.Errors[]): string[] {
	return errors.map((e) => proto.errorsToJSON(e))
}
