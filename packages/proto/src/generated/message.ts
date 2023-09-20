/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccountAvatarChanged, AccountCreated, AccountHandleChanged, AccountNameChanged } from "./account/events";
import { AttributeAdded, AttributeNameChanged, AttributeRemoved, AttributeValueChanged } from "./attribute/events";
import { AuthChanged, SessionEnded, SessionStarted } from "./auth/events";
import { Error } from "./error";
import { InviteCreated, InviteDeleted, InviteShareAdded, InviteShareRemoved } from "./invite/events";
import { PendingConnection } from "./invite/state";

export interface SecMessage {
  id: number;
  commandId: number;
  message: Uint8Array;
  error: Error | undefined;
}

export interface Message {
  id: number;
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
    | { $case: "attributeRemoved"; attributeRemoved: AttributeRemoved }
    | { $case: "inviteCreated"; inviteCreated: InviteCreated }
    | { $case: "inviteShareAdded"; inviteShareAdded: InviteShareAdded }
    | { $case: "inviteShareRemoved"; inviteShareRemoved: InviteShareRemoved }
    | { $case: "inviteDeleted"; inviteDeleted: InviteDeleted }
    | { $case: "pendingConnection"; pendingConnection: PendingConnection }
    | undefined;
}

function createBaseSecMessage(): SecMessage {
  return { id: 0, commandId: 0, message: new Uint8Array(0), error: undefined };
}

