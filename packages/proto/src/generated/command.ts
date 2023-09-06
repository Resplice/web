/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ChangeAccountAvatar, ChangeAccountHandle, ChangeAccountName } from "./account/commands";
import {
  AddAttribute,
  ChangeAttributeName,
  ChangeAttributeValue,
  RemoveAttribute,
  SendAttributeVerification,
  SortAttribute,
  VerifyAttribute,
} from "./attribute/commands";
import {
  AuthorizeSocket,
  CreateAccount,
  DeleteAccount,
  EndSession,
  StartAuth,
  StartSession,
  VerifyEmail,
  VerifyPhone,
} from "./auth/commands";

export interface Command {
  id: number;
  payload?:
    | { $case: "startAuth"; startAuth: StartAuth }
    | { $case: "verifyEmail"; verifyEmail: VerifyEmail }
    | { $case: "verifyPhone"; verifyPhone: VerifyPhone }
    | { $case: "createAccount"; createAccount: CreateAccount }
    | { $case: "deleteAccount"; deleteAccount: DeleteAccount }
    | { $case: "startSession"; startSession: StartSession }
    | { $case: "authorizeSocket"; authorizeSocket: AuthorizeSocket }
    | { $case: "endSession"; endSession: EndSession }
    | { $case: "changeAccountName"; changeAccountName: ChangeAccountName }
    | { $case: "changeAccountHandle"; changeAccountHandle: ChangeAccountHandle }
    | { $case: "changeAccountAvatar"; changeAccountAvatar: ChangeAccountAvatar }
    | { $case: "addAttribute"; addAttribute: AddAttribute }
    | { $case: "changeAttributeName"; changeAttributeName: ChangeAttributeName }
    | { $case: "changeAttributeValue"; changeAttributeValue: ChangeAttributeValue }
    | { $case: "sortAttribute"; sortAttribute: SortAttribute }
    | { $case: "sendAttributeVerification"; sendAttributeVerification: SendAttributeVerification }
    | { $case: "verifyAttribute"; verifyAttribute: VerifyAttribute }
    | { $case: "removeAttribute"; removeAttribute: RemoveAttribute };
}

