/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coordinate } from "../attribute/types";
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from "./types";

export interface InviteCreated {
  type: InviteType;
  name: string;
  value: string;
  attributeIds: number[];
  location: Coordinate | undefined;
}

export interface InviteShareAdded {
  type: InviteType;
  value: string;
  attributeId: number;
}

export interface InviteShareRemoved {
  type: InviteType;
  value: string;
  attributeId: number;
}

export interface InviteDeleted {
  type: InviteType;
  value: string;
}

function createBaseInviteCreated(): InviteCreated {
  return { type: 0, name: "", value: "", attributeIds: [], location: undefined };
}

export const InviteCreated = {
  encode(message: InviteCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    writer.uint32(34).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.location !== undefined) {
      Coordinate.encode(message.location, writer.uint32(42).fork()).ldelim();
    }
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

          message.type = reader.int32() as any;
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

          message.value = reader.string();
          continue;
        case 4:
          if (tag === 32) {
            message.attributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.location = Coordinate.decode(reader, reader.uint32());
          continue;
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
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      attributeIds: Array.isArray(object?.attributeIds) ? object.attributeIds.map((e: any) => Number(e)) : [],
      location: isSet(object.location) ? Coordinate.fromJSON(object.location) : undefined,
    };
  },

  toJSON(message: InviteCreated): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    if (message.location !== undefined) {
      obj.location = Coordinate.toJSON(message.location);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteCreated>, I>>(base?: I): InviteCreated {
    return InviteCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteCreated>, I>>(object: I): InviteCreated {
    const message = createBaseInviteCreated();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    message.location = (object.location !== undefined && object.location !== null)
      ? Coordinate.fromPartial(object.location)
      : undefined;
    return message;
  },
};

function createBaseInviteShareAdded(): InviteShareAdded {
  return { type: 0, value: "", attributeId: 0 };
}

export const InviteShareAdded = {
  encode(message: InviteShareAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.attributeId !== 0) {
      writer.uint32(24).uint32(message.attributeId);
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

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
    };
  },

  toJSON(message: InviteShareAdded): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.value !== "") {
      obj.value = message.value;
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
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseInviteShareRemoved(): InviteShareRemoved {
  return { type: 0, value: "", attributeId: 0 };
}

export const InviteShareRemoved = {
  encode(message: InviteShareRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.attributeId !== 0) {
      writer.uint32(24).uint32(message.attributeId);
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

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
    };
  },

  toJSON(message: InviteShareRemoved): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.value !== "") {
      obj.value = message.value;
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
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseInviteDeleted(): InviteDeleted {
  return { type: 0, value: "" };
}

export const InviteDeleted = {
  encode(message: InviteDeleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
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

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
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
    return {
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: InviteDeleted): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteDeleted>, I>>(base?: I): InviteDeleted {
    return InviteDeleted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteDeleted>, I>>(object: I): InviteDeleted {
    const message = createBaseInviteDeleted();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
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
