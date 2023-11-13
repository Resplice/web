/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attribute, ValueVerification } from "../attribute/state";
import { Connection } from "../connection/state";
import { Invite } from "../invite/state";

export interface Account {
  accountId: number;
  accountUuid: string;
  name: string;
  avatarUrl: string;
  attributes: Attribute[];
  valueVerifications: ValueVerification[];
  invites: Invite[];
  connections: Connection[];
  primaryAttributeId: number;
  lastEventId: number;
  updatedAt: number;
  createdAt: number;
}

function createBaseAccount(): Account {
  return {
    accountId: 0,
    accountUuid: "",
    name: "",
    avatarUrl: "",
    attributes: [],
    valueVerifications: [],
    invites: [],
    connections: [],
    primaryAttributeId: 0,
    lastEventId: 0,
    updatedAt: 0,
    createdAt: 0,
  };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.accountUuid !== "") {
      writer.uint32(18).string(message.accountUuid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.valueVerifications) {
      ValueVerification.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.invites) {
      Invite.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.connections) {
      Connection.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.primaryAttributeId !== 0) {
      writer.uint32(96).uint32(message.primaryAttributeId);
    }
    if (message.lastEventId !== 0) {
      writer.uint32(104).uint32(message.lastEventId);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(112).uint32(message.updatedAt);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).uint32(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountUuid = reader.string();
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

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.valueVerifications.push(ValueVerification.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.invites.push(Invite.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.connections.push(Connection.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.primaryAttributeId = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.lastEventId = reader.uint32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.updatedAt = reader.uint32();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.createdAt = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      accountUuid: isSet(object.accountUuid) ? globalThis.String(object.accountUuid) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      valueVerifications: globalThis.Array.isArray(object?.valueVerifications)
        ? object.valueVerifications.map((e: any) => ValueVerification.fromJSON(e))
        : [],
      invites: globalThis.Array.isArray(object?.invites) ? object.invites.map((e: any) => Invite.fromJSON(e)) : [],
      connections: globalThis.Array.isArray(object?.connections)
        ? object.connections.map((e: any) => Connection.fromJSON(e))
        : [],
      primaryAttributeId: isSet(object.primaryAttributeId) ? globalThis.Number(object.primaryAttributeId) : 0,
      lastEventId: isSet(object.lastEventId) ? globalThis.Number(object.lastEventId) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.accountUuid !== "") {
      obj.accountUuid = message.accountUuid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    if (message.valueVerifications?.length) {
      obj.valueVerifications = message.valueVerifications.map((e) => ValueVerification.toJSON(e));
    }
    if (message.invites?.length) {
      obj.invites = message.invites.map((e) => Invite.toJSON(e));
    }
    if (message.connections?.length) {
      obj.connections = message.connections.map((e) => Connection.toJSON(e));
    }
    if (message.primaryAttributeId !== 0) {
      obj.primaryAttributeId = Math.round(message.primaryAttributeId);
    }
    if (message.lastEventId !== 0) {
      obj.lastEventId = Math.round(message.lastEventId);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Account>, I>>(base?: I): Account {
    return Account.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.accountId = object.accountId ?? 0;
    message.accountUuid = object.accountUuid ?? "";
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.valueVerifications = object.valueVerifications?.map((e) => ValueVerification.fromPartial(e)) || [];
    message.invites = object.invites?.map((e) => Invite.fromPartial(e)) || [];
    message.connections = object.connections?.map((e) => Connection.fromPartial(e)) || [];
    message.primaryAttributeId = object.primaryAttributeId ?? 0;
    message.lastEventId = object.lastEventId ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.createdAt = object.createdAt ?? 0;
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
