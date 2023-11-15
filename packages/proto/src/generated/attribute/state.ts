/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Address,
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON,
  Credential,
  Email,
  Phone,
  Social,
} from "./types";

export interface Attribute {
  id: number;
  name: string;
  valueId: string;
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

export interface ValueVerification {
  /** Hash of value */
  valueId: string;
  verifiedAt: number;
}

export interface PendingAttribute {
  name: string;
  attributeType: AttributeType;
}

function createBaseAttribute(): Attribute {
  return { id: 0, name: "", valueId: "", value: undefined };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.valueId !== "") {
      writer.uint32(26).string(message.valueId);
    }
    switch (message.value?.$case) {
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(34).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(42).fork()).ldelim();
        break;
      case "address":
        Address.encode(message.value.address, writer.uint32(50).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(58).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(66).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
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

          message.valueId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      valueId: isSet(object.valueId) ? globalThis.String(object.valueId) : "",
      value: isSet(object.phone)
        ? { $case: "phone", phone: Phone.fromJSON(object.phone) }
        : isSet(object.email)
        ? { $case: "email", email: Email.fromJSON(object.email) }
        : isSet(object.address)
        ? { $case: "address", address: Address.fromJSON(object.address) }
        : isSet(object.social)
        ? { $case: "social", social: Social.fromJSON(object.social) }
        : isSet(object.credential)
        ? { $case: "credential", credential: Credential.fromJSON(object.credential) }
        : undefined,
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.valueId !== "") {
      obj.valueId = message.valueId;
    }
    if (message.value?.$case === "phone") {
      obj.phone = Phone.toJSON(message.value.phone);
    }
    if (message.value?.$case === "email") {
      obj.email = Email.toJSON(message.value.email);
    }
    if (message.value?.$case === "address") {
      obj.address = Address.toJSON(message.value.address);
    }
    if (message.value?.$case === "social") {
      obj.social = Social.toJSON(message.value.social);
    }
    if (message.value?.$case === "credential") {
      obj.credential = Credential.toJSON(message.value.credential);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attribute>, I>>(base?: I): Attribute {
    return Attribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
    const message = createBaseAttribute();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.valueId = object.valueId ?? "";
    if (object.value?.$case === "phone" && object.value?.phone !== undefined && object.value?.phone !== null) {
      message.value = { $case: "phone", phone: Phone.fromPartial(object.value.phone) };
    }
    if (object.value?.$case === "email" && object.value?.email !== undefined && object.value?.email !== null) {
      message.value = { $case: "email", email: Email.fromPartial(object.value.email) };
    }
    if (object.value?.$case === "address" && object.value?.address !== undefined && object.value?.address !== null) {
      message.value = { $case: "address", address: Address.fromPartial(object.value.address) };
    }
    if (object.value?.$case === "social" && object.value?.social !== undefined && object.value?.social !== null) {
      message.value = { $case: "social", social: Social.fromPartial(object.value.social) };
    }
    if (
      object.value?.$case === "credential" &&
      object.value?.credential !== undefined &&
      object.value?.credential !== null
    ) {
      message.value = { $case: "credential", credential: Credential.fromPartial(object.value.credential) };
    }
    return message;
  },
};

function createBaseValueVerification(): ValueVerification {
  return { valueId: "", verifiedAt: 0 };
}

export const ValueVerification = {
  encode(message: ValueVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valueId !== "") {
      writer.uint32(10).string(message.valueId);
    }
    if (message.verifiedAt !== 0) {
      writer.uint32(16).uint32(message.verifiedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueVerification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.valueId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.verifiedAt = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValueVerification {
    return {
      valueId: isSet(object.valueId) ? globalThis.String(object.valueId) : "",
      verifiedAt: isSet(object.verifiedAt) ? globalThis.Number(object.verifiedAt) : 0,
    };
  },

  toJSON(message: ValueVerification): unknown {
    const obj: any = {};
    if (message.valueId !== "") {
      obj.valueId = message.valueId;
    }
    if (message.verifiedAt !== 0) {
      obj.verifiedAt = Math.round(message.verifiedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValueVerification>, I>>(base?: I): ValueVerification {
    return ValueVerification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValueVerification>, I>>(object: I): ValueVerification {
    const message = createBaseValueVerification();
    message.valueId = object.valueId ?? "";
    message.verifiedAt = object.verifiedAt ?? 0;
    return message;
  },
};

function createBasePendingAttribute(): PendingAttribute {
  return { name: "", attributeType: 0 };
}

export const PendingAttribute = {
  encode(message: PendingAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.attributeType !== 0) {
      writer.uint32(16).int32(message.attributeType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.attributeType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PendingAttribute {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      attributeType: isSet(object.attributeType) ? attributeTypeFromJSON(object.attributeType) : 0,
    };
  },

  toJSON(message: PendingAttribute): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.attributeType !== 0) {
      obj.attributeType = attributeTypeToJSON(message.attributeType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingAttribute>, I>>(base?: I): PendingAttribute {
    return PendingAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PendingAttribute>, I>>(object: I): PendingAttribute {
    const message = createBasePendingAttribute();
    message.name = object.name ?? "";
    message.attributeType = object.attributeType ?? 0;
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
