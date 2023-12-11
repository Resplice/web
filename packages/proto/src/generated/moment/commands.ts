/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address, Credential, Email, Phone, Social } from "../attribute/types";

export interface CreateMoment {
  title: string;
  description: string;
  start: number;
  duration: number;
}

export interface DeleteMoment {
  momentId: number;
}

export interface ChangeMomentInfo {
  momentId: number;
  title: string;
  description: string;
}

export interface ChangeMomentStart {
  momentId: number;
  start: number;
}

export interface ChangeMomentDuration {
  momentId: number;
  duration: number;
}

export interface JoinMoment {
  momentId: number;
}

export interface LeaveMoment {
  momentId: number;
}

export interface AddMomentAttribute {
  momentId: number;
  label: string;
  value?:
    | { $case: "phone"; phone: Phone }
    | { $case: "email"; email: Email }
    | { $case: "address"; address: Address }
    | { $case: "social"; social: Social }
    | { $case: "credential"; credential: Credential }
    | undefined;
}

export interface RemoveMomentAttribute {
  momentId: number;
  attributeId: number;
}

function createBaseCreateMoment(): CreateMoment {
  return { title: "", description: "", start: 0, duration: 0 };
}

export const CreateMoment = {
  encode(message: CreateMoment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.start !== 0) {
      writer.uint32(29).sfixed32(message.start);
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMoment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMoment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.start = reader.sfixed32();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): CreateMoment {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: CreateMoment): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<CreateMoment>, I>>(base?: I): CreateMoment {
    return CreateMoment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMoment>, I>>(object: I): CreateMoment {
    const message = createBaseCreateMoment();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.start = object.start ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseDeleteMoment(): DeleteMoment {
  return { momentId: 0 };
}

export const DeleteMoment = {
  encode(message: DeleteMoment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMoment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMoment();
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

  fromJSON(object: any): DeleteMoment {
    return { momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0 };
  },

  toJSON(message: DeleteMoment): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMoment>, I>>(base?: I): DeleteMoment {
    return DeleteMoment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMoment>, I>>(object: I): DeleteMoment {
    const message = createBaseDeleteMoment();
    message.momentId = object.momentId ?? 0;
    return message;
  },
};

function createBaseChangeMomentInfo(): ChangeMomentInfo {
  return { momentId: 0, title: "", description: "" };
}

export const ChangeMomentInfo = {
  encode(message: ChangeMomentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeMomentInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeMomentInfo();
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

  fromJSON(object: any): ChangeMomentInfo {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: ChangeMomentInfo): unknown {
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

  create<I extends Exact<DeepPartial<ChangeMomentInfo>, I>>(base?: I): ChangeMomentInfo {
    return ChangeMomentInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeMomentInfo>, I>>(object: I): ChangeMomentInfo {
    const message = createBaseChangeMomentInfo();
    message.momentId = object.momentId ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseChangeMomentStart(): ChangeMomentStart {
  return { momentId: 0, start: 0 };
}

export const ChangeMomentStart = {
  encode(message: ChangeMomentStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.start !== 0) {
      writer.uint32(21).sfixed32(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeMomentStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeMomentStart();
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

  fromJSON(object: any): ChangeMomentStart {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
    };
  },

  toJSON(message: ChangeMomentStart): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeMomentStart>, I>>(base?: I): ChangeMomentStart {
    return ChangeMomentStart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeMomentStart>, I>>(object: I): ChangeMomentStart {
    const message = createBaseChangeMomentStart();
    message.momentId = object.momentId ?? 0;
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseChangeMomentDuration(): ChangeMomentDuration {
  return { momentId: 0, duration: 0 };
}

export const ChangeMomentDuration = {
  encode(message: ChangeMomentDuration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeMomentDuration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeMomentDuration();
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

  fromJSON(object: any): ChangeMomentDuration {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: ChangeMomentDuration): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeMomentDuration>, I>>(base?: I): ChangeMomentDuration {
    return ChangeMomentDuration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeMomentDuration>, I>>(object: I): ChangeMomentDuration {
    const message = createBaseChangeMomentDuration();
    message.momentId = object.momentId ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseJoinMoment(): JoinMoment {
  return { momentId: 0 };
}

export const JoinMoment = {
  encode(message: JoinMoment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JoinMoment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinMoment();
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

  fromJSON(object: any): JoinMoment {
    return { momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0 };
  },

  toJSON(message: JoinMoment): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JoinMoment>, I>>(base?: I): JoinMoment {
    return JoinMoment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JoinMoment>, I>>(object: I): JoinMoment {
    const message = createBaseJoinMoment();
    message.momentId = object.momentId ?? 0;
    return message;
  },
};

function createBaseLeaveMoment(): LeaveMoment {
  return { momentId: 0 };
}

export const LeaveMoment = {
  encode(message: LeaveMoment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaveMoment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaveMoment();
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

  fromJSON(object: any): LeaveMoment {
    return { momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0 };
  },

  toJSON(message: LeaveMoment): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LeaveMoment>, I>>(base?: I): LeaveMoment {
    return LeaveMoment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LeaveMoment>, I>>(object: I): LeaveMoment {
    const message = createBaseLeaveMoment();
    message.momentId = object.momentId ?? 0;
    return message;
  },
};

function createBaseAddMomentAttribute(): AddMomentAttribute {
  return { momentId: 0, label: "", value: undefined };
}

export const AddMomentAttribute = {
  encode(message: AddMomentAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AddMomentAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMomentAttribute();
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

          message.label = reader.string();
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

  fromJSON(object: any): AddMomentAttribute {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
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

  toJSON(message: AddMomentAttribute): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
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

  create<I extends Exact<DeepPartial<AddMomentAttribute>, I>>(base?: I): AddMomentAttribute {
    return AddMomentAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddMomentAttribute>, I>>(object: I): AddMomentAttribute {
    const message = createBaseAddMomentAttribute();
    message.momentId = object.momentId ?? 0;
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

function createBaseRemoveMomentAttribute(): RemoveMomentAttribute {
  return { momentId: 0, attributeId: 0 };
}

export const RemoveMomentAttribute = {
  encode(message: RemoveMomentAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.momentId !== 0) {
      writer.uint32(8).uint32(message.momentId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMomentAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveMomentAttribute();
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

  fromJSON(object: any): RemoveMomentAttribute {
    return {
      momentId: isSet(object.momentId) ? globalThis.Number(object.momentId) : 0,
      attributeId: isSet(object.attributeId) ? globalThis.Number(object.attributeId) : 0,
    };
  },

  toJSON(message: RemoveMomentAttribute): unknown {
    const obj: any = {};
    if (message.momentId !== 0) {
      obj.momentId = Math.round(message.momentId);
    }
    if (message.attributeId !== 0) {
      obj.attributeId = Math.round(message.attributeId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveMomentAttribute>, I>>(base?: I): RemoveMomentAttribute {
    return RemoveMomentAttribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveMomentAttribute>, I>>(object: I): RemoveMomentAttribute {
    const message = createBaseRemoveMomentAttribute();
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
