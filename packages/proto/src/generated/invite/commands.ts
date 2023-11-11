/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface CreateQrCode {
  attributeIds: number[];
}

export interface OpenQrCode {
  uuid: string;
}

export interface ConnectViaQrCode {
  uuid: string;
  shareAttributeIds: number[];
}

export interface BulkInvite {
  createInvites: CreateInvite[];
}

export interface CreateInvite {
  name: string;
  value?: { $case: "phone"; phone: string } | { $case: "email"; email: string } | undefined;
}

export interface DeleteInvite {
  id: string;
}

function createBaseCreateQrCode(): CreateQrCode {
  return { attributeIds: [] };
}

export const CreateQrCode = {
  encode(message: CreateQrCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateQrCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateQrCode();
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

  fromJSON(object: any): CreateQrCode {
    return {
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: CreateQrCode): unknown {
    const obj: any = {};
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateQrCode>, I>>(base?: I): CreateQrCode {
    return CreateQrCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateQrCode>, I>>(object: I): CreateQrCode {
    const message = createBaseCreateQrCode();
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOpenQrCode(): OpenQrCode {
  return { uuid: "" };
}

export const OpenQrCode = {
  encode(message: OpenQrCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenQrCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenQrCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenQrCode {
    return { uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "" };
  },

  toJSON(message: OpenQrCode): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenQrCode>, I>>(base?: I): OpenQrCode {
    return OpenQrCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenQrCode>, I>>(object: I): OpenQrCode {
    const message = createBaseOpenQrCode();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseConnectViaQrCode(): ConnectViaQrCode {
  return { uuid: "", shareAttributeIds: [] };
}

export const ConnectViaQrCode = {
  encode(message: ConnectViaQrCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    writer.uint32(18).fork();
    for (const v of message.shareAttributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectViaQrCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectViaQrCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.shareAttributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.shareAttributeIds.push(reader.uint32());
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

  fromJSON(object: any): ConnectViaQrCode {
    return {
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "",
      shareAttributeIds: globalThis.Array.isArray(object?.shareAttributeIds)
        ? object.shareAttributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: ConnectViaQrCode): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    if (message.shareAttributeIds?.length) {
      obj.shareAttributeIds = message.shareAttributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectViaQrCode>, I>>(base?: I): ConnectViaQrCode {
    return ConnectViaQrCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectViaQrCode>, I>>(object: I): ConnectViaQrCode {
    const message = createBaseConnectViaQrCode();
    message.uuid = object.uuid ?? "";
    message.shareAttributeIds = object.shareAttributeIds?.map((e) => e) || [];
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
      case "email":
        writer.uint32(26).string(message.value.email);
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = { $case: "email", email: reader.string() };
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
      value: isSet(object.phone)
        ? { $case: "phone", phone: globalThis.String(object.phone) }
        : isSet(object.email)
        ? { $case: "email", email: globalThis.String(object.email) }
        : undefined,
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
    if (message.value?.$case === "email") {
      obj.email = message.value.email;
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
    if (object.value?.$case === "email" && object.value?.email !== undefined && object.value?.email !== null) {
      message.value = { $case: "email", email: object.value.email };
    }
    return message;
  },
};

function createBaseDeleteInvite(): DeleteInvite {
  return { id: "" };
}

export const DeleteInvite = {
  encode(message: DeleteInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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

          message.id = reader.string();
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
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteInvite): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInvite>, I>>(base?: I): DeleteInvite {
    return DeleteInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInvite>, I>>(object: I): DeleteInvite {
    const message = createBaseDeleteInvite();
    message.id = object.id ?? "";
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
