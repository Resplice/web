/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DeleteAccount, EditAccountAvatar, EditAccountHandle, EditAccountName } from "../accounts";
import {
  AddAttribute,
  DeleteAttribute,
  EditAttributeName,
  EditAttributeValue,
  SendAttributeVerification,
  SortAttribute,
  VerifyAttribute,
} from "../attributes";

export interface Command {
  version: number;
  payload?:
    | { $case: "editAccountName"; editAccountName: EditAccountName }
    | { $case: "editAccountHandle"; editAccountHandle: EditAccountHandle }
    | { $case: "editAccountAvatar"; editAccountAvatar: EditAccountAvatar }
    | { $case: "deleteAccount"; deleteAccount: DeleteAccount }
    | { $case: "addAttribute"; addAttribute: AddAttribute }
    | { $case: "editAttributeName"; editAttributeName: EditAttributeName }
    | { $case: "editAttributeValue"; editAttributeValue: EditAttributeValue }
    | { $case: "sortAttribute"; sortAttribute: SortAttribute }
    | { $case: "sendAttributeVerification"; sendAttributeVerification: SendAttributeVerification }
    | { $case: "verifyAttribute"; verifyAttribute: VerifyAttribute }
    | { $case: "deleteAttribute"; deleteAttribute: DeleteAttribute };
}

