/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from "./types";

export interface BulkInvite {
  invites: CreateInvite[];
}

export interface CreateInvite {
  type: InviteType;
  name: string;
  value: string;
  attributeIds: number[];
}

export interface AddInviteShare {
  inviteId: number;
  attributeId: number;
}

export interface RemoveInviteShare {
  inviteId: number;
  attributeId: number;
}

export interface DeleteInvite {
  inviteId: number;
}

export interface AcceptInvite {
  accountId: number;
  inviteId: number;
  attributeIds: number[];
}

export interface DeclineInvite {
  accountId: number;
  inviteId: number;
}

export interface CreateQrInvite {
  attributeIds: number[];
}

export interface OpenQrInvite {
  uuid: string;
}

function createBaseBulkInvite(): BulkInvite {
  return { invites: [] };
}

export const BulkInvite = {
  encode(message: BulkInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.invites) {
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

          message.invites.push(CreateInvite.decode(reader, reader.uint32()));
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
      invites: globalThis.Array.isArray(object?.invites)
        ? object.invites.map((e: any) => CreateInvite.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BulkInvite): unknown {
    const obj: any = {};
    if (message.invites?.length) {
      obj.invites = message.invites.map((e) => CreateInvite.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BulkInvite>, I>>(base?: I): BulkInvite {
    return BulkInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BulkInvite>, I>>(object: I): BulkInvite {
    const message = createBaseBulkInvite();
    message.invites = object.invites?.map((e) => CreateInvite.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateInvite(): CreateInvite {
  return { type: 0, name: "", value: "", attributeIds: [] };
}

export const CreateInvite = {
  encode(message: CreateInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: CreateInvite): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInvite>, I>>(base?: I): CreateInvite {
    return CreateInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInvite>, I>>(object: I): CreateInvite {
    const message = createBaseCreateInvite();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseAddInviteShare(): AddInviteShare {
  return { inviteId: 0, attributeId: 0 };
}

export const AddInviteShare = {
  encode(message: AddInviteShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInviteShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInviteShare();
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

  fromJSON(object: any): AddInviteShare {
    return {
      inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: AddInviteShare): unknown {
    const obj: any = {};
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddInviteShare>, I>>(base?: I): AddInviteShare {
    return AddInviteShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddInviteShare>, I>>(object: I): AddInviteShare {
    const message = createBaseAddInviteShare();
    message.inviteId = object.inviteId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseRemoveInviteShare(): RemoveInviteShare {
  return { inviteId: 0, attributeId: 0 };
}

export const RemoveInviteShare = {
  encode(message: RemoveInviteShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInviteShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveInviteShare();
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

  fromJSON(object: any): RemoveInviteShare {
    return {
      inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: RemoveInviteShare): unknown {
    const obj: any = {};
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveInviteShare>, I>>(base?: I): RemoveInviteShare {
    return RemoveInviteShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveInviteShare>, I>>(object: I): RemoveInviteShare {
    const message = createBaseRemoveInviteShare();
    message.inviteId = object.inviteId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseDeleteInvite(): DeleteInvite {
  return { inviteId: 0 };
}

export const DeleteInvite = {
  encode(message: DeleteInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteId !== 0) {
      writer.uint32(8).uint32(message.inviteId);
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

  fromJSON(object: any): DeleteInvite {
    return { inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0 };
  },

  toJSON(message: DeleteInvite): unknown {
    const obj: any = {};
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInvite>, I>>(base?: I): DeleteInvite {
    return DeleteInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInvite>, I>>(object: I): DeleteInvite {
    const message = createBaseDeleteInvite();
    message.inviteId = object.inviteId ?? 0;
    return message;
  },
};

function createBaseAcceptInvite(): AcceptInvite {
  return { accountId: 0, inviteId: 0, attributeIds: [] };
}

export const AcceptInvite = {
  encode(message: AcceptInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.inviteId !== 0) {
      writer.uint32(16).uint32(message.inviteId);
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

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inviteId = reader.uint32();
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
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0,
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: AcceptInvite): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
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
    message.accountId = object.accountId ?? 0;
    message.inviteId = object.inviteId ?? 0;
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeclineInvite(): DeclineInvite {
  return { accountId: 0, inviteId: 0 };
}

export const DeclineInvite = {
  encode(message: DeclineInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.inviteId !== 0) {
      writer.uint32(16).uint32(message.inviteId);
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

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): DeclineInvite {
    return {
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      inviteId: isSet(object.inviteId) ? globalThis.Number(object.inviteId) : 0,
    };
  },

  toJSON(message: DeclineInvite): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeclineInvite>, I>>(base?: I): DeclineInvite {
    return DeclineInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeclineInvite>, I>>(object: I): DeclineInvite {
    const message = createBaseDeclineInvite();
    message.accountId = object.accountId ?? 0;
    message.inviteId = object.inviteId ?? 0;
    return message;
  },
};

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
  return { uuid: "" };
}

export const OpenQrInvite = {
  encode(message: OpenQrInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
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

  fromJSON(object: any): OpenQrInvite {
    return { uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "" };
  },

  toJSON(message: OpenQrInvite): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenQrInvite>, I>>(base?: I): OpenQrInvite {
    return OpenQrInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenQrInvite>, I>>(object: I): OpenQrInvite {
    const message = createBaseOpenQrInvite();
    message.uuid = object.uuid ?? "";
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
