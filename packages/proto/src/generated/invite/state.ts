/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface Invite {
  /** Hash of value */
  id: string;
  name: string;
  value?: { $case: "phone"; phone: string } | { $case: "email"; email: string } | undefined;
  attributeIds: number[];
}

function createBaseInvite(): Invite {
  return { id: "", name: "", value: undefined, attributeIds: [] };
}

export const Invite = {
  encode(message: Invite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    switch (message.value?.$case) {
      case "phone":
        writer.uint32(26).string(message.value.phone);
        break;
      case "email":
        writer.uint32(34).string(message.value.email);
        break;
    }
    writer.uint32(42).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Invite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.value = { $case: "phone", phone: reader.string() };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = { $case: "email", email: reader.string() };
          continue;
        case 5:
          if (tag === 40) {
            message.attributeIds.push(reader.uint32());

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32());
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

  fromJSON(object: any): Invite {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.phone)
        ? { $case: "phone", phone: globalThis.String(object.phone) }
        : isSet(object.email)
        ? { $case: "email", email: globalThis.String(object.email) }
        : undefined,
      attributeIds: globalThis.Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: Invite): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value?.$case === "phone") {
      obj.phone = message.value.phone;
    }
    if (message.value?.$case === "email") {
      obj.email = message.value.email;
    }
    if (message.attributeIds?.length) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Invite>, I>>(base?: I): Invite {
    return Invite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Invite>, I>>(object: I): Invite {
    const message = createBaseInvite();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    if (object.value?.$case === "phone" && object.value?.phone !== undefined && object.value?.phone !== null) {
      message.value = { $case: "phone", phone: object.value.phone };
    }
    if (object.value?.$case === "email" && object.value?.email !== undefined && object.value?.email !== null) {
      message.value = { $case: "email", email: object.value.email };
    }
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
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
