/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address, Coordinate, Credential, DateMessage, Email, Link, Phone, Social, Text } from "./types";

export interface AddAttribute {
  name: string;
  value?:
    | { $case: "address"; address: Address }
    | { $case: "coordinate"; coordinate: Coordinate }
    | { $case: "credential"; credential: Credential }
    | { $case: "date"; date: DateMessage }
    | { $case: "email"; email: Email }
    | { $case: "link"; link: Link }
    | { $case: "phone"; phone: Phone }
    | { $case: "social"; social: Social }
    | { $case: "text"; text: Text };
}

export interface ChangeAttributeName {
  id: number;
  name: string;
}

export interface ChangeAttributeValue {
  id: number;
  value?:
    | { $case: "address"; address: Address }
    | { $case: "coordinate"; coordinate: Coordinate }
    | { $case: "credential"; credential: Credential }
    | { $case: "date"; date: DateMessage }
    | { $case: "email"; email: Email }
    | { $case: "link"; link: Link }
    | { $case: "phone"; phone: Phone }
    | { $case: "social"; social: Social }
    | { $case: "text"; text: Text };
}

export interface SortAttribute {
  id: number;
  sortIndex: number;
}

export interface SendAttributeVerification {
  id: number;
}

export interface VerifyAttribute {
  id: number;
  verifyCode: number;
}

