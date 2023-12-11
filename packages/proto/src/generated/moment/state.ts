/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address, Credential, Email, Phone, Social } from "../attribute/types";

export interface Moment {
  id: number;
  title: string;
  description: string;
  start: number;
  duration: number;
  attributes: MomentAttribute[];
  lastEventId: number;
  updatedAt: number;
  createdAt: number;
}

export interface MomentAttribute {
  momentId: number;
  attributeId: number;
  label: string;
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

function createBaseMoment(): Moment {
  return {
    id: 0,
    title: "",
    description: "",
    start: 0,
    duration: 0,
    attributes: [],
    lastEventId: 0,
    updatedAt: 0,
    createdAt: 0,
  };
}

export const Moment = {
  encode(message: Moment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
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
    for (const v of message.attributes) {
      MomentAttribute.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.lastEventId !== 0) {
      writer.uint32(104).uint32(message.lastEventId);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(112).uint32(message.updatedAt);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).uint32(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Moment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoment();
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
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attributes.push(MomentAttribute.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.lastEventId = reader.uint32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.updatedAt = reader.uint32();
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

  fromJSON(object: any): Moment {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => MomentAttribute.fromJSON(e))
        : [],
      lastEventId: isSet(object.lastEventId) ? globalThis.Number(object.lastEventId) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
    };
  },

  toJSON(message: Moment): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
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
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => MomentAttribute.toJSON(e));
    }
    if (message.lastEventId !== 0) {
      obj.lastEventId = Math.round(message.lastEventId);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Moment>, I>>(base?: I): Moment {
    return Moment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Moment>, I>>(object: I): Moment {
    const message = createBaseMoment();
    message.id = object.id ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.start = object.start ?? 0;
    message.duration = object.duration ?? 0;
    message.attributes = object.attributes?.map((e) => MomentAttribute.fromPartial(e)) || [];
    message.lastEventId = object.lastEventId ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

function createBaseMomentAttribute(): MomentAttribute {
  return { momentId: 0, attributeId: 0, label: "", value: undefined };
}

export const MomentAttribute = {
  encode(message: MomentAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MomentAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMomentAttribute();
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

  fromJSON(object: any): MomentAttribute {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
      label: isSet(object.label) ? globalThis.String(object.label) : "",
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

  toJSON(message: MomentAttribute): unknown {
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

  create<I extends Exact<DeepPartial<MomentAttribute>, I>>(base?: I): MomentAttribute {
    return MomentAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MomentAttribute>, I>>(object: I): MomentAttribute {
    const message = createBaseMomentAttribute();
    message.momentId = object.momentId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    message.label = object.label ?? "";
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
