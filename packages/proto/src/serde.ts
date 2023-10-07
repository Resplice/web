import proto from './index'
import { decrypt, encrypt } from '@resplice/utils'

export type ProtoCommand = proto.Command & { id: number }
export async function serializeCommand(
	command: ProtoCommand,
	encryptionKey: CryptoKey,
	accessKey: Uint8Array = new Uint8Array()
): Promise<Uint8Array> {
	const serializedCommand = await encrypt(encryptionKey, command.id, encodeCommand(command))
	return proto.SecCommand.encode({
		id: command.id,
		accessKey,
		command: serializedCommand
	}).finish()
}

function encodeCommand(command: proto.Command) {
	return proto.Command.encode(command).finish()
}

export type ProtoMessage =
	| {
			commandId: number
			event: proto.Event
			state: null
			error: null
	  }
	| {
			commandId: number
			event: null
			state: proto.State
			error: null
	  }
	| {
			commandId: number
			event: null
			state: null
			error: proto.Error
	  }

export async function deserializeMessage(
	messageBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<ProtoMessage> {
	const { id, commandId, message } = proto.SecMessage.decode(messageBytes)

	switch (message.$case) {
		case 'event':
			return {
				commandId,
				event: await deserializeEvent(id, message.event, decryptionKey),
				state: null,
				error: null
			}
		case 'state':
			return {
				commandId,
				event: null,
				state: await deserializeState(id, message.state, decryptionKey),
				error: null
			}
		case 'error':
			return { commandId, event: null, state: null, error: message.error }
	}
}

async function deserializeEvent(
	message_id: number,
	eventBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<proto.Event> {
	const decryptedEvent = await decrypt(decryptionKey, message_id, eventBytes)
	return proto.Event.decode(decryptedEvent)
}

async function deserializeState(
	message_id: number,
	stateBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<proto.State> {
	const decryptedEvent = await decrypt(decryptionKey, message_id, stateBytes)
	return proto.State.decode(decryptedEvent)
}

export function errorToString(error: proto.Error) {
	let message = proto.errorTypeToJSON(error.type).split('_').join(' ').toLowerCase()
	if (error.type === proto.ErrorType.INVALID_INPUT) {
		message =
			message +
			': ' +
			error.fields
				.map((f) => proto.inputFieldToJSON(f).split('_').join(' ').toLowerCase())
				.join(', ')
	}

	return message
}