export interface RemoveAttribute {
  id: number;
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
      case "address":
        Address.encode(message.value.address, writer.uint32(18).fork()).ldelim();
        break;
      case "coordinate":
        Coordinate.encode(message.value.coordinate, writer.uint32(26).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(34).fork()).ldelim();
        break;
      case "date":
        DateMessage.encode(message.value.date, writer.uint32(42).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(50).fork()).ldelim();
        break;
      case "link":
        Link.encode(message.value.link, writer.uint32(58).fork()).ldelim();
        break;
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(66).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(74).fork()).ldelim();
        break;
      case "text":
        Text.encode(message.value.text, writer.uint32(82).fork()).ldelim();
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

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = { $case: "coordinate", coordinate: Coordinate.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "date", date: DateMessage.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "link", link: Link.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.value = { $case: "text", text: Text.decode(reader, reader.uint32()) };
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
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.address)
        ? { $case: "address", address: Address.fromJSON(object.address) }
        : isSet(object.coordinate)
        ? { $case: "coordinate", coordinate: Coordinate.fromJSON(object.coordinate) }
        : isSet(object.credential)
        ? { $case: "credential", credential: Credential.fromJSON(object.credential) }
        : isSet(object.date)
        ? { $case: "date", date: DateMessage.fromJSON(object.date) }
        : isSet(object.email)
        ? { $case: "email", email: Email.fromJSON(object.email) }
        : isSet(object.link)
        ? { $case: "link", link: Link.fromJSON(object.link) }
        : isSet(object.phone)
        ? { $case: "phone", phone: Phone.fromJSON(object.phone) }
        : isSet(object.social)
        ? { $case: "social", social: Social.fromJSON(object.social) }
        : isSet(object.text)
        ? { $case: "text", text: Text.fromJSON(object.text) }
        : undefined,
    };
  },

  toJSON(message: AddAttribute): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value?.$case === "address" &&
      (obj.address = message.value?.address ? Address.toJSON(message.value?.address) : undefined);
    message.value?.$case === "coordinate" &&
      (obj.coordinate = message.value?.coordinate ? Coordinate.toJSON(message.value?.coordinate) : undefined);
    message.value?.$case === "credential" &&
      (obj.credential = message.value?.credential ? Credential.toJSON(message.value?.credential) : undefined);
    message.value?.$case === "date" &&
      (obj.date = message.value?.date ? DateMessage.toJSON(message.value?.date) : undefined);
    message.value?.$case === "email" &&
      (obj.email = message.value?.email ? Email.toJSON(message.value?.email) : undefined);
    message.value?.$case === "link" && (obj.link = message.value?.link ? Link.toJSON(message.value?.link) : undefined);
    message.value?.$case === "phone" &&
      (obj.phone = message.value?.phone ? Phone.toJSON(message.value?.phone) : undefined);
    message.value?.$case === "social" &&
      (obj.social = message.value?.social ? Social.toJSON(message.value?.social) : undefined);
    message.value?.$case === "text" && (obj.text = message.value?.text ? Text.toJSON(message.value?.text) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddAttribute>, I>>(base?: I): AddAttribute {
    return AddAttribute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddAttribute>, I>>(object: I): AddAttribute {
    const message = createBaseAddAttribute();
    message.name = object.name ?? "";
    if (object.value?.$case === "address" && object.value?.address !== undefined && object.value?.address !== null) {
      message.value = { $case: "address", address: Address.fromPartial(object.value.address) };
    }
    if (
      object.value?.$case === "coordinate" &&
      object.value?.coordinate !== undefined &&
      object.value?.coordinate !== null
    ) {
      message.value = { $case: "coordinate", coordinate: Coordinate.fromPartial(object.value.coordinate) };
    }
    if (
      object.value?.$case === "credential" &&
      object.value?.credential !== undefined &&
      object.value?.credential !== null
    ) {
      message.value = { $case: "credential", credential: Credential.fromPartial(object.value.credential) };
    }
    if (object.value?.$case === "date" && object.value?.date !== undefined && object.value?.date !== null) {
      message.value = { $case: "date", date: DateMessage.fromPartial(object.value.date) };
    }
    if (object.value?.$case === "email" && object.value?.email !== undefined && object.value?.email !== null) {
      message.value = { $case: "email", email: Email.fromPartial(object.value.email) };
    }
    if (object.value?.$case === "link" && object.value?.link !== undefined && object.value?.link !== null) {
      message.value = { $case: "link", link: Link.fromPartial(object.value.link) };
    }
    if (object.value?.$case === "phone" && object.value?.phone !== undefined && object.value?.phone !== null) {
      message.value = { $case: "phone", phone: Phone.fromPartial(object.value.phone) };
    }
    if (object.value?.$case === "social" && object.value?.social !== undefined && object.value?.social !== null) {
      message.value = { $case: "social", social: Social.fromPartial(object.value.social) };
    }
    if (object.value?.$case === "text" && object.value?.text !== undefined && object.value?.text !== null) {
      message.value = { $case: "text", text: Text.fromPartial(object.value.text) };
    }
    return message;
  },
};

function createBaseChangeAttributeName(): ChangeAttributeName {
  return { id: 0, name: "" };
}

export const ChangeAttributeName = {
  encode(message: ChangeAttributeName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeAttributeName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeAttributeName();
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

  fromJSON(object: any): ChangeAttributeName {
    return { id: isSet(object.id) ? Number(object.id) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ChangeAttributeName): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeAttributeName>, I>>(base?: I): ChangeAttributeName {
    return ChangeAttributeName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChangeAttributeName>, I>>(object: I): ChangeAttributeName {
    const message = createBaseChangeAttributeName();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseChangeAttributeValue(): ChangeAttributeValue {
  return { id: 0, value: undefined };
}

export const ChangeAttributeValue = {
  encode(message: ChangeAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    switch (message.value?.$case) {
      case "address":
        Address.encode(message.value.address, writer.uint32(18).fork()).ldelim();
        break;
      case "coordinate":
        Coordinate.encode(message.value.coordinate, writer.uint32(26).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(34).fork()).ldelim();
        break;
      case "date":
        DateMessage.encode(message.value.date, writer.uint32(42).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(50).fork()).ldelim();
        break;
      case "link":
        Link.encode(message.value.link, writer.uint32(58).fork()).ldelim();
        break;
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(66).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(74).fork()).ldelim();
        break;
      case "text":
        Text.encode(message.value.text, writer.uint32(82).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeAttributeValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeAttributeValue();
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

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = { $case: "coordinate", coordinate: Coordinate.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "date", date: DateMessage.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "link", link: Link.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.value = { $case: "text", text: Text.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangeAttributeValue {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      value: isSet(object.address)
        ? { $case: "address", address: Address.fromJSON(object.address) }
        : isSet(object.coordinate)
        ? { $case: "coordinate", coordinate: Coordinate.fromJSON(object.coordinate) }
        : isSet(object.credential)
        ? { $case: "credential", credential: Credential.fromJSON(object.credential) }
        : isSet(object.date)
        ? { $case: "date", date: DateMessage.fromJSON(object.date) }
        : isSet(object.email)
        ? { $case: "email", email: Email.fromJSON(object.email) }
        : isSet(object.link)
        ? { $case: "link", link: Link.fromJSON(object.link) }
        : isSet(object.phone)
        ? { $case: "phone", phone: Phone.fromJSON(object.phone) }
        : isSet(object.social)
        ? { $case: "social", social: Social.fromJSON(object.social) }
        : isSet(object.text)
        ? { $case: "text", text: Text.fromJSON(object.text) }
        : undefined,
    };
  },

  toJSON(message: ChangeAttributeValue): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.value?.$case === "address" &&
      (obj.address = message.value?.address ? Address.toJSON(message.value?.address) : undefined);
    message.value?.$case === "coordinate" &&
      (obj.coordinate = message.value?.coordinate ? Coordinate.toJSON(message.value?.coordinate) : undefined);
    message.value?.$case === "credential" &&
      (obj.credential = message.value?.credential ? Credential.toJSON(message.value?.credential) : undefined);
    message.value?.$case === "date" &&
      (obj.date = message.value?.date ? DateMessage.toJSON(message.value?.date) : undefined);
    message.value?.$case === "email" &&
      (obj.email = message.value?.email ? Email.toJSON(message.value?.email) : undefined);
    message.value?.$case === "link" && (obj.link = message.value?.link ? Link.toJSON(message.value?.link) : undefined);
    message.value?.$case === "phone" &&
      (obj.phone = message.value?.phone ? Phone.toJSON(message.value?.phone) : undefined);
    message.value?.$case === "social" &&
      (obj.social = message.value?.social ? Social.toJSON(message.value?.social) : undefined);
    message.value?.$case === "text" && (obj.text = message.value?.text ? Text.toJSON(message.value?.text) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeAttributeValue>, I>>(base?: I): ChangeAttributeValue {
    return ChangeAttributeValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChangeAttributeValue>, I>>(object: I): ChangeAttributeValue {
    const message = createBaseChangeAttributeValue();
    message.id = object.id ?? 0;
    if (object.value?.$case === "address" && object.value?.address !== undefined && object.value?.address !== null) {
      message.value = { $case: "address", address: Address.fromPartial(object.value.address) };
    }
    if (
      object.value?.$case === "coordinate" &&
      object.value?.coordinate !== undefined &&
      object.value?.coordinate !== null
    ) {
      message.value = { $case: "coordinate", coordinate: Coordinate.fromPartial(object.value.coordinate) };
    }
    if (
      object.value?.$case === "credential" &&
      object.value?.credential !== undefined &&
      object.value?.credential !== null
    ) {
      message.value = { $case: "credential", credential: Credential.fromPartial(object.value.credential) };
    }
    if (object.value?.$case === "date" && object.value?.date !== undefined && object.value?.date !== null) {
      message.value = { $case: "date", date: DateMessage.fromPartial(object.value.date) };
    }
    if (object.value?.$case === "email" && object.value?.email !== undefined && object.value?.email !== null) {
      message.value = { $case: "email", email: Email.fromPartial(object.value.email) };
    }
    if (object.value?.$case === "link" && object.value?.link !== undefined && object.value?.link !== null) {
      message.value = { $case: "link", link: Link.fromPartial(object.value.link) };
    }
    if (object.value?.$case === "phone" && object.value?.phone !== undefined && object.value?.phone !== null) {
      message.value = { $case: "phone", phone: Phone.fromPartial(object.value.phone) };
    }
    if (object.value?.$case === "social" && object.value?.social !== undefined && object.value?.social !== null) {
      message.value = { $case: "social", social: Social.fromPartial(object.value.social) };
    }
    if (object.value?.$case === "text" && object.value?.text !== undefined && object.value?.text !== null) {
      message.value = { $case: "text", text: Text.fromPartial(object.value.text) };
    }
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
  return { id: 0, verifyCode: 0 };
}

export const VerifyAttribute = {
  encode(message: VerifyAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.verifyCode !== 0) {
      writer.uint32(16).uint32(message.verifyCode);
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

  fromJSON(object: any): VerifyAttribute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      verifyCode: isSet(object.verifyCode) ? Number(object.verifyCode) : 0,
    };
  },

  toJSON(message: VerifyAttribute): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.verifyCode !== undefined && (obj.verifyCode = Math.round(message.verifyCode));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerifyAttribute>, I>>(base?: I): VerifyAttribute {
    return VerifyAttribute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerifyAttribute>, I>>(object: I): VerifyAttribute {
    const message = createBaseVerifyAttribute();
    message.id = object.id ?? 0;
    message.verifyCode = object.verifyCode ?? 0;
    return message;
  },
};

function createBaseRemoveAttribute(): RemoveAttribute {
  return { id: 0 };
}

export const RemoveAttribute = {
  encode(message: RemoveAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
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

  fromJSON(object: any): RemoveAttribute {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: RemoveAttribute): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveAttribute>, I>>(base?: I): RemoveAttribute {
    return RemoveAttribute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveAttribute>, I>>(object: I): RemoveAttribute {
    const message = createBaseRemoveAttribute();
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
