/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AttributeType, attributeTypeFromJSON, attributeTypeToJSON } from "../attribute/types";
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from "./types";

export interface PendingAttribute {
  attributeType: AttributeType;
  name: string;
}

export interface PendingConnection {
  accountId: number;
  inviteType: InviteType;
  inviteValue: string;
  pendingAttributes: PendingAttribute[];
  name: string;
  avatarUrl: string;
}

function createBasePendingAttribute(): PendingAttribute {
  return { attributeType: 0, name: "" };
}

export const PendingAttribute = {
  encode(message: PendingAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributeType !== 0) {
      writer.uint32(8).int32(message.attributeType);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.attributeType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingAttribute {
    return {
      attributeType: isSet(object.attributeType) ? attributeTypeFromJSON(object.attributeType) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: PendingAttribute): unknown {
    const obj: any = {};
    if (message.attributeType !== 0) {
      obj.attributeType = attributeTypeToJSON(message.attributeType);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingAttribute>, I>>(base?: I): PendingAttribute {
    return PendingAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PendingAttribute>, I>>(object: I): PendingAttribute {
    const message = createBasePendingAttribute();
    message.attributeType = object.attributeType ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBasePendingConnection(): PendingConnection {
  return { accountId: 0, inviteType: 0, inviteValue: "", pendingAttributes: [], name: "", avatarUrl: "" };
}

export const PendingConnection = {
  encode(message: PendingConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.inviteType !== 0) {
      writer.uint32(16).int32(message.inviteType);
    }
    if (message.inviteValue !== "") {
      writer.uint32(26).string(message.inviteValue);
    }
    for (const v of message.pendingAttributes) {
      PendingAttribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(50).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inviteType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inviteValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pendingAttributes.push(PendingAttribute.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingConnection {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      inviteType: isSet(object.inviteType) ? inviteTypeFromJSON(object.inviteType) : 0,
      inviteValue: isSet(object.inviteValue) ? String(object.inviteValue) : "",
      pendingAttributes: Array.isArray(object?.pendingAttributes)
        ? object.pendingAttributes.map((e: any) => PendingAttribute.fromJSON(e))
        : [],
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
    };
  },

  toJSON(message: PendingConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.inviteType !== 0) {
      obj.inviteType = inviteTypeToJSON(message.inviteType);
    }
    if (message.inviteValue !== "") {
      obj.inviteValue = message.inviteValue;
    }
    if (message.pendingAttributes?.length) {
      obj.pendingAttributes = message.pendingAttributes.map((e) => PendingAttribute.toJSON(e));
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingConnection>, I>>(base?: I): PendingConnection {
    return PendingConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PendingConnection>, I>>(object: I): PendingConnection {
    const message = createBasePendingConnection();
    message.accountId = object.accountId ?? 0;
    message.inviteType = object.inviteType ?? 0;
    message.inviteValue = object.inviteValue ?? "";
    message.pendingAttributes = object.pendingAttributes?.map((e) => PendingAttribute.fromPartial(e)) || [];
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
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
