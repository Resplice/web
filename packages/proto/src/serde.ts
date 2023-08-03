import proto, { type Command, type Query, type Event, type Events } from './index'
import { decrypt, encrypt, buildIV } from '@resplice/utils'

export async function serializeCommand(
	command: Command,
	encryptionKey: Uint8Array
): Promise<Uint8Array> {
	const serializedPayload = await encrypt(
		encryptionKey,
		buildIV(command.id),
		encodeCommand(command)
	)

	return proto.Message.encode({
		id: command.id,
		type: proto.MessageType.COMMAND,
		payload: serializedPayload
	}).finish()
}

function encodeCommand(command: Command) {
	return proto.Command.encode({
		version: command.version,
		payload: command.payload
	}).finish()
}

export async function serializeQuery(query: Query, encryptionKey: Uint8Array): Promise<Uint8Array> {
	const serializedQuery = await encrypt(encryptionKey, buildIV(query.id), encodeQuery(query))

	return proto.Message.encode({
		id: query.id,
		type: proto.MessageType.QUERY,
		payload: serializedQuery
	}).finish()
}

function encodeQuery(query: Query) {
	return proto.Query.encode({
		version: query.version,
		payload: query.payload
	}).finish()
}

type EventResult =
	| { event: Event; events: undefined; error: undefined }
	| { event: undefined; events: Events; error: undefined }
	| { event: undefined; events: undefined; error: proto.Error }
export async function deserializeEvent(
	messageBytes: Uint8Array,
	decryptionKey: Uint8Array
): Promise<EventResult> {
	const message = proto.Message.decode(messageBytes)
	const decryptedPayload = await decrypt(decryptionKey, buildIV(message.id), message.payload)

	switch (message.type) {
		case proto.MessageType.EVENT:
			return {
				event: proto.Event.decode(decryptedPayload),
				events: undefined,
				error: undefined
			}
		case proto.MessageType.EVENTS:
			return {
				event: undefined,
				events: proto.Events.decode(decryptedPayload),
				error: undefined
			}
		case proto.MessageType.ERROR:
			return {
				event: undefined,
				events: undefined,
				error: proto.Error.decode(decryptedPayload)
			}
		default:
			throw Error(`Message type ${message.type} is not supported`)
	}
}