function createBaseCommand(): Command {
  return { id: 0, payload: undefined };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    switch (message.payload?.$case) {
      case "startAuth":
        StartAuth.encode(message.payload.startAuth, writer.uint32(18).fork()).ldelim();
        break;
      case "verifyEmail":
        VerifyEmail.encode(message.payload.verifyEmail, writer.uint32(26).fork()).ldelim();
        break;
      case "verifyPhone":
        VerifyPhone.encode(message.payload.verifyPhone, writer.uint32(34).fork()).ldelim();
        break;
      case "createAccount":
        CreateAccount.encode(message.payload.createAccount, writer.uint32(42).fork()).ldelim();
        break;
      case "deleteAccount":
        DeleteAccount.encode(message.payload.deleteAccount, writer.uint32(50).fork()).ldelim();
        break;
      case "startSession":
        StartSession.encode(message.payload.startSession, writer.uint32(58).fork()).ldelim();
        break;
      case "authorizeSocket":
        AuthorizeSocket.encode(message.payload.authorizeSocket, writer.uint32(66).fork()).ldelim();
        break;
      case "endSession":
        EndSession.encode(message.payload.endSession, writer.uint32(74).fork()).ldelim();
        break;
      case "changeAccountName":
        ChangeAccountName.encode(message.payload.changeAccountName, writer.uint32(82).fork()).ldelim();
        break;
      case "changeAccountHandle":
        ChangeAccountHandle.encode(message.payload.changeAccountHandle, writer.uint32(90).fork()).ldelim();
        break;
      case "changeAccountAvatar":
        ChangeAccountAvatar.encode(message.payload.changeAccountAvatar, writer.uint32(98).fork()).ldelim();
        break;
      case "addAttribute":
        AddAttribute.encode(message.payload.addAttribute, writer.uint32(106).fork()).ldelim();
        break;
      case "changeAttributeName":
        ChangeAttributeName.encode(message.payload.changeAttributeName, writer.uint32(114).fork()).ldelim();
        break;
      case "changeAttributeValue":
        ChangeAttributeValue.encode(message.payload.changeAttributeValue, writer.uint32(122).fork()).ldelim();
        break;
      case "sortAttribute":
        SortAttribute.encode(message.payload.sortAttribute, writer.uint32(130).fork()).ldelim();
        break;
      case "sendAttributeVerification":
        SendAttributeVerification.encode(message.payload.sendAttributeVerification, writer.uint32(138).fork()).ldelim();
        break;
      case "verifyAttribute":
        VerifyAttribute.encode(message.payload.verifyAttribute, writer.uint32(146).fork()).ldelim();
        break;
      case "removeAttribute":
        RemoveAttribute.encode(message.payload.removeAttribute, writer.uint32(154).fork()).ldelim();
        break;
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

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = { $case: "startAuth", startAuth: StartAuth.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "verifyEmail", verifyEmail: VerifyEmail.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = { $case: "verifyPhone", verifyPhone: VerifyPhone.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = { $case: "createAccount", createAccount: CreateAccount.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = { $case: "deleteAccount", deleteAccount: DeleteAccount.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = { $case: "startSession", startSession: StartSession.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.payload = {
            $case: "authorizeSocket",
            authorizeSocket: AuthorizeSocket.decode(reader, reader.uint32()),
          };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payload = { $case: "endSession", endSession: EndSession.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.payload = {
            $case: "changeAccountName",
            changeAccountName: ChangeAccountName.decode(reader, reader.uint32()),
          };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.payload = {
            $case: "changeAccountHandle",
            changeAccountHandle: ChangeAccountHandle.decode(reader, reader.uint32()),
          };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.payload = {
            $case: "changeAccountAvatar",
            changeAccountAvatar: ChangeAccountAvatar.decode(reader, reader.uint32()),
          };
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.payload = { $case: "addAttribute", addAttribute: AddAttribute.decode(reader, reader.uint32()) };
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.payload = {
            $case: "changeAttributeName",
            changeAttributeName: ChangeAttributeName.decode(reader, reader.uint32()),
          };
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.payload = {
            $case: "changeAttributeValue",
            changeAttributeValue: ChangeAttributeValue.decode(reader, reader.uint32()),
          };
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.payload = { $case: "sortAttribute", sortAttribute: SortAttribute.decode(reader, reader.uint32()) };
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.payload = {
            $case: "sendAttributeVerification",
            sendAttributeVerification: SendAttributeVerification.decode(reader, reader.uint32()),
          };
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.payload = {
            $case: "verifyAttribute",
            verifyAttribute: VerifyAttribute.decode(reader, reader.uint32()),
          };
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.payload = {
            $case: "removeAttribute",
            removeAttribute: RemoveAttribute.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Command {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      payload: isSet(object.startAuth)
        ? { $case: "startAuth", startAuth: StartAuth.fromJSON(object.startAuth) }
        : isSet(object.verifyEmail)
        ? { $case: "verifyEmail", verifyEmail: VerifyEmail.fromJSON(object.verifyEmail) }
        : isSet(object.verifyPhone)
        ? { $case: "verifyPhone", verifyPhone: VerifyPhone.fromJSON(object.verifyPhone) }
        : isSet(object.createAccount)
        ? { $case: "createAccount", createAccount: CreateAccount.fromJSON(object.createAccount) }
        : isSet(object.deleteAccount)
        ? { $case: "deleteAccount", deleteAccount: DeleteAccount.fromJSON(object.deleteAccount) }
        : isSet(object.startSession)
        ? { $case: "startSession", startSession: StartSession.fromJSON(object.startSession) }
        : isSet(object.authorizeSocket)
        ? { $case: "authorizeSocket", authorizeSocket: AuthorizeSocket.fromJSON(object.authorizeSocket) }
        : isSet(object.endSession)
        ? { $case: "endSession", endSession: EndSession.fromJSON(object.endSession) }
        : isSet(object.changeAccountName)
        ? { $case: "changeAccountName", changeAccountName: ChangeAccountName.fromJSON(object.changeAccountName) }
        : isSet(object.changeAccountHandle)
        ? {
          $case: "changeAccountHandle",
          changeAccountHandle: ChangeAccountHandle.fromJSON(object.changeAccountHandle),
        }
        : isSet(object.changeAccountAvatar)
        ? {
          $case: "changeAccountAvatar",
          changeAccountAvatar: ChangeAccountAvatar.fromJSON(object.changeAccountAvatar),
        }
        : isSet(object.addAttribute)
        ? { $case: "addAttribute", addAttribute: AddAttribute.fromJSON(object.addAttribute) }
        : isSet(object.changeAttributeName)
        ? {
          $case: "changeAttributeName",
          changeAttributeName: ChangeAttributeName.fromJSON(object.changeAttributeName),
        }
        : isSet(object.changeAttributeValue)
        ? {
          $case: "changeAttributeValue",
          changeAttributeValue: ChangeAttributeValue.fromJSON(object.changeAttributeValue),
        }
        : isSet(object.sortAttribute)
        ? { $case: "sortAttribute", sortAttribute: SortAttribute.fromJSON(object.sortAttribute) }
        : isSet(object.sendAttributeVerification)
        ? {
          $case: "sendAttributeVerification",
          sendAttributeVerification: SendAttributeVerification.fromJSON(object.sendAttributeVerification),
        }
        : isSet(object.verifyAttribute)
        ? { $case: "verifyAttribute", verifyAttribute: VerifyAttribute.fromJSON(object.verifyAttribute) }
        : isSet(object.removeAttribute)
        ? { $case: "removeAttribute", removeAttribute: RemoveAttribute.fromJSON(object.removeAttribute) }
        : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.payload?.$case === "startAuth" &&
      (obj.startAuth = message.payload?.startAuth ? StartAuth.toJSON(message.payload?.startAuth) : undefined);
    message.payload?.$case === "verifyEmail" &&
      (obj.verifyEmail = message.payload?.verifyEmail ? VerifyEmail.toJSON(message.payload?.verifyEmail) : undefined);
    message.payload?.$case === "verifyPhone" &&
      (obj.verifyPhone = message.payload?.verifyPhone ? VerifyPhone.toJSON(message.payload?.verifyPhone) : undefined);
    message.payload?.$case === "createAccount" && (obj.createAccount = message.payload?.createAccount
      ? CreateAccount.toJSON(message.payload?.createAccount)
      : undefined);
    message.payload?.$case === "deleteAccount" && (obj.deleteAccount = message.payload?.deleteAccount
      ? DeleteAccount.toJSON(message.payload?.deleteAccount)
      : undefined);
    message.payload?.$case === "startSession" &&
      (obj.startSession = message.payload?.startSession
        ? StartSession.toJSON(message.payload?.startSession)
        : undefined);
    message.payload?.$case === "authorizeSocket" && (obj.authorizeSocket = message.payload?.authorizeSocket
      ? AuthorizeSocket.toJSON(message.payload?.authorizeSocket)
      : undefined);
    message.payload?.$case === "endSession" &&
      (obj.endSession = message.payload?.endSession ? EndSession.toJSON(message.payload?.endSession) : undefined);
    message.payload?.$case === "changeAccountName" && (obj.changeAccountName = message.payload?.changeAccountName
      ? ChangeAccountName.toJSON(message.payload?.changeAccountName)
      : undefined);
    message.payload?.$case === "changeAccountHandle" && (obj.changeAccountHandle = message.payload?.changeAccountHandle
      ? ChangeAccountHandle.toJSON(message.payload?.changeAccountHandle)
      : undefined);
    message.payload?.$case === "changeAccountAvatar" && (obj.changeAccountAvatar = message.payload?.changeAccountAvatar
      ? ChangeAccountAvatar.toJSON(message.payload?.changeAccountAvatar)
      : undefined);
    message.payload?.$case === "addAttribute" &&
      (obj.addAttribute = message.payload?.addAttribute
        ? AddAttribute.toJSON(message.payload?.addAttribute)
        : undefined);
    message.payload?.$case === "changeAttributeName" && (obj.changeAttributeName = message.payload?.changeAttributeName
      ? ChangeAttributeName.toJSON(message.payload?.changeAttributeName)
      : undefined);
    message.payload?.$case === "changeAttributeValue" &&
      (obj.changeAttributeValue = message.payload?.changeAttributeValue
        ? ChangeAttributeValue.toJSON(message.payload?.changeAttributeValue)
        : undefined);
    message.payload?.$case === "sortAttribute" && (obj.sortAttribute = message.payload?.sortAttribute
      ? SortAttribute.toJSON(message.payload?.sortAttribute)
      : undefined);
    message.payload?.$case === "sendAttributeVerification" &&
      (obj.sendAttributeVerification = message.payload?.sendAttributeVerification
        ? SendAttributeVerification.toJSON(message.payload?.sendAttributeVerification)
        : undefined);
    message.payload?.$case === "verifyAttribute" && (obj.verifyAttribute = message.payload?.verifyAttribute
      ? VerifyAttribute.toJSON(message.payload?.verifyAttribute)
      : undefined);
    message.payload?.$case === "removeAttribute" && (obj.removeAttribute = message.payload?.removeAttribute
      ? RemoveAttribute.toJSON(message.payload?.removeAttribute)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.id = object.id ?? 0;
    if (
      object.payload?.$case === "startAuth" &&
      object.payload?.startAuth !== undefined &&
      object.payload?.startAuth !== null
    ) {
      message.payload = { $case: "startAuth", startAuth: StartAuth.fromPartial(object.payload.startAuth) };
    }
    if (
      object.payload?.$case === "verifyEmail" &&
      object.payload?.verifyEmail !== undefined &&
      object.payload?.verifyEmail !== null
    ) {
      message.payload = { $case: "verifyEmail", verifyEmail: VerifyEmail.fromPartial(object.payload.verifyEmail) };
    }
    if (
      object.payload?.$case === "verifyPhone" &&
      object.payload?.verifyPhone !== undefined &&
      object.payload?.verifyPhone !== null
    ) {
      message.payload = { $case: "verifyPhone", verifyPhone: VerifyPhone.fromPartial(object.payload.verifyPhone) };
    }
    if (
      object.payload?.$case === "createAccount" &&
      object.payload?.createAccount !== undefined &&
      object.payload?.createAccount !== null
    ) {
      message.payload = {
        $case: "createAccount",
        createAccount: CreateAccount.fromPartial(object.payload.createAccount),
      };
    }
    if (
      object.payload?.$case === "deleteAccount" &&
      object.payload?.deleteAccount !== undefined &&
      object.payload?.deleteAccount !== null
    ) {
      message.payload = {
        $case: "deleteAccount",
        deleteAccount: DeleteAccount.fromPartial(object.payload.deleteAccount),
      };
    }
    if (
      object.payload?.$case === "startSession" &&
      object.payload?.startSession !== undefined &&
      object.payload?.startSession !== null
    ) {
      message.payload = { $case: "startSession", startSession: StartSession.fromPartial(object.payload.startSession) };
    }
    if (
      object.payload?.$case === "authorizeSocket" &&
      object.payload?.authorizeSocket !== undefined &&
      object.payload?.authorizeSocket !== null
    ) {
      message.payload = {
        $case: "authorizeSocket",
        authorizeSocket: AuthorizeSocket.fromPartial(object.payload.authorizeSocket),
      };
    }
    if (
      object.payload?.$case === "endSession" &&
      object.payload?.endSession !== undefined &&
      object.payload?.endSession !== null
    ) {
      message.payload = { $case: "endSession", endSession: EndSession.fromPartial(object.payload.endSession) };
    }
    if (
      object.payload?.$case === "changeAccountName" &&
      object.payload?.changeAccountName !== undefined &&
      object.payload?.changeAccountName !== null
    ) {
      message.payload = {
        $case: "changeAccountName",
        changeAccountName: ChangeAccountName.fromPartial(object.payload.changeAccountName),
      };
    }
    if (
      object.payload?.$case === "changeAccountHandle" &&
      object.payload?.changeAccountHandle !== undefined &&
      object.payload?.changeAccountHandle !== null
    ) {
      message.payload = {
        $case: "changeAccountHandle",
        changeAccountHandle: ChangeAccountHandle.fromPartial(object.payload.changeAccountHandle),
      };
    }
    if (
      object.payload?.$case === "changeAccountAvatar" &&
      object.payload?.changeAccountAvatar !== undefined &&
      object.payload?.changeAccountAvatar !== null
    ) {
      message.payload = {
        $case: "changeAccountAvatar",
        changeAccountAvatar: ChangeAccountAvatar.fromPartial(object.payload.changeAccountAvatar),
      };
    }
    if (
      object.payload?.$case === "addAttribute" &&
      object.payload?.addAttribute !== undefined &&
      object.payload?.addAttribute !== null
    ) {
      message.payload = { $case: "addAttribute", addAttribute: AddAttribute.fromPartial(object.payload.addAttribute) };
    }
    if (
      object.payload?.$case === "changeAttributeName" &&
      object.payload?.changeAttributeName !== undefined &&
      object.payload?.changeAttributeName !== null
    ) {
      message.payload = {
        $case: "changeAttributeName",
        changeAttributeName: ChangeAttributeName.fromPartial(object.payload.changeAttributeName),
      };
    }
    if (
      object.payload?.$case === "changeAttributeValue" &&
      object.payload?.changeAttributeValue !== undefined &&
      object.payload?.changeAttributeValue !== null
    ) {
      message.payload = {
        $case: "changeAttributeValue",
        changeAttributeValue: ChangeAttributeValue.fromPartial(object.payload.changeAttributeValue),
      };
    }
    if (
      object.payload?.$case === "sortAttribute" &&
      object.payload?.sortAttribute !== undefined &&
      object.payload?.sortAttribute !== null
    ) {
      message.payload = {
        $case: "sortAttribute",
        sortAttribute: SortAttribute.fromPartial(object.payload.sortAttribute),
      };
    }
    if (
      object.payload?.$case === "sendAttributeVerification" &&
      object.payload?.sendAttributeVerification !== undefined &&
      object.payload?.sendAttributeVerification !== null
    ) {
      message.payload = {
        $case: "sendAttributeVerification",
        sendAttributeVerification: SendAttributeVerification.fromPartial(object.payload.sendAttributeVerification),
      };
    }
    if (
      object.payload?.$case === "verifyAttribute" &&
      object.payload?.verifyAttribute !== undefined &&
      object.payload?.verifyAttribute !== null
    ) {
      message.payload = {
        $case: "verifyAttribute",
        verifyAttribute: VerifyAttribute.fromPartial(object.payload.verifyAttribute),
      };
    }
    if (
      object.payload?.$case === "removeAttribute" &&
      object.payload?.removeAttribute !== undefined &&
      object.payload?.removeAttribute !== null
    ) {
      message.payload = {
        $case: "removeAttribute",
        removeAttribute: RemoveAttribute.fromPartial(object.payload.removeAttribute),
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
