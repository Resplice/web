/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface ChangeConnectionAlias {
  accountId: number;
  alias: string;
}

export interface ChangeConnectionDescription {
  accountId: number;
  description: string;
}

export interface AddConnectionShare {
  accountId: number;
  attributeId: number;
}

export interface RemoveConnectionShare {
  accountId: number;
  attributeId: number;
}

export interface FavorConnection {
  accountId: number;
}

export interface UnfavorConnection {
  accountId: number;
}

export interface MuteConnection {
  accountId: number;
}

export interface UnmuteConnection {
  accountId: number;
}

export interface ArchiveConnection {
  accountId: number;
}

export interface UnarchiveConnection {
  accountId: number;
}

export interface RemoveConnection {
  accountId: number;
}

function createBaseChangeConnectionAlias(): ChangeConnectionAlias {
  return { accountId: 0, alias: "" };
}

export const ChangeConnectionAlias = {
  encode(message: ChangeConnectionAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeConnectionAlias {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeConnectionAlias();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangeConnectionAlias {
    return {
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
    };
  },

  toJSON(message: ChangeConnectionAlias): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeConnectionAlias>, I>>(base?: I): ChangeConnectionAlias {
    return ChangeConnectionAlias.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeConnectionAlias>, I>>(object: I): ChangeConnectionAlias {
    const message = createBaseChangeConnectionAlias();
    message.accountId = object.accountId ?? 0;
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseChangeConnectionDescription(): ChangeConnectionDescription {
  return { accountId: 0, description: "" };
}

export const ChangeConnectionDescription = {
  encode(message: ChangeConnectionDescription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeConnectionDescription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeConnectionDescription();
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

  fromJSON(object: any): ChangeConnectionDescription {
    return {
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: ChangeConnectionDescription): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeConnectionDescription>, I>>(base?: I): ChangeConnectionDescription {
    return ChangeConnectionDescription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeConnectionDescription>, I>>(object: I): ChangeConnectionDescription {
    const message = createBaseChangeConnectionDescription();
    message.accountId = object.accountId ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseAddConnectionShare(): AddConnectionShare {
  return { accountId: 0, attributeId: 0 };
}

export const AddConnectionShare = {
  encode(message: AddConnectionShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddConnectionShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddConnectionShare();
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

  fromJSON(object: any): AddConnectionShare {
    return {
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: AddConnectionShare): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddConnectionShare>, I>>(base?: I): AddConnectionShare {
    return AddConnectionShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddConnectionShare>, I>>(object: I): AddConnectionShare {
    const message = createBaseAddConnectionShare();
    message.accountId = object.accountId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseRemoveConnectionShare(): RemoveConnectionShare {
  return { accountId: 0, attributeId: 0 };
}

export const RemoveConnectionShare = {
  encode(message: RemoveConnectionShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveConnectionShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveConnectionShare();
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

  fromJSON(object: any): RemoveConnectionShare {
    return {
      accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: RemoveConnectionShare): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveConnectionShare>, I>>(base?: I): RemoveConnectionShare {
    return RemoveConnectionShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveConnectionShare>, I>>(object: I): RemoveConnectionShare {
    const message = createBaseRemoveConnectionShare();
    message.accountId = object.accountId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseFavorConnection(): FavorConnection {
  return { accountId: 0 };
}

export const FavorConnection = {
  encode(message: FavorConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FavorConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFavorConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): FavorConnection {
    return { accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0 };
  },

  toJSON(message: FavorConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FavorConnection>, I>>(base?: I): FavorConnection {
    return FavorConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FavorConnection>, I>>(object: I): FavorConnection {
    const message = createBaseFavorConnection();
    message.accountId = object.accountId ?? 0;
    return message;
  },
};

function createBaseUnfavorConnection(): UnfavorConnection {
  return { accountId: 0 };
}

export const UnfavorConnection = {
  encode(message: UnfavorConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnfavorConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnfavorConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UnfavorConnection {
    return { accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0 };
  },

  toJSON(message: UnfavorConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnfavorConnection>, I>>(base?: I): UnfavorConnection {
    return UnfavorConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnfavorConnection>, I>>(object: I): UnfavorConnection {
    const message = createBaseUnfavorConnection();
    message.accountId = object.accountId ?? 0;
    return message;
  },
};

function createBaseMuteConnection(): MuteConnection {
  return { accountId: 0 };
}

export const MuteConnection = {
  encode(message: MuteConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MuteConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMuteConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): MuteConnection {
    return { accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0 };
  },

  toJSON(message: MuteConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MuteConnection>, I>>(base?: I): MuteConnection {
    return MuteConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MuteConnection>, I>>(object: I): MuteConnection {
    const message = createBaseMuteConnection();
    message.accountId = object.accountId ?? 0;
    return message;
  },
};

function createBaseUnmuteConnection(): UnmuteConnection {
  return { accountId: 0 };
}

export const UnmuteConnection = {
  encode(message: UnmuteConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnmuteConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnmuteConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UnmuteConnection {
    return { accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0 };
  },

  toJSON(message: UnmuteConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnmuteConnection>, I>>(base?: I): UnmuteConnection {
    return UnmuteConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnmuteConnection>, I>>(object: I): UnmuteConnection {
    const message = createBaseUnmuteConnection();
    message.accountId = object.accountId ?? 0;
    return message;
  },
};

function createBaseArchiveConnection(): ArchiveConnection {
  return { accountId: 0 };
}

export const ArchiveConnection = {
  encode(message: ArchiveConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): ArchiveConnection {
    return { accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0 };
  },

  toJSON(message: ArchiveConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArchiveConnection>, I>>(base?: I): ArchiveConnection {
    return ArchiveConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArchiveConnection>, I>>(object: I): ArchiveConnection {
    const message = createBaseArchiveConnection();
    message.accountId = object.accountId ?? 0;
    return message;
  },
};

function createBaseUnarchiveConnection(): UnarchiveConnection {
  return { accountId: 0 };
}

export const UnarchiveConnection = {
  encode(message: UnarchiveConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnarchiveConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnarchiveConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UnarchiveConnection {
    return { accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0 };
  },

  toJSON(message: UnarchiveConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnarchiveConnection>, I>>(base?: I): UnarchiveConnection {
    return UnarchiveConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnarchiveConnection>, I>>(object: I): UnarchiveConnection {
    const message = createBaseUnarchiveConnection();
    message.accountId = object.accountId ?? 0;
    return message;
  },
};

function createBaseRemoveConnection(): RemoveConnection {
  return { accountId: 0 };
}

export const RemoveConnection = {
  encode(message: RemoveConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): RemoveConnection {
    return { accountId: isSet(object.accountId) ? globalThis.Number(object.accountId) : 0 };
  },

  toJSON(message: RemoveConnection): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveConnection>, I>>(base?: I): RemoveConnection {
    return RemoveConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveConnection>, I>>(object: I): RemoveConnection {
    const message = createBaseRemoveConnection();
    message.accountId = object.accountId ?? 0;
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
