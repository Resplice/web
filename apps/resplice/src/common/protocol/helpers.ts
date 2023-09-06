import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { SocketCommandType, type SocketCommuter } from '$common/workers/socketCommuter'

export async function sendCommand(
	cache: DB,
	commuter: SocketCommuter,
	payload: proto.Command['payload']
) {
	const [id] = await cache.insert('commands', payload)
	const command: proto.Command = { id, payload }
	commuter.postMessage({
		type: SocketCommandType.SEND,
		payload: command
	})
}
