/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ChangeAccountAvatar, ChangeAccountHandle, ChangeAccountName } from "./account/commands";
import { AddAttribute, ChangeAttribute, RemoveAttribute, VerifyAttributeValue } from "./attribute/commands";
import {
  AuthorizeSocket,
  CreateAccount,
  DeleteAccount,
  EndSession,
  StartAuth,
  StartSession,
  VerifyPhone,
} from "./auth/commands";
import {
  AddConnectionShare,
  ArchiveConnection,
  ChangeConnectionAlias,
  ChangeConnectionDescription,
  FavorConnection,
  MuteConnection,
  RemoveConnection,
  RemoveConnectionShare,
  UnarchiveConnection,
  UnfavorConnection,
  UnmuteConnection,
} from "./connection/commands";
import { BulkInvite, ConnectViaQrCode, CreateInvite, CreateQrCode, DeleteInvite, OpenQrCode } from "./invite/commands";

export interface SecCommand {
  id: number;
  accessKey: Uint8Array;
  command: Uint8Array;
}

export interface Command {
  payload?:
    | { $case: "startAuth"; startAuth: StartAuth }
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
    | { $case: "verifyAttributeValue"; verifyAttributeValue: VerifyAttributeValue }
    | { $case: "changeAttribute"; changeAttribute: ChangeAttribute }
    | { $case: "removeAttribute"; removeAttribute: RemoveAttribute }
    | { $case: "createQrCode"; createQrCode: CreateQrCode }
    | { $case: "openQrCode"; openQrCode: OpenQrCode }
    | { $case: "connectViaQrCode"; connectViaQrCode: ConnectViaQrCode }
    | { $case: "createInvite"; createInvite: CreateInvite }
    | { $case: "bulkInvite"; bulkInvite: BulkInvite }
    | { $case: "deleteInvite"; deleteInvite: DeleteInvite }
    | { $case: "changeConnectionAlias"; changeConnectionAlias: ChangeConnectionAlias }
    | { $case: "changeConnectionDescription"; changeConnectionDescription: ChangeConnectionDescription }
    | { $case: "addConnectionShare"; addConnectionShare: AddConnectionShare }
    | { $case: "removeConnectionShare"; removeConnectionShare: RemoveConnectionShare }
    | { $case: "favorConnection"; favorConnection: FavorConnection }
    | { $case: "unfavorConnection"; unfavorConnection: UnfavorConnection }
    | { $case: "muteConnection"; muteConnection: MuteConnection }
    | { $case: "unmuteConnection"; unmuteConnection: UnmuteConnection }
    | { $case: "archiveConnection"; archiveConnection: ArchiveConnection }
    | { $case: "unarchiveConnection"; unarchiveConnection: UnarchiveConnection }
    | { $case: "removeConnection"; removeConnection: RemoveConnection }
    | undefined;
}

function createBaseSecCommand(): SecCommand {
  return { id: 0, accessKey: new Uint8Array(0), command: new Uint8Array(0) };
}

