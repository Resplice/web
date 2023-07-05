/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum CommandType {
  UNKNOWN = 0,
  /** START_AUTH - Auth */
  START_AUTH = 1,
  VERIFY_AUTH_EMAIL = 2,
  VERIFY_AUTH_PHONE = 3,
  AUTHORIZE_SOCKET = 4,
  /** START_SESSION - Session */
  START_SESSION = 5,
  EXPIRE_SESSION = 6,
  /** CREATE_ACCOUNT - Account */
  CREATE_ACCOUNT = 7,
  EDIT_ACCOUNT_NAME = 8,
  EDIT_ACCOUNT_HANDLE = 9,
  EDIT_ACCOUNT_AVATAR = 10,
  DELETE_ACCOUNT = 11,
  /** ADD_ATTRIBUTE - Attributes */
  ADD_ATTRIBUTE = 12,
  EDIT_ATTRIBUTE_NAME = 13,
  EDIT_ATTRIBUTE_VALUE = 14,
  SORT_ATTRIBUTE = 15,
  SEND_ATTRIBUTE_VERIFICATION = 16,
  VERIFY_ATTRIBUTE = 17,
  DELETE_ATTRIBUTE = 18,
  /** INVITE_VIA_HANDLE - Invites */
  INVITE_VIA_HANDLE = 19,
  INVITE_VIA_PHONE = 20,
  INVITE_VIA_EMAIL = 21,
  ADD_INVITE_ATTRIBUTE = 22,
  REMOVE_INVITE_ATTRIBUTE = 23,
  CANCEL_INVITE = 24,
  /** CREATE_META_INVITE - Meta Invites */
  CREATE_META_INVITE = 25,
  ADD_META_INVITE_ATTRIBUTE = 26,
  REMOVE_META_INVITE_ATTRIBUTE = 27,
  DELETE_META_INVITE = 28,
  OPEN_META_INVITE = 29,
  /** ACCEPT_PENDING_CONTACT - Contacts */
  ACCEPT_PENDING_CONTACT = 30,
  DECLINE_PENDING_CONTACT = 31,
  EDIT_CONTACT_ALIAS = 32,
  EDIT_CONTACT_DESCRIPTION = 33,
  FAVORITE_CONTACT = 34,
  UNFAVORITE_CONTACT = 35,
  MUTE_CONTACT = 36,
  UMUTE_CONTACT = 37,
  ARCHIVE_CONTACT = 38,
  UNARCHIVE_CONTACT = 39,
  DELETE_CONTACT = 40,
  CONTACT_ATTRIBUTE_REQUEST_NEW = 41,
  CONTACT_ATTRIBUTE_REMOVE = 42,
  /** ADD_CONTACT_SHARE - Contact Shares */
  ADD_CONTACT_SHARE = 43,
  REMOVE_CONTACT_SHARE = 44,
  /** SPLICE_INVITE_VIA_HANDLE - Splice Invites */
  SPLICE_INVITE_VIA_HANDLE = 45,
  SPLICE_INVITE_VIA_PHONE = 46,
  SPLICE_INVITE_VIA_EMAIL = 47,
  SPLICE_INVITE_VIA_MEMBERSHIP = 48,
  SPLICE_ENABLE_AUTO_ACCEPT_INVITES = 49,
  SPLICE_DISABLE_AUTO_ACCEPT_INVITES = 50,
  DELETE_SPLICE_INVITE = 51,
  /** CREATE_SPLICE_META_INVITE - Splice Meta Invites */
  CREATE_SPLICE_META_INVITE = 52,
  DELETE_SPLICE_META_INVITE = 53,
  OPEN_SPLICE_META_INVITE = 54,
  /** PENDING_SPLICE_ACCEPT - Splices */
  PENDING_SPLICE_ACCEPT = 55,
  PENDING_SPLICE_DECLINE = 56,
  CREATE_SPLICE = 57,
  EDIT_SPLICE_NAME = 58,
  EDIT_SPLICE_DESCRIPTION = 59,
  EDIT_SPLICE_AVATAR = 60,
  FAVORITE_SPLICE = 61,
  UNFAVORITE_SPLICE = 62,
  MUTE_SPLICE = 63,
  UNMUTE_SPLICE = 64,
  ARCHIVE_SPLICE = 65,
  UNARCHIVE_SPLICE = 66,
  ADD_SPLICE_SHARE = 67,
  REMOVE_SPLICE_SHARE = 68,
  LEAVE_SPLICE = 69,
  /** ADD_SPLICE_MEMBER - Splice Members */
  ADD_SPLICE_MEMBER = 70,
  REMOVE_SPLICE_MEMBER = 71,
  ADD_SPLICE_MODERATOR = 72,
  REMOVE_SPLICE_MODERATOR = 73,
  UNRECOGNIZED = -1,
}

