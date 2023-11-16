/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attribute } from "../attribute/state";

export interface ConnectionAdded {
  connectionId: number;
  name: string;
  avatarUrl: string;
  alias: string;
  description: string;
  attributes: Attribute[];
  sharedAttributeIds: number[];
}

export interface ConnectionNameChanged {
  connectionId: number;
  name: string;
}

export interface ConnectionAvatarChanged {
  connectionId: number;
  avatarUrl: string;
}

export interface ConnectionAliasChanged {
  connectionId: number;
  alias: string;
}

export interface ConnectionDescriptionChanged {
  connectionId: number;
  description: string;
}

export interface ConnectionAttributeAdded {
  connectionId: number;
  attribute: Attribute | undefined;
}

export interface ConnectionAttributeChanged {
  connectionId: number;
  attribute: Attribute | undefined;
}

export interface ConnectionAttributeRemoved {
  connectionId: number;
  attributeId: number;
}

export interface ConnectionShareAdded {
  connectionId: number;
  attributeId: number;
}

export interface ConnectionShareRemoved {
  connectionId: number;
  attributeId: number;
}

export interface ConnectionFavored {
  connectionId: number;
}

export interface ConnectionUnfavored {
  connectionId: number;
}

export interface ConnectionMuted {
  connectionId: number;
}

export interface ConnectionUnmuted {
  connectionId: number;
}

export interface ConnectionArchived {
  connectionId: number;
}

export interface ConnectionUnarchived {
  connectionId: number;
}

export interface ConnectionRemoved {
  connectionId: number;
}

function createBaseConnectionAdded(): ConnectionAdded {
  return {
    connectionId: 0,
    name: "",
    avatarUrl: "",
    alias: "",
    description: "",
    attributes: [],
    sharedAttributeIds: [],
  };
}

