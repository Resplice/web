/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Error } from "./error";
import { Event, EventStream } from "./event";

export interface Message {
  id: number;
  commandId: number;
  payload?: { $case: "event"; event: Event } | { $case: "stream"; stream: EventStream } | {
    $case: "error";
    error: Error;
  } | undefined;
}

function createBaseMessage(): Message {
  return { id: 0, commandId: 0, payload: undefined };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.commandId !== 0) {
      writer.uint32(16).uint32(message.commandId);
    }
    switch (message.payload?.$case) {
      case "event":
        Event.encode(message.payload.event, writer.uint32(26).fork()).ldelim();
        break;
      case "stream":
        EventStream.encode(message.payload.stream, writer.uint32(34).fork()).ldelim();
        break;
      case "error":
        Error.encode(message.payload.error, writer.uint32(42).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.commandId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "event", event: Event.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = { $case: "stream", stream: EventStream.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = { $case: "error", error: Error.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      commandId: isSet(object.commandId) ? Number(object.commandId) : 0,
      payload: isSet(object.event)
        ? { $case: "event", event: Event.fromJSON(object.event) }
        : isSet(object.stream)
        ? { $case: "stream", stream: EventStream.fromJSON(object.stream) }
        : isSet(object.error)
        ? { $case: "error", error: Error.fromJSON(object.error) }
        : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.commandId !== 0) {
      obj.commandId = Math.round(message.commandId);
    }
    if (message.payload?.$case === "event") {
      obj.event = Event.toJSON(message.payload.event);
    }
    if (message.payload?.$case === "stream") {
      obj.stream = EventStream.toJSON(message.payload.stream);
    }
    if (message.payload?.$case === "error") {
      obj.error = Error.toJSON(message.payload.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.id = object.id ?? 0;
    message.commandId = object.commandId ?? 0;
    if (object.payload?.$case === "event" && object.payload?.event !== undefined && object.payload?.event !== null) {
      message.payload = { $case: "event", event: Event.fromPartial(object.payload.event) };
    }
    if (object.payload?.$case === "stream" && object.payload?.stream !== undefined && object.payload?.stream !== null) {
      message.payload = { $case: "stream", stream: EventStream.fromPartial(object.payload.stream) };
    }
    if (object.payload?.$case === "error" && object.payload?.error !== undefined && object.payload?.error !== null) {
      message.payload = { $case: "error", error: Error.fromPartial(object.payload.error) };
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
