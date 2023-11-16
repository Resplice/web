/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address, Credential, Email, Phone, Social } from "./types";

export interface AddAttribute {
  name: string;
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

export interface ChangeAttribute {
  attributeId: number;
  name: string;
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

export interface RemoveAttribute {
  attributeId: number;
}

export interface SendValueVerification {
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

export interface VerifyAttributeValue {
  /** Hash of value */
  valueId: string;
  verifyCode: number;
}

function createBaseAddAttribute(): AddAttribute {
  return { name: "", value: undefined };
}

export const AddAttribute = {
  encode(message: AddAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    switch (message.value?.$case) {
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(18).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(26).fork()).ldelim();
        break;
      case "address":
        Address.encode(message.value.address, writer.uint32(34).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(42).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(50).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAttribute();
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
          if (tag !== 18) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): AddAttribute {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
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

  toJSON(message: AddAttribute): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
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

  create<I extends Exact<DeepPartial<AddAttribute>, I>>(base?: I): AddAttribute {
    return AddAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddAttribute>, I>>(object: I): AddAttribute {
    const message = createBaseAddAttribute();
    message.name = object.name ?? "";
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

function createBaseChangeAttribute(): ChangeAttribute {
  return { attributeId: 0, name: "", value: undefined };
}

export const ChangeAttribute = {
  encode(message: ChangeAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    switch (message.value?.$case) {
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(26).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(34).fork()).ldelim();
        break;
      case "address":
        Address.encode(message.value.address, writer.uint32(42).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(50).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(58).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.attributeId = reader.uint32();
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

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): ChangeAttribute {
    return {
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
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

  toJSON(message: ChangeAttribute): unknown {
    const obj: any = {};
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    if (message.name !== "") {
      obj.name = message.name;
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

  create<I extends Exact<DeepPartial<ChangeAttribute>, I>>(base?: I): ChangeAttribute {
    return ChangeAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeAttribute>, I>>(object: I): ChangeAttribute {
    const message = createBaseChangeAttribute();
    message.attributeId = object.attributeId ?? 0;
    message.name = object.name ?? "";
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

function createBaseRemoveAttribute(): RemoveAttribute {
  return { attributeId: 0 };
}

export const RemoveAttribute = {
  encode(message: RemoveAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributeId !== 0) {
      writer.uint32(8).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.attributeId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveAttribute {
    return { attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0 };
  },

  toJSON(message: RemoveAttribute): unknown {
    const obj: any = {};
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveAttribute>, I>>(base?: I): RemoveAttribute {
    return RemoveAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveAttribute>, I>>(object: I): RemoveAttribute {
    const message = createBaseRemoveAttribute();
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseSendValueVerification(): SendValueVerification {
  return { value: undefined };
}

export const SendValueVerification = {
  encode(message: SendValueVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.value?.$case) {
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(10).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(18).fork()).ldelim();
        break;
      case "address":
        Address.encode(message.value.address, writer.uint32(26).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(34).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(42).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendValueVerification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendValueVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): SendValueVerification {
    return {
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

  toJSON(message: SendValueVerification): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<SendValueVerification>, I>>(base?: I): SendValueVerification {
    return SendValueVerification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendValueVerification>, I>>(object: I): SendValueVerification {
    const message = createBaseSendValueVerification();
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

function createBaseVerifyAttributeValue(): VerifyAttributeValue {
  return { valueId: "", verifyCode: 0 };
}

export const VerifyAttributeValue = {
  encode(message: VerifyAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valueId !== "") {
      writer.uint32(10).string(message.valueId);
    }
    if (message.verifyCode !== 0) {
      writer.uint32(16).uint32(message.verifyCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyAttributeValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyAttributeValue();
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

  fromJSON(object: any): VerifyAttributeValue {
    return {
      valueId: isSet(object.valueId) ? globalThis.String(object.valueId) : "",
      verifyCode: isSet(object.verifyCode) ? globalThis.Number(object.verifyCode) : 0,
    };
  },

  toJSON(message: VerifyAttributeValue): unknown {
    const obj: any = {};
    if (message.valueId !== "") {
      obj.valueId = message.valueId;
    }
    if (message.verifyCode !== 0) {
      obj.verifyCode = Math.round(message.verifyCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyAttributeValue>, I>>(base?: I): VerifyAttributeValue {
    return VerifyAttributeValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerifyAttributeValue>, I>>(object: I): VerifyAttributeValue {
    const message = createBaseVerifyAttributeValue();
    message.valueId = object.valueId ?? "";
    message.verifyCode = object.verifyCode ?? 0;
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
