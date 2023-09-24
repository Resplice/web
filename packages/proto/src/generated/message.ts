/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccountAvatarChanged, AccountCreated, AccountHandleChanged, AccountNameChanged } from "./account/events";
import { AttributeAdded, AttributeNameChanged, AttributeRemoved, AttributeValueChanged } from "./attribute/events";
import { AuthChanged, SessionEnded, SessionStarted } from "./auth/events";
import { Connection, Connections, PendingConnection } from "./connection/state";
import { InviteCreated, InviteDeleted, InviteShareAdded, InviteShareRemoved } from "./invite/events";

export enum ErrorType {
  INVALID_INPUT = 0,
  INVALID_STATE = 1,
  UNAUTHORIZED = 2,
  NOT_IMPLEMENTED = 3,
  UNRECOGNIZED = -1,
}

export function errorTypeFromJSON(object: any): ErrorType {
  switch (object) {
    case 0:
    case "INVALID_INPUT":
      return ErrorType.INVALID_INPUT;
    case 1:
    case "INVALID_STATE":
      return ErrorType.INVALID_STATE;
    case 2:
    case "UNAUTHORIZED":
      return ErrorType.UNAUTHORIZED;
    case 3:
    case "NOT_IMPLEMENTED":
      return ErrorType.NOT_IMPLEMENTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorType.UNRECOGNIZED;
  }
}

