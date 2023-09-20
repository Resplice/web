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
			message: null
			error: proto.Error
	  }
	| {
			commandId: number
			message: proto.Message
			error: null
	  }
export async function deserializeMessage(
	messageBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<ProtoMessage> {
	const { id: iv, commandId, message, error } = proto.SecMessage.decode(messageBytes)

	if (error) {
		return {
			commandId,
			message: null,
			error
		}
	}

	const decryptedMessage = await decrypt(decryptionKey, iv, message)

	return { commandId, message: decodeMessage(decryptedMessage), error: null }
}

function decodeMessage(messageBytes: Uint8Array): proto.Message {
	return proto.Message.decode(messageBytes)
}
