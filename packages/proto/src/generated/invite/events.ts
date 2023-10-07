/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from "./types";

export interface InviteCreated {
  inviteId: number;
  name: string;
  type: InviteType;
  value: string;
  attributeIds: number[];
}

export interface InviteShareAdded {
  inviteId: number;
  attributeId: number;
}

export interface InviteShareRemoved {
  inviteId: number;
  attributeId: number;
}

export interface InviteDeleted {
  inviteId: number;
}

function createBaseInviteCreated(): InviteCreated {
  return { inviteId: 0, name: "", type: 0, value: "", attributeIds: [] };
}

export const InviteCreated = {
  encode(message: InviteCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    writer.uint32(42).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inviteId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = reader.string();
          continue;
        case 5:
          if (tag === 40) {
            message.attributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InviteCreated {
    return {
      inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: InviteCreated): unknown {
    const obj: any = {};
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteCreated>, I>>(base?: I): InviteCreated {
    return InviteCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteCreated>, I>>(object: I): InviteCreated {
    const message = createBaseInviteCreated();
    message.inviteId = object.inviteId ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseInviteShareAdded(): InviteShareAdded {
  return { inviteId: 0, attributeId: 0 };
}

export const InviteShareAdded = {
  encode(message: InviteShareAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteShareAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteShareAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inviteId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.attributeId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InviteShareAdded {
    return {
      inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: InviteShareAdded): unknown {
    const obj: any = {};
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteShareAdded>, I>>(base?: I): InviteShareAdded {
    return InviteShareAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteShareAdded>, I>>(object: I): InviteShareAdded {
    const message = createBaseInviteShareAdded();
    message.inviteId = object.inviteId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseInviteShareRemoved(): InviteShareRemoved {
  return { inviteId: 0, attributeId: 0 };
}

export const InviteShareRemoved = {
  encode(message: InviteShareRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteShareRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteShareRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inviteId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.attributeId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InviteShareRemoved {
    return {
      inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: InviteShareRemoved): unknown {
    const obj: any = {};
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteShareRemoved>, I>>(base?: I): InviteShareRemoved {
    return InviteShareRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteShareRemoved>, I>>(object: I): InviteShareRemoved {
    const message = createBaseInviteShareRemoved();
    message.inviteId = object.inviteId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseInviteDeleted(): InviteDeleted {
  return { inviteId: 0 };
}

export const InviteDeleted = {
  encode(message: InviteDeleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteDeleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inviteId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InviteDeleted {
    return { inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0 };
  },

  toJSON(message: InviteDeleted): unknown {
    const obj: any = {};
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteDeleted>, I>>(base?: I): InviteDeleted {
    return InviteDeleted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteDeleted>, I>>(object: I): InviteDeleted {
    const message = createBaseInviteDeleted();
    message.inviteId = object.inviteId ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
