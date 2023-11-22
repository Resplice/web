/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CreateQrInvite {
  attributeIds: number[];
}

export interface OpenQrInvite {
  qrCode: string;
}

export interface AcceptQrInvite {
  qrCode: string;
  attributeIds: number[];
}

export interface BulkInvite {
  createInvites: CreateInvite[];
}

export interface CreateInvite {
  name: string;
  value?: { $case: "phone"; phone: string } | undefined;
}

export interface AcceptInvite {
  connectionId: number;
  inviteId: string;
  attributeIds: number[];
}

export interface DeclineInvite {
  connectionId: number;
}

export interface DeleteInvite {
  /** Hash of value */
  inviteId: string;
}

function createBaseCreateQrInvite(): CreateQrInvite {
  return { attributeIds: [] };
}

export const CreateQrInvite = {
  encode(message: CreateQrInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateQrInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateQrInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.attributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 10) {
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

  fromJSON(object: any): CreateQrInvite {
    return {
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: CreateQrInvite): unknown {
    const obj: any = {};
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateQrInvite>, I>>(base?: I): CreateQrInvite {
    return CreateQrInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateQrInvite>, I>>(object: I): CreateQrInvite {
    const message = createBaseCreateQrInvite();
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOpenQrInvite(): OpenQrInvite {
  return { qrCode: "" };
}

export const OpenQrInvite = {
  encode(message: OpenQrInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.qrCode !== "") {
      writer.uint32(10).string(message.qrCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenQrInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenQrInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.qrCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenQrInvite {
    return { qrCode: isSet(object.qrCode) ? globalThis.String(object.qrCode) : "" };
  },

  toJSON(message: OpenQrInvite): unknown {
    const obj: any = {};
    if (message.qrCode !== "") {
      obj.qrCode = message.qrCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenQrInvite>, I>>(base?: I): OpenQrInvite {
    return OpenQrInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenQrInvite>, I>>(object: I): OpenQrInvite {
    const message = createBaseOpenQrInvite();
    message.qrCode = object.qrCode ?? "";
    return message;
  },
};

function createBaseAcceptQrInvite(): AcceptQrInvite {
  return { qrCode: "", attributeIds: [] };
}

export const AcceptQrInvite = {
  encode(message: AcceptQrInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptQrInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptQrInvite();
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

  fromJSON(object: any): AcceptQrInvite {
    return {
      qrCode: isSet(object.qrCode) ? globalThis.String(object.qrCode) : "",
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: AcceptQrInvite): unknown {
    const obj: any = {};
    if (message.qrCode !== "") {
      obj.qrCode = message.qrCode;
    }
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptQrInvite>, I>>(base?: I): AcceptQrInvite {
    return AcceptQrInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AcceptQrInvite>, I>>(object: I): AcceptQrInvite {
    const message = createBaseAcceptQrInvite();
    message.qrCode = object.qrCode ?? "";
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseBulkInvite(): BulkInvite {
  return { createInvites: [] };
}

export const BulkInvite = {
  encode(message: BulkInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.createInvites) {
      CreateInvite.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.createInvites.push(CreateInvite.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BulkInvite {
    return {
      createInvites: globalThis.Array.isArray(object?.createInvites)
        ? object.createInvites.map((e: any) => CreateInvite.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BulkInvite): unknown {
    const obj: any = {};
    if (message.createInvites?.length) {
      obj.createInvites = message.createInvites.map((e) => CreateInvite.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BulkInvite>, I>>(base?: I): BulkInvite {
    return BulkInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BulkInvite>, I>>(object: I): BulkInvite {
    const message = createBaseBulkInvite();
    message.createInvites = object.createInvites?.map((e) => CreateInvite.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateInvite(): CreateInvite {
  return { name: "", value: undefined };
}

export const CreateInvite = {
  encode(message: CreateInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    switch (message.value?.$case) {
      case "phone":
        writer.uint32(18).string(message.value.phone);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): CreateInvite {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.phone) ? { $case: "phone", phone: globalThis.String(object.phone) } : undefined,
    };
  },

  toJSON(message: CreateInvite): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value?.$case === "phone") {
      obj.phone = message.value.phone;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInvite>, I>>(base?: I): CreateInvite {
    return CreateInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInvite>, I>>(object: I): CreateInvite {
    const message = createBaseCreateInvite();
    message.name = object.name ?? "";
    if (object.value?.$case === "phone" && object.value?.phone !== undefined && object.value?.phone !== null) {
      message.value = { $case: "phone", phone: object.value.phone };
    }
    return message;
  },
};

function createBaseAcceptInvite(): AcceptInvite {
  return { connectionId: 0, inviteId: "", attributeIds: [] };
}

export const AcceptInvite = {
  encode(message: AcceptInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.inviteId !== "") {
      writer.uint32(18).string(message.inviteId);
    }
    writer.uint32(26).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptInvite();
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
          if (tag === 24) {
            message.attributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 26) {
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

  fromJSON(object: any): AcceptInvite {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      inviteId: isSet(object.inviteId) ? globalThis.String(object.inviteId) : "",
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: AcceptInvite): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.inviteId !== "") {
      obj.inviteId = message.inviteId;
    }
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptInvite>, I>>(base?: I): AcceptInvite {
    return AcceptInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AcceptInvite>, I>>(object: I): AcceptInvite {
    const message = createBaseAcceptInvite();
    message.connectionId = object.connectionId ?? 0;
    message.inviteId = object.inviteId ?? "";
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeclineInvite(): DeclineInvite {
  return { connectionId: 0 };
}

export const DeclineInvite = {
  encode(message: DeclineInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeclineInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeclineInvite();
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

  fromJSON(object: any): DeclineInvite {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: DeclineInvite): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeclineInvite>, I>>(base?: I): DeclineInvite {
    return DeclineInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeclineInvite>, I>>(object: I): DeclineInvite {
    const message = createBaseDeclineInvite();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseDeleteInvite(): DeleteInvite {
  return { inviteId: "" };
}

export const DeleteInvite = {
  encode(message: DeleteInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== "") {
      writer.uint32(10).string(message.inviteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInvite();
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

  fromJSON(object: any): DeleteInvite {
    return { inviteId: isSet(object.inviteId) ? globalThis.String(object.inviteId) : "" };
  },

  toJSON(message: DeleteInvite): unknown {
    const obj: any = {};
    if (message.inviteId !== "") {
      obj.inviteId = message.inviteId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInvite>, I>>(base?: I): DeleteInvite {
    return DeleteInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInvite>, I>>(object: I): DeleteInvite {
    const message = createBaseDeleteInvite();
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
