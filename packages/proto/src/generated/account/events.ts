/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface AccountCreated {
  fullName: string;
  accountUuid: string;
  handle: string;
  avatarUrl: string;
  phoneId: number;
  phone: string;
}

export interface AccountNameChanged {
  name: string;
}

export interface AccountHandleChanged {
  handle: string;
}

export interface AccountAvatarChanged {
  avatarUrl: string;
}

export interface AccountDeleted {
  deletedAt: number;
}

function createBaseAccountCreated(): AccountCreated {
  return { fullName: "", accountUuid: "", handle: "", avatarUrl: "", phoneId: 0, phone: "" };
}

export const AccountCreated = {
  encode(message: AccountCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullName !== "") {
      writer.uint32(18).string(message.fullName);
    }
    if (message.accountUuid !== "") {
      writer.uint32(26).string(message.accountUuid);
    }
    if (message.handle !== "") {
      writer.uint32(34).string(message.handle);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(42).string(message.avatarUrl);
    }
    if (message.phoneId !== 0) {
      writer.uint32(48).uint32(message.phoneId);
    }
    if (message.phone !== "") {
      writer.uint32(58).string(message.phone);
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fullName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accountUuid = reader.string();
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

          message.avatarUrl = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.phoneId = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.phone = reader.string();
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
      fullName: isSet(object.fullName) ? String(object.fullName) : "",
      accountUuid: isSet(object.accountUuid) ? String(object.accountUuid) : "",
      handle: isSet(object.handle) ? String(object.handle) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      phoneId: isSet(object.phoneId) ? Number(object.phoneId) : 0,
      phone: isSet(object.phone) ? String(object.phone) : "",
    };
  },

  toJSON(message: AccountCreated): unknown {
    const obj: any = {};
    if (message.fullName !== "") {
      obj.fullName = message.fullName;
    }
    if (message.accountUuid !== "") {
      obj.accountUuid = message.accountUuid;
    }
    if (message.handle !== "") {
      obj.handle = message.handle;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.phoneId !== 0) {
      obj.phoneId = Math.round(message.phoneId);
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountCreated>, I>>(base?: I): AccountCreated {
    return AccountCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountCreated>, I>>(object: I): AccountCreated {
    const message = createBaseAccountCreated();
    message.fullName = object.fullName ?? "";
    message.accountUuid = object.accountUuid ?? "";
    message.handle = object.handle ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.phoneId = object.phoneId ?? 0;
    message.phone = object.phone ?? "";
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
    return { name: isSet(object.name) ? String(object.name) : "" };
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

function createBaseAccountHandleChanged(): AccountHandleChanged {
  return { handle: "" };
}

export const AccountHandleChanged = {
  encode(message: AccountHandleChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountHandleChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountHandleChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.handle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountHandleChanged {
    return { handle: isSet(object.handle) ? String(object.handle) : "" };
  },

  toJSON(message: AccountHandleChanged): unknown {
    const obj: any = {};
    if (message.handle !== "") {
      obj.handle = message.handle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountHandleChanged>, I>>(base?: I): AccountHandleChanged {
    return AccountHandleChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountHandleChanged>, I>>(object: I): AccountHandleChanged {
    const message = createBaseAccountHandleChanged();
    message.handle = object.handle ?? "";
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
    return { avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "" };
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

function createBaseAccountDeleted(): AccountDeleted {
  return { deletedAt: 0 };
}

export const AccountDeleted = {
  encode(message: AccountDeleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deletedAt !== 0) {
      writer.uint32(8).uint32(message.deletedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountDeleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deletedAt = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountDeleted {
    return { deletedAt: isSet(object.deletedAt) ? Number(object.deletedAt) : 0 };
  },

  toJSON(message: AccountDeleted): unknown {
    const obj: any = {};
    if (message.deletedAt !== 0) {
      obj.deletedAt = Math.round(message.deletedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountDeleted>, I>>(base?: I): AccountDeleted {
    return AccountDeleted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountDeleted>, I>>(object: I): AccountDeleted {
    const message = createBaseAccountDeleted();
    message.deletedAt = object.deletedAt ?? 0;
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
