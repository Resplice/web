import { fromEvent, map } from 'rxjs'
import { webSocket, type WebSocketSubject } from 'rxjs/webSocket'
import { serializeCommand, deserializeEvent } from '@resplice/proto'
import {
	SocketCommandType,
	type SocketCommand,
	type HandshakeCommand,
	SocketEventType,
	type SocketEvent,
	type SendCommand
} from '$common/workers/socketCommuter'

interface ConnWorker extends Worker {
	socket$: WebSocketSubject<Uint8Array> | null
	postMessage: {
		(message: SocketEvent, transfer: Transferable[]): void
		(message: SocketEvent, options?: StructuredSerializeOptions): void
	}
}

const ctx: ConnWorker = self as any

fromEvent<MessageEvent<SocketCommand>>(ctx, 'message')
	.pipe(map((e) => e.data))
	.subscribe((cmd) => {
		switch (cmd.type) {
			case SocketCommandType.OPEN:
				openSocket(cmd.respliceWsUrl, cmd.handshake)
				break
			case SocketCommandType.SEND:
				send(cmd.payload)
				break
		}
	})

async function handleMessage(bytes: Uint8Array) {
	const event = await deserializeEvent(bytes)
	ctx.postMessage({ type: SocketEventType.RECEIVED, event })
}

function handleError(error: Error) {
	ctx.postMessage({ type: SocketEventType.ERRORED, error })
}

function handleClose() {
	ctx.postMessage({ type: SocketEventType.CLOSED })
}

async function send(command: SendCommand['payload']) {
	ctx.socket$.next(await serializeCommand(command))
}

function openSocket(wsEndpoint: string, handshake: HandshakeCommand) {
	if (ctx.socket$) {
		ctx.socket$.complete()
	}
	console.log('Initializing socket', wsEndpoint)
	// TODO: Mock websocket
	ctx.socket$ = webSocket({
		url: wsEndpoint,
		serializer: (m) => m,
		deserializer: (m) => m.data,
		binaryType: 'arraybuffer'
	})
	ctx.socket$.subscribe({
		next: handleMessage,
		error: handleError,
		complete: handleClose
	})

	return send(handshake)
}
