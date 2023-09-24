/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Address,
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON,
  Credential,
  Email,
  Phone,
  Social,
} from "../attribute/types";
import { InviteType, inviteTypeFromJSON, inviteTypeToJSON } from "../invite/types";

export interface PendingAttribute {
  attributeType: AttributeType;
  name: string;
}

export interface PendingConnection {
  accountId: number;
  inviteId: number;
  inviteType: InviteType;
  inviteValue: string;
  pendingAttributes: PendingAttribute[];
  name: string;
  avatarUrl: string;
}

export interface ConnectionAttribute {
  id: number;
  name: string;
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

export interface Connection {
  accountId: number;
  name: string;
  avatarUrl: string;
  handle: string;
  attributes: ConnectionAttribute[];
}

export interface Connections {
  pendingConnections: PendingConnection[];
  connections: Connection[];
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
  return { accountId: 0, inviteId: 0, inviteType: 0, inviteValue: "", pendingAttributes: [], name: "", avatarUrl: "" };
}

export const PendingConnection = {
  encode(message: PendingConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.inviteId !== 0) {
      writer.uint32(16).uint32(message.inviteId);
    }
    if (message.inviteType !== 0) {
      writer.uint32(24).int32(message.inviteType);
    }
    if (message.inviteValue !== "") {
      writer.uint32(34).string(message.inviteValue);
    }
    for (const v of message.pendingAttributes) {
      PendingAttribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(58).string(message.avatarUrl);
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

          message.inviteId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inviteType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.inviteValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pendingAttributes.push(PendingAttribute.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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
      inviteId: isSet(object.inviteId) ? Number(object.inviteId) : 0,
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
    if (message.inviteId !== 0) {
      obj.inviteId = Math.round(message.inviteId);
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
    message.inviteId = object.inviteId ?? 0;
    message.inviteType = object.inviteType ?? 0;
    message.inviteValue = object.inviteValue ?? "";
    message.pendingAttributes = object.pendingAttributes?.map((e) => PendingAttribute.fromPartial(e)) || [];
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseConnectionAttribute(): ConnectionAttribute {
  return { id: 0, name: "", value: undefined };
}

export const ConnectionAttribute = {
  encode(message: ConnectionAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    switch (message.value?.$case) {
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(26).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(34).fork()).ldelim();
        break;
      case "address":
        Address.encode(message.value.address, writer.uint32(42).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(50).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(58).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
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

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.phone)
        ? { $case: "phone", phone: Phone.fromJSON(object.phone) }
        : isSet(object.email)
        ? { $case: "email", email: Email.fromJSON(object.email) }
        : isSet(object.address)
        ? { $case: "address", address: Address.fromJSON(object.address) }
        : isSet(object.social)
        ? { $case: "social", social: Social.fromJSON(object.social) }
        : isSet(object.credential)
        ? { $case: "credential", credential: Credential.fromJSON(object.credential) }
        : undefined,
    };
  },

  toJSON(message: ConnectionAttribute): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value?.$case === "phone") {
      obj.phone = Phone.toJSON(message.value.phone);
    }
    if (message.value?.$case === "email") {
      obj.email = Email.toJSON(message.value.email);
    }
    if (message.value?.$case === "address") {
      obj.address = Address.toJSON(message.value.address);
    }
    if (message.value?.$case === "social") {
      obj.social = Social.toJSON(message.value.social);
    }
    if (message.value?.$case === "credential") {
      obj.credential = Credential.toJSON(message.value.credential);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionAttribute>, I>>(base?: I): ConnectionAttribute {
    return ConnectionAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionAttribute>, I>>(object: I): ConnectionAttribute {
    const message = createBaseConnectionAttribute();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    if (object.value?.$case === "phone" && object.value?.phone !== undefined && object.value?.phone !== null) {
      message.value = { $case: "phone", phone: Phone.fromPartial(object.value.phone) };
    }
    if (object.value?.$case === "email" && object.value?.email !== undefined && object.value?.email !== null) {
      message.value = { $case: "email", email: Email.fromPartial(object.value.email) };
    }
    if (object.value?.$case === "address" && object.value?.address !== undefined && object.value?.address !== null) {
      message.value = { $case: "address", address: Address.fromPartial(object.value.address) };
    }
    if (object.value?.$case === "social" && object.value?.social !== undefined && object.value?.social !== null) {
      message.value = { $case: "social", social: Social.fromPartial(object.value.social) };
    }
    if (
      object.value?.$case === "credential" &&
      object.value?.credential !== undefined &&
      object.value?.credential !== null
    ) {
      message.value = { $case: "credential", credential: Credential.fromPartial(object.value.credential) };
    }
    return message;
  },
};

function createBaseConnection(): Connection {
  return { accountId: 0, name: "", avatarUrl: "", handle: "", attributes: [] };
}

export const Connection = {
  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(26).string(message.avatarUrl);
    }
    if (message.handle !== "") {
      writer.uint32(34).string(message.handle);
    }
    for (const v of message.attributes) {
      ConnectionAttribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnection();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.handle = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.attributes.push(ConnectionAttribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connection {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      handle: isSet(object.handle) ? String(object.handle) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => ConnectionAttribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.handle !== "") {
      obj.handle = message.handle;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => ConnectionAttribute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Connection>, I>>(base?: I): Connection {
    return Connection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Connection>, I>>(object: I): Connection {
    const message = createBaseConnection();
    message.accountId = object.accountId ?? 0;
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.handle = object.handle ?? "";
    message.attributes = object.attributes?.map((e) => ConnectionAttribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConnections(): Connections {
  return { pendingConnections: [], connections: [] };
}

export const Connections = {
  encode(message: Connections, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingConnections) {
      PendingConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.connections) {
      Connection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connections {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnections();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pendingConnections.push(PendingConnection.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connections.push(Connection.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Connections {
    return {
      pendingConnections: Array.isArray(object?.pendingConnections)
        ? object.pendingConnections.map((e: any) => PendingConnection.fromJSON(e))
        : [],
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => Connection.fromJSON(e)) : [],
    };
  },

  toJSON(message: Connections): unknown {
    const obj: any = {};
    if (message.pendingConnections?.length) {
      obj.pendingConnections = message.pendingConnections.map((e) => PendingConnection.toJSON(e));
    }
    if (message.connections?.length) {
      obj.connections = message.connections.map((e) => Connection.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Connections>, I>>(base?: I): Connections {
    return Connections.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Connections>, I>>(object: I): Connections {
    const message = createBaseConnections();
    message.pendingConnections = object.pendingConnections?.map((e) => PendingConnection.fromPartial(e)) || [];
    message.connections = object.connections?.map((e) => Connection.fromPartial(e)) || [];
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