function createBaseCommand(): Command {
  return { version: 0, payload: undefined };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    switch (message.payload?.$case) {
      case "editAccountName":
        EditAccountName.encode(message.payload.editAccountName, writer.uint32(18).fork()).ldelim();
        break;
      case "editAccountHandle":
        EditAccountHandle.encode(message.payload.editAccountHandle, writer.uint32(26).fork()).ldelim();
        break;
      case "editAccountAvatar":
        EditAccountAvatar.encode(message.payload.editAccountAvatar, writer.uint32(34).fork()).ldelim();
        break;
      case "deleteAccount":
        DeleteAccount.encode(message.payload.deleteAccount, writer.uint32(42).fork()).ldelim();
        break;
      case "addAttribute":
        AddAttribute.encode(message.payload.addAttribute, writer.uint32(50).fork()).ldelim();
        break;
      case "editAttributeName":
        EditAttributeName.encode(message.payload.editAttributeName, writer.uint32(58).fork()).ldelim();
        break;
      case "editAttributeValue":
        EditAttributeValue.encode(message.payload.editAttributeValue, writer.uint32(66).fork()).ldelim();
        break;
      case "sortAttribute":
        SortAttribute.encode(message.payload.sortAttribute, writer.uint32(74).fork()).ldelim();
        break;
      case "sendAttributeVerification":
        SendAttributeVerification.encode(message.payload.sendAttributeVerification, writer.uint32(82).fork()).ldelim();
        break;
      case "verifyAttribute":
        VerifyAttribute.encode(message.payload.verifyAttribute, writer.uint32(90).fork()).ldelim();
        break;
      case "deleteAttribute":
        DeleteAttribute.encode(message.payload.deleteAttribute, writer.uint32(98).fork()).ldelim();
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

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = {
            $case: "editAccountName",
            editAccountName: EditAccountName.decode(reader, reader.uint32()),
          };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = {
            $case: "editAccountHandle",
            editAccountHandle: EditAccountHandle.decode(reader, reader.uint32()),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = {
            $case: "editAccountAvatar",
            editAccountAvatar: EditAccountAvatar.decode(reader, reader.uint32()),
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = { $case: "deleteAccount", deleteAccount: DeleteAccount.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = { $case: "addAttribute", addAttribute: AddAttribute.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.payload = {
            $case: "editAttributeName",
            editAttributeName: EditAttributeName.decode(reader, reader.uint32()),
          };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.payload = {
            $case: "editAttributeValue",
            editAttributeValue: EditAttributeValue.decode(reader, reader.uint32()),
          };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.payload = { $case: "sortAttribute", sortAttribute: SortAttribute.decode(reader, reader.uint32()) };
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.payload = {
            $case: "sendAttributeVerification",
            sendAttributeVerification: SendAttributeVerification.decode(reader, reader.uint32()),
          };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.payload = {
            $case: "verifyAttribute",
            verifyAttribute: VerifyAttribute.decode(reader, reader.uint32()),
          };
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.payload = {
            $case: "deleteAttribute",
            deleteAttribute: DeleteAttribute.decode(reader, reader.uint32()),
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
      version: isSet(object.version) ? Number(object.version) : 0,
      payload: isSet(object.editAccountName)
        ? { $case: "editAccountName", editAccountName: EditAccountName.fromJSON(object.editAccountName) }
        : isSet(object.editAccountHandle)
        ? { $case: "editAccountHandle", editAccountHandle: EditAccountHandle.fromJSON(object.editAccountHandle) }
        : isSet(object.editAccountAvatar)
        ? { $case: "editAccountAvatar", editAccountAvatar: EditAccountAvatar.fromJSON(object.editAccountAvatar) }
        : isSet(object.deleteAccount)
        ? { $case: "deleteAccount", deleteAccount: DeleteAccount.fromJSON(object.deleteAccount) }
        : isSet(object.addAttribute)
        ? { $case: "addAttribute", addAttribute: AddAttribute.fromJSON(object.addAttribute) }
        : isSet(object.editAttributeName)
        ? { $case: "editAttributeName", editAttributeName: EditAttributeName.fromJSON(object.editAttributeName) }
        : isSet(object.editAttributeValue)
        ? { $case: "editAttributeValue", editAttributeValue: EditAttributeValue.fromJSON(object.editAttributeValue) }
        : isSet(object.sortAttribute)
        ? { $case: "sortAttribute", sortAttribute: SortAttribute.fromJSON(object.sortAttribute) }
        : isSet(object.sendAttributeVerification)
        ? {
          $case: "sendAttributeVerification",
          sendAttributeVerification: SendAttributeVerification.fromJSON(object.sendAttributeVerification),
        }
        : isSet(object.verifyAttribute)
        ? { $case: "verifyAttribute", verifyAttribute: VerifyAttribute.fromJSON(object.verifyAttribute) }
        : isSet(object.deleteAttribute)
        ? { $case: "deleteAttribute", deleteAttribute: DeleteAttribute.fromJSON(object.deleteAttribute) }
        : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.payload?.$case === "editAccountName" && (obj.editAccountName = message.payload?.editAccountName
      ? EditAccountName.toJSON(message.payload?.editAccountName)
      : undefined);
    message.payload?.$case === "editAccountHandle" && (obj.editAccountHandle = message.payload?.editAccountHandle
      ? EditAccountHandle.toJSON(message.payload?.editAccountHandle)
      : undefined);
    message.payload?.$case === "editAccountAvatar" && (obj.editAccountAvatar = message.payload?.editAccountAvatar
      ? EditAccountAvatar.toJSON(message.payload?.editAccountAvatar)
      : undefined);
    message.payload?.$case === "deleteAccount" && (obj.deleteAccount = message.payload?.deleteAccount
      ? DeleteAccount.toJSON(message.payload?.deleteAccount)
      : undefined);
    message.payload?.$case === "addAttribute" &&
      (obj.addAttribute = message.payload?.addAttribute
        ? AddAttribute.toJSON(message.payload?.addAttribute)
        : undefined);
    message.payload?.$case === "editAttributeName" && (obj.editAttributeName = message.payload?.editAttributeName
      ? EditAttributeName.toJSON(message.payload?.editAttributeName)
      : undefined);
    message.payload?.$case === "editAttributeValue" && (obj.editAttributeValue = message.payload?.editAttributeValue
      ? EditAttributeValue.toJSON(message.payload?.editAttributeValue)
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
    message.payload?.$case === "deleteAttribute" && (obj.deleteAttribute = message.payload?.deleteAttribute
      ? DeleteAttribute.toJSON(message.payload?.deleteAttribute)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.version = object.version ?? 0;
    if (
      object.payload?.$case === "editAccountName" &&
      object.payload?.editAccountName !== undefined &&
      object.payload?.editAccountName !== null
    ) {
      message.payload = {
        $case: "editAccountName",
        editAccountName: EditAccountName.fromPartial(object.payload.editAccountName),
      };
    }
    if (
      object.payload?.$case === "editAccountHandle" &&
      object.payload?.editAccountHandle !== undefined &&
      object.payload?.editAccountHandle !== null
    ) {
      message.payload = {
        $case: "editAccountHandle",
        editAccountHandle: EditAccountHandle.fromPartial(object.payload.editAccountHandle),
      };
    }
    if (
      object.payload?.$case === "editAccountAvatar" &&
      object.payload?.editAccountAvatar !== undefined &&
      object.payload?.editAccountAvatar !== null
    ) {
      message.payload = {
        $case: "editAccountAvatar",
        editAccountAvatar: EditAccountAvatar.fromPartial(object.payload.editAccountAvatar),
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
      object.payload?.$case === "addAttribute" &&
      object.payload?.addAttribute !== undefined &&
      object.payload?.addAttribute !== null
    ) {
      message.payload = { $case: "addAttribute", addAttribute: AddAttribute.fromPartial(object.payload.addAttribute) };
    }
    if (
      object.payload?.$case === "editAttributeName" &&
      object.payload?.editAttributeName !== undefined &&
      object.payload?.editAttributeName !== null
    ) {
      message.payload = {
        $case: "editAttributeName",
        editAttributeName: EditAttributeName.fromPartial(object.payload.editAttributeName),
      };
    }
    if (
      object.payload?.$case === "editAttributeValue" &&
      object.payload?.editAttributeValue !== undefined &&
      object.payload?.editAttributeValue !== null
    ) {
      message.payload = {
        $case: "editAttributeValue",
        editAttributeValue: EditAttributeValue.fromPartial(object.payload.editAttributeValue),
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
      object.payload?.$case === "deleteAttribute" &&
      object.payload?.deleteAttribute !== undefined &&
      object.payload?.deleteAttribute !== null
    ) {
      message.payload = {
        $case: "deleteAttribute",
        deleteAttribute: DeleteAttribute.fromPartial(object.payload.deleteAttribute),
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
