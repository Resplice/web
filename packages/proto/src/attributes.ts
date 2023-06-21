/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address } from "./attributes/types";

export interface AddAddress {
  name: string;
  address: Address | undefined;
}

export interface AddressAdded {
  id: number;
  name: string;
  address: Address | undefined;
}

export interface EditAttributeName {
  id: number;
  name: string;
}

export interface AttributeNameEdited {
  id: number;
  name: string;
}

export interface SortAttribute {
  id: number;
  sortIndex: number;
}

export interface AttributeSorted {
  id: number;
  sortIndex: number;
}

export interface SendAttributeVerification {
  id: number;
}

export interface VerifyAttribute {
  id: number;
  verificationCode: number;
}

export interface AttributeVerified {
  id: number;
  verifiedAt: number;
}

export interface DeleteAttribute {
  id: number;
}

export interface AttributeDeleted {
  id: number;
}

function createBaseAddAddress(): AddAddress {
  return { name: "", address: undefined };
}

export const AddAddress = {
  encode(message: AddAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAddress();
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

          message.address = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddAddress {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
    };
  },

  toJSON(message: AddAddress): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddAddress>, I>>(base?: I): AddAddress {
    return AddAddress.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddAddress>, I>>(object: I): AddAddress {
    const message = createBaseAddAddress();
    message.name = object.name ?? "";
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    return message;
  },
};

function createBaseAddressAdded(): AddressAdded {
  return { id: 0, name: "", address: undefined };
}

export const AddressAdded = {
  encode(message: AddressAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressAdded();
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

          message.address = Address.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressAdded {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
    };
  },

  toJSON(message: AddressAdded): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddressAdded>, I>>(base?: I): AddressAdded {
    return AddressAdded.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddressAdded>, I>>(object: I): AddressAdded {
    const message = createBaseAddressAdded();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    return message;
  },
};

function createBaseEditAttributeName(): EditAttributeName {
  return { id: 0, name: "" };
}

export const EditAttributeName = {
  encode(message: EditAttributeName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAttributeName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditAttributeName();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditAttributeName {
    return { id: isSet(object.id) ? Number(object.id) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: EditAttributeName): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditAttributeName>, I>>(base?: I): EditAttributeName {
    return EditAttributeName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditAttributeName>, I>>(object: I): EditAttributeName {
    const message = createBaseEditAttributeName();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAttributeNameEdited(): AttributeNameEdited {
  return { id: 0, name: "" };
}

export const AttributeNameEdited = {
  encode(message: AttributeNameEdited, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeNameEdited {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeNameEdited();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeNameEdited {
    return { id: isSet(object.id) ? Number(object.id) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: AttributeNameEdited): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeNameEdited>, I>>(base?: I): AttributeNameEdited {
    return AttributeNameEdited.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeNameEdited>, I>>(object: I): AttributeNameEdited {
    const message = createBaseAttributeNameEdited();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSortAttribute(): SortAttribute {
  return { id: 0, sortIndex: 0 };
}

export const SortAttribute = {
  encode(message: SortAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.sortIndex !== 0) {
      writer.uint32(16).uint32(message.sortIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SortAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSortAttribute();
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
          if (tag !== 16) {
            break;
          }

          message.sortIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SortAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      sortIndex: isSet(object.sortIndex) ? Number(object.sortIndex) : 0,
    };
  },

  toJSON(message: SortAttribute): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.sortIndex !== undefined && (obj.sortIndex = Math.round(message.sortIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<SortAttribute>, I>>(base?: I): SortAttribute {
    return SortAttribute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SortAttribute>, I>>(object: I): SortAttribute {
    const message = createBaseSortAttribute();
    message.id = object.id ?? 0;
    message.sortIndex = object.sortIndex ?? 0;
    return message;
  },
};

function createBaseAttributeSorted(): AttributeSorted {
  return { id: 0, sortIndex: 0 };
}

export const AttributeSorted = {
  encode(message: AttributeSorted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.sortIndex !== 0) {
      writer.uint32(16).uint32(message.sortIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeSorted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeSorted();
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
          if (tag !== 16) {
            break;
          }

          message.sortIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeSorted {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      sortIndex: isSet(object.sortIndex) ? Number(object.sortIndex) : 0,
    };
  },

  toJSON(message: AttributeSorted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.sortIndex !== undefined && (obj.sortIndex = Math.round(message.sortIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeSorted>, I>>(base?: I): AttributeSorted {
    return AttributeSorted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeSorted>, I>>(object: I): AttributeSorted {
    const message = createBaseAttributeSorted();
    message.id = object.id ?? 0;
    message.sortIndex = object.sortIndex ?? 0;
    return message;
  },
};

function createBaseSendAttributeVerification(): SendAttributeVerification {
  return { id: 0 };
}

export const SendAttributeVerification = {
  encode(message: SendAttributeVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendAttributeVerification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAttributeVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendAttributeVerification {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: SendAttributeVerification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<SendAttributeVerification>, I>>(base?: I): SendAttributeVerification {
    return SendAttributeVerification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SendAttributeVerification>, I>>(object: I): SendAttributeVerification {
    const message = createBaseSendAttributeVerification();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseVerifyAttribute(): VerifyAttribute {
  return { id: 0, verificationCode: 0 };
}

export const VerifyAttribute = {
  encode(message: VerifyAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.verificationCode !== 0) {
      writer.uint32(16).uint32(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyAttribute();
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
          if (tag !== 16) {
            break;
          }

          message.verificationCode = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      verificationCode: isSet(object.verificationCode) ? Number(object.verificationCode) : 0,
    };
  },

  toJSON(message: VerifyAttribute): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.verificationCode !== undefined && (obj.verificationCode = Math.round(message.verificationCode));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyAttribute>, I>>(base?: I): VerifyAttribute {
    return VerifyAttribute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyAttribute>, I>>(object: I): VerifyAttribute {
    const message = createBaseVerifyAttribute();
    message.id = object.id ?? 0;
    message.verificationCode = object.verificationCode ?? 0;
    return message;
  },
};

function createBaseAttributeVerified(): AttributeVerified {
  return { id: 0, verifiedAt: 0 };
}

export const AttributeVerified = {
  encode(message: AttributeVerified, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.verifiedAt !== 0) {
      writer.uint32(16).uint32(message.verifiedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeVerified {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeVerified();
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

  fromJSON(object: any): AttributeVerified {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      verifiedAt: isSet(object.verifiedAt) ? Number(object.verifiedAt) : 0,
    };
  },

  toJSON(message: AttributeVerified): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.verifiedAt !== undefined && (obj.verifiedAt = Math.round(message.verifiedAt));
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeVerified>, I>>(base?: I): AttributeVerified {
    return AttributeVerified.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeVerified>, I>>(object: I): AttributeVerified {
    const message = createBaseAttributeVerified();
    message.id = object.id ?? 0;
    message.verifiedAt = object.verifiedAt ?? 0;
    return message;
  },
};

function createBaseDeleteAttribute(): DeleteAttribute {
  return { id: 0 };
}

export const DeleteAttribute = {
  encode(message: DeleteAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAttribute {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: DeleteAttribute): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAttribute>, I>>(base?: I): DeleteAttribute {
    return DeleteAttribute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAttribute>, I>>(object: I): DeleteAttribute {
    const message = createBaseDeleteAttribute();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAttributeDeleted(): AttributeDeleted {
  return { id: 0 };
}

export const AttributeDeleted = {
  encode(message: AttributeDeleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeDeleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeDeleted {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: AttributeDeleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeDeleted>, I>>(base?: I): AttributeDeleted {
    return AttributeDeleted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeDeleted>, I>>(object: I): AttributeDeleted {
    const message = createBaseAttributeDeleted();
    message.id = object.id ?? 0;
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
