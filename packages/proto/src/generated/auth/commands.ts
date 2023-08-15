/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coordinate } from "../attribute/types";

export interface StartAuth {
  email: string;
  phone: string;
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
  avatar: string;
}

export interface StartSession {
  email: string;
  phone: string;
  persist: boolean;
  userAgent: string;
  location: Coordinate | undefined;
}

export interface DeleteAccount {
  email: string;
  phone: string;
  removeAllExistingData: boolean;
}

export interface EndSession {
  sessionId: number;
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
  return { email: "", phone: "", fullName: "", avatar: "" };
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
    if (message.avatar !== "") {
      writer.uint32(34).string(message.avatar);
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
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      fullName: isSet(object.fullName) ? String(object.fullName) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
    };
  },

  toJSON(message: CreateAccount): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.avatar !== undefined && (obj.avatar = message.avatar);
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
    message.avatar = object.avatar ?? "";
    return message;
  },
};

function createBaseStartSession(): StartSession {
  return { email: "", phone: "", persist: false, userAgent: "", location: undefined };
}

export const StartSession = {
  encode(message: StartSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.persist === true) {
      writer.uint32(24).bool(message.persist);
    }
    if (message.userAgent !== "") {
      writer.uint32(34).string(message.userAgent);
    }
    if (message.location !== undefined) {
      Coordinate.encode(message.location, writer.uint32(42).fork()).ldelim();
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

          message.persist = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userAgent = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.location = Coordinate.decode(reader, reader.uint32());
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
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      persist: isSet(object.persist) ? Boolean(object.persist) : false,
      userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
      location: isSet(object.location) ? Coordinate.fromJSON(object.location) : undefined,
    };
  },

  toJSON(message: StartSession): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    message.persist !== undefined && (obj.persist = message.persist);
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.location !== undefined &&
      (obj.location = message.location ? Coordinate.toJSON(message.location) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartSession>, I>>(base?: I): StartSession {
    return StartSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartSession>, I>>(object: I): StartSession {
    const message = createBaseStartSession();
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.persist = object.persist ?? false;
    message.userAgent = object.userAgent ?? "";
    message.location = (object.location !== undefined && object.location !== null)
      ? Coordinate.fromPartial(object.location)
      : undefined;
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
    return { sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0 };
  },

  toJSON(message: EndSession): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = Math.round(message.sessionId));
    return obj;
  },

  create<I extends Exact<DeepPartial<EndSession>, I>>(base?: I): EndSession {
    return EndSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EndSession>, I>>(object: I): EndSession {
    const message = createBaseEndSession();
    message.sessionId = object.sessionId ?? 0;
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
