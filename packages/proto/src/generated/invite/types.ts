/* eslint-disable */

export enum InviteType {
  UNKNOWN = 0,
  QR = 1,
  PHONE = 2,
  EMAIL = 3,
  HANDLE = 4,
  UNRECOGNIZED = -1,
}

export function inviteTypeFromJSON(object: any): InviteType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return InviteType.UNKNOWN;
    case 1:
    case "QR":
      return InviteType.QR;
    case 2:
    case "PHONE":
      return InviteType.PHONE;
    case 3:
    case "EMAIL":
      return InviteType.EMAIL;
    case 4:
    case "HANDLE":
      return InviteType.HANDLE;
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
    case InviteType.QR:
      return "QR";
    case InviteType.PHONE:
      return "PHONE";
    case InviteType.EMAIL:
      return "EMAIL";
    case InviteType.HANDLE:
      return "HANDLE";
    case InviteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
