/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface AccountCreated {
  accountId: number;
  fullName: string;
  handle: string;
  avatarUrl: string;
  emailId: number;
  email: string;
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

function createBaseAccountCreated(): AccountCreated {
  return { accountId: 0, fullName: "", handle: "", avatarUrl: "", emailId: 0, email: "", phoneId: 0, phone: "" };
}

export const AccountCreated = {
  encode(message: AccountCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.fullName !== "") {
      writer.uint32(18).string(message.fullName);
    }
    if (message.handle !== "") {
      writer.uint32(26).string(message.handle);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    if (message.emailId !== 0) {
      writer.uint32(40).uint32(message.emailId);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.phoneId !== 0) {
      writer.uint32(56).uint32(message.phoneId);
    }
    if (message.phone !== "") {
      writer.uint32(66).string(message.phone);
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
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
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

          message.handle = reader.string();
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

          message.emailId = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.email = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.phoneId = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
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
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      fullName: isSet(object.fullName) ? String(object.fullName) : "",
      handle: isSet(object.handle) ? String(object.handle) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      emailId: isSet(object.emailId) ? Number(object.emailId) : 0,
      email: isSet(object.email) ? String(object.email) : "",
      phoneId: isSet(object.phoneId) ? Number(object.phoneId) : 0,
      phone: isSet(object.phone) ? String(object.phone) : "",
    };
  },

  toJSON(message: AccountCreated): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.handle !== undefined && (obj.handle = message.handle);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    message.emailId !== undefined && (obj.emailId = Math.round(message.emailId));
    message.email !== undefined && (obj.email = message.email);
    message.phoneId !== undefined && (obj.phoneId = Math.round(message.phoneId));
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountCreated>, I>>(base?: I): AccountCreated {
    return AccountCreated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountCreated>, I>>(object: I): AccountCreated {
    const message = createBaseAccountCreated();
    message.accountId = object.accountId ?? 0;
    message.fullName = object.fullName ?? "";
    message.handle = object.handle ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.emailId = object.emailId ?? 0;
    message.email = object.email ?? "";
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
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountNameChanged>, I>>(base?: I): AccountNameChanged {
    return AccountNameChanged.fromPartial(base ?? {});
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
    message.handle !== undefined && (obj.handle = message.handle);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountHandleChanged>, I>>(base?: I): AccountHandleChanged {
    return AccountHandleChanged.fromPartial(base ?? {});
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
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAvatarChanged>, I>>(base?: I): AccountAvatarChanged {
    return AccountAvatarChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountAvatarChanged>, I>>(object: I): AccountAvatarChanged {
    const message = createBaseAccountAvatarChanged();
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
