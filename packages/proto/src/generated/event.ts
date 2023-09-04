/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccountAvatarChanged, AccountCreated, AccountHandleChanged, AccountNameChanged } from "./account/events";
import {
  AttributeAdded,
  AttributeNameChanged,
  AttributeRemoved,
  AttributeSorted,
  AttributeValueChanged,
  AttributeVerified,
} from "./attribute/events";
import { AuthChanged, SessionEnded, SessionStarted } from "./auth/events";

export interface EventStream {
  events: Event[];
}

export interface EventInfo {
  occurredAt: number;
}

export interface Event {
  id: number;
  eventInfo: EventInfo | undefined;
  payload?:
    | { $case: "authChanged"; authChanged: AuthChanged }
    | { $case: "sessionStarted"; sessionStarted: SessionStarted }
    | { $case: "sessionEnded"; sessionEnded: SessionEnded }
    | { $case: "accountCreated"; accountCreated: AccountCreated }
    | { $case: "accountNameChanged"; accountNameChanged: AccountNameChanged }
    | { $case: "accountHandleChanged"; accountHandleChanged: AccountHandleChanged }
    | { $case: "accountAvatarChanged"; accountAvatarChanged: AccountAvatarChanged }
    | { $case: "attributeAdded"; attributeAdded: AttributeAdded }
    | { $case: "attributeNameChanged"; attributeNameChanged: AttributeNameChanged }
    | { $case: "attributeValueChanged"; attributeValueChanged: AttributeValueChanged }
    | { $case: "attributeSorted"; attributeSorted: AttributeSorted }
    | { $case: "attributeVerified"; attributeVerified: AttributeVerified }
    | { $case: "attributeRemoved"; attributeRemoved: AttributeRemoved };
}

function createBaseEventStream(): EventStream {
  return { events: [] };
}

