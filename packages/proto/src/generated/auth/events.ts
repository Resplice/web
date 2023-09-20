/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum AuthStatus {
  UNAUTHORIZED = 0,
  PENDING_VERIFY_PHONE = 1,
  PENDING_CREATE_ACCOUNT = 2,
  PENDING_START_SESSION = 3,
  AUTHORIZED = 4,
  UNRECOGNIZED = -1,
}

export function authStatusFromJSON(object: any): AuthStatus {
  switch (object) {
    case 0:
    case "UNAUTHORIZED":
      return AuthStatus.UNAUTHORIZED;
    case 1:
    case "PENDING_VERIFY_PHONE":
      return AuthStatus.PENDING_VERIFY_PHONE;
    case 2:
    case "PENDING_CREATE_ACCOUNT":
      return AuthStatus.PENDING_CREATE_ACCOUNT;
    case 3:
    case "PENDING_START_SESSION":
      return AuthStatus.PENDING_START_SESSION;
    case 4:
    case "AUTHORIZED":
      return AuthStatus.AUTHORIZED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthStatus.UNRECOGNIZED;
  }
}

export function authStatusToJSON(object: AuthStatus): string {
  switch (object) {
    case AuthStatus.UNAUTHORIZED:
      return "UNAUTHORIZED";
    case AuthStatus.PENDING_VERIFY_PHONE:
      return "PENDING_VERIFY_PHONE";
    case AuthStatus.PENDING_CREATE_ACCOUNT:
      return "PENDING_CREATE_ACCOUNT";
    case AuthStatus.PENDING_START_SESSION:
      return "PENDING_START_SESSION";
    case AuthStatus.AUTHORIZED:
      return "AUTHORIZED";
    case AuthStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AuthChanged {
  authStatus: AuthStatus;
}

export interface SessionStarted {
  sessionId: number;
  userAgent: string;
  ipAddress: string;
}

export interface SessionEnded {
  sessionId: number;
}

function createBaseAuthChanged(): AuthChanged {
  return { authStatus: 0 };
}

export const AuthChanged = {
  encode(message: AuthChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authStatus !== 0) {
      writer.uint32(8).int32(message.authStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.authStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthChanged {
    return { authStatus: isSet(object.authStatus) ? authStatusFromJSON(object.authStatus) : 0 };
  },

  toJSON(message: AuthChanged): unknown {
    const obj: any = {};
    if (message.authStatus !== 0) {
      obj.authStatus = authStatusToJSON(message.authStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthChanged>, I>>(base?: I): AuthChanged {
    return AuthChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthChanged>, I>>(object: I): AuthChanged {
    const message = createBaseAuthChanged();
    message.authStatus = object.authStatus ?? 0;
    return message;
  },
};

function createBaseSessionStarted(): SessionStarted {
  return { sessionId: 0, userAgent: "", ipAddress: "" };
}

export const SessionStarted = {
  encode(message: SessionStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    if (message.userAgent !== "") {
      writer.uint32(18).string(message.userAgent);
    }
    if (message.ipAddress !== "") {
      writer.uint32(26).string(message.ipAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionStarted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sessionId = reader.uint32();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionStarted {
    return {
      sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0,
      userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
    };
  },

  toJSON(message: SessionStarted): unknown {
    const obj: any = {};
    if (message.sessionId !== 0) {
      obj.sessionId = Math.round(message.sessionId);
    }
    if (message.userAgent !== "") {
      obj.userAgent = message.userAgent;
    }
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SessionStarted>, I>>(base?: I): SessionStarted {
    return SessionStarted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SessionStarted>, I>>(object: I): SessionStarted {
    const message = createBaseSessionStarted();
    message.sessionId = object.sessionId ?? 0;
    message.userAgent = object.userAgent ?? "";
    message.ipAddress = object.ipAddress ?? "";
    return message;
  },
};

function createBaseSessionEnded(): SessionEnded {
  return { sessionId: 0 };
}

export const SessionEnded = {
  encode(message: SessionEnded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionEnded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionEnded();
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

  fromJSON(object: any): SessionEnded {
    return { sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0 };
  },

  toJSON(message: SessionEnded): unknown {
    const obj: any = {};
    if (message.sessionId !== 0) {
      obj.sessionId = Math.round(message.sessionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SessionEnded>, I>>(base?: I): SessionEnded {
    return SessionEnded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SessionEnded>, I>>(object: I): SessionEnded {
    const message = createBaseSessionEnded();
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
