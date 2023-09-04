import proto from './index'
import { decrypt, encrypt, buildIV, joinBuffers, splitBuffer } from '@resplice/utils'

export async function serializeCommand(
	command: proto.Command,
	encryptionKey: CryptoKey
): Promise<Uint8Array> {
	const serializedCommand = await encrypt(encryptionKey, command.id, encodeCommand(command))
	return joinBuffers(buildIV(command.id, 4), serializedCommand)
}

function encodeCommand(command: proto.Command) {
	return proto.Command.encode(command).finish()
}

export async function deserializeMessage(
	messageBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<proto.Message> {
	const [ivBuf, messageBuf] = splitBuffer(messageBytes, 4)
	const iv = joinBuffers(new Uint8Array(8), ivBuf)
	const decryptedMessage = await decrypt(decryptionKey, iv, messageBuf)

	return decodeMessage(decryptedMessage)
}

function decodeMessage(messageBytes: Uint8Array): proto.Message {
	return proto.Message.decode(messageBytes)
}
