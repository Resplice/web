/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum EventType {
  ERROR = 0,
  /** AUTH_STARTED - Auth */
  AUTH_STARTED = 1,
  AUTH_EMAIL_VERIFIED = 2,
  AUTH_PHONE_VERIFIED = 3,
  SOCKET_AUTHORIZED = 4,
  /** SESSION_STARTED - Session */
  SESSION_STARTED = 5,
  SESSION_EXPIRED = 6,
  /** ACCOUNT_CREATED - Account */
  ACCOUNT_CREATED = 7,
  ACCOUNT_NAME_EDITED = 8,
  ACCOUNT_HANDLE_EDITED = 9,
  ACCOUNT_AVATAR_EDITED = 10,
  ACCOUNT_DELETED = 11,
  /** ADDRESS_ADDED - Attributes */
  ADDRESS_ADDED = 12,
  ATTRIBUTE_NAME_EDITED = 13,
  ATTRIBUTE_VALUE_EDITED = 14,
  ATTRIBUTE_SORTED = 15,
  ATTRIBUTE_VERIFIED = 16,
  ATTRIBUTE_DELETED = 17,
  /** INVITE_CREATED - Invites */
  INVITE_CREATED = 18,
  INVITE_ATTRIBUTE_ADDED = 19,
  INVITE_ATTRIBUTE_REMOVED = 20,
  INVITE_CANCELED = 21,
  /** META_INVITE_CREATED - Meta Invites */
  META_INVITE_CREATED = 22,
  META_INVITE_ATTRIBUTE_ADDED = 23,
  META_INVITE_ATTRIBUTE_REMOVED = 24,
  META_INVITE_DELETED = 25,
  META_INVITE_OPENED = 26,
  /** PENDING_CONTACT_ACCEPTED - Contacts */
  PENDING_CONTACT_ACCEPTED = 27,
  PENDING_CONTACT_DECLINED = 28,
  CONTACT_ALIAS_EDITED = 29,
  CONTACT_DESCRIPTION_EDITED = 30,
  CONTACT_FAVORITED = 31,
  CONTACT_UNFAVORITED = 32,
  CONTACT_MUTED = 33,
  CONTACT_UNMUTED = 34,
  CONTACT_ARCHIVED = 35,
  CONTACT_UNARCHIVED = 36,
  CONTACT_DELETED = 37,
  CONTACT_ATTRIBUTE_REQUESTED = 38,
  CONTACT_ATTRIBUTE_HIDDEN = 39,
  CONTACT_ATTRIBUTE_UNHIDDEN = 40,
  CONTACT_SHARE_ADDED = 41,
  CONTACT_SHARE_REMOVED = 42,
  /** SPLICE_INVITE_CREATED - Splice Invites */
  SPLICE_INVITE_CREATED = 43,
  SPLICE_AUTO_ACCEPT_INVITE_ENABLED = 44,
  SPLICE_AUTO_ACCEPT_INVITE_DISABLED = 45,
  SPLICE_INVITE_DELETED = 46,
  /** SPLICE_META_INVITE_CREATED - Splice Meta Invites */
  SPLICE_META_INVITE_CREATED = 47,
  SPLICE_META_INVITE_DELETED = 48,
  SPLICE_META_INVITE_OPENED = 49,
  /** PENDING_SPLICE_ACCEPTED - Splices */
  PENDING_SPLICE_ACCEPTED = 50,
  PENDING_SPLICE_DECLINED = 51,
  SPLICE_CREATED = 52,
  SPLICE_NAME_EDITED = 53,
  SPLICE_DESCRIPTION_EDITED = 54,
  SPLICE_AVATAR_EDITED = 55,
  SPLICE_FAVORITED = 56,
  SPLICE_UNFAVORITED = 57,
  SPLICE_MUTED = 58,
  SPLICE_UNMUTED = 59,
  SPLICE_ARCHIVED = 60,
  SPLICE_UNARCHIVED = 61,
  SPLICE_SHARE_ADDED = 62,
  SPLICE_SHARE_REMOVED = 63,
  SPLICE_LEFT = 64,
  /** SPLICE_MEMBER_ADDED - Splice Members */
  SPLICE_MEMBER_ADDED = 65,
  SPLICE_MEMBER_REMOVED = 66,
  SPLICE_MODERATOR_ADDED = 67,
  SPLICE_MODERATOR_REMOVED = 68,
  EVENTS = 127,
  UNRECOGNIZED = -1,
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case "ERROR":
      return EventType.ERROR;
    case 1:
    case "AUTH_STARTED":
      return EventType.AUTH_STARTED;
    case 2:
    case "AUTH_EMAIL_VERIFIED":
      return EventType.AUTH_EMAIL_VERIFIED;
    case 3:
    case "AUTH_PHONE_VERIFIED":
      return EventType.AUTH_PHONE_VERIFIED;
    case 4:
    case "SOCKET_AUTHORIZED":
      return EventType.SOCKET_AUTHORIZED;
    case 5:
    case "SESSION_STARTED":
      return EventType.SESSION_STARTED;
    case 6:
    case "SESSION_EXPIRED":
      return EventType.SESSION_EXPIRED;
    case 7:
    case "ACCOUNT_CREATED":
      return EventType.ACCOUNT_CREATED;
    case 8:
    case "ACCOUNT_NAME_EDITED":
      return EventType.ACCOUNT_NAME_EDITED;
    case 9:
    case "ACCOUNT_HANDLE_EDITED":
      return EventType.ACCOUNT_HANDLE_EDITED;
    case 10:
    case "ACCOUNT_AVATAR_EDITED":
      return EventType.ACCOUNT_AVATAR_EDITED;
    case 11:
    case "ACCOUNT_DELETED":
      return EventType.ACCOUNT_DELETED;
    case 12:
    case "ADDRESS_ADDED":
      return EventType.ADDRESS_ADDED;
    case 13:
    case "ATTRIBUTE_NAME_EDITED":
      return EventType.ATTRIBUTE_NAME_EDITED;
    case 14:
    case "ATTRIBUTE_VALUE_EDITED":
      return EventType.ATTRIBUTE_VALUE_EDITED;
    case 15:
    case "ATTRIBUTE_SORTED":
      return EventType.ATTRIBUTE_SORTED;
    case 16:
    case "ATTRIBUTE_VERIFIED":
      return EventType.ATTRIBUTE_VERIFIED;
    case 17:
    case "ATTRIBUTE_DELETED":
      return EventType.ATTRIBUTE_DELETED;
    case 18:
    case "INVITE_CREATED":
      return EventType.INVITE_CREATED;
    case 19:
    case "INVITE_ATTRIBUTE_ADDED":
      return EventType.INVITE_ATTRIBUTE_ADDED;
    case 20:
    case "INVITE_ATTRIBUTE_REMOVED":
      return EventType.INVITE_ATTRIBUTE_REMOVED;
    case 21:
    case "INVITE_CANCELED":
      return EventType.INVITE_CANCELED;
    case 22:
    case "META_INVITE_CREATED":
      return EventType.META_INVITE_CREATED;
    case 23:
    case "META_INVITE_ATTRIBUTE_ADDED":
      return EventType.META_INVITE_ATTRIBUTE_ADDED;
    case 24:
    case "META_INVITE_ATTRIBUTE_REMOVED":
      return EventType.META_INVITE_ATTRIBUTE_REMOVED;
    case 25:
    case "META_INVITE_DELETED":
      return EventType.META_INVITE_DELETED;
    case 26:
    case "META_INVITE_OPENED":
      return EventType.META_INVITE_OPENED;
    case 27:
    case "PENDING_CONTACT_ACCEPTED":
      return EventType.PENDING_CONTACT_ACCEPTED;
    case 28:
    case "PENDING_CONTACT_DECLINED":
      return EventType.PENDING_CONTACT_DECLINED;
    case 29:
    case "CONTACT_ALIAS_EDITED":
      return EventType.CONTACT_ALIAS_EDITED;
    case 30:
    case "CONTACT_DESCRIPTION_EDITED":
      return EventType.CONTACT_DESCRIPTION_EDITED;
    case 31:
    case "CONTACT_FAVORITED":
      return EventType.CONTACT_FAVORITED;
    case 32:
    case "CONTACT_UNFAVORITED":
      return EventType.CONTACT_UNFAVORITED;
    case 33:
    case "CONTACT_MUTED":
      return EventType.CONTACT_MUTED;
    case 34:
    case "CONTACT_UNMUTED":
      return EventType.CONTACT_UNMUTED;
    case 35:
    case "CONTACT_ARCHIVED":
      return EventType.CONTACT_ARCHIVED;
    case 36:
    case "CONTACT_UNARCHIVED":
      return EventType.CONTACT_UNARCHIVED;
    case 37:
    case "CONTACT_DELETED":
      return EventType.CONTACT_DELETED;
    case 38:
    case "CONTACT_ATTRIBUTE_REQUESTED":
      return EventType.CONTACT_ATTRIBUTE_REQUESTED;
    case 39:
    case "CONTACT_ATTRIBUTE_HIDDEN":
      return EventType.CONTACT_ATTRIBUTE_HIDDEN;
    case 40:
    case "CONTACT_ATTRIBUTE_UNHIDDEN":
      return EventType.CONTACT_ATTRIBUTE_UNHIDDEN;
    case 41:
    case "CONTACT_SHARE_ADDED":
      return EventType.CONTACT_SHARE_ADDED;
    case 42:
    case "CONTACT_SHARE_REMOVED":
      return EventType.CONTACT_SHARE_REMOVED;
    case 43:
    case "SPLICE_INVITE_CREATED":
      return EventType.SPLICE_INVITE_CREATED;
    case 44:
    case "SPLICE_AUTO_ACCEPT_INVITE_ENABLED":
      return EventType.SPLICE_AUTO_ACCEPT_INVITE_ENABLED;
    case 45:
    case "SPLICE_AUTO_ACCEPT_INVITE_DISABLED":
      return EventType.SPLICE_AUTO_ACCEPT_INVITE_DISABLED;
    case 46:
    case "SPLICE_INVITE_DELETED":
      return EventType.SPLICE_INVITE_DELETED;
    case 47:
    case "SPLICE_META_INVITE_CREATED":
      return EventType.SPLICE_META_INVITE_CREATED;
    case 48:
    case "SPLICE_META_INVITE_DELETED":
      return EventType.SPLICE_META_INVITE_DELETED;
    case 49:
    case "SPLICE_META_INVITE_OPENED":
      return EventType.SPLICE_META_INVITE_OPENED;
    case 50:
    case "PENDING_SPLICE_ACCEPTED":
      return EventType.PENDING_SPLICE_ACCEPTED;
    case 51:
    case "PENDING_SPLICE_DECLINED":
      return EventType.PENDING_SPLICE_DECLINED;
    case 52:
    case "SPLICE_CREATED":
      return EventType.SPLICE_CREATED;
    case 53:
    case "SPLICE_NAME_EDITED":
      return EventType.SPLICE_NAME_EDITED;
    case 54:
    case "SPLICE_DESCRIPTION_EDITED":
      return EventType.SPLICE_DESCRIPTION_EDITED;
    case 55:
    case "SPLICE_AVATAR_EDITED":
      return EventType.SPLICE_AVATAR_EDITED;
    case 56:
    case "SPLICE_FAVORITED":
      return EventType.SPLICE_FAVORITED;
    case 57:
    case "SPLICE_UNFAVORITED":
      return EventType.SPLICE_UNFAVORITED;
    case 58:
    case "SPLICE_MUTED":
      return EventType.SPLICE_MUTED;
    case 59:
    case "SPLICE_UNMUTED":
      return EventType.SPLICE_UNMUTED;
    case 60:
    case "SPLICE_ARCHIVED":
      return EventType.SPLICE_ARCHIVED;
    case 61:
    case "SPLICE_UNARCHIVED":
      return EventType.SPLICE_UNARCHIVED;
    case 62:
    case "SPLICE_SHARE_ADDED":
      return EventType.SPLICE_SHARE_ADDED;
    case 63:
    case "SPLICE_SHARE_REMOVED":
      return EventType.SPLICE_SHARE_REMOVED;
    case 64:
    case "SPLICE_LEFT":
      return EventType.SPLICE_LEFT;
    case 65:
    case "SPLICE_MEMBER_ADDED":
      return EventType.SPLICE_MEMBER_ADDED;
    case 66:
    case "SPLICE_MEMBER_REMOVED":
      return EventType.SPLICE_MEMBER_REMOVED;
    case 67:
    case "SPLICE_MODERATOR_ADDED":
      return EventType.SPLICE_MODERATOR_ADDED;
    case 68:
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
    case EventType.AUTH_STARTED:
      return "AUTH_STARTED";
    case EventType.AUTH_EMAIL_VERIFIED:
      return "AUTH_EMAIL_VERIFIED";
    case EventType.AUTH_PHONE_VERIFIED:
      return "AUTH_PHONE_VERIFIED";
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
    case EventType.ADDRESS_ADDED:
      return "ADDRESS_ADDED";
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