export const SecCommand = {
  encode(message: SecCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.accessKey.length !== 0) {
      writer.uint32(18).bytes(message.accessKey);
    }
    if (message.command.length !== 0) {
      writer.uint32(26).bytes(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecCommand();
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

          message.accessKey = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.command = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecCommand {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      accessKey: isSet(object.accessKey) ? bytesFromBase64(object.accessKey) : new Uint8Array(0),
      command: isSet(object.command) ? bytesFromBase64(object.command) : new Uint8Array(0),
    };
  },

  toJSON(message: SecCommand): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.accessKey.length !== 0) {
      obj.accessKey = base64FromBytes(message.accessKey);
    }
    if (message.command.length !== 0) {
      obj.command = base64FromBytes(message.command);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SecCommand>, I>>(base?: I): SecCommand {
    return SecCommand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SecCommand>, I>>(object: I): SecCommand {
    const message = createBaseSecCommand();
    message.id = object.id ?? 0;
    message.accessKey = object.accessKey ?? new Uint8Array(0);
    message.command = object.command ?? new Uint8Array(0);
    return message;
  },
};

function createBaseCommand(): Command {
  return { payload: undefined };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.payload?.$case) {
      case "startAuth":
        StartAuth.encode(message.payload.startAuth, writer.uint32(10).fork()).ldelim();
        break;
      case "verifyPhone":
        VerifyPhone.encode(message.payload.verifyPhone, writer.uint32(18).fork()).ldelim();
        break;
      case "createAccount":
        CreateAccount.encode(message.payload.createAccount, writer.uint32(26).fork()).ldelim();
        break;
      case "deleteAccount":
        DeleteAccount.encode(message.payload.deleteAccount, writer.uint32(34).fork()).ldelim();
        break;
      case "startSession":
        StartSession.encode(message.payload.startSession, writer.uint32(42).fork()).ldelim();
        break;
      case "authorizeSocket":
        AuthorizeSocket.encode(message.payload.authorizeSocket, writer.uint32(50).fork()).ldelim();
        break;
      case "endSession":
        EndSession.encode(message.payload.endSession, writer.uint32(58).fork()).ldelim();
        break;
      case "changeAccountName":
        ChangeAccountName.encode(message.payload.changeAccountName, writer.uint32(66).fork()).ldelim();
        break;
      case "changeAccountHandle":
        ChangeAccountHandle.encode(message.payload.changeAccountHandle, writer.uint32(74).fork()).ldelim();
        break;
      case "changeAccountAvatar":
        ChangeAccountAvatar.encode(message.payload.changeAccountAvatar, writer.uint32(82).fork()).ldelim();
        break;
      case "addAttribute":
        AddAttribute.encode(message.payload.addAttribute, writer.uint32(90).fork()).ldelim();
        break;
      case "verifyAttributeValue":
        VerifyAttributeValue.encode(message.payload.verifyAttributeValue, writer.uint32(98).fork()).ldelim();
        break;
      case "changeAttribute":
        ChangeAttribute.encode(message.payload.changeAttribute, writer.uint32(106).fork()).ldelim();
        break;
      case "removeAttribute":
        RemoveAttribute.encode(message.payload.removeAttribute, writer.uint32(114).fork()).ldelim();
        break;
      case "createQrCode":
        CreateQrCode.encode(message.payload.createQrCode, writer.uint32(122).fork()).ldelim();
        break;
      case "openQrCode":
        OpenQrCode.encode(message.payload.openQrCode, writer.uint32(130).fork()).ldelim();
        break;
      case "connectViaQrCode":
        ConnectViaQrCode.encode(message.payload.connectViaQrCode, writer.uint32(138).fork()).ldelim();
        break;
      case "createInvite":
        CreateInvite.encode(message.payload.createInvite, writer.uint32(146).fork()).ldelim();
        break;
      case "bulkInvite":
        BulkInvite.encode(message.payload.bulkInvite, writer.uint32(154).fork()).ldelim();
        break;
      case "deleteInvite":
        DeleteInvite.encode(message.payload.deleteInvite, writer.uint32(162).fork()).ldelim();
        break;
      case "changeConnectionAlias":
        ChangeConnectionAlias.encode(message.payload.changeConnectionAlias, writer.uint32(170).fork()).ldelim();
        break;
      case "changeConnectionDescription":
        ChangeConnectionDescription.encode(message.payload.changeConnectionDescription, writer.uint32(178).fork())
          .ldelim();
        break;
      case "addConnectionShare":
        AddConnectionShare.encode(message.payload.addConnectionShare, writer.uint32(186).fork()).ldelim();
        break;
      case "removeConnectionShare":
        RemoveConnectionShare.encode(message.payload.removeConnectionShare, writer.uint32(194).fork()).ldelim();
        break;
      case "favorConnection":
        FavorConnection.encode(message.payload.favorConnection, writer.uint32(202).fork()).ldelim();
        break;
      case "unfavorConnection":
        UnfavorConnection.encode(message.payload.unfavorConnection, writer.uint32(210).fork()).ldelim();
        break;
      case "muteConnection":
        MuteConnection.encode(message.payload.muteConnection, writer.uint32(218).fork()).ldelim();
        break;
      case "unmuteConnection":
        UnmuteConnection.encode(message.payload.unmuteConnection, writer.uint32(226).fork()).ldelim();
        break;
      case "archiveConnection":
        ArchiveConnection.encode(message.payload.archiveConnection, writer.uint32(234).fork()).ldelim();
        break;
      case "unarchiveConnection":
        UnarchiveConnection.encode(message.payload.unarchiveConnection, writer.uint32(242).fork()).ldelim();
        break;
      case "removeConnection":
        RemoveConnection.encode(message.payload.removeConnection, writer.uint32(250).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.payload = { $case: "startAuth", startAuth: StartAuth.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = { $case: "verifyPhone", verifyPhone: VerifyPhone.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = { $case: "createAccount", createAccount: CreateAccount.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = { $case: "deleteAccount", deleteAccount: DeleteAccount.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = { $case: "startSession", startSession: StartSession.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = {
            $case: "authorizeSocket",
            authorizeSocket: AuthorizeSocket.decode(reader, reader.uint32()),
          };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = { $case: "endSession", endSession: EndSession.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.payload = {
            $case: "changeAccountName",
            changeAccountName: ChangeAccountName.decode(reader, reader.uint32()),
          };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payload = {
            $case: "changeAccountHandle",
            changeAccountHandle: ChangeAccountHandle.decode(reader, reader.uint32()),
          };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.payload = {
            $case: "changeAccountAvatar",
            changeAccountAvatar: ChangeAccountAvatar.decode(reader, reader.uint32()),
          };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.payload = { $case: "addAttribute", addAttribute: AddAttribute.decode(reader, reader.uint32()) };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.payload = {
            $case: "verifyAttributeValue",
            verifyAttributeValue: VerifyAttributeValue.decode(reader, reader.uint32()),
          };
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.payload = {
            $case: "changeAttribute",
            changeAttribute: ChangeAttribute.decode(reader, reader.uint32()),
          };
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.payload = {
            $case: "removeAttribute",
            removeAttribute: RemoveAttribute.decode(reader, reader.uint32()),
          };
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.payload = { $case: "createQrCode", createQrCode: CreateQrCode.decode(reader, reader.uint32()) };
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.payload = { $case: "openQrCode", openQrCode: OpenQrCode.decode(reader, reader.uint32()) };
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.payload = {
            $case: "connectViaQrCode",
            connectViaQrCode: ConnectViaQrCode.decode(reader, reader.uint32()),
          };
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.payload = { $case: "createInvite", createInvite: CreateInvite.decode(reader, reader.uint32()) };
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.payload = { $case: "bulkInvite", bulkInvite: BulkInvite.decode(reader, reader.uint32()) };
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.payload = { $case: "deleteInvite", deleteInvite: DeleteInvite.decode(reader, reader.uint32()) };
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.payload = {
            $case: "changeConnectionAlias",
            changeConnectionAlias: ChangeConnectionAlias.decode(reader, reader.uint32()),
          };
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.payload = {
            $case: "changeConnectionDescription",
            changeConnectionDescription: ChangeConnectionDescription.decode(reader, reader.uint32()),
          };
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.payload = {
            $case: "addConnectionShare",
            addConnectionShare: AddConnectionShare.decode(reader, reader.uint32()),
          };
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.payload = {
            $case: "removeConnectionShare",
            removeConnectionShare: RemoveConnectionShare.decode(reader, reader.uint32()),
          };
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.payload = {
            $case: "favorConnection",
            favorConnection: FavorConnection.decode(reader, reader.uint32()),
          };
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.payload = {
            $case: "unfavorConnection",
            unfavorConnection: UnfavorConnection.decode(reader, reader.uint32()),
          };
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.payload = { $case: "muteConnection", muteConnection: MuteConnection.decode(reader, reader.uint32()) };
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.payload = {
            $case: "unmuteConnection",
            unmuteConnection: UnmuteConnection.decode(reader, reader.uint32()),
          };
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.payload = {
            $case: "archiveConnection",
            archiveConnection: ArchiveConnection.decode(reader, reader.uint32()),
          };
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.payload = {
            $case: "unarchiveConnection",
            unarchiveConnection: UnarchiveConnection.decode(reader, reader.uint32()),
          };
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.payload = {
            $case: "removeConnection",
            removeConnection: RemoveConnection.decode(reader, reader.uint32()),
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
      payload: isSet(object.startAuth)
        ? { $case: "startAuth", startAuth: StartAuth.fromJSON(object.startAuth) }
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
        : isSet(object.verifyAttributeValue)
        ? {
          $case: "verifyAttributeValue",
          verifyAttributeValue: VerifyAttributeValue.fromJSON(object.verifyAttributeValue),
        }
        : isSet(object.changeAttribute)
        ? { $case: "changeAttribute", changeAttribute: ChangeAttribute.fromJSON(object.changeAttribute) }
        : isSet(object.removeAttribute)
        ? { $case: "removeAttribute", removeAttribute: RemoveAttribute.fromJSON(object.removeAttribute) }
        : isSet(object.createQrCode)
        ? { $case: "createQrCode", createQrCode: CreateQrCode.fromJSON(object.createQrCode) }
        : isSet(object.openQrCode)
        ? { $case: "openQrCode", openQrCode: OpenQrCode.fromJSON(object.openQrCode) }
        : isSet(object.connectViaQrCode)
        ? { $case: "connectViaQrCode", connectViaQrCode: ConnectViaQrCode.fromJSON(object.connectViaQrCode) }
        : isSet(object.createInvite)
        ? { $case: "createInvite", createInvite: CreateInvite.fromJSON(object.createInvite) }
        : isSet(object.bulkInvite)
        ? { $case: "bulkInvite", bulkInvite: BulkInvite.fromJSON(object.bulkInvite) }
        : isSet(object.deleteInvite)
        ? { $case: "deleteInvite", deleteInvite: DeleteInvite.fromJSON(object.deleteInvite) }
        : isSet(object.changeConnectionAlias)
        ? {
          $case: "changeConnectionAlias",
          changeConnectionAlias: ChangeConnectionAlias.fromJSON(object.changeConnectionAlias),
        }
        : isSet(object.changeConnectionDescription)
        ? {
          $case: "changeConnectionDescription",
          changeConnectionDescription: ChangeConnectionDescription.fromJSON(object.changeConnectionDescription),
        }
        : isSet(object.addConnectionShare)
        ? { $case: "addConnectionShare", addConnectionShare: AddConnectionShare.fromJSON(object.addConnectionShare) }
        : isSet(object.removeConnectionShare)
        ? {
          $case: "removeConnectionShare",
          removeConnectionShare: RemoveConnectionShare.fromJSON(object.removeConnectionShare),
        }
        : isSet(object.favorConnection)
        ? { $case: "favorConnection", favorConnection: FavorConnection.fromJSON(object.favorConnection) }
        : isSet(object.unfavorConnection)
        ? { $case: "unfavorConnection", unfavorConnection: UnfavorConnection.fromJSON(object.unfavorConnection) }
        : isSet(object.muteConnection)
        ? { $case: "muteConnection", muteConnection: MuteConnection.fromJSON(object.muteConnection) }
        : isSet(object.unmuteConnection)
        ? { $case: "unmuteConnection", unmuteConnection: UnmuteConnection.fromJSON(object.unmuteConnection) }
        : isSet(object.archiveConnection)
        ? { $case: "archiveConnection", archiveConnection: ArchiveConnection.fromJSON(object.archiveConnection) }
        : isSet(object.unarchiveConnection)
        ? {
          $case: "unarchiveConnection",
          unarchiveConnection: UnarchiveConnection.fromJSON(object.unarchiveConnection),
        }
        : isSet(object.removeConnection)
        ? { $case: "removeConnection", removeConnection: RemoveConnection.fromJSON(object.removeConnection) }
        : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    if (message.payload?.$case === "startAuth") {
      obj.startAuth = StartAuth.toJSON(message.payload.startAuth);
    }
    if (message.payload?.$case === "verifyPhone") {
      obj.verifyPhone = VerifyPhone.toJSON(message.payload.verifyPhone);
    }
    if (message.payload?.$case === "createAccount") {
      obj.createAccount = CreateAccount.toJSON(message.payload.createAccount);
    }
    if (message.payload?.$case === "deleteAccount") {
      obj.deleteAccount = DeleteAccount.toJSON(message.payload.deleteAccount);
    }
    if (message.payload?.$case === "startSession") {
      obj.startSession = StartSession.toJSON(message.payload.startSession);
    }
    if (message.payload?.$case === "authorizeSocket") {
      obj.authorizeSocket = AuthorizeSocket.toJSON(message.payload.authorizeSocket);
    }
    if (message.payload?.$case === "endSession") {
      obj.endSession = EndSession.toJSON(message.payload.endSession);
    }
    if (message.payload?.$case === "changeAccountName") {
      obj.changeAccountName = ChangeAccountName.toJSON(message.payload.changeAccountName);
    }
    if (message.payload?.$case === "changeAccountHandle") {
      obj.changeAccountHandle = ChangeAccountHandle.toJSON(message.payload.changeAccountHandle);
    }
    if (message.payload?.$case === "changeAccountAvatar") {
      obj.changeAccountAvatar = ChangeAccountAvatar.toJSON(message.payload.changeAccountAvatar);
    }
    if (message.payload?.$case === "addAttribute") {
      obj.addAttribute = AddAttribute.toJSON(message.payload.addAttribute);
    }
    if (message.payload?.$case === "verifyAttributeValue") {
      obj.verifyAttributeValue = VerifyAttributeValue.toJSON(message.payload.verifyAttributeValue);
    }
    if (message.payload?.$case === "changeAttribute") {
      obj.changeAttribute = ChangeAttribute.toJSON(message.payload.changeAttribute);
    }
    if (message.payload?.$case === "removeAttribute") {
      obj.removeAttribute = RemoveAttribute.toJSON(message.payload.removeAttribute);
    }
    if (message.payload?.$case === "createQrCode") {
      obj.createQrCode = CreateQrCode.toJSON(message.payload.createQrCode);
    }
    if (message.payload?.$case === "openQrCode") {
      obj.openQrCode = OpenQrCode.toJSON(message.payload.openQrCode);
    }
    if (message.payload?.$case === "connectViaQrCode") {
      obj.connectViaQrCode = ConnectViaQrCode.toJSON(message.payload.connectViaQrCode);
    }
    if (message.payload?.$case === "createInvite") {
      obj.createInvite = CreateInvite.toJSON(message.payload.createInvite);
    }
    if (message.payload?.$case === "bulkInvite") {
      obj.bulkInvite = BulkInvite.toJSON(message.payload.bulkInvite);
    }
    if (message.payload?.$case === "deleteInvite") {
      obj.deleteInvite = DeleteInvite.toJSON(message.payload.deleteInvite);
    }
    if (message.payload?.$case === "changeConnectionAlias") {
      obj.changeConnectionAlias = ChangeConnectionAlias.toJSON(message.payload.changeConnectionAlias);
    }
    if (message.payload?.$case === "changeConnectionDescription") {
      obj.changeConnectionDescription = ChangeConnectionDescription.toJSON(message.payload.changeConnectionDescription);
    }
    if (message.payload?.$case === "addConnectionShare") {
      obj.addConnectionShare = AddConnectionShare.toJSON(message.payload.addConnectionShare);
    }
    if (message.payload?.$case === "removeConnectionShare") {
      obj.removeConnectionShare = RemoveConnectionShare.toJSON(message.payload.removeConnectionShare);
    }
    if (message.payload?.$case === "favorConnection") {
      obj.favorConnection = FavorConnection.toJSON(message.payload.favorConnection);
    }
    if (message.payload?.$case === "unfavorConnection") {
      obj.unfavorConnection = UnfavorConnection.toJSON(message.payload.unfavorConnection);
    }
    if (message.payload?.$case === "muteConnection") {
      obj.muteConnection = MuteConnection.toJSON(message.payload.muteConnection);
    }
    if (message.payload?.$case === "unmuteConnection") {
      obj.unmuteConnection = UnmuteConnection.toJSON(message.payload.unmuteConnection);
    }
    if (message.payload?.$case === "archiveConnection") {
      obj.archiveConnection = ArchiveConnection.toJSON(message.payload.archiveConnection);
    }
    if (message.payload?.$case === "unarchiveConnection") {
      obj.unarchiveConnection = UnarchiveConnection.toJSON(message.payload.unarchiveConnection);
    }
    if (message.payload?.$case === "removeConnection") {
      obj.removeConnection = RemoveConnection.toJSON(message.payload.removeConnection);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    if (
      object.payload?.$case === "startAuth" &&
      object.payload?.startAuth !== undefined &&
      object.payload?.startAuth !== null
    ) {
      message.payload = { $case: "startAuth", startAuth: StartAuth.fromPartial(object.payload.startAuth) };
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
      object.payload?.$case === "verifyAttributeValue" &&
      object.payload?.verifyAttributeValue !== undefined &&
      object.payload?.verifyAttributeValue !== null
    ) {
      message.payload = {
        $case: "verifyAttributeValue",
        verifyAttributeValue: VerifyAttributeValue.fromPartial(object.payload.verifyAttributeValue),
      };
    }
    if (
      object.payload?.$case === "changeAttribute" &&
      object.payload?.changeAttribute !== undefined &&
      object.payload?.changeAttribute !== null
    ) {
      message.payload = {
        $case: "changeAttribute",
        changeAttribute: ChangeAttribute.fromPartial(object.payload.changeAttribute),
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
    if (
      object.payload?.$case === "createQrCode" &&
      object.payload?.createQrCode !== undefined &&
      object.payload?.createQrCode !== null
    ) {
      message.payload = { $case: "createQrCode", createQrCode: CreateQrCode.fromPartial(object.payload.createQrCode) };
    }
    if (
      object.payload?.$case === "openQrCode" &&
      object.payload?.openQrCode !== undefined &&
      object.payload?.openQrCode !== null
    ) {
      message.payload = { $case: "openQrCode", openQrCode: OpenQrCode.fromPartial(object.payload.openQrCode) };
    }
    if (
      object.payload?.$case === "connectViaQrCode" &&
      object.payload?.connectViaQrCode !== undefined &&
      object.payload?.connectViaQrCode !== null
    ) {
      message.payload = {
        $case: "connectViaQrCode",
        connectViaQrCode: ConnectViaQrCode.fromPartial(object.payload.connectViaQrCode),
      };
    }
    if (
      object.payload?.$case === "createInvite" &&
      object.payload?.createInvite !== undefined &&
      object.payload?.createInvite !== null
    ) {
      message.payload = { $case: "createInvite", createInvite: CreateInvite.fromPartial(object.payload.createInvite) };
    }
    if (
      object.payload?.$case === "bulkInvite" &&
      object.payload?.bulkInvite !== undefined &&
      object.payload?.bulkInvite !== null
    ) {
      message.payload = { $case: "bulkInvite", bulkInvite: BulkInvite.fromPartial(object.payload.bulkInvite) };
    }
    if (
      object.payload?.$case === "deleteInvite" &&
      object.payload?.deleteInvite !== undefined &&
      object.payload?.deleteInvite !== null
    ) {
      message.payload = { $case: "deleteInvite", deleteInvite: DeleteInvite.fromPartial(object.payload.deleteInvite) };
    }
    if (
      object.payload?.$case === "changeConnectionAlias" &&
      object.payload?.changeConnectionAlias !== undefined &&
      object.payload?.changeConnectionAlias !== null
    ) {
      message.payload = {
        $case: "changeConnectionAlias",
        changeConnectionAlias: ChangeConnectionAlias.fromPartial(object.payload.changeConnectionAlias),
      };
    }
    if (
      object.payload?.$case === "changeConnectionDescription" &&
      object.payload?.changeConnectionDescription !== undefined &&
      object.payload?.changeConnectionDescription !== null
    ) {
      message.payload = {
        $case: "changeConnectionDescription",
        changeConnectionDescription: ChangeConnectionDescription.fromPartial(
          object.payload.changeConnectionDescription,
        ),
      };
    }
    if (
      object.payload?.$case === "addConnectionShare" &&
      object.payload?.addConnectionShare !== undefined &&
      object.payload?.addConnectionShare !== null
    ) {
      message.payload = {
        $case: "addConnectionShare",
        addConnectionShare: AddConnectionShare.fromPartial(object.payload.addConnectionShare),
      };
    }
    if (
      object.payload?.$case === "removeConnectionShare" &&
      object.payload?.removeConnectionShare !== undefined &&
      object.payload?.removeConnectionShare !== null
    ) {
      message.payload = {
        $case: "removeConnectionShare",
        removeConnectionShare: RemoveConnectionShare.fromPartial(object.payload.removeConnectionShare),
      };
    }
    if (
      object.payload?.$case === "favorConnection" &&
      object.payload?.favorConnection !== undefined &&
      object.payload?.favorConnection !== null
    ) {
      message.payload = {
        $case: "favorConnection",
        favorConnection: FavorConnection.fromPartial(object.payload.favorConnection),
      };
    }
    if (
      object.payload?.$case === "unfavorConnection" &&
      object.payload?.unfavorConnection !== undefined &&
      object.payload?.unfavorConnection !== null
    ) {
      message.payload = {
        $case: "unfavorConnection",
        unfavorConnection: UnfavorConnection.fromPartial(object.payload.unfavorConnection),
      };
    }
    if (
      object.payload?.$case === "muteConnection" &&
      object.payload?.muteConnection !== undefined &&
      object.payload?.muteConnection !== null
    ) {
      message.payload = {
        $case: "muteConnection",
        muteConnection: MuteConnection.fromPartial(object.payload.muteConnection),
      };
    }
    if (
      object.payload?.$case === "unmuteConnection" &&
      object.payload?.unmuteConnection !== undefined &&
      object.payload?.unmuteConnection !== null
    ) {
      message.payload = {
        $case: "unmuteConnection",
        unmuteConnection: UnmuteConnection.fromPartial(object.payload.unmuteConnection),
      };
    }
    if (
      object.payload?.$case === "archiveConnection" &&
      object.payload?.archiveConnection !== undefined &&
      object.payload?.archiveConnection !== null
    ) {
      message.payload = {
        $case: "archiveConnection",
        archiveConnection: ArchiveConnection.fromPartial(object.payload.archiveConnection),
      };
    }
    if (
      object.payload?.$case === "unarchiveConnection" &&
      object.payload?.unarchiveConnection !== undefined &&
      object.payload?.unarchiveConnection !== null
    ) {
      message.payload = {
        $case: "unarchiveConnection",
        unarchiveConnection: UnarchiveConnection.fromPartial(object.payload.unarchiveConnection),
      };
    }
    if (
      object.payload?.$case === "removeConnection" &&
      object.payload?.removeConnection !== undefined &&
      object.payload?.removeConnection !== null
    ) {
      message.payload = {
        $case: "removeConnection",
        removeConnection: RemoveConnection.fromPartial(object.payload.removeConnection),
      };
    }
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
