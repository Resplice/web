/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum ErrorType {
  INVALID_INPUT = 0,
  INVALID_STATE = 1,
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
    case ErrorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Fields {
  NAME = 0,
  EMAIL = 1,
  PHONE = 2,
  HANDLE = 3,
  UNRECOGNIZED = -1,
}

export function fieldsFromJSON(object: any): Fields {
  switch (object) {
    case 0:
    case "NAME":
      return Fields.NAME;
    case 1:
    case "EMAIL":
      return Fields.EMAIL;
    case 2:
    case "PHONE":
      return Fields.PHONE;
    case 3:
    case "HANDLE":
      return Fields.HANDLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Fields.UNRECOGNIZED;
  }
}

export function fieldsToJSON(object: Fields): string {
  switch (object) {
    case Fields.NAME:
      return "NAME";
    case Fields.EMAIL:
      return "EMAIL";
    case Fields.PHONE:
      return "PHONE";
    case Fields.HANDLE:
      return "HANDLE";
    case Fields.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Error {
  type: ErrorType;
  fields: Fields[];
}

function createBaseError(): Error {
  return { type: 0, fields: [] };
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
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => fieldsFromJSON(e)) : [],
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = errorTypeToJSON(message.type));
    if (message.fields) {
      obj.fields = message.fields.map((e) => fieldsToJSON(e));
    } else {
      obj.fields = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.type = object.type ?? 0;
    message.fields = object.fields?.map((e) => e) || [];
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
