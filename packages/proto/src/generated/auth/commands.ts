/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface StartAuth {
  phone: string;
}

export interface VerifyPhone {
  phone: string;
  verifyCode: number;
}

export interface CreateAccount {
  phone: string;
  name: string;
  avatar: string;
}

export interface DeleteAccount {
  phone: string;
}

export interface StartSession {
  accessToken: string;
  userAgent: string;
  ipAddress: string;
  persist: boolean;
}

export interface AuthorizeSocket {
  lastEventId: number;
}

export interface EndSession {
  sessionId: number;
}

function createBaseStartAuth(): StartAuth {
  return { phone: "" };
}

export const StartAuth = {
  encode(message: StartAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
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
    return { phone: isSet(object.phone) ? globalThis.String(object.phone) : "" };
  },

  toJSON(message: StartAuth): unknown {
    const obj: any = {};
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartAuth>, I>>(base?: I): StartAuth {
    return StartAuth.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartAuth>, I>>(object: I): StartAuth {
    const message = createBaseStartAuth();
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseVerifyPhone(): VerifyPhone {
  return { phone: "", verifyCode: 0 };
}

export const VerifyPhone = {
  encode(message: VerifyPhone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    if (message.verifyCode !== 0) {
      writer.uint32(16).uint32(message.verifyCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPhone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.verifyCode = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPhone {
    return {
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      verifyCode: isSet(object.verifyCode) ? globalThis.Number(object.verifyCode) : 0,
    };
  },

  toJSON(message: VerifyPhone): unknown {
    const obj: any = {};
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.verifyCode !== 0) {
      obj.verifyCode = Math.round(message.verifyCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyPhone>, I>>(base?: I): VerifyPhone {
    return VerifyPhone.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerifyPhone>, I>>(object: I): VerifyPhone {
    const message = createBaseVerifyPhone();
    message.phone = object.phone ?? "";
    message.verifyCode = object.verifyCode ?? 0;
    return message;
  },
};

function createBaseCreateAccount(): CreateAccount {
  return { phone: "", name: "", avatar: "" };
}

export const CreateAccount = {
  encode(message: CreateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.avatar !== "") {
      writer.uint32(26).string(message.avatar);
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

          message.phone = reader.string();
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

  fromJSON(object: any): CreateAccount {
    return {
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
    };
  },

  toJSON(message: CreateAccount): unknown {
    const obj: any = {};
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAccount>, I>>(base?: I): CreateAccount {
    return CreateAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAccount>, I>>(object: I): CreateAccount {
    const message = createBaseCreateAccount();
    message.phone = object.phone ?? "";
    message.name = object.name ?? "";
    message.avatar = object.avatar ?? "";
    return message;
  },
};

function createBaseDeleteAccount(): DeleteAccount {
  return { phone: "" };
}

export const DeleteAccount = {
  encode(message: DeleteAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
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

  fromJSON(object: any): DeleteAccount {
    return { phone: isSet(object.phone) ? globalThis.String(object.phone) : "" };
  },

  toJSON(message: DeleteAccount): unknown {
    const obj: any = {};
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAccount>, I>>(base?: I): DeleteAccount {
    return DeleteAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAccount>, I>>(object: I): DeleteAccount {
    const message = createBaseDeleteAccount();
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseStartSession(): StartSession {
  return { accessToken: "", userAgent: "", ipAddress: "", persist: false };
}

export const StartSession = {
  encode(message: StartSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.userAgent !== "") {
      writer.uint32(18).string(message.userAgent);
    }
    if (message.ipAddress !== "") {
      writer.uint32(26).string(message.ipAddress);
    }
    if (message.persist === true) {
      writer.uint32(32).bool(message.persist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userAgent = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.persist = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartSession {
    return {
      accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
      userAgent: isSet(object.userAgent) ? globalThis.String(object.userAgent) : "",
      ipAddress: isSet(object.ipAddress) ? globalThis.String(object.ipAddress) : "",
      persist: isSet(object.persist) ? globalThis.Boolean(object.persist) : false,
    };
  },

  toJSON(message: StartSession): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.userAgent !== "") {
      obj.userAgent = message.userAgent;
    }
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    if (message.persist === true) {
      obj.persist = message.persist;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartSession>, I>>(base?: I): StartSession {
    return StartSession.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StartSession>, I>>(object: I): StartSession {
    const message = createBaseStartSession();
    message.accessToken = object.accessToken ?? "";
    message.userAgent = object.userAgent ?? "";
    message.ipAddress = object.ipAddress ?? "";
    message.persist = object.persist ?? false;
    return message;
  },
};

function createBaseAuthorizeSocket(): AuthorizeSocket {
  return { lastEventId: 0 };
}

export const AuthorizeSocket = {
  encode(message: AuthorizeSocket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastEventId !== 0) {
      writer.uint32(8).uint32(message.lastEventId);
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

          message.lastEventId = reader.uint32();
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
    return { lastEventId: isSet(object.lastEventId) ? globalThis.Number(object.lastEventId) : 0 };
  },

  toJSON(message: AuthorizeSocket): unknown {
    const obj: any = {};
    if (message.lastEventId !== 0) {
      obj.lastEventId = Math.round(message.lastEventId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthorizeSocket>, I>>(base?: I): AuthorizeSocket {
    return AuthorizeSocket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthorizeSocket>, I>>(object: I): AuthorizeSocket {
    const message = createBaseAuthorizeSocket();
    message.lastEventId = object.lastEventId ?? 0;
    return message;
  },
};

function createBaseEndSession(): EndSession {
  return { sessionId: 0 };
}

export const EndSession = {
  encode(message: EndSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sessionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EndSession {
    return { sessionId: isSet(object.sessionId) ? globalThis.Number(object.sessionId) : 0 };
  },

  toJSON(message: EndSession): unknown {
    const obj: any = {};
    if (message.sessionId !== 0) {
      obj.sessionId = Math.round(message.sessionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EndSession>, I>>(base?: I): EndSession {
    return EndSession.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EndSession>, I>>(object: I): EndSession {
    const message = createBaseEndSession();
    message.sessionId = object.sessionId ?? 0;
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
