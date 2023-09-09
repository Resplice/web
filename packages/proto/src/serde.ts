import proto from './index'
import { decrypt, encrypt } from '@resplice/utils'

export async function serializeCommand(
	command: proto.Command & { id: number },
	encryptionKey: CryptoKey,
	accessKey: Uint8Array = null
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

type Message =
	| {
			event: null
			error: proto.Error
	  }
	| {
			event: proto.Event
			error: null
	  }
export async function deserializeMessage(
	messageBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<Message> {
	const { id: iv, event, error } = proto.SecMessage.decode(messageBytes)

	if (error) {
		return {
			event: null,
			error
		}
	}

	const decryptedMessage = await decrypt(decryptionKey, iv, event)

	return { event: decodeEvent(decryptedMessage), error: null }
}

function decodeEvent(messageBytes: Uint8Array): proto.Event {
	return proto.Event.decode(messageBytes)
}
