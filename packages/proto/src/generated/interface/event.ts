/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccountAvatarEdited, AccountCreated, AccountHandleEdited, AccountNameEdited } from "../accounts";
import {
  AttributeAdded,
  AttributeDeleted,
  AttributeNameEdited,
  AttributeSorted,
  AttributeValueEdited,
  AttributeVerified,
} from "../attributes";

export interface Events {
  accessToken: Uint8Array;
  events: Event[];
}

export interface Event {
  id: number;
  version: number;
  payload?:
    | { $case: "accountCreated"; accountCreated: AccountCreated }
    | { $case: "accountNameEdited"; accountNameEdited: AccountNameEdited }
    | { $case: "accountHandleEdited"; accountHandleEdited: AccountHandleEdited }
    | { $case: "accountAvatarEdited"; accountAvatarEdited: AccountAvatarEdited }
    | { $case: "attributeAdded"; attributeAdded: AttributeAdded }
    | { $case: "attributeNameEdited"; attributeNameEdited: AttributeNameEdited }
    | { $case: "attributeValueEdited"; attributeValueEdited: AttributeValueEdited }
    | { $case: "attributeSorted"; attributeSorted: AttributeSorted }
    | { $case: "attributeVerified"; attributeVerified: AttributeVerified }
    | { $case: "attributeDeleted"; attributeDeleted: AttributeDeleted };
}

function createBaseEvents(): Events {
  return { accessToken: new Uint8Array(0), events: [] };
}

