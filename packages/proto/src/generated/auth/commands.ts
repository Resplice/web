/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface Command {
  payload?:
    | { $case: "startAuth"; startAuth: StartAuth }
    | { $case: "verifyEmail"; verifyEmail: VerifyEmail }
    | { $case: "verifyPhone"; verifyPhone: VerifyPhone }
    | { $case: "createAccount"; createAccount: CreateAccount }
    | { $case: "createSession"; createSession: CreateSession }
    | { $case: "expireSession"; expireSession: ExpireSession }
    | { $case: "deleteAccount"; deleteAccount: DeleteAccount };
}

export interface StartAuth {
  email: string;
  phone: string;
  rememberMe: boolean;
}

export interface VerifyEmail {
  email: string;
  phone: string;
  verifyCode: number;
}

export interface VerifyPhone {
  email: string;
  phone: string;
  verifyCode: number;
}

export interface CreateAccount {
  email: string;
  phone: string;
  fullName: string;
  avatar: Uint8Array;
}

export interface CreateSession {
  email: string;
  phone: string;
}

export interface ExpireSession {
  sessionId: number;
}

export interface DeleteAccount {
  email: string;
  phone: string;
  removeAllExistingData: boolean;
}

function createBaseCommand(): Command {
  return { payload: undefined };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.payload?.$case) {
      case "startAuth":
        StartAuth.encode(message.payload.startAuth, writer.uint32(10).fork()).ldelim();
        break;
      case "verifyEmail":
        VerifyEmail.encode(message.payload.verifyEmail, writer.uint32(18).fork()).ldelim();
        break;
      case "verifyPhone":
        VerifyPhone.encode(message.payload.verifyPhone, writer.uint32(26).fork()).ldelim();
        break;
      case "createAccount":
        CreateAccount.encode(message.payload.createAccount, writer.uint32(34).fork()).ldelim();
        break;
      case "createSession":
        CreateSession.encode(message.payload.createSession, writer.uint32(42).fork()).ldelim();
        break;
      case "expireSession":
        ExpireSession.encode(message.payload.expireSession, writer.uint32(50).fork()).ldelim();
        break;
      case "deleteAccount":
        DeleteAccount.encode(message.payload.deleteAccount, writer.uint32(58).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = { $case: "startAuth", startAuth: StartAuth.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = { $case: "verifyEmail", verifyEmail: VerifyEmail.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "verifyPhone", verifyPhone: VerifyPhone.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = { $case: "createAccount", createAccount: CreateAccount.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = { $case: "createSession", createSession: CreateSession.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = { $case: "expireSession", expireSession: ExpireSession.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = { $case: "deleteAccount", deleteAccount: DeleteAccount.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Command {
    return {
      payload: isSet(object.startAuth)
        ? { $case: "startAuth", startAuth: StartAuth.fromJSON(object.startAuth) }
        : isSet(object.verifyEmail)
        ? { $case: "verifyEmail", verifyEmail: VerifyEmail.fromJSON(object.verifyEmail) }
        : isSet(object.verifyPhone)
        ? { $case: "verifyPhone", verifyPhone: VerifyPhone.fromJSON(object.verifyPhone) }
        : isSet(object.createAccount)
        ? { $case: "createAccount", createAccount: CreateAccount.fromJSON(object.createAccount) }
        : isSet(object.createSession)
        ? { $case: "createSession", createSession: CreateSession.fromJSON(object.createSession) }
        : isSet(object.expireSession)
        ? { $case: "expireSession", expireSession: ExpireSession.fromJSON(object.expireSession) }
        : isSet(object.deleteAccount)
        ? { $case: "deleteAccount", deleteAccount: DeleteAccount.fromJSON(object.deleteAccount) }
        : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.payload?.$case === "startAuth" &&
      (obj.startAuth = message.payload?.startAuth ? StartAuth.toJSON(message.payload?.startAuth) : undefined);
    message.payload?.$case === "verifyEmail" &&
      (obj.verifyEmail = message.payload?.verifyEmail ? VerifyEmail.toJSON(message.payload?.verifyEmail) : undefined);
    message.payload?.$case === "verifyPhone" &&
      (obj.verifyPhone = message.payload?.verifyPhone ? VerifyPhone.toJSON(message.payload?.verifyPhone) : undefined);
    message.payload?.$case === "createAccount" && (obj.createAccount = message.payload?.createAccount
      ? CreateAccount.toJSON(message.payload?.createAccount)
      : undefined);
    message.payload?.$case === "createSession" && (obj.createSession = message.payload?.createSession
      ? CreateSession.toJSON(message.payload?.createSession)
      : undefined);
    message.payload?.$case === "expireSession" && (obj.expireSession = message.payload?.expireSession
      ? ExpireSession.toJSON(message.payload?.expireSession)
      : undefined);
    message.payload?.$case === "deleteAccount" && (obj.deleteAccount = message.payload?.deleteAccount
      ? DeleteAccount.toJSON(message.payload?.deleteAccount)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    if (
      object.payload?.$case === "startAuth" &&
      object.payload?.startAuth !== undefined &&
      object.payload?.startAuth !== null
    ) {
      message.payload = { $case: "startAuth", startAuth: StartAuth.fromPartial(object.payload.startAuth) };
    }
    if (
      object.payload?.$case === "verifyEmail" &&
      object.payload?.verifyEmail !== undefined &&
      object.payload?.verifyEmail !== null
    ) {
      message.payload = { $case: "verifyEmail", verifyEmail: VerifyEmail.fromPartial(object.payload.verifyEmail) };
    }
    if (
      object.payload?.$case === "verifyPhone" &&
      object.payload?.verifyPhone !== undefined &&
      object.payload?.verifyPhone !== null
    ) {
      message.payload = { $case: "verifyPhone", verifyPhone: VerifyPhone.fromPartial(object.payload.verifyPhone) };
    }
    if (
      object.payload?.$case === "createAccount" &&
      object.payload?.createAccount !== undefined &&
      object.payload?.createAccount !== null
    ) {
      message.payload = {
        $case: "createAccount",
        createAccount: CreateAccount.fromPartial(object.payload.createAccount),
      };
    }
    if (
      object.payload?.$case === "createSession" &&
      object.payload?.createSession !== undefined &&
      object.payload?.createSession !== null
    ) {
      message.payload = {
        $case: "createSession",
        createSession: CreateSession.fromPartial(object.payload.createSession),
      };
    }
    if (
      object.payload?.$case === "expireSession" &&
      object.payload?.expireSession !== undefined &&
      object.payload?.expireSession !== null
    ) {
      message.payload = {
        $case: "expireSession",
        expireSession: ExpireSession.fromPartial(object.payload.expireSession),
      };
    }
    if (
      object.payload?.$case === "deleteAccount" &&
      object.payload?.deleteAccount !== undefined &&
      object.payload?.deleteAccount !== null
    ) {
      message.payload = {
        $case: "deleteAccount",
        deleteAccount: DeleteAccount.fromPartial(object.payload.deleteAccount),
      };
    }
    return message;
  },
};

function createBaseStartAuth(): StartAuth {
  return { email: "", phone: "", rememberMe: false };
}

export const StartAuth = {
  encode(message: StartAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.rememberMe === true) {
      writer.uint32(24).bool(message.rememberMe);
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rememberMe = reader.bool();
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
      rememberMe: isSet(object.rememberMe) ? Boolean(object.rememberMe) : false,
    };
  },

  toJSON(message: StartAuth): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.rememberMe !== undefined && (obj.rememberMe = message.rememberMe);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartAuth>, I>>(base?: I): StartAuth {
    return StartAuth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartAuth>, I>>(object: I): StartAuth {
    const message = createBaseStartAuth();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.rememberMe = object.rememberMe ?? false;
    return message;
  },
};

function createBaseVerifyEmail(): VerifyEmail {
  return { email: "", phone: "", verifyCode: 0 };
}

export const VerifyEmail = {
  encode(message: VerifyEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.verifyCode !== 0) {
      writer.uint32(24).uint32(message.verifyCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyEmail();
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

  fromJSON(object: any): VerifyEmail {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      verifyCode: isSet(object.verifyCode) ? Number(object.verifyCode) : 0,
    };
  },

  toJSON(message: VerifyEmail): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.verifyCode !== undefined && (obj.verifyCode = Math.round(message.verifyCode));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyEmail>, I>>(base?: I): VerifyEmail {
    return VerifyEmail.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyEmail>, I>>(object: I): VerifyEmail {
    const message = createBaseVerifyEmail();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.verifyCode = object.verifyCode ?? 0;
    return message;
  },
};

function createBaseVerifyPhone(): VerifyPhone {
  return { email: "", phone: "", verifyCode: 0 };
}

export const VerifyPhone = {
  encode(message: VerifyPhone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.verifyCode !== 0) {
      writer.uint32(24).uint32(message.verifyCode);
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
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      verifyCode: isSet(object.verifyCode) ? Number(object.verifyCode) : 0,
    };
  },

  toJSON(message: VerifyPhone): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.verifyCode !== undefined && (obj.verifyCode = Math.round(message.verifyCode));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyPhone>, I>>(base?: I): VerifyPhone {
    return VerifyPhone.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyPhone>, I>>(object: I): VerifyPhone {
    const message = createBaseVerifyPhone();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.verifyCode = object.verifyCode ?? 0;
    return message;
  },
};

function createBaseCreateAccount(): CreateAccount {
  return { email: "", phone: "", fullName: "", avatar: new Uint8Array(0) };
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
    if (message.avatar.length !== 0) {
      writer.uint32(34).bytes(message.avatar);
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

  fromJSON(object: any): CreateAccount {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      fullName: isSet(object.fullName) ? String(object.fullName) : "",
      avatar: isSet(object.avatar) ? bytesFromBase64(object.avatar) : new Uint8Array(0),
    };
  },

  toJSON(message: CreateAccount): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.avatar !== undefined &&
      (obj.avatar = base64FromBytes(message.avatar !== undefined ? message.avatar : new Uint8Array(0)));
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
    message.avatar = object.avatar ?? new Uint8Array(0);
    return message;
  },
};

function createBaseCreateSession(): CreateSession {
  return { email: "", phone: "" };
}

export const CreateSession = {
  encode(message: CreateSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSession();
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

  fromJSON(object: any): CreateSession {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
    };
  },

  toJSON(message: CreateSession): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSession>, I>>(base?: I): CreateSession {
    return CreateSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSession>, I>>(object: I): CreateSession {
    const message = createBaseCreateSession();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    return message;
  },
};

function createBaseExpireSession(): ExpireSession {
  return { sessionId: 0 };
}

export const ExpireSession = {
  encode(message: ExpireSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpireSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpireSession();
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

  fromJSON(object: any): ExpireSession {
    return { sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0 };
  },

  toJSON(message: ExpireSession): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = Math.round(message.sessionId));
    return obj;
  },

  create<I extends Exact<DeepPartial<ExpireSession>, I>>(base?: I): ExpireSession {
    return ExpireSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExpireSession>, I>>(object: I): ExpireSession {
    const message = createBaseExpireSession();
    message.sessionId = object.sessionId ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
