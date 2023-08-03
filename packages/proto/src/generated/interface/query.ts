/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface GetEvents {
  lastEventId: number;
}

export interface Query {
  version: number;
  payload?: { $case: "events"; events: GetEvents };
}

function createBaseGetEvents(): GetEvents {
  return { lastEventId: 0 };
}

export const GetEvents = {
  encode(message: GetEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastEventId !== 0) {
      writer.uint32(8).uint32(message.lastEventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEvents {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.lastEventId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetEvents {
    return { lastEventId: isSet(object.lastEventId) ? Number(object.lastEventId) : 0 };
  },

  toJSON(message: GetEvents): unknown {
    const obj: any = {};
    message.lastEventId !== undefined && (obj.lastEventId = Math.round(message.lastEventId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetEvents>, I>>(base?: I): GetEvents {
    return GetEvents.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEvents>, I>>(object: I): GetEvents {
    const message = createBaseGetEvents();
    message.lastEventId = object.lastEventId ?? 0;
    return message;
  },
};

function createBaseQuery(): Query {
  return { version: 0, payload: undefined };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    switch (message.payload?.$case) {
      case "events":
        GetEvents.encode(message.payload.events, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = { $case: "events", events: GetEvents.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      payload: isSet(object.events) ? { $case: "events", events: GetEvents.fromJSON(object.events) } : undefined,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.payload?.$case === "events" &&
      (obj.events = message.payload?.events ? GetEvents.toJSON(message.payload?.events) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.version = object.version ?? 0;
    if (object.payload?.$case === "events" && object.payload?.events !== undefined && object.payload?.events !== null) {
      message.payload = { $case: "events", events: GetEvents.fromPartial(object.payload.events) };
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