export const ConnectionAdded = {
  encode(message: ConnectionAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(26).string(message.avatarUrl);
    }
    if (message.alias !== "") {
      writer.uint32(34).string(message.alias);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
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

          message.connectionId = longToNumber(reader.uint64() as Long);
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

          message.alias = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag === 56) {
            message.sharedAttributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 58) {
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
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      sharedAttributeIds: globalThis.Array.isArray(object?.sharedAttributeIds)
        ? object.sharedAttributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: ConnectionAdded): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
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
    message.connectionId = object.connectionId ?? 0;
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.alias = object.alias ?? "";
    message.description = object.description ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.sharedAttributeIds = object.sharedAttributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseConnectionNameChanged(): ConnectionNameChanged {
  return { connectionId: 0, name: "" };
}

export const ConnectionNameChanged = {
  encode(message: ConnectionNameChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionNameChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionNameChanged();
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

  fromJSON(object: any): ConnectionNameChanged {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: ConnectionNameChanged): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionNameChanged>, I>>(base?: I): ConnectionNameChanged {
    return ConnectionNameChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionNameChanged>, I>>(object: I): ConnectionNameChanged {
    const message = createBaseConnectionNameChanged();
    message.connectionId = object.connectionId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseConnectionAvatarChanged(): ConnectionAvatarChanged {
  return { connectionId: 0, avatarUrl: "" };
}

export const ConnectionAvatarChanged = {
  encode(message: ConnectionAvatarChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(18).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionAvatarChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionAvatarChanged();
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

  fromJSON(object: any): ConnectionAvatarChanged {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
    };
  },

  toJSON(message: ConnectionAvatarChanged): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionAvatarChanged>, I>>(base?: I): ConnectionAvatarChanged {
    return ConnectionAvatarChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionAvatarChanged>, I>>(object: I): ConnectionAvatarChanged {
    const message = createBaseConnectionAvatarChanged();
    message.connectionId = object.connectionId ?? 0;
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseConnectionAliasChanged(): ConnectionAliasChanged {
  return { connectionId: 0, alias: "" };
}

export const ConnectionAliasChanged = {
  encode(message: ConnectionAliasChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionAliasChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionAliasChanged();
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

          message.alias = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionAliasChanged {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
    };
  },

  toJSON(message: ConnectionAliasChanged): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionAliasChanged>, I>>(base?: I): ConnectionAliasChanged {
    return ConnectionAliasChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionAliasChanged>, I>>(object: I): ConnectionAliasChanged {
    const message = createBaseConnectionAliasChanged();
    message.connectionId = object.connectionId ?? 0;
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseConnectionDescriptionChanged(): ConnectionDescriptionChanged {
  return { connectionId: 0, description: "" };
}

export const ConnectionDescriptionChanged = {
  encode(message: ConnectionDescriptionChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionDescriptionChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionDescriptionChanged();
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

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionDescriptionChanged {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: ConnectionDescriptionChanged): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionDescriptionChanged>, I>>(base?: I): ConnectionDescriptionChanged {
    return ConnectionDescriptionChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionDescriptionChanged>, I>>(object: I): ConnectionDescriptionChanged {
    const message = createBaseConnectionDescriptionChanged();
    message.connectionId = object.connectionId ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseConnectionAttributeAdded(): ConnectionAttributeAdded {
  return { connectionId: 0, attribute: undefined };
}

export const ConnectionAttributeAdded = {
  encode(message: ConnectionAttributeAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.attribute !== undefined) {
      Attribute.encode(message.attribute, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionAttributeAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionAttributeAdded();
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

          message.attribute = Attribute.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionAttributeAdded {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      attribute: isSet(object.attribute) ? Attribute.fromJSON(object.attribute) : undefined,
    };
  },

  toJSON(message: ConnectionAttributeAdded): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.attribute !== undefined) {
      obj.attribute = Attribute.toJSON(message.attribute);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionAttributeAdded>, I>>(base?: I): ConnectionAttributeAdded {
    return ConnectionAttributeAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionAttributeAdded>, I>>(object: I): ConnectionAttributeAdded {
    const message = createBaseConnectionAttributeAdded();
    message.connectionId = object.connectionId ?? 0;
    message.attribute = (object.attribute !== undefined && object.attribute !== null)
      ? Attribute.fromPartial(object.attribute)
      : undefined;
    return message;
  },
};

function createBaseConnectionAttributeChanged(): ConnectionAttributeChanged {
  return { connectionId: 0, attribute: undefined };
}

export const ConnectionAttributeChanged = {
  encode(message: ConnectionAttributeChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.attribute !== undefined) {
      Attribute.encode(message.attribute, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionAttributeChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionAttributeChanged();
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

          message.attribute = Attribute.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionAttributeChanged {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      attribute: isSet(object.attribute) ? Attribute.fromJSON(object.attribute) : undefined,
    };
  },

  toJSON(message: ConnectionAttributeChanged): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.attribute !== undefined) {
      obj.attribute = Attribute.toJSON(message.attribute);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionAttributeChanged>, I>>(base?: I): ConnectionAttributeChanged {
    return ConnectionAttributeChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionAttributeChanged>, I>>(object: I): ConnectionAttributeChanged {
    const message = createBaseConnectionAttributeChanged();
    message.connectionId = object.connectionId ?? 0;
    message.attribute = (object.attribute !== undefined && object.attribute !== null)
      ? Attribute.fromPartial(object.attribute)
      : undefined;
    return message;
  },
};

function createBaseConnectionAttributeRemoved(): ConnectionAttributeRemoved {
  return { connectionId: 0, attributeId: 0 };
}

export const ConnectionAttributeRemoved = {
  encode(message: ConnectionAttributeRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionAttributeRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionAttributeRemoved();
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

  fromJSON(object: any): ConnectionAttributeRemoved {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: ConnectionAttributeRemoved): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionAttributeRemoved>, I>>(base?: I): ConnectionAttributeRemoved {
    return ConnectionAttributeRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionAttributeRemoved>, I>>(object: I): ConnectionAttributeRemoved {
    const message = createBaseConnectionAttributeRemoved();
    message.connectionId = object.connectionId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseConnectionShareAdded(): ConnectionShareAdded {
  return { connectionId: 0, attributeId: 0 };
}

export const ConnectionShareAdded = {
  encode(message: ConnectionShareAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionShareAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionShareAdded();
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

  fromJSON(object: any): ConnectionShareAdded {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: ConnectionShareAdded): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionShareAdded>, I>>(base?: I): ConnectionShareAdded {
    return ConnectionShareAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionShareAdded>, I>>(object: I): ConnectionShareAdded {
    const message = createBaseConnectionShareAdded();
    message.connectionId = object.connectionId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseConnectionShareRemoved(): ConnectionShareRemoved {
  return { connectionId: 0, attributeId: 0 };
}

export const ConnectionShareRemoved = {
  encode(message: ConnectionShareRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionShareRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionShareRemoved();
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

  fromJSON(object: any): ConnectionShareRemoved {
    return {
      connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: ConnectionShareRemoved): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionShareRemoved>, I>>(base?: I): ConnectionShareRemoved {
    return ConnectionShareRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionShareRemoved>, I>>(object: I): ConnectionShareRemoved {
    const message = createBaseConnectionShareRemoved();
    message.connectionId = object.connectionId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseConnectionFavored(): ConnectionFavored {
  return { connectionId: 0 };
}

export const ConnectionFavored = {
  encode(message: ConnectionFavored, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionFavored {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionFavored();
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

  fromJSON(object: any): ConnectionFavored {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: ConnectionFavored): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionFavored>, I>>(base?: I): ConnectionFavored {
    return ConnectionFavored.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionFavored>, I>>(object: I): ConnectionFavored {
    const message = createBaseConnectionFavored();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseConnectionUnfavored(): ConnectionUnfavored {
  return { connectionId: 0 };
}

export const ConnectionUnfavored = {
  encode(message: ConnectionUnfavored, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionUnfavored {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionUnfavored();
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

  fromJSON(object: any): ConnectionUnfavored {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: ConnectionUnfavored): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionUnfavored>, I>>(base?: I): ConnectionUnfavored {
    return ConnectionUnfavored.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionUnfavored>, I>>(object: I): ConnectionUnfavored {
    const message = createBaseConnectionUnfavored();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseConnectionMuted(): ConnectionMuted {
  return { connectionId: 0 };
}

export const ConnectionMuted = {
  encode(message: ConnectionMuted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionMuted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionMuted();
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

  fromJSON(object: any): ConnectionMuted {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: ConnectionMuted): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionMuted>, I>>(base?: I): ConnectionMuted {
    return ConnectionMuted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionMuted>, I>>(object: I): ConnectionMuted {
    const message = createBaseConnectionMuted();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseConnectionUnmuted(): ConnectionUnmuted {
  return { connectionId: 0 };
}

export const ConnectionUnmuted = {
  encode(message: ConnectionUnmuted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionUnmuted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionUnmuted();
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

  fromJSON(object: any): ConnectionUnmuted {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: ConnectionUnmuted): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionUnmuted>, I>>(base?: I): ConnectionUnmuted {
    return ConnectionUnmuted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionUnmuted>, I>>(object: I): ConnectionUnmuted {
    const message = createBaseConnectionUnmuted();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseConnectionArchived(): ConnectionArchived {
  return { connectionId: 0 };
}

export const ConnectionArchived = {
  encode(message: ConnectionArchived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionArchived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionArchived();
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

  fromJSON(object: any): ConnectionArchived {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: ConnectionArchived): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionArchived>, I>>(base?: I): ConnectionArchived {
    return ConnectionArchived.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionArchived>, I>>(object: I): ConnectionArchived {
    const message = createBaseConnectionArchived();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseConnectionUnarchived(): ConnectionUnarchived {
  return { connectionId: 0 };
}

export const ConnectionUnarchived = {
  encode(message: ConnectionUnarchived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionUnarchived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionUnarchived();
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

  fromJSON(object: any): ConnectionUnarchived {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: ConnectionUnarchived): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionUnarchived>, I>>(base?: I): ConnectionUnarchived {
    return ConnectionUnarchived.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionUnarchived>, I>>(object: I): ConnectionUnarchived {
    const message = createBaseConnectionUnarchived();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseConnectionRemoved(): ConnectionRemoved {
  return { connectionId: 0 };
}

export const ConnectionRemoved = {
  encode(message: ConnectionRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint64(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionRemoved();
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

  fromJSON(object: any): ConnectionRemoved {
    return { connectionId: isSet(object.connectionId) ? globalThis.Number(object.connectionId) : 0 };
  },

  toJSON(message: ConnectionRemoved): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectionRemoved>, I>>(base?: I): ConnectionRemoved {
    return ConnectionRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionRemoved>, I>>(object: I): ConnectionRemoved {
    const message = createBaseConnectionRemoved();
    message.connectionId = object.connectionId ?? 0;
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
