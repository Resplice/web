import proto from '@resplice/proto'
import { SocketCommandType } from '$common/workers/socket/socket.types'
import { type SocketCommuter } from '$common/workers/socket/socketCommuter'

export function sendCommand(commuter: SocketCommuter, cmd: proto.Command['payload']) {
	commuter.postMessage({
		type: SocketCommandType.SEND,
		payload: cmd
	})
}
