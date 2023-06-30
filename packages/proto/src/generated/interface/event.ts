/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum EventType {
  ERROR = 0,
  /** AUTH_CHANGED - Auth */
  AUTH_CHANGED = 1,
  SOCKET_AUTHORIZED = 2,
  /** SESSION_STARTED - Session */
  SESSION_STARTED = 3,
  SESSION_EXPIRED = 4,
  /** ACCOUNT_CREATED - Account */
  ACCOUNT_CREATED = 5,
  ACCOUNT_NAME_EDITED = 6,
  ACCOUNT_HANDLE_EDITED = 7,
  ACCOUNT_AVATAR_EDITED = 8,
  ACCOUNT_DELETED = 9,
  /** ATTRIBUTE_ADDED - Attributes */
  ATTRIBUTE_ADDED = 10,
  ATTRIBUTE_NAME_EDITED = 11,
  ATTRIBUTE_VALUE_EDITED = 12,
  ATTRIBUTE_SORTED = 13,
  ATTRIBUTE_VERIFIED = 14,
  ATTRIBUTE_DELETED = 15,
  /** INVITE_CREATED - Invites */
  INVITE_CREATED = 16,
  INVITE_ATTRIBUTE_ADDED = 17,
  INVITE_ATTRIBUTE_REMOVED = 18,
  INVITE_CANCELED = 19,
  /** META_INVITE_CREATED - Meta Invites */
  META_INVITE_CREATED = 20,
  META_INVITE_ATTRIBUTE_ADDED = 21,
  META_INVITE_ATTRIBUTE_REMOVED = 22,
  META_INVITE_DELETED = 23,
  META_INVITE_OPENED = 24,
  /** PENDING_CONTACT_ACCEPTED - Contacts */
  PENDING_CONTACT_ACCEPTED = 25,
  PENDING_CONTACT_DECLINED = 26,
  CONTACT_ALIAS_EDITED = 27,
  CONTACT_DESCRIPTION_EDITED = 28,
  CONTACT_FAVORITED = 29,
  CONTACT_UNFAVORITED = 30,
  CONTACT_MUTED = 31,
  CONTACT_UNMUTED = 32,
  CONTACT_ARCHIVED = 33,
  CONTACT_UNARCHIVED = 34,
  CONTACT_DELETED = 35,
  CONTACT_ATTRIBUTE_REQUESTED = 36,
  CONTACT_ATTRIBUTE_HIDDEN = 37,
  CONTACT_ATTRIBUTE_UNHIDDEN = 38,
  CONTACT_SHARE_ADDED = 39,
  CONTACT_SHARE_REMOVED = 40,
  /** SPLICE_INVITE_CREATED - Splice Invites */
  SPLICE_INVITE_CREATED = 41,
  SPLICE_AUTO_ACCEPT_INVITE_ENABLED = 42,
  SPLICE_AUTO_ACCEPT_INVITE_DISABLED = 43,
  SPLICE_INVITE_DELETED = 44,
  /** SPLICE_META_INVITE_CREATED - Splice Meta Invites */
  SPLICE_META_INVITE_CREATED = 45,
  SPLICE_META_INVITE_DELETED = 46,
  SPLICE_META_INVITE_OPENED = 47,
  /** PENDING_SPLICE_ACCEPTED - Splices */
  PENDING_SPLICE_ACCEPTED = 48,
  PENDING_SPLICE_DECLINED = 49,
  SPLICE_CREATED = 50,
  SPLICE_NAME_EDITED = 51,
  SPLICE_DESCRIPTION_EDITED = 52,
  SPLICE_AVATAR_EDITED = 53,
  SPLICE_FAVORITED = 54,
  SPLICE_UNFAVORITED = 55,
  SPLICE_MUTED = 56,
  SPLICE_UNMUTED = 57,
  SPLICE_ARCHIVED = 58,
  SPLICE_UNARCHIVED = 59,
  SPLICE_SHARE_ADDED = 60,
  SPLICE_SHARE_REMOVED = 61,
  SPLICE_LEFT = 62,
  /** SPLICE_MEMBER_ADDED - Splice Members */
  SPLICE_MEMBER_ADDED = 63,
  SPLICE_MEMBER_REMOVED = 64,
  SPLICE_MODERATOR_ADDED = 65,
  SPLICE_MODERATOR_REMOVED = 66,
  EVENTS = 127,
  UNRECOGNIZED = -1,
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case "ERROR":
      return EventType.ERROR;
    case 1:
    case "AUTH_CHANGED":
      return EventType.AUTH_CHANGED;
    case 2:
    case "SOCKET_AUTHORIZED":
      return EventType.SOCKET_AUTHORIZED;
    case 3:
    case "SESSION_STARTED":
      return EventType.SESSION_STARTED;
    case 4:
    case "SESSION_EXPIRED":
      return EventType.SESSION_EXPIRED;
    case 5:
    case "ACCOUNT_CREATED":
      return EventType.ACCOUNT_CREATED;
    case 6:
    case "ACCOUNT_NAME_EDITED":
      return EventType.ACCOUNT_NAME_EDITED;
    case 7:
    case "ACCOUNT_HANDLE_EDITED":
      return EventType.ACCOUNT_HANDLE_EDITED;
    case 8:
    case "ACCOUNT_AVATAR_EDITED":
      return EventType.ACCOUNT_AVATAR_EDITED;
    case 9:
    case "ACCOUNT_DELETED":
      return EventType.ACCOUNT_DELETED;
    case 10:
    case "ATTRIBUTE_ADDED":
      return EventType.ATTRIBUTE_ADDED;
    case 11:
    case "ATTRIBUTE_NAME_EDITED":
      return EventType.ATTRIBUTE_NAME_EDITED;
    case 12:
    case "ATTRIBUTE_VALUE_EDITED":
      return EventType.ATTRIBUTE_VALUE_EDITED;
    case 13:
    case "ATTRIBUTE_SORTED":
      return EventType.ATTRIBUTE_SORTED;
    case 14:
    case "ATTRIBUTE_VERIFIED":
      return EventType.ATTRIBUTE_VERIFIED;
    case 15:
    case "ATTRIBUTE_DELETED":
      return EventType.ATTRIBUTE_DELETED;
    case 16:
    case "INVITE_CREATED":
      return EventType.INVITE_CREATED;
    case 17:
    case "INVITE_ATTRIBUTE_ADDED":
      return EventType.INVITE_ATTRIBUTE_ADDED;
    case 18:
    case "INVITE_ATTRIBUTE_REMOVED":
      return EventType.INVITE_ATTRIBUTE_REMOVED;
    case 19:
    case "INVITE_CANCELED":
      return EventType.INVITE_CANCELED;
    case 20:
    case "META_INVITE_CREATED":
      return EventType.META_INVITE_CREATED;
    case 21:
    case "META_INVITE_ATTRIBUTE_ADDED":
      return EventType.META_INVITE_ATTRIBUTE_ADDED;
    case 22:
    case "META_INVITE_ATTRIBUTE_REMOVED":
      return EventType.META_INVITE_ATTRIBUTE_REMOVED;
    case 23:
    case "META_INVITE_DELETED":
      return EventType.META_INVITE_DELETED;
    case 24:
    case "META_INVITE_OPENED":
      return EventType.META_INVITE_OPENED;
    case 25:
    case "PENDING_CONTACT_ACCEPTED":
      return EventType.PENDING_CONTACT_ACCEPTED;
    case 26:
    case "PENDING_CONTACT_DECLINED":
      return EventType.PENDING_CONTACT_DECLINED;
    case 27:
    case "CONTACT_ALIAS_EDITED":
      return EventType.CONTACT_ALIAS_EDITED;
    case 28:
    case "CONTACT_DESCRIPTION_EDITED":
      return EventType.CONTACT_DESCRIPTION_EDITED;
    case 29:
    case "CONTACT_FAVORITED":
      return EventType.CONTACT_FAVORITED;
    case 30:
    case "CONTACT_UNFAVORITED":
      return EventType.CONTACT_UNFAVORITED;
    case 31:
    case "CONTACT_MUTED":
      return EventType.CONTACT_MUTED;
    case 32:
    case "CONTACT_UNMUTED":
      return EventType.CONTACT_UNMUTED;
    case 33:
    case "CONTACT_ARCHIVED":
      return EventType.CONTACT_ARCHIVED;
    case 34:
    case "CONTACT_UNARCHIVED":
      return EventType.CONTACT_UNARCHIVED;
    case 35:
    case "CONTACT_DELETED":
      return EventType.CONTACT_DELETED;
    case 36:
    case "CONTACT_ATTRIBUTE_REQUESTED":
      return EventType.CONTACT_ATTRIBUTE_REQUESTED;
    case 37:
    case "CONTACT_ATTRIBUTE_HIDDEN":
      return EventType.CONTACT_ATTRIBUTE_HIDDEN;
    case 38:
    case "CONTACT_ATTRIBUTE_UNHIDDEN":
      return EventType.CONTACT_ATTRIBUTE_UNHIDDEN;
    case 39:
    case "CONTACT_SHARE_ADDED":
      return EventType.CONTACT_SHARE_ADDED;
    case 40:
    case "CONTACT_SHARE_REMOVED":
      return EventType.CONTACT_SHARE_REMOVED;
    case 41:
    case "SPLICE_INVITE_CREATED":
      return EventType.SPLICE_INVITE_CREATED;
    case 42:
    case "SPLICE_AUTO_ACCEPT_INVITE_ENABLED":
      return EventType.SPLICE_AUTO_ACCEPT_INVITE_ENABLED;
    case 43:
    case "SPLICE_AUTO_ACCEPT_INVITE_DISABLED":
      return EventType.SPLICE_AUTO_ACCEPT_INVITE_DISABLED;
    case 44:
    case "SPLICE_INVITE_DELETED":
      return EventType.SPLICE_INVITE_DELETED;
    case 45:
    case "SPLICE_META_INVITE_CREATED":
      return EventType.SPLICE_META_INVITE_CREATED;
    case 46:
    case "SPLICE_META_INVITE_DELETED":
      return EventType.SPLICE_META_INVITE_DELETED;
    case 47:
    case "SPLICE_META_INVITE_OPENED":
      return EventType.SPLICE_META_INVITE_OPENED;
    case 48:
    case "PENDING_SPLICE_ACCEPTED":
      return EventType.PENDING_SPLICE_ACCEPTED;
    case 49:
    case "PENDING_SPLICE_DECLINED":
      return EventType.PENDING_SPLICE_DECLINED;
    case 50:
    case "SPLICE_CREATED":
      return EventType.SPLICE_CREATED;
    case 51:
    case "SPLICE_NAME_EDITED":
      return EventType.SPLICE_NAME_EDITED;
    case 52:
    case "SPLICE_DESCRIPTION_EDITED":
      return EventType.SPLICE_DESCRIPTION_EDITED;
    case 53:
    case "SPLICE_AVATAR_EDITED":
      return EventType.SPLICE_AVATAR_EDITED;
    case 54:
    case "SPLICE_FAVORITED":
      return EventType.SPLICE_FAVORITED;
    case 55:
    case "SPLICE_UNFAVORITED":
      return EventType.SPLICE_UNFAVORITED;
    case 56:
    case "SPLICE_MUTED":
      return EventType.SPLICE_MUTED;
    case 57:
    case "SPLICE_UNMUTED":
      return EventType.SPLICE_UNMUTED;
    case 58:
    case "SPLICE_ARCHIVED":
      return EventType.SPLICE_ARCHIVED;
    case 59:
    case "SPLICE_UNARCHIVED":
      return EventType.SPLICE_UNARCHIVED;
    case 60:
    case "SPLICE_SHARE_ADDED":
      return EventType.SPLICE_SHARE_ADDED;
    case 61:
    case "SPLICE_SHARE_REMOVED":
      return EventType.SPLICE_SHARE_REMOVED;
    case 62:
    case "SPLICE_LEFT":
      return EventType.SPLICE_LEFT;
    case 63:
    case "SPLICE_MEMBER_ADDED":
      return EventType.SPLICE_MEMBER_ADDED;
    case 64:
    case "SPLICE_MEMBER_REMOVED":
      return EventType.SPLICE_MEMBER_REMOVED;
    case 65:
    case "SPLICE_MODERATOR_ADDED":
      return EventType.SPLICE_MODERATOR_ADDED;
    case 66:
    case "SPLICE_MODERATOR_REMOVED":
      return EventType.SPLICE_MODERATOR_REMOVED;
    case 127:
    case "EVENTS":
      return EventType.EVENTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventType.UNRECOGNIZED;
  }
}

