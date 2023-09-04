import { fromEvent, map } from 'rxjs'
import { webSocket, type WebSocketSubject } from 'rxjs/webSocket'
import { serializeCommand, deserializeMessage } from '@resplice/proto'
import {
	SocketCommandType,
	type SocketCommand,
	type CryptoKeys,
	type OpenCommand,
	SocketEventType,
	type SocketEvent,
	type SendCommand
} from '$common/workers/socketCommuter'

interface ConnWorker extends Worker {
	cryptoKeys: CryptoKeys
	socket$: WebSocketSubject<Uint8Array> | null
	postMessage: {
		(message: SocketEvent, transfer: Transferable[]): void
		(message: SocketEvent, options?: StructuredSerializeOptions): void
	}
}

declare const self: ConnWorker

fromEvent<MessageEvent<SocketCommand>>(self, 'message')
	.pipe(map((e) => e.data))
	.subscribe((cmd) => {
		switch (cmd.type) {
			case SocketCommandType.OPEN:
				openSocket(cmd)
				break
			case SocketCommandType.SEND:
				send(cmd.payload)
				break
		}
	})

async function handleMessage(bytes: Uint8Array) {
	const message = await deserializeMessage(bytes, self.cryptoKeys.server)
	self.postMessage({ type: SocketEventType.RECEIVED, message })
}

function handleError(error: Error) {
	self.postMessage({ type: SocketEventType.ERRORED, error })
}

function handleClose() {
	self.postMessage({ type: SocketEventType.CLOSED })
}

async function send(command: SendCommand['payload']) {
	self.socket$.next(await serializeCommand(command, self.cryptoKeys.client))
}

function openSocket(cmd: OpenCommand) {
	if (self.socket$) {
		self.socket$.complete()
	}

	self.cryptoKeys = cmd.cryptoKeys
	// TODO: Mock websocket
	self.socket$ = webSocket({
		url: cmd.respliceWsUrl,
		serializer: (m) => m,
		deserializer: (m) => m.data,
		binaryType: 'arraybuffer'
	})
	self.socket$.subscribe({
		next: handleMessage,
		error: handleError,
		complete: handleClose
	})
}
