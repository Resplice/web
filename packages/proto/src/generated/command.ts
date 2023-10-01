/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ChangeAccountAvatar, ChangeAccountHandle, ChangeAccountName } from "./account/commands";
import { AddAttribute, ChangeAttribute, RemoveAttribute, VerifyAttribute } from "./attribute/commands";
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
  AcceptInvite,
  AddInviteShare,
  CreateInvite,
  DeclineInvite,
  DeleteInvite,
  RemoveInviteShare,
} from "./invite/commands";

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
    | { $case: "verifyAttribute"; verifyAttribute: VerifyAttribute }
    | { $case: "changeAttribute"; changeAttribute: ChangeAttribute }
    | { $case: "removeAttribute"; removeAttribute: RemoveAttribute }
    | { $case: "createInvite"; createInvite: CreateInvite }
    | { $case: "addInviteShare"; addInviteShare: AddInviteShare }
    | { $case: "removeInviteShare"; removeInviteShare: RemoveInviteShare }
    | { $case: "deleteInvite"; deleteInvite: DeleteInvite }
    | { $case: "acceptInvite"; acceptInvite: AcceptInvite }
    | { $case: "declineInvite"; declineInvite: DeclineInvite }
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
      id: isSet(object.id) ? Number(object.id) : 0,
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
      case "verifyAttribute":
        VerifyAttribute.encode(message.payload.verifyAttribute, writer.uint32(98).fork()).ldelim();
        break;
      case "changeAttribute":
        ChangeAttribute.encode(message.payload.changeAttribute, writer.uint32(106).fork()).ldelim();
        break;
      case "removeAttribute":
        RemoveAttribute.encode(message.payload.removeAttribute, writer.uint32(114).fork()).ldelim();
        break;
      case "createInvite":
        CreateInvite.encode(message.payload.createInvite, writer.uint32(122).fork()).ldelim();
        break;
      case "addInviteShare":
        AddInviteShare.encode(message.payload.addInviteShare, writer.uint32(130).fork()).ldelim();
        break;
      case "removeInviteShare":
        RemoveInviteShare.encode(message.payload.removeInviteShare, writer.uint32(138).fork()).ldelim();
        break;
      case "deleteInvite":
        DeleteInvite.encode(message.payload.deleteInvite, writer.uint32(146).fork()).ldelim();
        break;
      case "acceptInvite":
        AcceptInvite.encode(message.payload.acceptInvite, writer.uint32(154).fork()).ldelim();
        break;
      case "declineInvite":
        DeclineInvite.encode(message.payload.declineInvite, writer.uint32(162).fork()).ldelim();
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
            $case: "verifyAttribute",
            verifyAttribute: VerifyAttribute.decode(reader, reader.uint32()),
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

          message.payload = { $case: "createInvite", createInvite: CreateInvite.decode(reader, reader.uint32()) };
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.payload = { $case: "addInviteShare", addInviteShare: AddInviteShare.decode(reader, reader.uint32()) };
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.payload = {
            $case: "removeInviteShare",
            removeInviteShare: RemoveInviteShare.decode(reader, reader.uint32()),
          };
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.payload = { $case: "deleteInvite", deleteInvite: DeleteInvite.decode(reader, reader.uint32()) };
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.payload = { $case: "acceptInvite", acceptInvite: AcceptInvite.decode(reader, reader.uint32()) };
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.payload = { $case: "declineInvite", declineInvite: DeclineInvite.decode(reader, reader.uint32()) };
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
        : isSet(object.verifyAttribute)
        ? { $case: "verifyAttribute", verifyAttribute: VerifyAttribute.fromJSON(object.verifyAttribute) }
        : isSet(object.changeAttribute)
        ? { $case: "changeAttribute", changeAttribute: ChangeAttribute.fromJSON(object.changeAttribute) }
        : isSet(object.removeAttribute)
        ? { $case: "removeAttribute", removeAttribute: RemoveAttribute.fromJSON(object.removeAttribute) }
        : isSet(object.createInvite)
        ? { $case: "createInvite", createInvite: CreateInvite.fromJSON(object.createInvite) }
        : isSet(object.addInviteShare)
        ? { $case: "addInviteShare", addInviteShare: AddInviteShare.fromJSON(object.addInviteShare) }
        : isSet(object.removeInviteShare)
        ? { $case: "removeInviteShare", removeInviteShare: RemoveInviteShare.fromJSON(object.removeInviteShare) }
        : isSet(object.deleteInvite)
        ? { $case: "deleteInvite", deleteInvite: DeleteInvite.fromJSON(object.deleteInvite) }
        : isSet(object.acceptInvite)
        ? { $case: "acceptInvite", acceptInvite: AcceptInvite.fromJSON(object.acceptInvite) }
        : isSet(object.declineInvite)
        ? { $case: "declineInvite", declineInvite: DeclineInvite.fromJSON(object.declineInvite) }
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
    if (message.payload?.$case === "verifyAttribute") {
      obj.verifyAttribute = VerifyAttribute.toJSON(message.payload.verifyAttribute);
    }
    if (message.payload?.$case === "changeAttribute") {
      obj.changeAttribute = ChangeAttribute.toJSON(message.payload.changeAttribute);
    }
    if (message.payload?.$case === "removeAttribute") {
      obj.removeAttribute = RemoveAttribute.toJSON(message.payload.removeAttribute);
    }
    if (message.payload?.$case === "createInvite") {
      obj.createInvite = CreateInvite.toJSON(message.payload.createInvite);
    }
    if (message.payload?.$case === "addInviteShare") {
      obj.addInviteShare = AddInviteShare.toJSON(message.payload.addInviteShare);
    }
    if (message.payload?.$case === "removeInviteShare") {
      obj.removeInviteShare = RemoveInviteShare.toJSON(message.payload.removeInviteShare);
    }
    if (message.payload?.$case === "deleteInvite") {
      obj.deleteInvite = DeleteInvite.toJSON(message.payload.deleteInvite);
    }
    if (message.payload?.$case === "acceptInvite") {
      obj.acceptInvite = AcceptInvite.toJSON(message.payload.acceptInvite);
    }
    if (message.payload?.$case === "declineInvite") {
      obj.declineInvite = DeclineInvite.toJSON(message.payload.declineInvite);
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
      object.payload?.$case === "createInvite" &&
      object.payload?.createInvite !== undefined &&
      object.payload?.createInvite !== null
    ) {
      message.payload = { $case: "createInvite", createInvite: CreateInvite.fromPartial(object.payload.createInvite) };
    }
    if (
      object.payload?.$case === "addInviteShare" &&
      object.payload?.addInviteShare !== undefined &&
      object.payload?.addInviteShare !== null
    ) {
      message.payload = {
        $case: "addInviteShare",
        addInviteShare: AddInviteShare.fromPartial(object.payload.addInviteShare),
      };
    }
    if (
      object.payload?.$case === "removeInviteShare" &&
      object.payload?.removeInviteShare !== undefined &&
      object.payload?.removeInviteShare !== null
    ) {
      message.payload = {
        $case: "removeInviteShare",
        removeInviteShare: RemoveInviteShare.fromPartial(object.payload.removeInviteShare),
      };
    }
    if (
      object.payload?.$case === "deleteInvite" &&
      object.payload?.deleteInvite !== undefined &&
      object.payload?.deleteInvite !== null
    ) {
      message.payload = { $case: "deleteInvite", deleteInvite: DeleteInvite.fromPartial(object.payload.deleteInvite) };
    }
    if (
      object.payload?.$case === "acceptInvite" &&
      object.payload?.acceptInvite !== undefined &&
      object.payload?.acceptInvite !== null
    ) {
      message.payload = { $case: "acceptInvite", acceptInvite: AcceptInvite.fromPartial(object.payload.acceptInvite) };
    }
    if (
      object.payload?.$case === "declineInvite" &&
      object.payload?.declineInvite !== undefined &&
      object.payload?.declineInvite !== null
    ) {
      message.payload = {
        $case: "declineInvite",
        declineInvite: DeclineInvite.fromPartial(object.payload.declineInvite),
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
