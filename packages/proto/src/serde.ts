import proto from './index'
import { type Command, commandMapper } from './command'
import { type Event, eventMapper } from './event'

// function calculateCommandIV(baseIV: Uint8Array, counter: number): Uint8Array {
// 	const ivBuf = new ArrayBuffer(12)
// 	const ivArr = new Uint8Array(ivBuf)

// 	// set first 8 bytes of buffer with base
// 	ivArr.set(baseIV)
// 	// set last 4 bytes of buffer with message id int32
// 	new DataView(ivBuf).setUint32(8, counter * 2)

// 	return ivArr
// }

// function calculateEventIV(baseIV: Uint8Array, counter: number): Uint8Array {
// 	const ivBuf = new ArrayBuffer(12)
// 	const ivArr = new Uint8Array(ivBuf)

// 	// set first 8 bytes of buffer with base
// 	ivArr.set(baseIV)
// 	// set last 4 bytes of buffer with message id int32
// 	new DataView(ivBuf).setUint32(8, counter * 2 + 1)

// 	return ivArr
// }

function encode(command: Command) {
	return proto.Command.encode({
		commandId: command.id,
		commandType: command.type,
		payload: encodePayload(command)
	}).finish()
}

function encodePayload(command: Command) {
	const encoder = commandMapper[command.type]
	if (!encoder) throw Error(`Command ${command.type} is not supported`)

	return encoder(command.payload as any).finish()
}

export async function serializeCommand(
	command: Command,
	_encryptionKey = new Uint8Array(0)
): Promise<Uint8Array> {
	// TODO: Add encryption eventually
	return encode(command)
}

function decode(eventBytes: Uint8Array): Event {
	const event = proto.Event.decode(eventBytes)
	const decoder = eventMapper[event.eventType]
	if (!decoder) throw Error(`Event ${event.eventType} is not supported`)

	const payload = decoder(event.payload)

	return {
		id: event.eventId,
		type: event.eventType as Event['type'],
		payload,
		timestamp: event.timestamp
	}
}

export async function deserializeEvent(
	eventBytes: Uint8Array,
	_decryptionKey = new Uint8Array(0)
): Promise<Event> {
	// TODO: Add decryption eventually
	return decode(eventBytes)
}
