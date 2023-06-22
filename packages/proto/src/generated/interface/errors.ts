/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum Errors {
  INVALID_STATE = 0,
  INVALID_AES_KEY = 1,
  INVALID_IV_BASE = 2,
  INVALID_PHONE = 3,
  INVALID_EMAIL = 4,
  INVALID_TOKEN = 5,
  INVALID_NAME = 6,
  INVALID_HANDLE = 7,
  UNKNOWN = 127,
  UNRECOGNIZED = -1,
}

export function errorsFromJSON(object: any): Errors {
  switch (object) {
    case 0:
    case "INVALID_STATE":
      return Errors.INVALID_STATE;
    case 1:
    case "INVALID_AES_KEY":
      return Errors.INVALID_AES_KEY;
    case 2:
    case "INVALID_IV_BASE":
      return Errors.INVALID_IV_BASE;
    case 3:
    case "INVALID_PHONE":
      return Errors.INVALID_PHONE;
    case 4:
    case "INVALID_EMAIL":
      return Errors.INVALID_EMAIL;
    case 5:
    case "INVALID_TOKEN":
      return Errors.INVALID_TOKEN;
    case 6:
    case "INVALID_NAME":
      return Errors.INVALID_NAME;
    case 7:
    case "INVALID_HANDLE":
      return Errors.INVALID_HANDLE;
    case 127:
    case "UNKNOWN":
      return Errors.UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Errors.UNRECOGNIZED;
  }
}

export function errorsToJSON(object: Errors): string {
  switch (object) {
    case Errors.INVALID_STATE:
      return "INVALID_STATE";
    case Errors.INVALID_AES_KEY:
      return "INVALID_AES_KEY";
    case Errors.INVALID_IV_BASE:
      return "INVALID_IV_BASE";
    case Errors.INVALID_PHONE:
      return "INVALID_PHONE";
    case Errors.INVALID_EMAIL:
      return "INVALID_EMAIL";
    case Errors.INVALID_TOKEN:
      return "INVALID_TOKEN";
    case Errors.INVALID_NAME:
      return "INVALID_NAME";
    case Errors.INVALID_HANDLE:
      return "INVALID_HANDLE";
    case Errors.UNKNOWN:
      return "UNKNOWN";
    case Errors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Error {
  errors: Errors[];
}

function createBaseError(): Error {
  return { errors: [] };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(18).fork();
    for (const v of message.errors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag === 16) {
            message.errors.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.errors.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return { errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => errorsFromJSON(e)) : [] };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map((e) => errorsToJSON(e));
    } else {
      obj.errors = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.errors = object.errors?.map((e) => e) || [];
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
