/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address, Credential, Email, Phone, Social } from "../attribute/types";

export interface MomentCreated {
  momentId: number;
  title: string;
  description: string;
  start: number;
  duration: number;
  createdAt: number;
}

export interface MomentDeleted {
  momentId: number;
  deletedAt: number;
}

export interface MomentInfoChanged {
  momentId: number;
  title: string;
  description: string;
}

export interface MomentStartChanged {
  momentId: number;
  start: number;
}

export interface MomentDurationChanged {
  momentId: number;
  duration: number;
}

export interface MomentAdded {
  momentId: number;
  title: string;
  description: string;
  start: number;
  duration: number;
}

export interface MomentRemoved {
  momentId: number;
}

export interface MomentAttributeAdded {
  momentId: number;
  attributeId: number;
  label: string;
  /** Hash of value */
  valueId: string;
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

export interface MomentAttributeRemoved {
  momentId: number;
  attributeId: number;
}

function createBaseMomentCreated(): MomentCreated {
  return { momentId: 0, title: "", description: "", start: 0, duration: 0, createdAt: 0 };
}

export const MomentCreated = {
  encode(message: MomentCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.start !== 0) {
      writer.uint32(37).sfixed32(message.start);
    }
    if (message.duration !== 0) {
      writer.uint32(40).uint32(message.duration);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).uint32(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.start = reader.sfixed32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.createdAt = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MomentCreated {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
    };
  },

  toJSON(message: MomentCreated): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentCreated>, I>>(base?: I): MomentCreated {
    return MomentCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentCreated>, I>>(object: I): MomentCreated {
    const message = createBaseMomentCreated();
    message.momentId = object.momentId ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.start = object.start ?? 0;
    message.duration = object.duration ?? 0;
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

function createBaseMomentDeleted(): MomentDeleted {
  return { momentId: 0, deletedAt: 0 };
}

export const MomentDeleted = {
  encode(message: MomentDeleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.deletedAt !== 0) {
      writer.uint32(16).uint32(message.deletedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentDeleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.deletedAt = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MomentDeleted {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      deletedAt: isSet(object.deletedAt) ? globalThis.Number(object.deletedAt) : 0,
    };
  },

  toJSON(message: MomentDeleted): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.deletedAt !== 0) {
      obj.deletedAt = Math.round(message.deletedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentDeleted>, I>>(base?: I): MomentDeleted {
    return MomentDeleted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentDeleted>, I>>(object: I): MomentDeleted {
    const message = createBaseMomentDeleted();
    message.momentId = object.momentId ?? 0;
    message.deletedAt = object.deletedAt ?? 0;
    return message;
  },
};

function createBaseMomentInfoChanged(): MomentInfoChanged {
  return { momentId: 0, title: "", description: "" };
}

export const MomentInfoChanged = {
  encode(message: MomentInfoChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentInfoChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentInfoChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MomentInfoChanged {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MomentInfoChanged): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentInfoChanged>, I>>(base?: I): MomentInfoChanged {
    return MomentInfoChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentInfoChanged>, I>>(object: I): MomentInfoChanged {
    const message = createBaseMomentInfoChanged();
    message.momentId = object.momentId ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMomentStartChanged(): MomentStartChanged {
  return { momentId: 0, start: 0 };
}

export const MomentStartChanged = {
  encode(message: MomentStartChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.start !== 0) {
      writer.uint32(21).sfixed32(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentStartChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentStartChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.start = reader.sfixed32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MomentStartChanged {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
    };
  },

  toJSON(message: MomentStartChanged): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentStartChanged>, I>>(base?: I): MomentStartChanged {
    return MomentStartChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentStartChanged>, I>>(object: I): MomentStartChanged {
    const message = createBaseMomentStartChanged();
    message.momentId = object.momentId ?? 0;
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseMomentDurationChanged(): MomentDurationChanged {
  return { momentId: 0, duration: 0 };
}

export const MomentDurationChanged = {
  encode(message: MomentDurationChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentDurationChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentDurationChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.duration = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MomentDurationChanged {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: MomentDurationChanged): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentDurationChanged>, I>>(base?: I): MomentDurationChanged {
    return MomentDurationChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentDurationChanged>, I>>(object: I): MomentDurationChanged {
    const message = createBaseMomentDurationChanged();
    message.momentId = object.momentId ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseMomentAdded(): MomentAdded {
  return { momentId: 0, title: "", description: "", start: 0, duration: 0 };
}

export const MomentAdded = {
  encode(message: MomentAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.start !== 0) {
      writer.uint32(37).sfixed32(message.start);
    }
    if (message.duration !== 0) {
      writer.uint32(40).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.start = reader.sfixed32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.duration = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MomentAdded {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: MomentAdded): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentAdded>, I>>(base?: I): MomentAdded {
    return MomentAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentAdded>, I>>(object: I): MomentAdded {
    const message = createBaseMomentAdded();
    message.momentId = object.momentId ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.start = object.start ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseMomentRemoved(): MomentRemoved {
  return { momentId: 0 };
}

export const MomentRemoved = {
  encode(message: MomentRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MomentRemoved {
    return { momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0 };
  },

  toJSON(message: MomentRemoved): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentRemoved>, I>>(base?: I): MomentRemoved {
    return MomentRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentRemoved>, I>>(object: I): MomentRemoved {
    const message = createBaseMomentRemoved();
    message.momentId = object.momentId ?? 0;
    return message;
  },
};

function createBaseMomentAttributeAdded(): MomentAttributeAdded {
  return { momentId: 0, attributeId: 0, label: "", valueId: "", value: undefined };
}

export const MomentAttributeAdded = {
  encode(message: MomentAttributeAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.valueId !== "") {
      writer.uint32(34).string(message.valueId);
    }
    switch (message.value?.$case) {
      case "phone":
        Phone.encode(message.value.phone, writer.uint32(42).fork()).ldelim();
        break;
      case "email":
        Email.encode(message.value.email, writer.uint32(50).fork()).ldelim();
        break;
      case "address":
        Address.encode(message.value.address, writer.uint32(58).fork()).ldelim();
        break;
      case "social":
        Social.encode(message.value.social, writer.uint32(66).fork()).ldelim();
        break;
      case "credential":
        Credential.encode(message.value.credential, writer.uint32(74).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentAttributeAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentAttributeAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.attributeId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.label = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.valueId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.value = { $case: "phone", phone: Phone.decode(reader, reader.uint32()) };
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

          message.value = { $case: "address", address: Address.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.value = { $case: "social", social: Social.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): MomentAttributeAdded {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
      label: isSet(object.label) ? globalThis.String(object.label) : "",
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

  toJSON(message: MomentAttributeAdded): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    if (message.label !== "") {
      obj.label = message.label;
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

  create<I extends Exact<DeepPartial<MomentAttributeAdded>, I>>(base?: I): MomentAttributeAdded {
    return MomentAttributeAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentAttributeAdded>, I>>(object: I): MomentAttributeAdded {
    const message = createBaseMomentAttributeAdded();
    message.momentId = object.momentId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    message.label = object.label ?? "";
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

function createBaseMomentAttributeRemoved(): MomentAttributeRemoved {
  return { momentId: 0, attributeId: 0 };
}

export const MomentAttributeRemoved = {
  encode(message: MomentAttributeRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentAttributeRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentAttributeRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.momentId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): MomentAttributeRemoved {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: MomentAttributeRemoved): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MomentAttributeRemoved>, I>>(base?: I): MomentAttributeRemoved {
    return MomentAttributeRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentAttributeRemoved>, I>>(object: I): MomentAttributeRemoved {
    const message = createBaseMomentAttributeRemoved();
    message.momentId = object.momentId ?? 0;
    message.attributeId = object.attributeId ?? 0;
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
