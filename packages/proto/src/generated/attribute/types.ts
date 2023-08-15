/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface Address {
  streetAddress1: string;
  streetAddress2: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Credential {
  identity: string;
  passcode: string;
}

/**
 * Day, month, year are split because
 * you might to choose to only share some or all parts
 */
export interface DateMessage {
  /** Negative values are BC */
  year: number;
  month: number;
  day: number;
}

export interface Email {
  email: string;
}

export interface Link {
  url: string;
}

export interface Phone {
  /** E.164 formatted number */
  number: string;
  smsEnabled: boolean;
}

export interface Social {
  url: string;
  handle: string;
}

export interface Text {
  text: string;
}

function createBaseAddress(): Address {
  return { streetAddress1: "", streetAddress2: "", locality: "", region: "", postalCode: "", country: "" };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streetAddress1 !== "") {
      writer.uint32(10).string(message.streetAddress1);
    }
    if (message.streetAddress2 !== "") {
      writer.uint32(18).string(message.streetAddress2);
    }
    if (message.locality !== "") {
      writer.uint32(26).string(message.locality);
    }
    if (message.region !== "") {
      writer.uint32(34).string(message.region);
    }
    if (message.postalCode !== "") {
      writer.uint32(42).string(message.postalCode);
    }
    if (message.country !== "") {
      writer.uint32(50).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.streetAddress1 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.streetAddress2 = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.locality = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.region = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.postalCode = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.country = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      streetAddress1: isSet(object.streetAddress1) ? String(object.streetAddress1) : "",
      streetAddress2: isSet(object.streetAddress2) ? String(object.streetAddress2) : "",
      locality: isSet(object.locality) ? String(object.locality) : "",
      region: isSet(object.region) ? String(object.region) : "",
      postalCode: isSet(object.postalCode) ? String(object.postalCode) : "",
      country: isSet(object.country) ? String(object.country) : "",
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.streetAddress1 !== undefined && (obj.streetAddress1 = message.streetAddress1);
    message.streetAddress2 !== undefined && (obj.streetAddress2 = message.streetAddress2);
    message.locality !== undefined && (obj.locality = message.locality);
    message.region !== undefined && (obj.region = message.region);
    message.postalCode !== undefined && (obj.postalCode = message.postalCode);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.streetAddress1 = object.streetAddress1 ?? "";
    message.streetAddress2 = object.streetAddress2 ?? "";
    message.locality = object.locality ?? "";
    message.region = object.region ?? "";
    message.postalCode = object.postalCode ?? "";
    message.country = object.country ?? "";
    return message;
  },
};

function createBaseCoordinate(): Coordinate {
  return { latitude: 0, longitude: 0 };
}