export function commandTypeFromJSON(object: any): CommandType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return CommandType.UNKNOWN;
    case 1:
    case "START_AUTH":
      return CommandType.START_AUTH;
    case 2:
    case "VERIFY_AUTH_EMAIL":
      return CommandType.VERIFY_AUTH_EMAIL;
    case 3:
    case "VERIFY_AUTH_PHONE":
      return CommandType.VERIFY_AUTH_PHONE;
    case 4:
    case "AUTHORIZE_SOCKET":
      return CommandType.AUTHORIZE_SOCKET;
    case 5:
    case "START_SESSION":
      return CommandType.START_SESSION;
    case 6:
    case "EXPIRE_SESSION":
      return CommandType.EXPIRE_SESSION;
    case 7:
    case "CREATE_ACCOUNT":
      return CommandType.CREATE_ACCOUNT;
    case 8:
    case "EDIT_ACCOUNT_NAME":
      return CommandType.EDIT_ACCOUNT_NAME;
    case 9:
    case "EDIT_ACCOUNT_HANDLE":
      return CommandType.EDIT_ACCOUNT_HANDLE;
    case 10:
    case "EDIT_ACCOUNT_AVATAR":
      return CommandType.EDIT_ACCOUNT_AVATAR;
    case 11:
    case "DELETE_ACCOUNT":
      return CommandType.DELETE_ACCOUNT;
    case 12:
    case "ADD_ATTRIBUTE":
      return CommandType.ADD_ATTRIBUTE;
    case 13:
    case "EDIT_ATTRIBUTE_NAME":
      return CommandType.EDIT_ATTRIBUTE_NAME;
    case 14:
    case "EDIT_ATTRIBUTE_VALUE":
      return CommandType.EDIT_ATTRIBUTE_VALUE;
    case 15:
    case "SORT_ATTRIBUTE":
      return CommandType.SORT_ATTRIBUTE;
    case 16:
    case "SEND_ATTRIBUTE_VERIFICATION":
      return CommandType.SEND_ATTRIBUTE_VERIFICATION;
    case 17:
    case "VERIFY_ATTRIBUTE":
      return CommandType.VERIFY_ATTRIBUTE;
    case 18:
    case "DELETE_ATTRIBUTE":
      return CommandType.DELETE_ATTRIBUTE;
    case 19:
    case "INVITE_VIA_HANDLE":
      return CommandType.INVITE_VIA_HANDLE;
    case 20:
    case "INVITE_VIA_PHONE":
      return CommandType.INVITE_VIA_PHONE;
    case 21:
    case "INVITE_VIA_EMAIL":
      return CommandType.INVITE_VIA_EMAIL;
    case 22:
    case "ADD_INVITE_ATTRIBUTE":
      return CommandType.ADD_INVITE_ATTRIBUTE;
    case 23:
    case "REMOVE_INVITE_ATTRIBUTE":
      return CommandType.REMOVE_INVITE_ATTRIBUTE;
    case 24:
    case "CANCEL_INVITE":
      return CommandType.CANCEL_INVITE;
    case 25:
    case "CREATE_META_INVITE":
      return CommandType.CREATE_META_INVITE;
    case 26:
    case "ADD_META_INVITE_ATTRIBUTE":
      return CommandType.ADD_META_INVITE_ATTRIBUTE;
    case 27:
    case "REMOVE_META_INVITE_ATTRIBUTE":
      return CommandType.REMOVE_META_INVITE_ATTRIBUTE;
    case 28:
    case "DELETE_META_INVITE":
      return CommandType.DELETE_META_INVITE;
    case 29:
    case "OPEN_META_INVITE":
      return CommandType.OPEN_META_INVITE;
    case 30:
    case "ACCEPT_PENDING_CONTACT":
      return CommandType.ACCEPT_PENDING_CONTACT;
    case 31:
    case "DECLINE_PENDING_CONTACT":
      return CommandType.DECLINE_PENDING_CONTACT;
    case 32:
    case "EDIT_CONTACT_ALIAS":
      return CommandType.EDIT_CONTACT_ALIAS;
    case 33:
    case "EDIT_CONTACT_DESCRIPTION":
      return CommandType.EDIT_CONTACT_DESCRIPTION;
    case 34:
    case "FAVORITE_CONTACT":
      return CommandType.FAVORITE_CONTACT;
    case 35:
    case "UNFAVORITE_CONTACT":
      return CommandType.UNFAVORITE_CONTACT;
    case 36:
    case "MUTE_CONTACT":
      return CommandType.MUTE_CONTACT;
    case 37:
    case "UMUTE_CONTACT":
      return CommandType.UMUTE_CONTACT;
    case 38:
    case "ARCHIVE_CONTACT":
      return CommandType.ARCHIVE_CONTACT;
    case 39:
    case "UNARCHIVE_CONTACT":
      return CommandType.UNARCHIVE_CONTACT;
    case 40:
    case "DELETE_CONTACT":
      return CommandType.DELETE_CONTACT;
    case 41:
    case "CONTACT_ATTRIBUTE_REQUEST_NEW":
      return CommandType.CONTACT_ATTRIBUTE_REQUEST_NEW;
    case 42:
    case "CONTACT_ATTRIBUTE_REMOVE":
      return CommandType.CONTACT_ATTRIBUTE_REMOVE;
    case 43:
    case "ADD_CONTACT_SHARE":
      return CommandType.ADD_CONTACT_SHARE;
    case 44:
    case "REMOVE_CONTACT_SHARE":
      return CommandType.REMOVE_CONTACT_SHARE;
    case 45:
    case "SPLICE_INVITE_VIA_HANDLE":
      return CommandType.SPLICE_INVITE_VIA_HANDLE;
    case 46:
    case "SPLICE_INVITE_VIA_PHONE":
      return CommandType.SPLICE_INVITE_VIA_PHONE;
    case 47:
    case "SPLICE_INVITE_VIA_EMAIL":
      return CommandType.SPLICE_INVITE_VIA_EMAIL;
    case 48:
    case "SPLICE_INVITE_VIA_MEMBERSHIP":
      return CommandType.SPLICE_INVITE_VIA_MEMBERSHIP;
    case 49:
    case "SPLICE_ENABLE_AUTO_ACCEPT_INVITES":
      return CommandType.SPLICE_ENABLE_AUTO_ACCEPT_INVITES;
    case 50:
    case "SPLICE_DISABLE_AUTO_ACCEPT_INVITES":
      return CommandType.SPLICE_DISABLE_AUTO_ACCEPT_INVITES;
    case 51:
    case "DELETE_SPLICE_INVITE":
      return CommandType.DELETE_SPLICE_INVITE;
    case 52:
    case "CREATE_SPLICE_META_INVITE":
      return CommandType.CREATE_SPLICE_META_INVITE;
    case 53:
    case "DELETE_SPLICE_META_INVITE":
      return CommandType.DELETE_SPLICE_META_INVITE;
    case 54:
    case "OPEN_SPLICE_META_INVITE":
      return CommandType.OPEN_SPLICE_META_INVITE;
    case 55:
    case "PENDING_SPLICE_ACCEPT":
      return CommandType.PENDING_SPLICE_ACCEPT;
    case 56:
    case "PENDING_SPLICE_DECLINE":
      return CommandType.PENDING_SPLICE_DECLINE;
    case 57:
    case "CREATE_SPLICE":
      return CommandType.CREATE_SPLICE;
    case 58:
    case "EDIT_SPLICE_NAME":
      return CommandType.EDIT_SPLICE_NAME;
    case 59:
    case "EDIT_SPLICE_DESCRIPTION":
      return CommandType.EDIT_SPLICE_DESCRIPTION;
    case 60:
    case "EDIT_SPLICE_AVATAR":
      return CommandType.EDIT_SPLICE_AVATAR;
    case 61:
    case "FAVORITE_SPLICE":
      return CommandType.FAVORITE_SPLICE;
    case 62:
    case "UNFAVORITE_SPLICE":
      return CommandType.UNFAVORITE_SPLICE;
    case 63:
    case "MUTE_SPLICE":
      return CommandType.MUTE_SPLICE;
    case 64:
    case "UNMUTE_SPLICE":
      return CommandType.UNMUTE_SPLICE;
    case 65:
    case "ARCHIVE_SPLICE":
      return CommandType.ARCHIVE_SPLICE;
    case 66:
    case "UNARCHIVE_SPLICE":
      return CommandType.UNARCHIVE_SPLICE;
    case 67:
    case "ADD_SPLICE_SHARE":
      return CommandType.ADD_SPLICE_SHARE;
    case 68:
    case "REMOVE_SPLICE_SHARE":
      return CommandType.REMOVE_SPLICE_SHARE;
    case 69:
    case "LEAVE_SPLICE":
      return CommandType.LEAVE_SPLICE;
    case 70:
    case "ADD_SPLICE_MEMBER":
      return CommandType.ADD_SPLICE_MEMBER;
    case 71:
    case "REMOVE_SPLICE_MEMBER":
      return CommandType.REMOVE_SPLICE_MEMBER;
    case 72:
    case "ADD_SPLICE_MODERATOR":
      return CommandType.ADD_SPLICE_MODERATOR;
    case 73:
    case "REMOVE_SPLICE_MODERATOR":
      return CommandType.REMOVE_SPLICE_MODERATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommandType.UNRECOGNIZED;
  }
}

