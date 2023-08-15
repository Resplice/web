/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum AuthStatus {
  SESSION_AUTHORIZED = 0,
  PENDING_EMAIL_VERIFICATION = 1,
  PENDING_PHONE_VERIFICATION = 2,
  PENDING_ACCOUNT_CREATION = 3,
  PENDING_SESSION_START = 4,
  UNRECOGNIZED = -1,
}

export function authStatusFromJSON(object: any): AuthStatus {
  switch (object) {
    case 0:
    case "SESSION_AUTHORIZED":
      return AuthStatus.SESSION_AUTHORIZED;
    case 1:
    case "PENDING_EMAIL_VERIFICATION":
      return AuthStatus.PENDING_EMAIL_VERIFICATION;
    case 2:
    case "PENDING_PHONE_VERIFICATION":
      return AuthStatus.PENDING_PHONE_VERIFICATION;
    case 3:
    case "PENDING_ACCOUNT_CREATION":
      return AuthStatus.PENDING_ACCOUNT_CREATION;
    case 4:
    case "PENDING_SESSION_START":
      return AuthStatus.PENDING_SESSION_START;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthStatus.UNRECOGNIZED;
  }
}

export function authStatusToJSON(object: AuthStatus): string {
  switch (object) {
    case AuthStatus.SESSION_AUTHORIZED:
      return "SESSION_AUTHORIZED";
    case AuthStatus.PENDING_EMAIL_VERIFICATION:
      return "PENDING_EMAIL_VERIFICATION";
    case AuthStatus.PENDING_PHONE_VERIFICATION:
      return "PENDING_PHONE_VERIFICATION";
    case AuthStatus.PENDING_ACCOUNT_CREATION:
      return "PENDING_ACCOUNT_CREATION";
    case AuthStatus.PENDING_SESSION_START:
      return "PENDING_SESSION_START";
    case AuthStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AuthChanged {
  status: AuthStatus;
  expiry: number;
  sessionId: number;
}

function createBaseAuthChanged(): AuthChanged {
  return { status: 0, expiry: 0, sessionId: 0 };
}

export const AuthChanged = {
  encode(message: AuthChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.expiry !== 0) {
      writer.uint32(16).uint32(message.expiry);
    }
    if (message.sessionId !== 0) {
      writer.uint32(24).uint32(message.sessionId);
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

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expiry = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): AuthChanged {
    return {
      status: isSet(object.status) ? authStatusFromJSON(object.status) : 0,
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
      sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0,
    };
  },

  toJSON(message: AuthChanged): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = authStatusToJSON(message.status));
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry));
    message.sessionId !== undefined && (obj.sessionId = Math.round(message.sessionId));
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthChanged>, I>>(base?: I): AuthChanged {
    return AuthChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthChanged>, I>>(object: I): AuthChanged {
    const message = createBaseAuthChanged();
    message.status = object.status ?? 0;
    message.expiry = object.expiry ?? 0;
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
