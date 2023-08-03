/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum AuthStatus {
  SESSION_AUTHORIZED = 0,
  VERIFY_EMAIL = 1,
  VERIFY_PHONE = 2,
  CREATE_ACCOUNT = 3,
  CREATE_SESSION = 4,
  UNRECOGNIZED = -1,
}

export function authStatusFromJSON(object: any): AuthStatus {
  switch (object) {
    case 0:
    case "SESSION_AUTHORIZED":
      return AuthStatus.SESSION_AUTHORIZED;
    case 1:
    case "VERIFY_EMAIL":
      return AuthStatus.VERIFY_EMAIL;
    case 2:
    case "VERIFY_PHONE":
      return AuthStatus.VERIFY_PHONE;
    case 3:
    case "CREATE_ACCOUNT":
      return AuthStatus.CREATE_ACCOUNT;
    case 4:
    case "CREATE_SESSION":
      return AuthStatus.CREATE_SESSION;
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
    case AuthStatus.VERIFY_EMAIL:
      return "VERIFY_EMAIL";
    case AuthStatus.VERIFY_PHONE:
      return "VERIFY_PHONE";
    case AuthStatus.CREATE_ACCOUNT:
      return "CREATE_ACCOUNT";
    case AuthStatus.CREATE_SESSION:
      return "CREATE_SESSION";
    case AuthStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AuthInfo {
  status: AuthStatus;
  allowedAttempts: number;
}

function createBaseAuthInfo(): AuthInfo {
  return { status: 0, allowedAttempts: 0 };
}

export const AuthInfo = {
  encode(message: AuthInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.allowedAttempts !== 0) {
      writer.uint32(16).uint32(message.allowedAttempts);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthInfo();
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

          message.allowedAttempts = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthInfo {
    return {
      status: isSet(object.status) ? authStatusFromJSON(object.status) : 0,
      allowedAttempts: isSet(object.allowedAttempts) ? Number(object.allowedAttempts) : 0,
    };
  },

  toJSON(message: AuthInfo): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = authStatusToJSON(message.status));
    message.allowedAttempts !== undefined && (obj.allowedAttempts = Math.round(message.allowedAttempts));
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthInfo>, I>>(base?: I): AuthInfo {
    return AuthInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthInfo>, I>>(object: I): AuthInfo {
    const message = createBaseAuthInfo();
    message.status = object.status ?? 0;
    message.allowedAttempts = object.allowedAttempts ?? 0;
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
