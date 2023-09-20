/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from "./types";

export interface CreateInvite {
  type: InviteType;
  name: string;
  value: string;
  attributeIds: number[];
}

export interface AddInviteShare {
  type: InviteType;
  value: string;
  attributeId: number;
}

export interface RemoveInviteShare {
  type: InviteType;
  value: string;
  attributeId: number;
}

export interface DeleteInvite {
  type: InviteType;
  value: string;
}

export interface AcceptInvite {
  type: InviteType;
  value: string;
  accountId: number;
  attributeIds: number[];
}

export interface DeclineInvite {
  type: InviteType;
  value: string;
  accountId: number;
}

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
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      attributeIds: Array.isArray(object?.attributeIds) ? object.attributeIds.map((e: any) => Number(e)) : [],
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
  return { type: 0, value: "", attributeId: 0 };
}

export const AddInviteShare = {
  encode(message: AddInviteShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): AddInviteShare {
    return {
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
    };
  },

  toJSON(message: AddInviteShare): unknown {
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

  create<I extends Exact<DeepPartial<AddInviteShare>, I>>(base?: I): AddInviteShare {
    return AddInviteShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddInviteShare>, I>>(object: I): AddInviteShare {
    const message = createBaseAddInviteShare();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseRemoveInviteShare(): RemoveInviteShare {
  return { type: 0, value: "", attributeId: 0 };
}

export const RemoveInviteShare = {
  encode(message: RemoveInviteShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): RemoveInviteShare {
    return {
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
    };
  },

  toJSON(message: RemoveInviteShare): unknown {
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

  create<I extends Exact<DeepPartial<RemoveInviteShare>, I>>(base?: I): RemoveInviteShare {
    return RemoveInviteShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveInviteShare>, I>>(object: I): RemoveInviteShare {
    const message = createBaseRemoveInviteShare();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseDeleteInvite(): DeleteInvite {
  return { type: 0, value: "" };
}

export const DeleteInvite = {
  encode(message: DeleteInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
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

  fromJSON(object: any): DeleteInvite {
    return {
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: DeleteInvite): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInvite>, I>>(base?: I): DeleteInvite {
    return DeleteInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInvite>, I>>(object: I): DeleteInvite {
    const message = createBaseDeleteInvite();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAcceptInvite(): AcceptInvite {
  return { type: 0, value: "", accountId: 0, attributeIds: [] };
}

export const AcceptInvite = {
  encode(message: AcceptInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    writer.uint32(34).fork();
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

          message.accountId = reader.uint32();
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

  fromJSON(object: any): AcceptInvite {
    return {
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      attributeIds: Array.isArray(object?.attributeIds) ? object.attributeIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: AcceptInvite): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
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
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    message.accountId = object.accountId ?? 0;
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeclineInvite(): DeclineInvite {
  return { type: 0, value: "", accountId: 0 };
}

export const DeclineInvite = {
  encode(message: DeclineInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
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

          message.accountId = reader.uint32();
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
      type: isSet(object.type) ? inviteTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
    };
  },

  toJSON(message: DeclineInvite): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = inviteTypeToJSON(message.type);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeclineInvite>, I>>(base?: I): DeclineInvite {
    return DeclineInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeclineInvite>, I>>(object: I): DeclineInvite {
    const message = createBaseDeclineInvite();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    message.accountId = object.accountId ?? 0;
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
