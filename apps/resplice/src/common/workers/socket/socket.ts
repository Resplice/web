import { fromEvent, map } from 'rxjs'
import { webSocket, type WebSocketSubject } from 'rxjs/webSocket'
import { serializeCommand, deserializeMessage, type ProtoMessage } from '@resplice/proto'
import { b64tob64u, btob64 } from '@resplice/utils'
import {
	SocketCommandType,
	type SocketCommand,
	type OpenCommand,
	SocketEventType,
	type SocketEvent,
	type SendCommand
} from '$common/workers/socket/socket.types'
import db, { type DB } from '$services/db'
import type { CryptoKeys } from '$modules/session/session.types'

// NOTE: Don't import from any module that initializes this worker because it will break the production build

interface ConnWorker extends Worker {
	cache: DB | null
	cryptoKeys: CryptoKeys | null
	// If persist is set, command and event payloads are stored in indexeddb for offline caching
	persist: boolean
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
				await send(cmd)
				break
		}
	})

async function send(cmd: SendCommand) {
	const protoCmd = cmd.payload
	const [id] = await self.cache.insert('commands', self.persist ? protoCmd : '')
	const cmdBytes = await serializeCommand({ id, payload: protoCmd }, self.cryptoKeys.client)
	self.socket$.next(cmdBytes)
}

async function handleMessage(bytes: ArrayBuffer) {
	const message = await deserializeMessage(new Uint8Array(bytes), self.cryptoKeys.server)
	await cacheEvent(message)
	self.postMessage({ type: SocketEventType.RECEIVED, message })
}

function handleError(error: Error) {
	console.error(error)
	self.postMessage({ type: SocketEventType.ERRORED, error: 'Socket Error' })
}

function handleClose() {
	self.postMessage({ type: SocketEventType.CLOSED })
}

async function openSocket(cmd: OpenCommand) {
	if (self.socket$) {
		if (!self.socket$.closed) {
			self.socket$.complete()
		}
		self.socket$ = null
	}

	if (!self.cache) {
		await db.open()
		self.cache = db
	}

	self.cryptoKeys = cmd.cryptoKeys
	self.persist = cmd.persist

	const protoCmd = cmd.handshake
	const [id] = await self.cache.insert('commands', self.persist ? protoCmd : '')
	const cmdBytes = await serializeCommand(
		{ id, payload: protoCmd },
		cmd.cryptoKeys.client,
		cmd.cryptoKeys.accessKey
	)
	const handshake = b64tob64u(btob64(cmdBytes))

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

	self.postMessage({ type: SocketEventType.OPENED })
}

function cacheEvent({ event }: ProtoMessage) {
	if (!self.persist || !event) return Promise.resolve()

	return self.cache.upsert('events', event)
}