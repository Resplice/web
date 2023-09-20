/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface ChangeConnectionAlias {
  connectionId: number;
  alias: string;
}

export interface ChangeConnectionDescription {
  connectionId: number;
  description: string;
}

export interface AddShare {
  connectionId: number;
  attributeId: number;
}

export interface RemoveShare {
  connectionShareId: number;
}

export interface FavorConnection {
  connectionId: number;
}

export interface UnfavorConnection {
  connectionId: number;
}

export interface MuteConnection {
  connectionId: number;
}

export interface UnmuteConnection {
  connectionId: number;
}

export interface ArchiveConnection {
  connectionId: number;
}

export interface UnarchiveConnection {
  connectionId: number;
}

export interface DeleteConnection {
  connectionId: number;
}

function createBaseChangeConnectionAlias(): ChangeConnectionAlias {
  return { connectionId: 0, alias: "" };
}

export const ChangeConnectionAlias = {
  encode(message: ChangeConnectionAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      alias: isSet(object.alias) ? String(object.alias) : "",
    };
  },

  toJSON(message: ChangeConnectionAlias): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
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
    message.connectionId = object.connectionId ?? 0;
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseChangeConnectionDescription(): ChangeConnectionDescription {
  return { connectionId: 0, description: "" };
}

export const ChangeConnectionDescription = {
  encode(message: ChangeConnectionDescription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: ChangeConnectionDescription): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
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
    message.connectionId = object.connectionId ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseAddShare(): AddShare {
  return { connectionId: 0, attributeId: 0 };
}

export const AddShare = {
  encode(message: AddShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connectionId = reader.uint32();
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

  fromJSON(object: any): AddShare {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
    };
  },

  toJSON(message: AddShare): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddShare>, I>>(base?: I): AddShare {
    return AddShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddShare>, I>>(object: I): AddShare {
    const message = createBaseAddShare();
    message.connectionId = object.connectionId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseRemoveShare(): RemoveShare {
  return { connectionShareId: 0 };
}

export const RemoveShare = {
  encode(message: RemoveShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionShareId !== 0) {
      writer.uint32(8).uint32(message.connectionShareId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connectionShareId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveShare {
    return { connectionShareId: isSet(object.connectionShareId) ? Number(object.connectionShareId) : 0 };
  },

  toJSON(message: RemoveShare): unknown {
    const obj: any = {};
    if (message.connectionShareId !== 0) {
      obj.connectionShareId = Math.round(message.connectionShareId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveShare>, I>>(base?: I): RemoveShare {
    return RemoveShare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveShare>, I>>(object: I): RemoveShare {
    const message = createBaseRemoveShare();
    message.connectionShareId = object.connectionShareId ?? 0;
    return message;
  },
};

function createBaseFavorConnection(): FavorConnection {
  return { connectionId: 0 };
}

export const FavorConnection = {
  encode(message: FavorConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: FavorConnection): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FavorConnection>, I>>(base?: I): FavorConnection {
    return FavorConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FavorConnection>, I>>(object: I): FavorConnection {
    const message = createBaseFavorConnection();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseUnfavorConnection(): UnfavorConnection {
  return { connectionId: 0 };
}

export const UnfavorConnection = {
  encode(message: UnfavorConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: UnfavorConnection): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnfavorConnection>, I>>(base?: I): UnfavorConnection {
    return UnfavorConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnfavorConnection>, I>>(object: I): UnfavorConnection {
    const message = createBaseUnfavorConnection();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseMuteConnection(): MuteConnection {
  return { connectionId: 0 };
}

export const MuteConnection = {
  encode(message: MuteConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: MuteConnection): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MuteConnection>, I>>(base?: I): MuteConnection {
    return MuteConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MuteConnection>, I>>(object: I): MuteConnection {
    const message = createBaseMuteConnection();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseUnmuteConnection(): UnmuteConnection {
  return { connectionId: 0 };
}

export const UnmuteConnection = {
  encode(message: UnmuteConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: UnmuteConnection): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnmuteConnection>, I>>(base?: I): UnmuteConnection {
    return UnmuteConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnmuteConnection>, I>>(object: I): UnmuteConnection {
    const message = createBaseUnmuteConnection();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseArchiveConnection(): ArchiveConnection {
  return { connectionId: 0 };
}

export const ArchiveConnection = {
  encode(message: ArchiveConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: ArchiveConnection): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArchiveConnection>, I>>(base?: I): ArchiveConnection {
    return ArchiveConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArchiveConnection>, I>>(object: I): ArchiveConnection {
    const message = createBaseArchiveConnection();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseUnarchiveConnection(): UnarchiveConnection {
  return { connectionId: 0 };
}

export const UnarchiveConnection = {
  encode(message: UnarchiveConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
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

          message.connectionId = reader.uint32();
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
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: UnarchiveConnection): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnarchiveConnection>, I>>(base?: I): UnarchiveConnection {
    return UnarchiveConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnarchiveConnection>, I>>(object: I): UnarchiveConnection {
    const message = createBaseUnarchiveConnection();
    message.connectionId = object.connectionId ?? 0;
    return message;
  },
};

function createBaseDeleteConnection(): DeleteConnection {
  return { connectionId: 0 };
}

export const DeleteConnection = {
  encode(message: DeleteConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(8).uint32(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connectionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteConnection {
    return { connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0 };
  },

  toJSON(message: DeleteConnection): unknown {
    const obj: any = {};
    if (message.connectionId !== 0) {
      obj.connectionId = Math.round(message.connectionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteConnection>, I>>(base?: I): DeleteConnection {
    return DeleteConnection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteConnection>, I>>(object: I): DeleteConnection {
    const message = createBaseDeleteConnection();
    message.connectionId = object.connectionId ?? 0;
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
