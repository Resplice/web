/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PendingAttribute } from "../attribute/state";

export interface QrInviteCreated {
  qrCode: string;
  attributeIds: number[];
}

export interface QrInviteOpened {
  qrCode: string;
  connectionId: number;
  name: string;
  avatarUrl: string;
  pendingAttributes: PendingAttribute[];
}

export interface InviteCreated {
  /** Hash of value */
  inviteId: string;
  name: string;
  value?: { $case: "phone"; phone: string } | undefined;
}

export interface PendingConnectionAdded {
  connectionId: number;
  inviteId: string;
  name: string;
  avatarUrl: string;
  pendingAttributes: PendingAttribute[];
}

export interface PendingConnectionRemoved {
  connectionId: number;
}

export interface InviteDeleted {
  inviteId: string;
}

function createBaseQrInviteCreated(): QrInviteCreated {
  return { qrCode: "", attributeIds: [] };
}

export const QrInviteCreated = {
  encode(message: QrInviteCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.qrCode !== "") {
      writer.uint32(10).string(message.qrCode);
    }
    writer.uint32(18).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QrInviteCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQrInviteCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.qrCode = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.attributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
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

  fromJSON(object: any): QrInviteCreated {
    return {
      qrCode: isSet(object.qrCode) ? globalThis.String(object.qrCode) : "",
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: QrInviteCreated): unknown {
    const obj: any = {};
    if (message.qrCode !== "") {
      obj.qrCode = message.qrCode;
    }
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QrInviteCreated>, I>>(base?: I): QrInviteCreated {
    return QrInviteCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QrInviteCreated>, I>>(object: I): QrInviteCreated {
    const message = createBaseQrInviteCreated();
    message.qrCode = object.qrCode ?? "";
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQrInviteOpened(): QrInviteOpened {
  return { qrCode: "", connectionId: 0, name: "", avatarUrl: "", pendingAttributes: [] };
}

export const QrInviteOpened = {
  encode(message: QrInviteOpened, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.qrCode !== "") {
      writer.uint32(10).string(message.qrCode);
    }
    if (message.connectionId !== 0) {
      writer.uint32(16).uint64(message.connectionId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    for (const v of message.pendingAttributes) {
      PendingAttribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QrInviteOpened {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQrInviteOpened();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.qrCode = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.connectionId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pendingAttributes.push(PendingAttribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QrInviteOpened {
    return {
      qrCode: isSet(object.qrCode) ? globalThis.String(object.qrCode) : "",
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      pendingAttributes: globalThis.Array.isArray(object?.pendingAttributes)
        ? object.pendingAttributes.map((e: any) => PendingAttribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QrInviteOpened): unknown {
    const obj: any = {};
    if (message.qrCode !== "") {
      obj.qrCode = message.qrCode;
    }
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.pendingAttributes?.length) {
      obj.pendingAttributes = message.pendingAttributes.map((e) => PendingAttribute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QrInviteOpened>, I>>(base?: I): QrInviteOpened {
    return QrInviteOpened.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QrInviteOpened>, I>>(object: I): QrInviteOpened {
    const message = createBaseQrInviteOpened();
    message.qrCode = object.qrCode ?? "";
    message.connectionId = object.connectionId ?? 0;
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.pendingAttributes = object.pendingAttributes?.map((e) => PendingAttribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInviteCreated(): InviteCreated {
  return { inviteId: "", name: "", value: undefined };
}

export const InviteCreated = {
  encode(message: InviteCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== "") {
      writer.uint32(10).string(message.inviteId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    switch (message.value?.$case) {
      case "phone":
        writer.uint32(26).string(message.value.phone);
        break;
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
          if (tag !== 10) {
            break;
          }

          message.inviteId = reader.string();
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

          message.value = { $case: "phone", phone: reader.string() };
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
      inviteId: isSet(object.inviteId) ? globalThis.String(object.inviteId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.phone) ? { $case: "phone", phone: globalThis.String(object.phone) } : undefined,
    };
  },

  toJSON(message: InviteCreated): unknown {
    const obj: any = {};
    if (message.inviteId !== "") {
      obj.inviteId = message.inviteId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value?.$case === "phone") {
      obj.phone = message.value.phone;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteCreated>, I>>(base?: I): InviteCreated {
    return InviteCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteCreated>, I>>(object: I): InviteCreated {
    const message = createBaseInviteCreated();
    message.inviteId = object.inviteId ?? "";
    message.name = object.name ?? "";
    if (object.value?.$case === "phone" && object.value?.phone !== undefined && object.value?.phone !== null) {
      message.value = { $case: "phone", phone: object.value.phone };
    }
    return message;
  },
};

function createBasePendingConnectionAdded(): PendingConnectionAdded {
  return { connectionId: 0, inviteId: "", name: "", avatarUrl: "", pendingAttributes: [] };
}

export const PendingConnectionAdded = {
  encode(message: PendingConnectionAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.inviteId !== "") {
      writer.uint32(18).string(message.inviteId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    for (const v of message.pendingAttributes) {
      PendingAttribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingConnectionAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingConnectionAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connectionId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inviteId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pendingAttributes.push(PendingAttribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingConnectionAdded {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      inviteId: isSet(object.inviteId) ? globalThis.String(object.inviteId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      pendingAttributes: globalThis.Array.isArray(object?.pendingAttributes)
        ? object.pendingAttributes.map((e: any) => PendingAttribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PendingConnectionAdded): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.inviteId !== "") {
      obj.inviteId = message.inviteId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.pendingAttributes?.length) {
      obj.pendingAttributes = message.pendingAttributes.map((e) => PendingAttribute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingConnectionAdded>, I>>(base?: I): PendingConnectionAdded {
    return PendingConnectionAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PendingConnectionAdded>, I>>(object: I): PendingConnectionAdded {
    const message = createBasePendingConnectionAdded();
    message.connectionId = object.connectionId ?? 0;
    message.inviteId = object.inviteId ?? "";
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.pendingAttributes = object.pendingAttributes?.map((e) => PendingAttribute.fromPartial(e)) || [];
    return message;
  },
};

function createBasePendingConnectionRemoved(): PendingConnectionRemoved {
  return { connectionId: 0 };
}

export const PendingConnectionRemoved = {
  encode(message: PendingConnectionRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingConnectionRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingConnectionRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connectionId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingConnectionRemoved {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: PendingConnectionRemoved): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingConnectionRemoved>, I>>(base?: I): PendingConnectionRemoved {
    return PendingConnectionRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PendingConnectionRemoved>, I>>(object: I): PendingConnectionRemoved {
    const message = createBasePendingConnectionRemoved();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseInviteDeleted(): InviteDeleted {
  return { inviteId: "" };
}

export const InviteDeleted = {
  encode(message: InviteDeleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== "") {
      writer.uint32(10).string(message.inviteId);
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
          if (tag !== 10) {
            break;
          }

          message.inviteId = reader.string();
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
    return { inviteId: isSet(object.inviteId) ? globalThis.String(object.inviteId) : "" };
  },

  toJSON(message: InviteDeleted): unknown {
    const obj: any = {};
    if (message.inviteId !== "") {
      obj.inviteId = message.inviteId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteDeleted>, I>>(base?: I): InviteDeleted {
    return InviteDeleted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteDeleted>, I>>(object: I): InviteDeleted {
    const message = createBaseInviteDeleted();
    message.inviteId = object.inviteId ?? "";
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
