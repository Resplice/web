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
			event: null
			error: proto.Error
	  }
	| {
			commandId: number
			event: proto.Event
			error: null
	  }
export async function deserializeMessage(
	messageBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<ProtoMessage> {
	const { id: iv, commandId, event, error } = proto.SecMessage.decode(messageBytes)

	if (error) {
		return {
			commandId,
			event: null,
			error
		}
	}

	const decryptedMessage = await decrypt(decryptionKey, iv, event)

	return { commandId, event: decodeEvent(decryptedMessage), error: null }
}

function decodeEvent(messageBytes: Uint8Array): proto.Event {
	return proto.Event.decode(messageBytes)
}