export function eventTypeToJSON(object: EventType): string {
  switch (object) {
    case EventType.ERROR:
      return "ERROR";
    case EventType.AUTH_CHANGED:
      return "AUTH_CHANGED";
    case EventType.SOCKET_AUTHORIZED:
      return "SOCKET_AUTHORIZED";
    case EventType.SESSION_STARTED:
      return "SESSION_STARTED";
    case EventType.SESSION_EXPIRED:
      return "SESSION_EXPIRED";
    case EventType.ACCOUNT_CREATED:
      return "ACCOUNT_CREATED";
    case EventType.ACCOUNT_NAME_EDITED:
      return "ACCOUNT_NAME_EDITED";
    case EventType.ACCOUNT_HANDLE_EDITED:
      return "ACCOUNT_HANDLE_EDITED";
    case EventType.ACCOUNT_AVATAR_EDITED:
      return "ACCOUNT_AVATAR_EDITED";
    case EventType.ACCOUNT_DELETED:
      return "ACCOUNT_DELETED";
    case EventType.ATTRIBUTE_ADDED:
      return "ATTRIBUTE_ADDED";
    case EventType.ATTRIBUTE_NAME_EDITED:
      return "ATTRIBUTE_NAME_EDITED";
    case EventType.ATTRIBUTE_VALUE_EDITED:
      return "ATTRIBUTE_VALUE_EDITED";
    case EventType.ATTRIBUTE_SORTED:
      return "ATTRIBUTE_SORTED";
    case EventType.ATTRIBUTE_VERIFIED:
      return "ATTRIBUTE_VERIFIED";
    case EventType.ATTRIBUTE_DELETED:
      return "ATTRIBUTE_DELETED";
    case EventType.INVITE_CREATED:
      return "INVITE_CREATED";
    case EventType.INVITE_ATTRIBUTE_ADDED:
      return "INVITE_ATTRIBUTE_ADDED";
    case EventType.INVITE_ATTRIBUTE_REMOVED:
      return "INVITE_ATTRIBUTE_REMOVED";
    case EventType.INVITE_CANCELED:
      return "INVITE_CANCELED";
    case EventType.META_INVITE_CREATED:
      return "META_INVITE_CREATED";
    case EventType.META_INVITE_ATTRIBUTE_ADDED:
      return "META_INVITE_ATTRIBUTE_ADDED";
    case EventType.META_INVITE_ATTRIBUTE_REMOVED:
      return "META_INVITE_ATTRIBUTE_REMOVED";
    case EventType.META_INVITE_DELETED:
      return "META_INVITE_DELETED";
    case EventType.META_INVITE_OPENED:
      return "META_INVITE_OPENED";
    case EventType.PENDING_CONTACT_ACCEPTED:
      return "PENDING_CONTACT_ACCEPTED";
    case EventType.PENDING_CONTACT_DECLINED:
      return "PENDING_CONTACT_DECLINED";
    case EventType.CONTACT_ALIAS_EDITED:
      return "CONTACT_ALIAS_EDITED";
    case EventType.CONTACT_DESCRIPTION_EDITED:
      return "CONTACT_DESCRIPTION_EDITED";
    case EventType.CONTACT_FAVORITED:
      return "CONTACT_FAVORITED";
    case EventType.CONTACT_UNFAVORITED:
      return "CONTACT_UNFAVORITED";
    case EventType.CONTACT_MUTED:
      return "CONTACT_MUTED";
    case EventType.CONTACT_UNMUTED:
      return "CONTACT_UNMUTED";
    case EventType.CONTACT_ARCHIVED:
      return "CONTACT_ARCHIVED";
    case EventType.CONTACT_UNARCHIVED:
      return "CONTACT_UNARCHIVED";
    case EventType.CONTACT_DELETED:
      return "CONTACT_DELETED";
    case EventType.CONTACT_ATTRIBUTE_REQUESTED:
      return "CONTACT_ATTRIBUTE_REQUESTED";
    case EventType.CONTACT_ATTRIBUTE_HIDDEN:
      return "CONTACT_ATTRIBUTE_HIDDEN";
    case EventType.CONTACT_ATTRIBUTE_UNHIDDEN:
      return "CONTACT_ATTRIBUTE_UNHIDDEN";
    case EventType.CONTACT_SHARE_ADDED:
      return "CONTACT_SHARE_ADDED";
    case EventType.CONTACT_SHARE_REMOVED:
      return "CONTACT_SHARE_REMOVED";
    case EventType.SPLICE_INVITE_CREATED:
      return "SPLICE_INVITE_CREATED";
    case EventType.SPLICE_AUTO_ACCEPT_INVITE_ENABLED:
      return "SPLICE_AUTO_ACCEPT_INVITE_ENABLED";
    case EventType.SPLICE_AUTO_ACCEPT_INVITE_DISABLED:
      return "SPLICE_AUTO_ACCEPT_INVITE_DISABLED";
    case EventType.SPLICE_INVITE_DELETED:
      return "SPLICE_INVITE_DELETED";
    case EventType.SPLICE_META_INVITE_CREATED:
      return "SPLICE_META_INVITE_CREATED";
    case EventType.SPLICE_META_INVITE_DELETED:
      return "SPLICE_META_INVITE_DELETED";
    case EventType.SPLICE_META_INVITE_OPENED:
      return "SPLICE_META_INVITE_OPENED";
    case EventType.PENDING_SPLICE_ACCEPTED:
      return "PENDING_SPLICE_ACCEPTED";
    case EventType.PENDING_SPLICE_DECLINED:
      return "PENDING_SPLICE_DECLINED";
    case EventType.SPLICE_CREATED:
      return "SPLICE_CREATED";
    case EventType.SPLICE_NAME_EDITED:
      return "SPLICE_NAME_EDITED";
    case EventType.SPLICE_DESCRIPTION_EDITED:
      return "SPLICE_DESCRIPTION_EDITED";
    case EventType.SPLICE_AVATAR_EDITED:
      return "SPLICE_AVATAR_EDITED";
    case EventType.SPLICE_FAVORITED:
      return "SPLICE_FAVORITED";
    case EventType.SPLICE_UNFAVORITED:
      return "SPLICE_UNFAVORITED";
    case EventType.SPLICE_MUTED:
      return "SPLICE_MUTED";
    case EventType.SPLICE_UNMUTED:
      return "SPLICE_UNMUTED";
    case EventType.SPLICE_ARCHIVED:
      return "SPLICE_ARCHIVED";
    case EventType.SPLICE_UNARCHIVED:
      return "SPLICE_UNARCHIVED";
    case EventType.SPLICE_SHARE_ADDED:
      return "SPLICE_SHARE_ADDED";
    case EventType.SPLICE_SHARE_REMOVED:
      return "SPLICE_SHARE_REMOVED";
    case EventType.SPLICE_LEFT:
      return "SPLICE_LEFT";
    case EventType.SPLICE_MEMBER_ADDED:
      return "SPLICE_MEMBER_ADDED";
    case EventType.SPLICE_MEMBER_REMOVED:
      return "SPLICE_MEMBER_REMOVED";
    case EventType.SPLICE_MODERATOR_ADDED:
      return "SPLICE_MODERATOR_ADDED";
    case EventType.SPLICE_MODERATOR_REMOVED:
      return "SPLICE_MODERATOR_REMOVED";
    case EventType.EVENTS:
      return "EVENTS";
    case EventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Sent in plain binary, except payload is data encrypted via AES key */
export interface Event {
  eventType: EventType;
  payload: Uint8Array;
  aesCounter: number;
}

function createBaseEvent(): Event {
  return { eventType: 0, payload: new Uint8Array(0), aesCounter: 0 };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventType !== 0) {
      writer.uint32(16).int32(message.eventType);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    if (message.aesCounter !== 0) {
      writer.uint32(32).uint32(message.aesCounter);
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.aesCounter = reader.uint32();
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
      eventType: isSet(object.eventType) ? eventTypeFromJSON(object.eventType) : 0,
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(0),
      aesCounter: isSet(object.aesCounter) ? Number(object.aesCounter) : 0,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.eventType !== undefined && (obj.eventType = eventTypeToJSON(message.eventType));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array(0)));
    message.aesCounter !== undefined && (obj.aesCounter = Math.round(message.aesCounter));
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.eventType = object.eventType ?? 0;
    message.payload = object.payload ?? new Uint8Array(0);
    message.aesCounter = object.aesCounter ?? 0;
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
