/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface AccountCreated {
  accountUuid: string;
  name: string;
  avatarUrl: string;
  primaryAttributeId: number;
  phone: string;
  phoneVerifiedAt: number;
}

export interface AccountNameChanged {
  name: string;
}

export interface AccountAvatarChanged {
  avatarUrl: string;
}

function createBaseAccountCreated(): AccountCreated {
  return { accountUuid: "", name: "", avatarUrl: "", primaryAttributeId: 0, phone: "", phoneVerifiedAt: 0 };
}

export const AccountCreated = {
  encode(message: AccountCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountUuid !== "") {
      writer.uint32(10).string(message.accountUuid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    if (message.primaryAttributeId !== 0) {
      writer.uint32(40).uint32(message.primaryAttributeId);
    }
    if (message.phone !== "") {
      writer.uint32(50).string(message.phone);
    }
    if (message.phoneVerifiedAt !== 0) {
      writer.uint32(56).uint32(message.phoneVerifiedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountUuid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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
          if (tag !== 40) {
            break;
          }

          message.primaryAttributeId = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.phoneVerifiedAt = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountCreated {
    return {
      accountUuid: isSet(object.accountUuid) ? globalThis.String(object.accountUuid) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      primaryAttributeId: isSet(object.primaryAttributeId) ? globalThis.Number(object.primaryAttributeId) : 0,
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      phoneVerifiedAt: isSet(object.phoneVerifiedAt) ? globalThis.Number(object.phoneVerifiedAt) : 0,
    };
  },

  toJSON(message: AccountCreated): unknown {
    const obj: any = {};
    if (message.accountUuid !== "") {
      obj.accountUuid = message.accountUuid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.primaryAttributeId !== 0) {
      obj.primaryAttributeId = Math.round(message.primaryAttributeId);
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.phoneVerifiedAt !== 0) {
      obj.phoneVerifiedAt = Math.round(message.phoneVerifiedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountCreated>, I>>(base?: I): AccountCreated {
    return AccountCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountCreated>, I>>(object: I): AccountCreated {
    const message = createBaseAccountCreated();
    message.accountUuid = object.accountUuid ?? "";
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.primaryAttributeId = object.primaryAttributeId ?? 0;
    message.phone = object.phone ?? "";
    message.phoneVerifiedAt = object.phoneVerifiedAt ?? 0;
    return message;
  },
};

function createBaseAccountNameChanged(): AccountNameChanged {
  return { name: "" };
}

export const AccountNameChanged = {
  encode(message: AccountNameChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountNameChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountNameChanged();
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

  fromJSON(object: any): AccountNameChanged {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: AccountNameChanged): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountNameChanged>, I>>(base?: I): AccountNameChanged {
    return AccountNameChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountNameChanged>, I>>(object: I): AccountNameChanged {
    const message = createBaseAccountNameChanged();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAccountAvatarChanged(): AccountAvatarChanged {
  return { avatarUrl: "" };
}

export const AccountAvatarChanged = {
  encode(message: AccountAvatarChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.avatarUrl !== "") {
      writer.uint32(10).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAvatarChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAvatarChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): AccountAvatarChanged {
    return { avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "" };
  },

  toJSON(message: AccountAvatarChanged): unknown {
    const obj: any = {};
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAvatarChanged>, I>>(base?: I): AccountAvatarChanged {
    return AccountAvatarChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAvatarChanged>, I>>(object: I): AccountAvatarChanged {
    const message = createBaseAccountAvatarChanged();
    message.avatarUrl = object.avatarUrl ?? "";
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