export const Coordinate = {
  encode(message: Coordinate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(13).float(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(21).float(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coordinate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoordinate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.latitude = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.longitude = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Coordinate {
    return {
      latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
    };
  },

  toJSON(message: Coordinate): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    return obj;
  },

  create<I extends Exact<DeepPartial<Coordinate>, I>>(base?: I): Coordinate {
    return Coordinate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Coordinate>, I>>(object: I): Coordinate {
    const message = createBaseCoordinate();
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    return message;
  },
};

function createBaseCredential(): Credential {
  return { identity: "", passcode: "" };
}

export const Credential = {
  encode(message: Credential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identity !== "") {
      writer.uint32(10).string(message.identity);
    }
    if (message.passcode !== "") {
      writer.uint32(18).string(message.passcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credential {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passcode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Credential {
    return {
      identity: isSet(object.identity) ? String(object.identity) : "",
      passcode: isSet(object.passcode) ? String(object.passcode) : "",
    };
  },

  toJSON(message: Credential): unknown {
    const obj: any = {};
    message.identity !== undefined && (obj.identity = message.identity);
    message.passcode !== undefined && (obj.passcode = message.passcode);
    return obj;
  },

  create<I extends Exact<DeepPartial<Credential>, I>>(base?: I): Credential {
    return Credential.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Credential>, I>>(object: I): Credential {
    const message = createBaseCredential();
    message.identity = object.identity ?? "";
    message.passcode = object.passcode ?? "";
    return message;
  },
};

function createBaseDateMessage(): DateMessage {
  return { year: 0, month: 0, day: 0 };
}

export const DateMessage = {
  encode(message: DateMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.year !== 0) {
      writer.uint32(8).sint32(message.year);
    }
    if (message.month !== 0) {
      writer.uint32(16).uint32(message.month);
    }
    if (message.day !== 0) {
      writer.uint32(24).uint32(message.day);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DateMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.year = reader.sint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.month = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.day = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DateMessage {
    return {
      year: isSet(object.year) ? Number(object.year) : 0,
      month: isSet(object.month) ? Number(object.month) : 0,
      day: isSet(object.day) ? Number(object.day) : 0,
    };
  },

  toJSON(message: DateMessage): unknown {
    const obj: any = {};
    message.year !== undefined && (obj.year = Math.round(message.year));
    message.month !== undefined && (obj.month = Math.round(message.month));
    message.day !== undefined && (obj.day = Math.round(message.day));
    return obj;
  },

  create<I extends Exact<DeepPartial<DateMessage>, I>>(base?: I): DateMessage {
    return DateMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DateMessage>, I>>(object: I): DateMessage {
    const message = createBaseDateMessage();
    message.year = object.year ?? 0;
    message.month = object.month ?? 0;
    message.day = object.day ?? 0;
    return message;
  },
};

function createBaseEmail(): Email {
  return { email: "" };
}

export const Email = {
  encode(message: Email, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Email {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Email {
    return { email: isSet(object.email) ? String(object.email) : "" };
  },

  toJSON(message: Email): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create<I extends Exact<DeepPartial<Email>, I>>(base?: I): Email {
    return Email.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Email>, I>>(object: I): Email {
    const message = createBaseEmail();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseLink(): Link {
  return { url: "" };
}

export const Link = {
  encode(message: Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Link {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Link {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: Link): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<Link>, I>>(base?: I): Link {
    return Link.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Link>, I>>(object: I): Link {
    const message = createBaseLink();
    message.url = object.url ?? "";
    return message;
  },
};

function createBasePhone(): Phone {
  return { number: "", smsEnabled: false };
}

export const Phone = {
  encode(message: Phone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== "") {
      writer.uint32(10).string(message.number);
    }
    if (message.smsEnabled === true) {
      writer.uint32(16).bool(message.smsEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Phone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.number = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.smsEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Phone {
    return {
      number: isSet(object.number) ? String(object.number) : "",
      smsEnabled: isSet(object.smsEnabled) ? Boolean(object.smsEnabled) : false,
    };
  },

  toJSON(message: Phone): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number);
    message.smsEnabled !== undefined && (obj.smsEnabled = message.smsEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<Phone>, I>>(base?: I): Phone {
    return Phone.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Phone>, I>>(object: I): Phone {
    const message = createBasePhone();
    message.number = object.number ?? "";
    message.smsEnabled = object.smsEnabled ?? false;
    return message;
  },
};

function createBaseSocial(): Social {
  return { url: "", handle: "" };
}

export const Social = {
  encode(message: Social, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.handle !== "") {
      writer.uint32(18).string(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Social {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.handle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Social {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      handle: isSet(object.handle) ? String(object.handle) : "",
    };
  },

  toJSON(message: Social): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.handle !== undefined && (obj.handle = message.handle);
    return obj;
  },

  create<I extends Exact<DeepPartial<Social>, I>>(base?: I): Social {
    return Social.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Social>, I>>(object: I): Social {
    const message = createBaseSocial();
    message.url = object.url ?? "";
    message.handle = object.handle ?? "";
    return message;
  },
};

function createBaseText(): Text {
  return { text: "" };
}

export const Text = {
  encode(message: Text, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Text {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Text {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: Text): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<Text>, I>>(base?: I): Text {
    return Text.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Text>, I>>(object: I): Text {
    const message = createBaseText();
    message.text = object.text ?? "";
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
