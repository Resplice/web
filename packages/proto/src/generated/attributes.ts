/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Address,
  AttributeType,
  attributeTypeFromJSON,
  attributeTypeToJSON,
  Coordinate,
  Credential,
  DateMessage,
  Email,
  Link,
  Phone,
  Social,
  Text,
} from "./attributes/types";

export interface AddAttribute {
  name: string;
  type: AttributeType;
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

export interface AttributeAdded {
  id: number;
  name: string;
  type: AttributeType;
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

export interface EditAttributeName {
  id: number;
  name: string;
}

export interface AttributeNameEdited {
  id: number;
  name: string;
}

export interface EditAttributeValue {
  id: number;
  type: AttributeType;
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

export interface AttributeValueEdited {
  id: number;
  type: AttributeType;
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

function createBaseAddAttribute(): AddAttribute {
  return { name: "", type: 0, value: undefined };
}

export const AddAttribute = {
  encode(message: AddAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    switch (message.value?.$case) {
      case "address":
        Address.encode(message.value.address, writer.uint32(26).fork()).ldelim();
        break;
      case "coordinate":
        Coordinate.encode(message.value.coordinate, writer.uint32(34).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(42).fork()).ldelim();
        break;
      case "date":
        DateMessage.encode(message.value.date, writer.uint32(50).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(58).fork()).ldelim();
        break;
      case "link":
        Link.encode(message.value.link, writer.uint32(66).fork()).ldelim();
        break;
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(74).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(82).fork()).ldelim();
        break;
      case "text":
        Text.encode(message.value.text, writer.uint32(90).fork()).ldelim();
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
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
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

          message.value = { $case: "coordinate", coordinate: Coordinate.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "date", date: DateMessage.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "link", link: Link.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 11:
          if (tag !== 90) {
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
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
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
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type));
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
    message.type = object.type ?? 0;
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

function createBaseAttributeAdded(): AttributeAdded {
  return { id: 0, name: "", type: 0, value: undefined };
}

export const AttributeAdded = {
  encode(message: AttributeAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    switch (message.value?.$case) {
      case "address":
        Address.encode(message.value.address, writer.uint32(34).fork()).ldelim();
        break;
      case "coordinate":
        Coordinate.encode(message.value.coordinate, writer.uint32(42).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(50).fork()).ldelim();
        break;
      case "date":
        DateMessage.encode(message.value.date, writer.uint32(58).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(66).fork()).ldelim();
        break;
      case "link":
        Link.encode(message.value.link, writer.uint32(74).fork()).ldelim();
        break;
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(82).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(90).fork()).ldelim();
        break;
      case "text":
        Text.encode(message.value.text, writer.uint32(98).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeAdded();
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
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
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

          message.value = { $case: "coordinate", coordinate: Coordinate.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "date", date: DateMessage.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.value = { $case: "link", link: Link.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 12:
          if (tag !== 98) {
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

  fromJSON(object: any): AttributeAdded {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
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

  toJSON(message: AttributeAdded): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type));
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

  create<I extends Exact<DeepPartial<AttributeAdded>, I>>(base?: I): AttributeAdded {
    return AttributeAdded.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeAdded>, I>>(object: I): AttributeAdded {
    const message = createBaseAttributeAdded();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
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

function createBaseEditAttributeValue(): EditAttributeValue {
  return { id: 0, type: 0, value: undefined };
}

export const EditAttributeValue = {
  encode(message: EditAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    switch (message.value?.$case) {
      case "address":
        Address.encode(message.value.address, writer.uint32(26).fork()).ldelim();
        break;
      case "coordinate":
        Coordinate.encode(message.value.coordinate, writer.uint32(34).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(42).fork()).ldelim();
        break;
      case "date":
        DateMessage.encode(message.value.date, writer.uint32(50).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(58).fork()).ldelim();
        break;
      case "link":
        Link.encode(message.value.link, writer.uint32(66).fork()).ldelim();
        break;
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(74).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(82).fork()).ldelim();
        break;
      case "text":
        Text.encode(message.value.text, writer.uint32(90).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditAttributeValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditAttributeValue();
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

          message.type = reader.int32() as any;
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

          message.value = { $case: "coordinate", coordinate: Coordinate.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "date", date: DateMessage.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "link", link: Link.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): EditAttributeValue {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
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

  toJSON(message: EditAttributeValue): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type));
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

  create<I extends Exact<DeepPartial<EditAttributeValue>, I>>(base?: I): EditAttributeValue {
    return EditAttributeValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditAttributeValue>, I>>(object: I): EditAttributeValue {
    const message = createBaseEditAttributeValue();
    message.id = object.id ?? 0;
    message.type = object.type ?? 0;
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

function createBaseAttributeValueEdited(): AttributeValueEdited {
  return { id: 0, type: 0, value: undefined };
}

export const AttributeValueEdited = {
  encode(message: AttributeValueEdited, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    switch (message.value?.$case) {
      case "address":
        Address.encode(message.value.address, writer.uint32(26).fork()).ldelim();
        break;
      case "coordinate":
        Coordinate.encode(message.value.coordinate, writer.uint32(34).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(42).fork()).ldelim();
        break;
      case "date":
        DateMessage.encode(message.value.date, writer.uint32(50).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(58).fork()).ldelim();
        break;
      case "link":
        Link.encode(message.value.link, writer.uint32(66).fork()).ldelim();
        break;
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(74).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(82).fork()).ldelim();
        break;
      case "text":
        Text.encode(message.value.text, writer.uint32(90).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeValueEdited {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeValueEdited();
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

          message.type = reader.int32() as any;
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

          message.value = { $case: "coordinate", coordinate: Coordinate.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "credential", credential: Credential.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.value = { $case: "date", date: DateMessage.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.value = { $case: "email", email: Email.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "link", link: Link.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): AttributeValueEdited {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
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

  toJSON(message: AttributeValueEdited): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.type !== undefined && (obj.type = attributeTypeToJSON(message.type));
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

  create<I extends Exact<DeepPartial<AttributeValueEdited>, I>>(base?: I): AttributeValueEdited {
    return AttributeValueEdited.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeValueEdited>, I>>(object: I): AttributeValueEdited {
    const message = createBaseAttributeValueEdited();
    message.id = object.id ?? 0;
    message.type = object.type ?? 0;
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
