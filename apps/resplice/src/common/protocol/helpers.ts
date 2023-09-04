import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { SocketCommandType, type SocketCommuter } from '$common/workers/socketCommuter'

export async function sendCommand(
	cache: DB,
	commuter: SocketCommuter,
	params: Omit<proto.Command, 'id'>
) {
	const [id] = await cache.insert('commands', params)
	const command = { id, ...params } satisfies proto.Command
	commuter.postMessage({
		type: SocketCommandType.SEND,
		payload: command
	})
}
