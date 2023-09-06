import { fromEvent, map } from 'rxjs'
import { webSocket, type WebSocketSubject } from 'rxjs/webSocket'
import { serializeCommand, deserializeMessage } from '@resplice/proto'
import { btob64 } from '@resplice/utils'
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
	.subscribe(async (cmd) => {
		switch (cmd.type) {
			case SocketCommandType.OPEN:
				await openSocket(cmd)
				break
			case SocketCommandType.SEND:
				await send(cmd.payload)
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

async function openSocket(cmd: OpenCommand) {
	if (self.socket$) {
		self.socket$.complete()
	}

	const handshake = btob64(await serializeCommand(cmd.handshake, cmd.cryptoKeys.client))

	self.cryptoKeys = cmd.cryptoKeys
	// TODO: Mock websocket based on url
	self.socket$ = webSocket({
		url: cmd.respliceWsUrl,
		protocol: handshake,
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