export const EventStream = {
  encode(message: EventStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStream {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): EventStream {
    return { events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [] };
  },

  toJSON(message: EventStream): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventStream>, I>>(base?: I): EventStream {
    return EventStream.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventStream>, I>>(object: I): EventStream {
    const message = createBaseEventStream();
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventInfo(): EventInfo {
  return { occurredAt: 0 };
}

export const EventInfo = {
  encode(message: EventInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.occurredAt !== 0) {
      writer.uint32(8).uint32(message.occurredAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.occurredAt = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventInfo {
    return { occurredAt: isSet(object.occurredAt) ? Number(object.occurredAt) : 0 };
  },

  toJSON(message: EventInfo): unknown {
    const obj: any = {};
    message.occurredAt !== undefined && (obj.occurredAt = Math.round(message.occurredAt));
    return obj;
  },

  create<I extends Exact<DeepPartial<EventInfo>, I>>(base?: I): EventInfo {
    return EventInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventInfo>, I>>(object: I): EventInfo {
    const message = createBaseEventInfo();
    message.occurredAt = object.occurredAt ?? 0;
    return message;
  },
};

function createBaseEvent(): Event {
  return { id: 0, eventInfo: undefined, payload: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.eventInfo !== undefined) {
      EventInfo.encode(message.eventInfo, writer.uint32(18).fork()).ldelim();
    }
    switch (message.payload?.$case) {
      case "authChanged":
        AuthChanged.encode(message.payload.authChanged, writer.uint32(26).fork()).ldelim();
        break;
      case "sessionStarted":
        SessionStarted.encode(message.payload.sessionStarted, writer.uint32(34).fork()).ldelim();
        break;
      case "sessionEnded":
        SessionEnded.encode(message.payload.sessionEnded, writer.uint32(42).fork()).ldelim();
        break;
      case "accountCreated":
        AccountCreated.encode(message.payload.accountCreated, writer.uint32(50).fork()).ldelim();
        break;
      case "accountNameChanged":
        AccountNameChanged.encode(message.payload.accountNameChanged, writer.uint32(58).fork()).ldelim();
        break;
      case "accountHandleChanged":
        AccountHandleChanged.encode(message.payload.accountHandleChanged, writer.uint32(66).fork()).ldelim();
        break;
      case "accountAvatarChanged":
        AccountAvatarChanged.encode(message.payload.accountAvatarChanged, writer.uint32(74).fork()).ldelim();
        break;
      case "attributeAdded":
        AttributeAdded.encode(message.payload.attributeAdded, writer.uint32(82).fork()).ldelim();
        break;
      case "attributeNameChanged":
        AttributeNameChanged.encode(message.payload.attributeNameChanged, writer.uint32(90).fork()).ldelim();
        break;
      case "attributeValueChanged":
        AttributeValueChanged.encode(message.payload.attributeValueChanged, writer.uint32(98).fork()).ldelim();
        break;
      case "attributeSorted":
        AttributeSorted.encode(message.payload.attributeSorted, writer.uint32(106).fork()).ldelim();
        break;
      case "attributeVerified":
        AttributeVerified.encode(message.payload.attributeVerified, writer.uint32(114).fork()).ldelim();
        break;
      case "attributeRemoved":
        AttributeRemoved.encode(message.payload.attributeRemoved, writer.uint32(122).fork()).ldelim();
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
          if (tag !== 18) {
            break;
          }

          message.eventInfo = EventInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "authChanged", authChanged: AuthChanged.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = { $case: "sessionStarted", sessionStarted: SessionStarted.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = { $case: "sessionEnded", sessionEnded: SessionEnded.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = { $case: "accountCreated", accountCreated: AccountCreated.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = {
            $case: "accountNameChanged",
            accountNameChanged: AccountNameChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.payload = {
            $case: "accountHandleChanged",
            accountHandleChanged: AccountHandleChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payload = {
            $case: "accountAvatarChanged",
            accountAvatarChanged: AccountAvatarChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.payload = { $case: "attributeAdded", attributeAdded: AttributeAdded.decode(reader, reader.uint32()) };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.payload = {
            $case: "attributeNameChanged",
            attributeNameChanged: AttributeNameChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.payload = {
            $case: "attributeValueChanged",
            attributeValueChanged: AttributeValueChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.payload = {
            $case: "attributeSorted",
            attributeSorted: AttributeSorted.decode(reader, reader.uint32()),
          };
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.payload = {
            $case: "attributeVerified",
            attributeVerified: AttributeVerified.decode(reader, reader.uint32()),
          };
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.payload = {
            $case: "attributeRemoved",
            attributeRemoved: AttributeRemoved.decode(reader, reader.uint32()),
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
      eventInfo: isSet(object.eventInfo) ? EventInfo.fromJSON(object.eventInfo) : undefined,
      payload: isSet(object.authChanged)
        ? { $case: "authChanged", authChanged: AuthChanged.fromJSON(object.authChanged) }
        : isSet(object.sessionStarted)
        ? { $case: "sessionStarted", sessionStarted: SessionStarted.fromJSON(object.sessionStarted) }
        : isSet(object.sessionEnded)
        ? { $case: "sessionEnded", sessionEnded: SessionEnded.fromJSON(object.sessionEnded) }
        : isSet(object.accountCreated)
        ? { $case: "accountCreated", accountCreated: AccountCreated.fromJSON(object.accountCreated) }
        : isSet(object.accountNameChanged)
        ? { $case: "accountNameChanged", accountNameChanged: AccountNameChanged.fromJSON(object.accountNameChanged) }
        : isSet(object.accountHandleChanged)
        ? {
          $case: "accountHandleChanged",
          accountHandleChanged: AccountHandleChanged.fromJSON(object.accountHandleChanged),
        }
        : isSet(object.accountAvatarChanged)
        ? {
          $case: "accountAvatarChanged",
          accountAvatarChanged: AccountAvatarChanged.fromJSON(object.accountAvatarChanged),
        }
        : isSet(object.attributeAdded)
        ? { $case: "attributeAdded", attributeAdded: AttributeAdded.fromJSON(object.attributeAdded) }
        : isSet(object.attributeNameChanged)
        ? {
          $case: "attributeNameChanged",
          attributeNameChanged: AttributeNameChanged.fromJSON(object.attributeNameChanged),
        }
        : isSet(object.attributeValueChanged)
        ? {
          $case: "attributeValueChanged",
          attributeValueChanged: AttributeValueChanged.fromJSON(object.attributeValueChanged),
        }
        : isSet(object.attributeSorted)
        ? { $case: "attributeSorted", attributeSorted: AttributeSorted.fromJSON(object.attributeSorted) }
        : isSet(object.attributeVerified)
        ? { $case: "attributeVerified", attributeVerified: AttributeVerified.fromJSON(object.attributeVerified) }
        : isSet(object.attributeRemoved)
        ? { $case: "attributeRemoved", attributeRemoved: AttributeRemoved.fromJSON(object.attributeRemoved) }
        : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.eventInfo !== undefined &&
      (obj.eventInfo = message.eventInfo ? EventInfo.toJSON(message.eventInfo) : undefined);
    message.payload?.$case === "authChanged" &&
      (obj.authChanged = message.payload?.authChanged ? AuthChanged.toJSON(message.payload?.authChanged) : undefined);
    message.payload?.$case === "sessionStarted" && (obj.sessionStarted = message.payload?.sessionStarted
      ? SessionStarted.toJSON(message.payload?.sessionStarted)
      : undefined);
    message.payload?.$case === "sessionEnded" &&
      (obj.sessionEnded = message.payload?.sessionEnded
        ? SessionEnded.toJSON(message.payload?.sessionEnded)
        : undefined);
    message.payload?.$case === "accountCreated" && (obj.accountCreated = message.payload?.accountCreated
      ? AccountCreated.toJSON(message.payload?.accountCreated)
      : undefined);
    message.payload?.$case === "accountNameChanged" && (obj.accountNameChanged = message.payload?.accountNameChanged
      ? AccountNameChanged.toJSON(message.payload?.accountNameChanged)
      : undefined);
    message.payload?.$case === "accountHandleChanged" &&
      (obj.accountHandleChanged = message.payload?.accountHandleChanged
        ? AccountHandleChanged.toJSON(message.payload?.accountHandleChanged)
        : undefined);
    message.payload?.$case === "accountAvatarChanged" &&
      (obj.accountAvatarChanged = message.payload?.accountAvatarChanged
        ? AccountAvatarChanged.toJSON(message.payload?.accountAvatarChanged)
        : undefined);
    message.payload?.$case === "attributeAdded" && (obj.attributeAdded = message.payload?.attributeAdded
      ? AttributeAdded.toJSON(message.payload?.attributeAdded)
      : undefined);
    message.payload?.$case === "attributeNameChanged" &&
      (obj.attributeNameChanged = message.payload?.attributeNameChanged
        ? AttributeNameChanged.toJSON(message.payload?.attributeNameChanged)
        : undefined);
    message.payload?.$case === "attributeValueChanged" &&
      (obj.attributeValueChanged = message.payload?.attributeValueChanged
        ? AttributeValueChanged.toJSON(message.payload?.attributeValueChanged)
        : undefined);
    message.payload?.$case === "attributeSorted" && (obj.attributeSorted = message.payload?.attributeSorted
      ? AttributeSorted.toJSON(message.payload?.attributeSorted)
      : undefined);
    message.payload?.$case === "attributeVerified" && (obj.attributeVerified = message.payload?.attributeVerified
      ? AttributeVerified.toJSON(message.payload?.attributeVerified)
      : undefined);
    message.payload?.$case === "attributeRemoved" && (obj.attributeRemoved = message.payload?.attributeRemoved
      ? AttributeRemoved.toJSON(message.payload?.attributeRemoved)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.id = object.id ?? 0;
    message.eventInfo = (object.eventInfo !== undefined && object.eventInfo !== null)
      ? EventInfo.fromPartial(object.eventInfo)
      : undefined;
    if (
      object.payload?.$case === "authChanged" &&
      object.payload?.authChanged !== undefined &&
      object.payload?.authChanged !== null
    ) {
      message.payload = { $case: "authChanged", authChanged: AuthChanged.fromPartial(object.payload.authChanged) };
    }
    if (
      object.payload?.$case === "sessionStarted" &&
      object.payload?.sessionStarted !== undefined &&
      object.payload?.sessionStarted !== null
    ) {
      message.payload = {
        $case: "sessionStarted",
        sessionStarted: SessionStarted.fromPartial(object.payload.sessionStarted),
      };
    }
    if (
      object.payload?.$case === "sessionEnded" &&
      object.payload?.sessionEnded !== undefined &&
      object.payload?.sessionEnded !== null
    ) {
      message.payload = { $case: "sessionEnded", sessionEnded: SessionEnded.fromPartial(object.payload.sessionEnded) };
    }
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
      object.payload?.$case === "accountNameChanged" &&
      object.payload?.accountNameChanged !== undefined &&
      object.payload?.accountNameChanged !== null
    ) {
      message.payload = {
        $case: "accountNameChanged",
        accountNameChanged: AccountNameChanged.fromPartial(object.payload.accountNameChanged),
      };
    }
    if (
      object.payload?.$case === "accountHandleChanged" &&
      object.payload?.accountHandleChanged !== undefined &&
      object.payload?.accountHandleChanged !== null
    ) {
      message.payload = {
        $case: "accountHandleChanged",
        accountHandleChanged: AccountHandleChanged.fromPartial(object.payload.accountHandleChanged),
      };
    }
    if (
      object.payload?.$case === "accountAvatarChanged" &&
      object.payload?.accountAvatarChanged !== undefined &&
      object.payload?.accountAvatarChanged !== null
    ) {
      message.payload = {
        $case: "accountAvatarChanged",
        accountAvatarChanged: AccountAvatarChanged.fromPartial(object.payload.accountAvatarChanged),
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
      object.payload?.$case === "attributeNameChanged" &&
      object.payload?.attributeNameChanged !== undefined &&
      object.payload?.attributeNameChanged !== null
    ) {
      message.payload = {
        $case: "attributeNameChanged",
        attributeNameChanged: AttributeNameChanged.fromPartial(object.payload.attributeNameChanged),
      };
    }
    if (
      object.payload?.$case === "attributeValueChanged" &&
      object.payload?.attributeValueChanged !== undefined &&
      object.payload?.attributeValueChanged !== null
    ) {
      message.payload = {
        $case: "attributeValueChanged",
        attributeValueChanged: AttributeValueChanged.fromPartial(object.payload.attributeValueChanged),
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
      object.payload?.$case === "attributeRemoved" &&
      object.payload?.attributeRemoved !== undefined &&
      object.payload?.attributeRemoved !== null
    ) {
      message.payload = {
        $case: "attributeRemoved",
        attributeRemoved: AttributeRemoved.fromPartial(object.payload.attributeRemoved),
      };
    }
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
