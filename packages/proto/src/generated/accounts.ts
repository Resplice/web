/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CreateAccount {
  email: string;
  phone: string;
  fullName: string;
  authCode: Uint8Array;
}

export interface AccountCreated {
  accountId: number;
  fullName: string;
  emailId: number;
  email: string;
  phoneId: number;
  phone: string;
}

export interface EditAccountName {
  name: string;
}

export interface AccountNameEdited {
  name: string;
}

export interface EditAccountHandle {
  handle: string;
}

export interface AccountHandleEdited {
  handle: string;
}

export interface EditAccountAvatar {
  avatar: Uint8Array;
}

export interface AccountAvatarEdited {
  avatarUrl: string;
}

export interface DeleteAccount {
  email: string;
  phone: string;
  removeAllExistingData: boolean;
}

function createBaseCreateAccount(): CreateAccount {
  return { email: "", phone: "", fullName: "", authCode: new Uint8Array(0) };
}

export const CreateAccount = {
  encode(message: CreateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.fullName !== "") {
      writer.uint32(26).string(message.fullName);
    }
    if (message.authCode.length !== 0) {
      writer.uint32(34).bytes(message.authCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fullName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.authCode = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAccount {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      fullName: isSet(object.fullName) ? String(object.fullName) : "",
      authCode: isSet(object.authCode) ? bytesFromBase64(object.authCode) : new Uint8Array(0),
    };
  },

  toJSON(message: CreateAccount): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.authCode !== undefined &&
      (obj.authCode = base64FromBytes(message.authCode !== undefined ? message.authCode : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAccount>, I>>(base?: I): CreateAccount {
    return CreateAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateAccount>, I>>(object: I): CreateAccount {
    const message = createBaseCreateAccount();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.fullName = object.fullName ?? "";
    message.authCode = object.authCode ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAccountCreated(): AccountCreated {
  return { accountId: 0, fullName: "", emailId: 0, email: "", phoneId: 0, phone: "" };
}

export const AccountCreated = {
  encode(message: AccountCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.fullName !== "") {
      writer.uint32(18).string(message.fullName);
    }
    if (message.emailId !== 0) {
      writer.uint32(24).uint32(message.emailId);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.phoneId !== 0) {
      writer.uint32(40).uint32(message.phoneId);
    }
    if (message.phone !== "") {
      writer.uint32(50).string(message.phone);
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
          if (tag !== 24) {
            break;
          }

          message.emailId = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.phoneId = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
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
    message.emailId = object.emailId ?? 0;
    message.email = object.email ?? "";
    message.phoneId = object.phoneId ?? 0;
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseEditAccountName(): EditAccountName {
  return { name: "" };
}

export const EditAccountName = {
  encode(message: EditAccountName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAccountName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditAccountName();
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

  fromJSON(object: any): EditAccountName {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: EditAccountName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditAccountName>, I>>(base?: I): EditAccountName {
    return EditAccountName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditAccountName>, I>>(object: I): EditAccountName {
    const message = createBaseEditAccountName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAccountNameEdited(): AccountNameEdited {
  return { name: "" };
}

export const AccountNameEdited = {
  encode(message: AccountNameEdited, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountNameEdited {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountNameEdited();
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

  fromJSON(object: any): AccountNameEdited {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: AccountNameEdited): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountNameEdited>, I>>(base?: I): AccountNameEdited {
    return AccountNameEdited.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountNameEdited>, I>>(object: I): AccountNameEdited {
    const message = createBaseAccountNameEdited();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEditAccountHandle(): EditAccountHandle {
  return { handle: "" };
}

export const EditAccountHandle = {
  encode(message: EditAccountHandle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAccountHandle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditAccountHandle();
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

  fromJSON(object: any): EditAccountHandle {
    return { handle: isSet(object.handle) ? String(object.handle) : "" };
  },

  toJSON(message: EditAccountHandle): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditAccountHandle>, I>>(base?: I): EditAccountHandle {
    return EditAccountHandle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditAccountHandle>, I>>(object: I): EditAccountHandle {
    const message = createBaseEditAccountHandle();
    message.handle = object.handle ?? "";
    return message;
  },
};

function createBaseAccountHandleEdited(): AccountHandleEdited {
  return { handle: "" };
}

export const AccountHandleEdited = {
  encode(message: AccountHandleEdited, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountHandleEdited {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountHandleEdited();
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

  fromJSON(object: any): AccountHandleEdited {
    return { handle: isSet(object.handle) ? String(object.handle) : "" };
  },

  toJSON(message: AccountHandleEdited): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountHandleEdited>, I>>(base?: I): AccountHandleEdited {
    return AccountHandleEdited.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountHandleEdited>, I>>(object: I): AccountHandleEdited {
    const message = createBaseAccountHandleEdited();
    message.handle = object.handle ?? "";
    return message;
  },
};

function createBaseEditAccountAvatar(): EditAccountAvatar {
  return { avatar: new Uint8Array(0) };
}

export const EditAccountAvatar = {
  encode(message: EditAccountAvatar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.avatar.length !== 0) {
      writer.uint32(10).bytes(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAccountAvatar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditAccountAvatar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.avatar = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditAccountAvatar {
    return { avatar: isSet(object.avatar) ? bytesFromBase64(object.avatar) : new Uint8Array(0) };
  },

  toJSON(message: EditAccountAvatar): unknown {
    const obj: any = {};
    message.avatar !== undefined &&
      (obj.avatar = base64FromBytes(message.avatar !== undefined ? message.avatar : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<EditAccountAvatar>, I>>(base?: I): EditAccountAvatar {
    return EditAccountAvatar.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditAccountAvatar>, I>>(object: I): EditAccountAvatar {
    const message = createBaseEditAccountAvatar();
    message.avatar = object.avatar ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAccountAvatarEdited(): AccountAvatarEdited {
  return { avatarUrl: "" };
}

export const AccountAvatarEdited = {
  encode(message: AccountAvatarEdited, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.avatarUrl !== "") {
      writer.uint32(10).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAvatarEdited {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAvatarEdited();
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

  fromJSON(object: any): AccountAvatarEdited {
    return { avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "" };
  },

  toJSON(message: AccountAvatarEdited): unknown {
    const obj: any = {};
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAvatarEdited>, I>>(base?: I): AccountAvatarEdited {
    return AccountAvatarEdited.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountAvatarEdited>, I>>(object: I): AccountAvatarEdited {
    const message = createBaseAccountAvatarEdited();
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseDeleteAccount(): DeleteAccount {
  return { email: "", phone: "", removeAllExistingData: false };
}

export const DeleteAccount = {
  encode(message: DeleteAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.removeAllExistingData === true) {
      writer.uint32(24).bool(message.removeAllExistingData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.removeAllExistingData = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAccount {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      removeAllExistingData: isSet(object.removeAllExistingData) ? Boolean(object.removeAllExistingData) : false,
    };
  },

  toJSON(message: DeleteAccount): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.removeAllExistingData !== undefined && (obj.removeAllExistingData = message.removeAllExistingData);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAccount>, I>>(base?: I): DeleteAccount {
    return DeleteAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAccount>, I>>(object: I): DeleteAccount {
    const message = createBaseDeleteAccount();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.removeAllExistingData = object.removeAllExistingData ?? false;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