export function errorTypeToJSON(object: ErrorType): string {
  switch (object) {
    case ErrorType.INVALID_INPUT:
      return "INVALID_INPUT";
    case ErrorType.INVALID_STATE:
      return "INVALID_STATE";
    case ErrorType.UNAUTHORIZED:
      return "UNAUTHORIZED";
    case ErrorType.NOT_IMPLEMENTED:
      return "NOT_IMPLEMENTED";
    case ErrorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum InputField {
  UNKNOWN = 0,
  ADDRESS = 1,
  AVATAR = 2,
  CREDENTIAL = 3,
  EMAIL = 4,
  HANDLE = 5,
  LOCATION = 6,
  NAME = 7,
  PHONE = 8,
  SOCIAL = 9,
  URL = 10,
  USER_AGENT = 11,
  VERIFY_CODE = 12,
  UNRECOGNIZED = -1,
}

export function inputFieldFromJSON(object: any): InputField {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return InputField.UNKNOWN;
    case 1:
    case "ADDRESS":
      return InputField.ADDRESS;
    case 2:
    case "AVATAR":
      return InputField.AVATAR;
    case 3:
    case "CREDENTIAL":
      return InputField.CREDENTIAL;
    case 4:
    case "EMAIL":
      return InputField.EMAIL;
    case 5:
    case "HANDLE":
      return InputField.HANDLE;
    case 6:
    case "LOCATION":
      return InputField.LOCATION;
    case 7:
    case "NAME":
      return InputField.NAME;
    case 8:
    case "PHONE":
      return InputField.PHONE;
    case 9:
    case "SOCIAL":
      return InputField.SOCIAL;
    case 10:
    case "URL":
      return InputField.URL;
    case 11:
    case "USER_AGENT":
      return InputField.USER_AGENT;
    case 12:
    case "VERIFY_CODE":
      return InputField.VERIFY_CODE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InputField.UNRECOGNIZED;
  }
}

export function inputFieldToJSON(object: InputField): string {
  switch (object) {
    case InputField.UNKNOWN:
      return "UNKNOWN";
    case InputField.ADDRESS:
      return "ADDRESS";
    case InputField.AVATAR:
      return "AVATAR";
    case InputField.CREDENTIAL:
      return "CREDENTIAL";
    case InputField.EMAIL:
      return "EMAIL";
    case InputField.HANDLE:
      return "HANDLE";
    case InputField.LOCATION:
      return "LOCATION";
    case InputField.NAME:
      return "NAME";
    case InputField.PHONE:
      return "PHONE";
    case InputField.SOCIAL:
      return "SOCIAL";
    case InputField.URL:
      return "URL";
    case InputField.USER_AGENT:
      return "USER_AGENT";
    case InputField.VERIFY_CODE:
      return "VERIFY_CODE";
    case InputField.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SecMessage {
  id: number;
  commandId: number;
  message?: { $case: "event"; event: Uint8Array } | { $case: "state"; state: Uint8Array } | {
    $case: "error";
    error: Error;
  } | undefined;
}

export interface Event {
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
    | undefined;
}

export interface State {
  id: number;
  payload?:
    | { $case: "pendingConnection"; pendingConnection: PendingConnection }
    | { $case: "connection"; connection: Connection }
    | { $case: "connections"; connections: Connections }
    | undefined;
}

export interface Error {
  type: ErrorType;
  fields: InputField[];
  attemptsRemaining: number;
}

function createBaseSecMessage(): SecMessage {
  return { id: 0, commandId: 0, message: undefined };
}

export const SecMessage = {
  encode(message: SecMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.commandId !== 0) {
      writer.uint32(16).uint32(message.commandId);
    }
    switch (message.message?.$case) {
      case "event":
        writer.uint32(26).bytes(message.message.event);
        break;
      case "state":
        writer.uint32(34).bytes(message.message.state);
        break;
      case "error":
        Error.encode(message.message.error, writer.uint32(42).fork()).ldelim();
        break;
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

          message.message = { $case: "event", event: reader.bytes() };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.message = { $case: "state", state: reader.bytes() };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.message = { $case: "error", error: Error.decode(reader, reader.uint32()) };
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
      message: isSet(object.event)
        ? { $case: "event", event: bytesFromBase64(object.event) }
        : isSet(object.state)
        ? { $case: "state", state: bytesFromBase64(object.state) }
        : isSet(object.error)
        ? { $case: "error", error: Error.fromJSON(object.error) }
        : undefined,
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
    if (message.message?.$case === "event") {
      obj.event = base64FromBytes(message.message.event);
    }
    if (message.message?.$case === "state") {
      obj.state = base64FromBytes(message.message.state);
    }
    if (message.message?.$case === "error") {
      obj.error = Error.toJSON(message.message.error);
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
    if (object.message?.$case === "event" && object.message?.event !== undefined && object.message?.event !== null) {
      message.message = { $case: "event", event: object.message.event };
    }
    if (object.message?.$case === "state" && object.message?.state !== undefined && object.message?.state !== null) {
      message.message = { $case: "state", state: object.message.state };
    }
    if (object.message?.$case === "error" && object.message?.error !== undefined && object.message?.error !== null) {
      message.message = { $case: "error", error: Error.fromPartial(object.message.error) };
    }
    return message;
  },
};

function createBaseEvent(): Event {
  return { id: 0, payload: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        : undefined,
    };
  },

  toJSON(message: Event): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
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
    return message;
  },
};

function createBaseState(): State {
  return { id: 0, payload: undefined };
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    switch (message.payload?.$case) {
      case "pendingConnection":
        PendingConnection.encode(message.payload.pendingConnection, writer.uint32(18).fork()).ldelim();
        break;
      case "connection":
        Connection.encode(message.payload.connection, writer.uint32(26).fork()).ldelim();
        break;
      case "connections":
        Connections.encode(message.payload.connections, writer.uint32(34).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
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

          message.payload = {
            $case: "pendingConnection",
            pendingConnection: PendingConnection.decode(reader, reader.uint32()),
          };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "connection", connection: Connection.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = { $case: "connections", connections: Connections.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      payload: isSet(object.pendingConnection)
        ? { $case: "pendingConnection", pendingConnection: PendingConnection.fromJSON(object.pendingConnection) }
        : isSet(object.connection)
        ? { $case: "connection", connection: Connection.fromJSON(object.connection) }
        : isSet(object.connections)
        ? { $case: "connections", connections: Connections.fromJSON(object.connections) }
        : undefined,
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.payload?.$case === "pendingConnection") {
      obj.pendingConnection = PendingConnection.toJSON(message.payload.pendingConnection);
    }
    if (message.payload?.$case === "connection") {
      obj.connection = Connection.toJSON(message.payload.connection);
    }
    if (message.payload?.$case === "connections") {
      obj.connections = Connections.toJSON(message.payload.connections);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
    return State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.id = object.id ?? 0;
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
    if (
      object.payload?.$case === "connection" &&
      object.payload?.connection !== undefined &&
      object.payload?.connection !== null
    ) {
      message.payload = { $case: "connection", connection: Connection.fromPartial(object.payload.connection) };
    }
    if (
      object.payload?.$case === "connections" &&
      object.payload?.connections !== undefined &&
      object.payload?.connections !== null
    ) {
      message.payload = { $case: "connections", connections: Connections.fromPartial(object.payload.connections) };
    }
    return message;
  },
};

function createBaseError(): Error {
  return { type: 0, fields: [], attemptsRemaining: 0 };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    writer.uint32(18).fork();
    for (const v of message.fields) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.attemptsRemaining !== 0) {
      writer.uint32(24).uint32(message.attemptsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag === 16) {
            message.fields.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.attemptsRemaining = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      type: isSet(object.type) ? errorTypeFromJSON(object.type) : 0,
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => inputFieldFromJSON(e)) : [],
      attemptsRemaining: isSet(object.attemptsRemaining) ? Number(object.attemptsRemaining) : 0,
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = errorTypeToJSON(message.type);
    }
    if (message.fields?.length) {
      obj.fields = message.fields.map((e) => inputFieldToJSON(e));
    }
    if (message.attemptsRemaining !== 0) {
      obj.attemptsRemaining = Math.round(message.attemptsRemaining);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.type = object.type ?? 0;
    message.fields = object.fields?.map((e) => e) || [];
    message.attemptsRemaining = object.attemptsRemaining ?? 0;
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
