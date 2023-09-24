import proto from '@resplice/proto'
import { SocketCommandType, type SocketCommuter } from '$common/workers/socketCommuter'

export function sendCommand(commuter: SocketCommuter, cmd: proto.Command['payload']) {
	commuter.postMessage({
		type: SocketCommandType.SEND,
		payload: cmd
	})
}
