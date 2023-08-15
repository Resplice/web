import proto from './index'
import { decrypt, encrypt, buildIV, joinBuffers, splitBuffer } from '@resplice/utils'

export async function serializeCommand(
	command: proto.Command,
	encryptionKey: CryptoKey
): Promise<Uint8Array> {
	const iv = buildIV(command.id)
	const serializedCommand = await encrypt(encryptionKey, iv, encodeCommand(command))
	return joinBuffers(iv, serializedCommand)
}

function encodeCommand(command: proto.Command) {
	return proto.Command.encode(command).finish()
}

export async function deserializeMessage(
	messageBytes: Uint8Array,
	decryptionKey: CryptoKey
): Promise<proto.Message> {
	const [ivBuf, messageBuf] = splitBuffer(messageBytes, 4)
	const decryptedMessage = await decrypt(decryptionKey, ivBuf, messageBuf)

	return decodeMessage(decryptedMessage)
}

function decodeMessage(messageBytes: Uint8Array): proto.Message {
	return proto.Message.decode(messageBytes)
}
