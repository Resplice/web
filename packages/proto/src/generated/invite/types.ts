/* eslint-disable */

export enum InviteType {
  UNKNOWN = 0,
  PHONE = 1,
  EMAIL = 2,
  HANDLE = 3,
  DIRECT = 4,
  UNRECOGNIZED = -1,
}

export function inviteTypeFromJSON(object: any): InviteType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return InviteType.UNKNOWN;
    case 1:
    case "PHONE":
      return InviteType.PHONE;
    case 2:
    case "EMAIL":
      return InviteType.EMAIL;
    case 3:
    case "HANDLE":
      return InviteType.HANDLE;
    case 4:
    case "DIRECT":
      return InviteType.DIRECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InviteType.UNRECOGNIZED;
  }
}

export function inviteTypeToJSON(object: InviteType): string {
  switch (object) {
    case InviteType.UNKNOWN:
      return "UNKNOWN";
    case InviteType.PHONE:
      return "PHONE";
    case InviteType.EMAIL:
      return "EMAIL";
    case InviteType.HANDLE:
      return "HANDLE";
    case InviteType.DIRECT:
      return "DIRECT";
    case InviteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
