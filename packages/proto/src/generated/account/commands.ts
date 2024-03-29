/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface ChangeAccountName {
  name: string;
}

export interface ChangeAccountAvatar {
  avatar: string;
}

function createBaseChangeAccountName(): ChangeAccountName {
  return { name: "" };
}

export const ChangeAccountName = {
  encode(message: ChangeAccountName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeAccountName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeAccountName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): ChangeAccountName {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: ChangeAccountName): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeAccountName>, I>>(base?: I): ChangeAccountName {
    return ChangeAccountName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeAccountName>, I>>(object: I): ChangeAccountName {
    const message = createBaseChangeAccountName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseChangeAccountAvatar(): ChangeAccountAvatar {
  return { avatar: "" };
}

export const ChangeAccountAvatar = {
  encode(message: ChangeAccountAvatar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.avatar !== "") {
      writer.uint32(10).string(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeAccountAvatar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeAccountAvatar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.avatar = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangeAccountAvatar {
    return { avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "" };
  },

  toJSON(message: ChangeAccountAvatar): unknown {
    const obj: any = {};
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeAccountAvatar>, I>>(base?: I): ChangeAccountAvatar {
    return ChangeAccountAvatar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeAccountAvatar>, I>>(object: I): ChangeAccountAvatar {
    const message = createBaseChangeAccountAvatar();
    message.avatar = object.avatar ?? "";
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