export function commandTypeToJSON(object: CommandType): string {
  switch (object) {
    case CommandType.UNKNOWN:
      return "UNKNOWN";
    case CommandType.START_AUTH:
      return "START_AUTH";
    case CommandType.VERIFY_AUTH_EMAIL:
      return "VERIFY_AUTH_EMAIL";
    case CommandType.VERIFY_AUTH_PHONE:
      return "VERIFY_AUTH_PHONE";
    case CommandType.AUTHORIZE_SOCKET:
      return "AUTHORIZE_SOCKET";
    case CommandType.START_SESSION:
      return "START_SESSION";
    case CommandType.EXPIRE_SESSION:
      return "EXPIRE_SESSION";
    case CommandType.CREATE_ACCOUNT:
      return "CREATE_ACCOUNT";
    case CommandType.EDIT_ACCOUNT_NAME:
      return "EDIT_ACCOUNT_NAME";
    case CommandType.EDIT_ACCOUNT_HANDLE:
      return "EDIT_ACCOUNT_HANDLE";
    case CommandType.EDIT_ACCOUNT_AVATAR:
      return "EDIT_ACCOUNT_AVATAR";
    case CommandType.DELETE_ACCOUNT:
      return "DELETE_ACCOUNT";
    case CommandType.ADD_ATTRIBUTE:
      return "ADD_ATTRIBUTE";
    case CommandType.EDIT_ATTRIBUTE_NAME:
      return "EDIT_ATTRIBUTE_NAME";
    case CommandType.EDIT_ATTRIBUTE_VALUE:
      return "EDIT_ATTRIBUTE_VALUE";
    case CommandType.SORT_ATTRIBUTE:
      return "SORT_ATTRIBUTE";
    case CommandType.SEND_ATTRIBUTE_VERIFICATION:
      return "SEND_ATTRIBUTE_VERIFICATION";
    case CommandType.VERIFY_ATTRIBUTE:
      return "VERIFY_ATTRIBUTE";
    case CommandType.DELETE_ATTRIBUTE:
      return "DELETE_ATTRIBUTE";
    case CommandType.INVITE_VIA_HANDLE:
      return "INVITE_VIA_HANDLE";
    case CommandType.INVITE_VIA_PHONE:
      return "INVITE_VIA_PHONE";
    case CommandType.INVITE_VIA_EMAIL:
      return "INVITE_VIA_EMAIL";
    case CommandType.ADD_INVITE_ATTRIBUTE:
      return "ADD_INVITE_ATTRIBUTE";
    case CommandType.REMOVE_INVITE_ATTRIBUTE:
      return "REMOVE_INVITE_ATTRIBUTE";
    case CommandType.CANCEL_INVITE:
      return "CANCEL_INVITE";
    case CommandType.CREATE_META_INVITE:
      return "CREATE_META_INVITE";
    case CommandType.ADD_META_INVITE_ATTRIBUTE:
      return "ADD_META_INVITE_ATTRIBUTE";
    case CommandType.REMOVE_META_INVITE_ATTRIBUTE:
      return "REMOVE_META_INVITE_ATTRIBUTE";
    case CommandType.DELETE_META_INVITE:
      return "DELETE_META_INVITE";
    case CommandType.OPEN_META_INVITE:
      return "OPEN_META_INVITE";
    case CommandType.ACCEPT_PENDING_CONTACT:
      return "ACCEPT_PENDING_CONTACT";
    case CommandType.DECLINE_PENDING_CONTACT:
      return "DECLINE_PENDING_CONTACT";
    case CommandType.EDIT_CONTACT_ALIAS:
      return "EDIT_CONTACT_ALIAS";
    case CommandType.EDIT_CONTACT_DESCRIPTION:
      return "EDIT_CONTACT_DESCRIPTION";
    case CommandType.FAVORITE_CONTACT:
      return "FAVORITE_CONTACT";
    case CommandType.UNFAVORITE_CONTACT:
      return "UNFAVORITE_CONTACT";
    case CommandType.MUTE_CONTACT:
      return "MUTE_CONTACT";
    case CommandType.UMUTE_CONTACT:
      return "UMUTE_CONTACT";
    case CommandType.ARCHIVE_CONTACT:
      return "ARCHIVE_CONTACT";
    case CommandType.UNARCHIVE_CONTACT:
      return "UNARCHIVE_CONTACT";
    case CommandType.DELETE_CONTACT:
      return "DELETE_CONTACT";
    case CommandType.CONTACT_ATTRIBUTE_REQUEST_NEW:
      return "CONTACT_ATTRIBUTE_REQUEST_NEW";
    case CommandType.CONTACT_ATTRIBUTE_REMOVE:
      return "CONTACT_ATTRIBUTE_REMOVE";
    case CommandType.ADD_CONTACT_SHARE:
      return "ADD_CONTACT_SHARE";
    case CommandType.REMOVE_CONTACT_SHARE:
      return "REMOVE_CONTACT_SHARE";
    case CommandType.SPLICE_INVITE_VIA_HANDLE:
      return "SPLICE_INVITE_VIA_HANDLE";
    case CommandType.SPLICE_INVITE_VIA_PHONE:
      return "SPLICE_INVITE_VIA_PHONE";
    case CommandType.SPLICE_INVITE_VIA_EMAIL:
      return "SPLICE_INVITE_VIA_EMAIL";
    case CommandType.SPLICE_INVITE_VIA_MEMBERSHIP:
      return "SPLICE_INVITE_VIA_MEMBERSHIP";
    case CommandType.SPLICE_ENABLE_AUTO_ACCEPT_INVITES:
      return "SPLICE_ENABLE_AUTO_ACCEPT_INVITES";
    case CommandType.SPLICE_DISABLE_AUTO_ACCEPT_INVITES:
      return "SPLICE_DISABLE_AUTO_ACCEPT_INVITES";
    case CommandType.DELETE_SPLICE_INVITE:
      return "DELETE_SPLICE_INVITE";
    case CommandType.CREATE_SPLICE_META_INVITE:
      return "CREATE_SPLICE_META_INVITE";
    case CommandType.DELETE_SPLICE_META_INVITE:
      return "DELETE_SPLICE_META_INVITE";
    case CommandType.OPEN_SPLICE_META_INVITE:
      return "OPEN_SPLICE_META_INVITE";
    case CommandType.PENDING_SPLICE_ACCEPT:
      return "PENDING_SPLICE_ACCEPT";
    case CommandType.PENDING_SPLICE_DECLINE:
      return "PENDING_SPLICE_DECLINE";
    case CommandType.CREATE_SPLICE:
      return "CREATE_SPLICE";
    case CommandType.EDIT_SPLICE_NAME:
      return "EDIT_SPLICE_NAME";
    case CommandType.EDIT_SPLICE_DESCRIPTION:
      return "EDIT_SPLICE_DESCRIPTION";
    case CommandType.EDIT_SPLICE_AVATAR:
      return "EDIT_SPLICE_AVATAR";
    case CommandType.FAVORITE_SPLICE:
      return "FAVORITE_SPLICE";
    case CommandType.UNFAVORITE_SPLICE:
      return "UNFAVORITE_SPLICE";
    case CommandType.MUTE_SPLICE:
      return "MUTE_SPLICE";
    case CommandType.UNMUTE_SPLICE:
      return "UNMUTE_SPLICE";
    case CommandType.ARCHIVE_SPLICE:
      return "ARCHIVE_SPLICE";
    case CommandType.UNARCHIVE_SPLICE:
      return "UNARCHIVE_SPLICE";
    case CommandType.ADD_SPLICE_SHARE:
      return "ADD_SPLICE_SHARE";
    case CommandType.REMOVE_SPLICE_SHARE:
      return "REMOVE_SPLICE_SHARE";
    case CommandType.LEAVE_SPLICE:
      return "LEAVE_SPLICE";
    case CommandType.ADD_SPLICE_MEMBER:
      return "ADD_SPLICE_MEMBER";
    case CommandType.REMOVE_SPLICE_MEMBER:
      return "REMOVE_SPLICE_MEMBER";
    case CommandType.ADD_SPLICE_MODERATOR:
      return "ADD_SPLICE_MODERATOR";
    case CommandType.REMOVE_SPLICE_MODERATOR:
      return "REMOVE_SPLICE_MODERATOR";
    case CommandType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Command {
  commandId: number;
  commandType: CommandType;
  payload: Uint8Array;
}

function createBaseCommand(): Command {
  return { commandId: 0, commandType: 0, payload: new Uint8Array(0) };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commandId !== 0) {
      writer.uint32(8).uint32(message.commandId);
    }
    if (message.commandType !== 0) {
      writer.uint32(16).int32(message.commandType);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.commandId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.commandType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Command {
    return {
      commandId: isSet(object.commandId) ? Number(object.commandId) : 0,
      commandType: isSet(object.commandType) ? commandTypeFromJSON(object.commandType) : 0,
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(0),
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.commandId !== undefined && (obj.commandId = Math.round(message.commandId));
    message.commandType !== undefined && (obj.commandType = commandTypeToJSON(message.commandType));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.commandId = object.commandId ?? 0;
    message.commandType = object.commandType ?? 0;
    message.payload = object.payload ?? new Uint8Array(0);
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
