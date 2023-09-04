/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address, Coordinate, Credential, DateMessage, Email, Link, Phone, Social, Text } from "./types";

export interface AttributeAdded {
  id: number;
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

export interface AttributeNameChanged {
  id: number;
  name: string;
}

export interface AttributeValueChanged {
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

export interface AttributeSorted {
  id: number;
  sortIndex: number;
}

export interface AttributeVerifyCodeSent {
  expiry: number;
}

export interface AttributeVerified {
  id: number;
  verifiedAt: number;
}

export interface AttributeRemoved {
  id: number;
}

function createBaseAttributeAdded(): AttributeAdded {
  return { id: 0, name: "", value: undefined };
}

export const AttributeAdded = {
  encode(message: AttributeAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
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

  fromJSON(object: any): AttributeAdded {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
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

  toJSON(message: AttributeAdded): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
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

  create<I extends Exact<DeepPartial<AttributeAdded>, I>>(base?: I): AttributeAdded {
    return AttributeAdded.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeAdded>, I>>(object: I): AttributeAdded {
    const message = createBaseAttributeAdded();
    message.id = object.id ?? 0;
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

function createBaseAttributeNameChanged(): AttributeNameChanged {
  return { id: 0, name: "" };
}

export const AttributeNameChanged = {
  encode(message: AttributeNameChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeNameChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeNameChanged();
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

  fromJSON(object: any): AttributeNameChanged {
    return { id: isSet(object.id) ? Number(object.id) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: AttributeNameChanged): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeNameChanged>, I>>(base?: I): AttributeNameChanged {
    return AttributeNameChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeNameChanged>, I>>(object: I): AttributeNameChanged {
    const message = createBaseAttributeNameChanged();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAttributeValueChanged(): AttributeValueChanged {
  return { id: 0, value: undefined };
}

export const AttributeValueChanged = {
  encode(message: AttributeValueChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeValueChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeValueChanged();
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

  fromJSON(object: any): AttributeValueChanged {
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

  toJSON(message: AttributeValueChanged): unknown {
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

  create<I extends Exact<DeepPartial<AttributeValueChanged>, I>>(base?: I): AttributeValueChanged {
    return AttributeValueChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeValueChanged>, I>>(object: I): AttributeValueChanged {
    const message = createBaseAttributeValueChanged();
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

function createBaseAttributeVerifyCodeSent(): AttributeVerifyCodeSent {
  return { expiry: 0 };
}

export const AttributeVerifyCodeSent = {
  encode(message: AttributeVerifyCodeSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expiry !== 0) {
      writer.uint32(8).uint32(message.expiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeVerifyCodeSent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeVerifyCodeSent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.expiry = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeVerifyCodeSent {
    return { expiry: isSet(object.expiry) ? Number(object.expiry) : 0 };
  },

  toJSON(message: AttributeVerifyCodeSent): unknown {
    const obj: any = {};
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry));
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeVerifyCodeSent>, I>>(base?: I): AttributeVerifyCodeSent {
    return AttributeVerifyCodeSent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeVerifyCodeSent>, I>>(object: I): AttributeVerifyCodeSent {
    const message = createBaseAttributeVerifyCodeSent();
    message.expiry = object.expiry ?? 0;
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

function createBaseAttributeRemoved(): AttributeRemoved {
  return { id: 0 };
}

export const AttributeRemoved = {
  encode(message: AttributeRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeRemoved();
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

  fromJSON(object: any): AttributeRemoved {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: AttributeRemoved): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeRemoved>, I>>(base?: I): AttributeRemoved {
    return AttributeRemoved.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttributeRemoved>, I>>(object: I): AttributeRemoved {
    const message = createBaseAttributeRemoved();
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