export const SecMessage = {
  encode(message: SecMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.commandId !== 0) {
      writer.uint32(16).uint32(message.commandId);
    }
    if (message.message.length !== 0) {
      writer.uint32(26).bytes(message.message);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecMessage();
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

          message.commandId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecMessage {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      commandId: isSet(object.commandId) ? Number(object.commandId) : 0,
      message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0),
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SecMessage): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.commandId !== 0) {
      obj.commandId = Math.round(message.commandId);
    }
    if (message.message.length !== 0) {
      obj.message = base64FromBytes(message.message);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SecMessage>, I>>(base?: I): SecMessage {
    return SecMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SecMessage>, I>>(object: I): SecMessage {
    const message = createBaseSecMessage();
    message.id = object.id ?? 0;
    message.commandId = object.commandId ?? 0;
    message.message = object.message ?? new Uint8Array(0);
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseMessage(): Message {
  return { id: 0, payload: undefined };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    switch (message.payload?.$case) {
      case "authChanged":
        AuthChanged.encode(message.payload.authChanged, writer.uint32(18).fork()).ldelim();
        break;
      case "sessionStarted":
        SessionStarted.encode(message.payload.sessionStarted, writer.uint32(26).fork()).ldelim();
        break;
      case "sessionEnded":
        SessionEnded.encode(message.payload.sessionEnded, writer.uint32(34).fork()).ldelim();
        break;
      case "accountCreated":
        AccountCreated.encode(message.payload.accountCreated, writer.uint32(42).fork()).ldelim();
        break;
      case "accountNameChanged":
        AccountNameChanged.encode(message.payload.accountNameChanged, writer.uint32(50).fork()).ldelim();
        break;
      case "accountHandleChanged":
        AccountHandleChanged.encode(message.payload.accountHandleChanged, writer.uint32(58).fork()).ldelim();
        break;
      case "accountAvatarChanged":
        AccountAvatarChanged.encode(message.payload.accountAvatarChanged, writer.uint32(66).fork()).ldelim();
        break;
      case "attributeAdded":
        AttributeAdded.encode(message.payload.attributeAdded, writer.uint32(74).fork()).ldelim();
        break;
      case "attributeNameChanged":
        AttributeNameChanged.encode(message.payload.attributeNameChanged, writer.uint32(82).fork()).ldelim();
        break;
      case "attributeValueChanged":
        AttributeValueChanged.encode(message.payload.attributeValueChanged, writer.uint32(90).fork()).ldelim();
        break;
      case "attributeRemoved":
        AttributeRemoved.encode(message.payload.attributeRemoved, writer.uint32(114).fork()).ldelim();
        break;
      case "inviteCreated":
        InviteCreated.encode(message.payload.inviteCreated, writer.uint32(122).fork()).ldelim();
        break;
      case "inviteShareAdded":
        InviteShareAdded.encode(message.payload.inviteShareAdded, writer.uint32(130).fork()).ldelim();
        break;
      case "inviteShareRemoved":
        InviteShareRemoved.encode(message.payload.inviteShareRemoved, writer.uint32(138).fork()).ldelim();
        break;
      case "inviteDeleted":
        InviteDeleted.encode(message.payload.inviteDeleted, writer.uint32(146).fork()).ldelim();
        break;
      case "pendingConnection":
        PendingConnection.encode(message.payload.pendingConnection, writer.uint32(154).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
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

          message.payload = { $case: "authChanged", authChanged: AuthChanged.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "sessionStarted", sessionStarted: SessionStarted.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = { $case: "sessionEnded", sessionEnded: SessionEnded.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = { $case: "accountCreated", accountCreated: AccountCreated.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = {
            $case: "accountNameChanged",
            accountNameChanged: AccountNameChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = {
            $case: "accountHandleChanged",
            accountHandleChanged: AccountHandleChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.payload = {
            $case: "accountAvatarChanged",
            accountAvatarChanged: AccountAvatarChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payload = { $case: "attributeAdded", attributeAdded: AttributeAdded.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.payload = {
            $case: "attributeNameChanged",
            attributeNameChanged: AttributeNameChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.payload = {
            $case: "attributeValueChanged",
            attributeValueChanged: AttributeValueChanged.decode(reader, reader.uint32()),
          };
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.payload = {
            $case: "attributeRemoved",
            attributeRemoved: AttributeRemoved.decode(reader, reader.uint32()),
          };
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.payload = { $case: "inviteCreated", inviteCreated: InviteCreated.decode(reader, reader.uint32()) };
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.payload = {
            $case: "inviteShareAdded",
            inviteShareAdded: InviteShareAdded.decode(reader, reader.uint32()),
          };
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.payload = {
            $case: "inviteShareRemoved",
            inviteShareRemoved: InviteShareRemoved.decode(reader, reader.uint32()),
          };
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.payload = { $case: "inviteDeleted", inviteDeleted: InviteDeleted.decode(reader, reader.uint32()) };
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.payload = {
            $case: "pendingConnection",
            pendingConnection: PendingConnection.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Message {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
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
        : isSet(object.attributeRemoved)
        ? { $case: "attributeRemoved", attributeRemoved: AttributeRemoved.fromJSON(object.attributeRemoved) }
        : isSet(object.inviteCreated)
        ? { $case: "inviteCreated", inviteCreated: InviteCreated.fromJSON(object.inviteCreated) }
        : isSet(object.inviteShareAdded)
        ? { $case: "inviteShareAdded", inviteShareAdded: InviteShareAdded.fromJSON(object.inviteShareAdded) }
        : isSet(object.inviteShareRemoved)
        ? { $case: "inviteShareRemoved", inviteShareRemoved: InviteShareRemoved.fromJSON(object.inviteShareRemoved) }
        : isSet(object.inviteDeleted)
        ? { $case: "inviteDeleted", inviteDeleted: InviteDeleted.fromJSON(object.inviteDeleted) }
        : isSet(object.pendingConnection)
        ? { $case: "pendingConnection", pendingConnection: PendingConnection.fromJSON(object.pendingConnection) }
        : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.payload?.$case === "authChanged") {
      obj.authChanged = AuthChanged.toJSON(message.payload.authChanged);
    }
    if (message.payload?.$case === "sessionStarted") {
      obj.sessionStarted = SessionStarted.toJSON(message.payload.sessionStarted);
    }
    if (message.payload?.$case === "sessionEnded") {
      obj.sessionEnded = SessionEnded.toJSON(message.payload.sessionEnded);
    }
    if (message.payload?.$case === "accountCreated") {
      obj.accountCreated = AccountCreated.toJSON(message.payload.accountCreated);
    }
    if (message.payload?.$case === "accountNameChanged") {
      obj.accountNameChanged = AccountNameChanged.toJSON(message.payload.accountNameChanged);
    }
    if (message.payload?.$case === "accountHandleChanged") {
      obj.accountHandleChanged = AccountHandleChanged.toJSON(message.payload.accountHandleChanged);
    }
    if (message.payload?.$case === "accountAvatarChanged") {
      obj.accountAvatarChanged = AccountAvatarChanged.toJSON(message.payload.accountAvatarChanged);
    }
    if (message.payload?.$case === "attributeAdded") {
      obj.attributeAdded = AttributeAdded.toJSON(message.payload.attributeAdded);
    }
    if (message.payload?.$case === "attributeNameChanged") {
      obj.attributeNameChanged = AttributeNameChanged.toJSON(message.payload.attributeNameChanged);
    }
    if (message.payload?.$case === "attributeValueChanged") {
      obj.attributeValueChanged = AttributeValueChanged.toJSON(message.payload.attributeValueChanged);
    }
    if (message.payload?.$case === "attributeRemoved") {
      obj.attributeRemoved = AttributeRemoved.toJSON(message.payload.attributeRemoved);
    }
    if (message.payload?.$case === "inviteCreated") {
      obj.inviteCreated = InviteCreated.toJSON(message.payload.inviteCreated);
    }
    if (message.payload?.$case === "inviteShareAdded") {
      obj.inviteShareAdded = InviteShareAdded.toJSON(message.payload.inviteShareAdded);
    }
    if (message.payload?.$case === "inviteShareRemoved") {
      obj.inviteShareRemoved = InviteShareRemoved.toJSON(message.payload.inviteShareRemoved);
    }
    if (message.payload?.$case === "inviteDeleted") {
      obj.inviteDeleted = InviteDeleted.toJSON(message.payload.inviteDeleted);
    }
    if (message.payload?.$case === "pendingConnection") {
      obj.pendingConnection = PendingConnection.toJSON(message.payload.pendingConnection);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.id = object.id ?? 0;
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
      object.payload?.$case === "attributeRemoved" &&
      object.payload?.attributeRemoved !== undefined &&
      object.payload?.attributeRemoved !== null
    ) {
      message.payload = {
        $case: "attributeRemoved",
        attributeRemoved: AttributeRemoved.fromPartial(object.payload.attributeRemoved),
      };
    }
    if (
      object.payload?.$case === "inviteCreated" &&
      object.payload?.inviteCreated !== undefined &&
      object.payload?.inviteCreated !== null
    ) {
      message.payload = {
        $case: "inviteCreated",
        inviteCreated: InviteCreated.fromPartial(object.payload.inviteCreated),
      };
    }
    if (
      object.payload?.$case === "inviteShareAdded" &&
      object.payload?.inviteShareAdded !== undefined &&
      object.payload?.inviteShareAdded !== null
    ) {
      message.payload = {
        $case: "inviteShareAdded",
        inviteShareAdded: InviteShareAdded.fromPartial(object.payload.inviteShareAdded),
      };
    }
    if (
      object.payload?.$case === "inviteShareRemoved" &&
      object.payload?.inviteShareRemoved !== undefined &&
      object.payload?.inviteShareRemoved !== null
    ) {
      message.payload = {
        $case: "inviteShareRemoved",
        inviteShareRemoved: InviteShareRemoved.fromPartial(object.payload.inviteShareRemoved),
      };
    }
    if (
      object.payload?.$case === "inviteDeleted" &&
      object.payload?.inviteDeleted !== undefined &&
      object.payload?.inviteDeleted !== null
    ) {
      message.payload = {
        $case: "inviteDeleted",
        inviteDeleted: InviteDeleted.fromPartial(object.payload.inviteDeleted),
      };
    }
    if (
      object.payload?.$case === "pendingConnection" &&
      object.payload?.pendingConnection !== undefined &&
      object.payload?.pendingConnection !== null
    ) {
      message.payload = {
        $case: "pendingConnection",
        pendingConnection: PendingConnection.fromPartial(object.payload.pendingConnection),
      };
    }
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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