export const Events = {
  encode(message: Events, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken.length !== 0) {
      writer.uint32(10).bytes(message.accessToken);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Events {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Events {
    return {
      accessToken: isSet(object.accessToken) ? bytesFromBase64(object.accessToken) : new Uint8Array(0),
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: Events): unknown {
    const obj: any = {};
    message.accessToken !== undefined &&
      (obj.accessToken = base64FromBytes(message.accessToken !== undefined ? message.accessToken : new Uint8Array(0)));
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Events>, I>>(base?: I): Events {
    return Events.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Events>, I>>(object: I): Events {
    const message = createBaseEvents();
    message.accessToken = object.accessToken ?? new Uint8Array(0);
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEvent(): Event {
  return { id: 0, version: 0, payload: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    switch (message.payload?.$case) {
      case "accountCreated":
        AccountCreated.encode(message.payload.accountCreated, writer.uint32(26).fork()).ldelim();
        break;
      case "accountNameEdited":
        AccountNameEdited.encode(message.payload.accountNameEdited, writer.uint32(34).fork()).ldelim();
        break;
      case "accountHandleEdited":
        AccountHandleEdited.encode(message.payload.accountHandleEdited, writer.uint32(42).fork()).ldelim();
        break;
      case "accountAvatarEdited":
        AccountAvatarEdited.encode(message.payload.accountAvatarEdited, writer.uint32(50).fork()).ldelim();
        break;
      case "attributeAdded":
        AttributeAdded.encode(message.payload.attributeAdded, writer.uint32(58).fork()).ldelim();
        break;
      case "attributeNameEdited":
        AttributeNameEdited.encode(message.payload.attributeNameEdited, writer.uint32(66).fork()).ldelim();
        break;
      case "attributeValueEdited":
        AttributeValueEdited.encode(message.payload.attributeValueEdited, writer.uint32(74).fork()).ldelim();
        break;
      case "attributeSorted":
        AttributeSorted.encode(message.payload.attributeSorted, writer.uint32(82).fork()).ldelim();
        break;
      case "attributeVerified":
        AttributeVerified.encode(message.payload.attributeVerified, writer.uint32(90).fork()).ldelim();
        break;
      case "attributeDeleted":
        AttributeDeleted.encode(message.payload.attributeDeleted, writer.uint32(98).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
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

          message.version = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "accountCreated", accountCreated: AccountCreated.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = {
            $case: "accountNameEdited",
            accountNameEdited: AccountNameEdited.decode(reader, reader.uint32()),
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = {
            $case: "accountHandleEdited",
            accountHandleEdited: AccountHandleEdited.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = {
            $case: "accountAvatarEdited",
            accountAvatarEdited: AccountAvatarEdited.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = { $case: "attributeAdded", attributeAdded: AttributeAdded.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.payload = {
            $case: "attributeNameEdited",
            attributeNameEdited: AttributeNameEdited.decode(reader, reader.uint32()),
          };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payload = {
            $case: "attributeValueEdited",
            attributeValueEdited: AttributeValueEdited.decode(reader, reader.uint32()),
          };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.payload = {
            $case: "attributeSorted",
            attributeSorted: AttributeSorted.decode(reader, reader.uint32()),
          };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.payload = {
            $case: "attributeVerified",
            attributeVerified: AttributeVerified.decode(reader, reader.uint32()),
          };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.payload = {
            $case: "attributeDeleted",
            attributeDeleted: AttributeDeleted.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
      payload: isSet(object.accountCreated)
        ? { $case: "accountCreated", accountCreated: AccountCreated.fromJSON(object.accountCreated) }
        : isSet(object.accountNameEdited)
        ? { $case: "accountNameEdited", accountNameEdited: AccountNameEdited.fromJSON(object.accountNameEdited) }
        : isSet(object.accountHandleEdited)
        ? {
          $case: "accountHandleEdited",
          accountHandleEdited: AccountHandleEdited.fromJSON(object.accountHandleEdited),
        }
        : isSet(object.accountAvatarEdited)
        ? {
          $case: "accountAvatarEdited",
          accountAvatarEdited: AccountAvatarEdited.fromJSON(object.accountAvatarEdited),
        }
        : isSet(object.attributeAdded)
        ? { $case: "attributeAdded", attributeAdded: AttributeAdded.fromJSON(object.attributeAdded) }
        : isSet(object.attributeNameEdited)
        ? {
          $case: "attributeNameEdited",
          attributeNameEdited: AttributeNameEdited.fromJSON(object.attributeNameEdited),
        }
        : isSet(object.attributeValueEdited)
        ? {
          $case: "attributeValueEdited",
          attributeValueEdited: AttributeValueEdited.fromJSON(object.attributeValueEdited),
        }
        : isSet(object.attributeSorted)
        ? { $case: "attributeSorted", attributeSorted: AttributeSorted.fromJSON(object.attributeSorted) }
        : isSet(object.attributeVerified)
        ? { $case: "attributeVerified", attributeVerified: AttributeVerified.fromJSON(object.attributeVerified) }
        : isSet(object.attributeDeleted)
        ? { $case: "attributeDeleted", attributeDeleted: AttributeDeleted.fromJSON(object.attributeDeleted) }
        : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.payload?.$case === "accountCreated" && (obj.accountCreated = message.payload?.accountCreated
      ? AccountCreated.toJSON(message.payload?.accountCreated)
      : undefined);
    message.payload?.$case === "accountNameEdited" && (obj.accountNameEdited = message.payload?.accountNameEdited
      ? AccountNameEdited.toJSON(message.payload?.accountNameEdited)
      : undefined);
    message.payload?.$case === "accountHandleEdited" && (obj.accountHandleEdited = message.payload?.accountHandleEdited
      ? AccountHandleEdited.toJSON(message.payload?.accountHandleEdited)
      : undefined);
    message.payload?.$case === "accountAvatarEdited" && (obj.accountAvatarEdited = message.payload?.accountAvatarEdited
      ? AccountAvatarEdited.toJSON(message.payload?.accountAvatarEdited)
      : undefined);
    message.payload?.$case === "attributeAdded" && (obj.attributeAdded = message.payload?.attributeAdded
      ? AttributeAdded.toJSON(message.payload?.attributeAdded)
      : undefined);
    message.payload?.$case === "attributeNameEdited" && (obj.attributeNameEdited = message.payload?.attributeNameEdited
      ? AttributeNameEdited.toJSON(message.payload?.attributeNameEdited)
      : undefined);
    message.payload?.$case === "attributeValueEdited" &&
      (obj.attributeValueEdited = message.payload?.attributeValueEdited
        ? AttributeValueEdited.toJSON(message.payload?.attributeValueEdited)
        : undefined);
    message.payload?.$case === "attributeSorted" && (obj.attributeSorted = message.payload?.attributeSorted
      ? AttributeSorted.toJSON(message.payload?.attributeSorted)
      : undefined);
    message.payload?.$case === "attributeVerified" && (obj.attributeVerified = message.payload?.attributeVerified
      ? AttributeVerified.toJSON(message.payload?.attributeVerified)
      : undefined);
    message.payload?.$case === "attributeDeleted" && (obj.attributeDeleted = message.payload?.attributeDeleted
      ? AttributeDeleted.toJSON(message.payload?.attributeDeleted)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.id = object.id ?? 0;
    message.version = object.version ?? 0;
    if (
      object.payload?.$case === "accountCreated" &&
      object.payload?.accountCreated !== undefined &&
      object.payload?.accountCreated !== null
    ) {
      message.payload = {
        $case: "accountCreated",
        accountCreated: AccountCreated.fromPartial(object.payload.accountCreated),
      };
    }
    if (
      object.payload?.$case === "accountNameEdited" &&
      object.payload?.accountNameEdited !== undefined &&
      object.payload?.accountNameEdited !== null
    ) {
      message.payload = {
        $case: "accountNameEdited",
        accountNameEdited: AccountNameEdited.fromPartial(object.payload.accountNameEdited),
      };
    }
    if (
      object.payload?.$case === "accountHandleEdited" &&
      object.payload?.accountHandleEdited !== undefined &&
      object.payload?.accountHandleEdited !== null
    ) {
      message.payload = {
        $case: "accountHandleEdited",
        accountHandleEdited: AccountHandleEdited.fromPartial(object.payload.accountHandleEdited),
      };
    }
    if (
      object.payload?.$case === "accountAvatarEdited" &&
      object.payload?.accountAvatarEdited !== undefined &&
      object.payload?.accountAvatarEdited !== null
    ) {
      message.payload = {
        $case: "accountAvatarEdited",
        accountAvatarEdited: AccountAvatarEdited.fromPartial(object.payload.accountAvatarEdited),
      };
    }
    if (
      object.payload?.$case === "attributeAdded" &&
      object.payload?.attributeAdded !== undefined &&
      object.payload?.attributeAdded !== null
    ) {
      message.payload = {
        $case: "attributeAdded",
        attributeAdded: AttributeAdded.fromPartial(object.payload.attributeAdded),
      };
    }
    if (
      object.payload?.$case === "attributeNameEdited" &&
      object.payload?.attributeNameEdited !== undefined &&
      object.payload?.attributeNameEdited !== null
    ) {
      message.payload = {
        $case: "attributeNameEdited",
        attributeNameEdited: AttributeNameEdited.fromPartial(object.payload.attributeNameEdited),
      };
    }
    if (
      object.payload?.$case === "attributeValueEdited" &&
      object.payload?.attributeValueEdited !== undefined &&
      object.payload?.attributeValueEdited !== null
    ) {
      message.payload = {
        $case: "attributeValueEdited",
        attributeValueEdited: AttributeValueEdited.fromPartial(object.payload.attributeValueEdited),
      };
    }
    if (
      object.payload?.$case === "attributeSorted" &&
      object.payload?.attributeSorted !== undefined &&
      object.payload?.attributeSorted !== null
    ) {
      message.payload = {
        $case: "attributeSorted",
        attributeSorted: AttributeSorted.fromPartial(object.payload.attributeSorted),
      };
    }
    if (
      object.payload?.$case === "attributeVerified" &&
      object.payload?.attributeVerified !== undefined &&
      object.payload?.attributeVerified !== null
    ) {
      message.payload = {
        $case: "attributeVerified",
        attributeVerified: AttributeVerified.fromPartial(object.payload.attributeVerified),
      };
    }
    if (
      object.payload?.$case === "attributeDeleted" &&
      object.payload?.attributeDeleted !== undefined &&
      object.payload?.attributeDeleted !== null
    ) {
      message.payload = {
        $case: "attributeDeleted",
        attributeDeleted: AttributeDeleted.fromPartial(object.payload.attributeDeleted),
      };
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
