import proto, { type Command, type Query, type Event, type Events } from './index'
import { decrypt, encrypt, buildClientIV, buildServerIV } from '@resplice/utils'

export async function serializeCommand(
	command: Command,
	encryptionKey: Uint8Array
): Promise<Uint8Array> {
	const encryptedMessage = await encrypt(
		encryptionKey,
		buildClientIV(command.id),
		encodeCommand(command)
	)

	return proto.Message.encode({
		id: command.id,
		type: proto.MessageType.COMMAND,
		encryptedMessage
	}).finish()
}

function encodeCommand(command: Command) {
	return proto.Command.encode({
		version: command.version,
		payload: command.payload
	}).finish()
}

export async function serializeQuery(query: Query, encryptionKey: Uint8Array): Promise<Uint8Array> {
	const encryptedMessage = await encrypt(encryptionKey, buildClientIV(query.id), encodeQuery(query))

	return proto.Message.encode({
		id: query.id,
		type: proto.MessageType.QUERY,
		encryptedMessage
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
	const decryptedMessage = await decrypt(
		decryptionKey,
		buildServerIV(message.id),
		message.encryptedMessage
	)

	if (message.type === proto.MessageType.EVENT) {
		return { event: proto.Event.decode(decryptedMessage), events: undefined, error: undefined }
	}
	if (message.type === proto.MessageType.EVENTS) {
		return { event: undefined, events: proto.Events.decode(decryptedMessage), error: undefined }
	}
	if (message.type === proto.MessageType.ERROR) {
		return { event: undefined, events: undefined, error: proto.Error.decode(decryptedMessage) }
	}

	throw Error(`Message type ${message.type} is not supported`)
}
