/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attribute } from "../attribute/state";

export interface Connection {
  id: number;
  name: string;
  avatarUrl: string;
  alias: string;
  description: string;
  attributes: Attribute[];
  sharedAttributeIds: number[];
  isFavored: boolean;
  isMuted: boolean;
  isArchived: boolean;
}

function createBaseConnection(): Connection {
  return {
    id: 0,
    name: "",
    avatarUrl: "",
    alias: "",
    description: "",
    attributes: [],
    sharedAttributeIds: [],
    isFavored: false,
    isMuted: false,
    isArchived: false,
  };
}

export const Connection = {
  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(26).string(message.avatarUrl);
    }
    if (message.alias !== "") {
      writer.uint32(34).string(message.alias);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.sharedAttributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.isFavored === true) {
      writer.uint32(64).bool(message.isFavored);
    }
    if (message.isMuted === true) {
      writer.uint32(72).bool(message.isMuted);
    }
    if (message.isArchived === true) {
      writer.uint32(80).bool(message.isArchived);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag === 56) {
            message.sharedAttributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sharedAttributeIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isFavored = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isMuted = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.isArchived = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connection {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      sharedAttributeIds: globalThis.Array.isArray(object?.sharedAttributeIds)
        ? object.sharedAttributeIds.map((e: any) => globalThis.Number(e))
        : [],
      isFavored: isSet(object.isFavored) ? globalThis.Boolean(object.isFavored) : false,
      isMuted: isSet(object.isMuted) ? globalThis.Boolean(object.isMuted) : false,
      isArchived: isSet(object.isArchived) ? globalThis.Boolean(object.isArchived) : false,
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    if (message.sharedAttributeIds?.length) {
      obj.sharedAttributeIds = message.sharedAttributeIds.map((e) => Math.round(e));
    }
    if (message.isFavored === true) {
      obj.isFavored = message.isFavored;
    }
    if (message.isMuted === true) {
      obj.isMuted = message.isMuted;
    }
    if (message.isArchived === true) {
      obj.isArchived = message.isArchived;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Connection>, I>>(base?: I): Connection {
    return Connection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
    const message = createBaseConnection();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.alias = object.alias ?? "";
    message.description = object.description ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.sharedAttributeIds = object.sharedAttributeIds?.map((e) => e) || [];
    message.isFavored = object.isFavored ?? false;
    message.isMuted = object.isMuted ?? false;
    message.isArchived = object.isArchived ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
