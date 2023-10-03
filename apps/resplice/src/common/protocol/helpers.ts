import proto, { deserializeMessage, serializeCommand } from '@resplice/proto'
import type { Fetch } from '@resplice/utils'
import type { DB } from '$services/db'
import { SocketCommandType } from '$common/workers/socket/socket.types'
import { type SocketCommuter } from '$common/workers/socket/socketCommuter'
import type { Session } from '$modules/session/session.types'

export function sendCommand(commuter: SocketCommuter, cmd: proto.Command['payload']) {
	commuter.postMessage({
		type: SocketCommandType.SEND,
		payload: cmd
	})
}

type Deps = {
	fetch: Fetch
	cache: DB
}
export async function sendCommandRequest(
	{ fetch, cache }: Deps,
	payload: proto.Command['payload']
) {
	const { persisted, cryptoKeys } = await cache.getById<Session>('session', 0)
	const [id] = await cache.insert('commands', persisted ? payload : '')
	const command: proto.Command & { id: number } = {
		id,
		payload: payload
	}
	const serializedCommand = await serializeCommand(command, cryptoKeys.client, cryptoKeys.accessKey)
	const messageBytes = await fetch.post<ArrayBuffer>({
		endpoint: '/run',
		data: serializedCommand
	})
	const message = await deserializeMessage(new Uint8Array(messageBytes), cryptoKeys.server)

	if (message.event && persisted) await cache.upsert('events', message.event)

	return message
}
