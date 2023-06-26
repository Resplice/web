/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Event } from "./interface/event";

export interface StartAuth {
  email: string;
  phone: string;
}

export interface AuthStarted {
  accessKey: Uint8Array;
}

export interface VerifyAuthEmail {
  email: string;
  phone: string;
  verificationCode: number;
  accessKey: Uint8Array;
}

export interface AuthEmailVerified {
  accessKey: Uint8Array;
}

export interface VerifyAuthPhone {
  email: string;
  phone: string;
  verificationCode: number;
  accessKey: Uint8Array;
}

export interface AuthPhoneVerified {
  accessKey: Uint8Array;
  accountExists: boolean;
}

/**
 * pass remember_me=true on socket open to persist session
 * then authorize socket with access_key will change cookie expiry
 */
export interface AuthorizeSocket {
  lastEventIndex: number;
  accessKey: Uint8Array;
}

export interface SocketAuthorized {
  events: Event[];
  accessKey: Uint8Array;
}

function createBaseStartAuth(): StartAuth {
  return { email: "", phone: "" };
}

export const StartAuth = {
  encode(message: StartAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartAuth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartAuth();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartAuth {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
    };
  },

  toJSON(message: StartAuth): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartAuth>, I>>(base?: I): StartAuth {
    return StartAuth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartAuth>, I>>(object: I): StartAuth {
    const message = createBaseStartAuth();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseAuthStarted(): AuthStarted {
  return { accessKey: new Uint8Array(0) };
}

export const AuthStarted = {
  encode(message: AuthStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKey.length !== 0) {
      writer.uint32(10).bytes(message.accessKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthStarted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthStarted {
    return { accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0) };
  },

  toJSON(message: AuthStarted): unknown {
    const obj: any = {};
    message.accessKey !== undefined &&
      (obj.accessKey = base64FromBytes(message.accessKey !== undefined ? message.accessKey : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthStarted>, I>>(base?: I): AuthStarted {
    return AuthStarted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthStarted>, I>>(object: I): AuthStarted {
    const message = createBaseAuthStarted();
    message.accessKey = object.accessKey ?? new Uint8Array(0);
    return message;
  },
};

function createBaseVerifyAuthEmail(): VerifyAuthEmail {
  return { email: "", phone: "", verificationCode: 0, accessKey: new Uint8Array(0) };
}

export const VerifyAuthEmail = {
  encode(message: VerifyAuthEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.verificationCode !== 0) {
      writer.uint32(24).uint32(message.verificationCode);
    }
    if (message.accessKey.length !== 0) {
      writer.uint32(34).bytes(message.accessKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyAuthEmail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyAuthEmail();
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

          message.verificationCode = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accessKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyAuthEmail {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      verificationCode: isSet(object.verificationCode) ? Number(object.verificationCode) : 0,
      accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0),
    };
  },

  toJSON(message: VerifyAuthEmail): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.verificationCode !== undefined && (obj.verificationCode = Math.round(message.verificationCode));
    message.accessKey !== undefined &&
      (obj.accessKey = base64FromBytes(message.accessKey !== undefined ? message.accessKey : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyAuthEmail>, I>>(base?: I): VerifyAuthEmail {
    return VerifyAuthEmail.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyAuthEmail>, I>>(object: I): VerifyAuthEmail {
    const message = createBaseVerifyAuthEmail();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.verificationCode = object.verificationCode ?? 0;
    message.accessKey = object.accessKey ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAuthEmailVerified(): AuthEmailVerified {
  return { accessKey: new Uint8Array(0) };
}

export const AuthEmailVerified = {
  encode(message: AuthEmailVerified, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKey.length !== 0) {
      writer.uint32(10).bytes(message.accessKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthEmailVerified {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthEmailVerified();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthEmailVerified {
    return { accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0) };
  },

  toJSON(message: AuthEmailVerified): unknown {
    const obj: any = {};
    message.accessKey !== undefined &&
      (obj.accessKey = base64FromBytes(message.accessKey !== undefined ? message.accessKey : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthEmailVerified>, I>>(base?: I): AuthEmailVerified {
    return AuthEmailVerified.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthEmailVerified>, I>>(object: I): AuthEmailVerified {
    const message = createBaseAuthEmailVerified();
    message.accessKey = object.accessKey ?? new Uint8Array(0);
    return message;
  },
};

function createBaseVerifyAuthPhone(): VerifyAuthPhone {
  return { email: "", phone: "", verificationCode: 0, accessKey: new Uint8Array(0) };
}

export const VerifyAuthPhone = {
  encode(message: VerifyAuthPhone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.verificationCode !== 0) {
      writer.uint32(24).uint32(message.verificationCode);
    }
    if (message.accessKey.length !== 0) {
      writer.uint32(34).bytes(message.accessKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyAuthPhone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyAuthPhone();
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

          message.verificationCode = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accessKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyAuthPhone {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      verificationCode: isSet(object.verificationCode) ? Number(object.verificationCode) : 0,
      accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0),
    };
  },

  toJSON(message: VerifyAuthPhone): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.verificationCode !== undefined && (obj.verificationCode = Math.round(message.verificationCode));
    message.accessKey !== undefined &&
      (obj.accessKey = base64FromBytes(message.accessKey !== undefined ? message.accessKey : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyAuthPhone>, I>>(base?: I): VerifyAuthPhone {
    return VerifyAuthPhone.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyAuthPhone>, I>>(object: I): VerifyAuthPhone {
    const message = createBaseVerifyAuthPhone();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.verificationCode = object.verificationCode ?? 0;
    message.accessKey = object.accessKey ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAuthPhoneVerified(): AuthPhoneVerified {
  return { accessKey: new Uint8Array(0), accountExists: false };
}

export const AuthPhoneVerified = {
  encode(message: AuthPhoneVerified, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessKey.length !== 0) {
      writer.uint32(10).bytes(message.accessKey);
    }
    if (message.accountExists === true) {
      writer.uint32(16).bool(message.accountExists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthPhoneVerified {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthPhoneVerified();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.accountExists = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthPhoneVerified {
    return {
      accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0),
      accountExists: isSet(object.accountExists) ? Boolean(object.accountExists) : false,
    };
  },

  toJSON(message: AuthPhoneVerified): unknown {
    const obj: any = {};
    message.accessKey !== undefined &&
      (obj.accessKey = base64FromBytes(message.accessKey !== undefined ? message.accessKey : new Uint8Array(0)));
    message.accountExists !== undefined && (obj.accountExists = message.accountExists);
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthPhoneVerified>, I>>(base?: I): AuthPhoneVerified {
    return AuthPhoneVerified.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthPhoneVerified>, I>>(object: I): AuthPhoneVerified {
    const message = createBaseAuthPhoneVerified();
    message.accessKey = object.accessKey ?? new Uint8Array(0);
    message.accountExists = object.accountExists ?? false;
    return message;
  },
};

function createBaseAuthorizeSocket(): AuthorizeSocket {
  return { lastEventIndex: 0, accessKey: new Uint8Array(0) };
}

export const AuthorizeSocket = {
  encode(message: AuthorizeSocket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastEventIndex !== 0) {
      writer.uint32(8).uint32(message.lastEventIndex);
    }
    if (message.accessKey.length !== 0) {
      writer.uint32(18).bytes(message.accessKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeSocket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizeSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.lastEventIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accessKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthorizeSocket {
    return {
      lastEventIndex: isSet(object.lastEventIndex) ? Number(object.lastEventIndex) : 0,
      accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0),
    };
  },

  toJSON(message: AuthorizeSocket): unknown {
    const obj: any = {};
    message.lastEventIndex !== undefined && (obj.lastEventIndex = Math.round(message.lastEventIndex));
    message.accessKey !== undefined &&
      (obj.accessKey = base64FromBytes(message.accessKey !== undefined ? message.accessKey : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthorizeSocket>, I>>(base?: I): AuthorizeSocket {
    return AuthorizeSocket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthorizeSocket>, I>>(object: I): AuthorizeSocket {
    const message = createBaseAuthorizeSocket();
    message.lastEventIndex = object.lastEventIndex ?? 0;
    message.accessKey = object.accessKey ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSocketAuthorized(): SocketAuthorized {
  return { events: [], accessKey: new Uint8Array(0) };
}

export const SocketAuthorized = {
  encode(message: SocketAuthorized, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.accessKey.length !== 0) {
      writer.uint32(18).bytes(message.accessKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocketAuthorized {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocketAuthorized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accessKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SocketAuthorized {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0),
    };
  },

  toJSON(message: SocketAuthorized): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    message.accessKey !== undefined &&
      (obj.accessKey = base64FromBytes(message.accessKey !== undefined ? message.accessKey : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<SocketAuthorized>, I>>(base?: I): SocketAuthorized {
    return SocketAuthorized.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SocketAuthorized>, I>>(object: I): SocketAuthorized {
    const message = createBaseSocketAuthorized();
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.accessKey = object.accessKey ?? new Uint8Array(0);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
