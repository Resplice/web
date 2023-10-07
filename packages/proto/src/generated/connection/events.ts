/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from "../invite/types";

export interface ConnectionAdded {
  accountId: number;
  alias: string;
  sharedAttributeIds: number[];
}

export interface DeclineInvite {
  type: InviteType;
  value: string;
}

function createBaseConnectionAdded(): ConnectionAdded {
  return { accountId: 0, alias: "", sharedAttributeIds: [] };
}

export const ConnectionAdded = {
  encode(message: ConnectionAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    writer.uint32(26).fork();
    for (const v of message.sharedAttributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionAdded();
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
          if (tag !== 18) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.sharedAttributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sharedAttributeIds.push(reader.uint32());
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

  fromJSON(object: any): ConnectionAdded {
    return {
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      sharedAttributeIds: globalThis.Array.isArray(object?.sharedAttributeIds)
        ? object.sharedAttributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: ConnectionAdded): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.sharedAttributeIds?.length) {
      obj.sharedAttributeIds = message.sharedAttributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionAdded>, I>>(base?: I): ConnectionAdded {
    return ConnectionAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionAdded>, I>>(object: I): ConnectionAdded {
    const message = createBaseConnectionAdded();
    message.accountId = object.accountId ?? 0;
    message.alias = object.alias ?? "";
    message.sharedAttributeIds = object.sharedAttributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeclineInvite(): DeclineInvite {
  return { type: 0, value: "" };
}

export const DeclineInvite = {
  encode(message: DeclineInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
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
      value: isSet(object.value) ? globalThis.String(object.value) : "",
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
    return obj;
  },

  create<I extends Exact<DeepPartial<DeclineInvite>, I>>(base?: I): DeclineInvite {
    return DeclineInvite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeclineInvite>, I>>(object: I): DeclineInvite {
    const message = createBaseDeclineInvite();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
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
