/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum ErrorType {
  INVALID_INPUT = 0,
  INVALID_STATE = 1,
  UNAUTHORIZED = 2,
  NOT_IMPLEMENTED = 3,
  UNRECOGNIZED = -1,
}

export function errorTypeFromJSON(object: any): ErrorType {
  switch (object) {
    case 0:
    case "INVALID_INPUT":
      return ErrorType.INVALID_INPUT;
    case 1:
    case "INVALID_STATE":
      return ErrorType.INVALID_STATE;
    case 2:
    case "UNAUTHORIZED":
      return ErrorType.UNAUTHORIZED;
    case 3:
    case "NOT_IMPLEMENTED":
      return ErrorType.NOT_IMPLEMENTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorType.UNRECOGNIZED;
  }
}

export function errorTypeToJSON(object: ErrorType): string {
  switch (object) {
    case ErrorType.INVALID_INPUT:
      return "INVALID_INPUT";
    case ErrorType.INVALID_STATE:
      return "INVALID_STATE";
    case ErrorType.UNAUTHORIZED:
      return "UNAUTHORIZED";
    case ErrorType.NOT_IMPLEMENTED:
      return "NOT_IMPLEMENTED";
    case ErrorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum InputField {
  UNKNOWN = 0,
  ADDRESS = 1,
  AVATAR = 2,
  CREDENTIAL = 3,
  EMAIL = 4,
  HANDLE = 5,
  LOCATION = 6,
  NAME = 7,
  PHONE = 8,
  SOCIAL = 9,
  URL = 10,
  USER_AGENT = 11,
  VERIFY_CODE = 12,
  UNRECOGNIZED = -1,
}

export function inputFieldFromJSON(object: any): InputField {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return InputField.UNKNOWN;
    case 1:
    case "ADDRESS":
      return InputField.ADDRESS;
    case 2:
    case "AVATAR":
      return InputField.AVATAR;
    case 3:
    case "CREDENTIAL":
      return InputField.CREDENTIAL;
    case 4:
    case "EMAIL":
      return InputField.EMAIL;
    case 5:
    case "HANDLE":
      return InputField.HANDLE;
    case 6:
    case "LOCATION":
      return InputField.LOCATION;
    case 7:
    case "NAME":
      return InputField.NAME;
    case 8:
    case "PHONE":
      return InputField.PHONE;
    case 9:
    case "SOCIAL":
      return InputField.SOCIAL;
    case 10:
    case "URL":
      return InputField.URL;
    case 11:
    case "USER_AGENT":
      return InputField.USER_AGENT;
    case 12:
    case "VERIFY_CODE":
      return InputField.VERIFY_CODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InputField.UNRECOGNIZED;
  }
}

export function inputFieldToJSON(object: InputField): string {
  switch (object) {
    case InputField.UNKNOWN:
      return "UNKNOWN";
    case InputField.ADDRESS:
      return "ADDRESS";
    case InputField.AVATAR:
      return "AVATAR";
    case InputField.CREDENTIAL:
      return "CREDENTIAL";
    case InputField.EMAIL:
      return "EMAIL";
    case InputField.HANDLE:
      return "HANDLE";
    case InputField.LOCATION:
      return "LOCATION";
    case InputField.NAME:
      return "NAME";
    case InputField.PHONE:
      return "PHONE";
    case InputField.SOCIAL:
      return "SOCIAL";
    case InputField.URL:
      return "URL";
    case InputField.USER_AGENT:
      return "USER_AGENT";
    case InputField.VERIFY_CODE:
      return "VERIFY_CODE";
    case InputField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Error {
  type: ErrorType;
  fields: InputField[];
  attemptsRemaining: number;
}

function createBaseError(): Error {
  return { type: 0, fields: [], attemptsRemaining: 0 };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    writer.uint32(18).fork();
    for (const v of message.fields) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.attemptsRemaining !== 0) {
      writer.uint32(24).uint32(message.attemptsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag === 16) {
            message.fields.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.attemptsRemaining = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      type: isSet(object.type) ? errorTypeFromJSON(object.type) : 0,
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => inputFieldFromJSON(e)) : [],
      attemptsRemaining: isSet(object.attemptsRemaining) ? Number(object.attemptsRemaining) : 0,
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = errorTypeToJSON(message.type);
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => inputFieldToJSON(e));
    }
    if (message.attemptsRemaining !== 0) {
      obj.attemptsRemaining = Math.round(message.attemptsRemaining);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.type = object.type ?? 0;
    message.fields = object.fields?.map((e) => e) || [];
    message.attemptsRemaining = object.attemptsRemaining ?? 0;
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
