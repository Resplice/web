/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface StartSession {
  authCode: Uint8Array;
}

export interface SessionStarted {
  sessionId: number;
  expirySeconds: number;
  authCode: Uint8Array;
}

export interface ExpireSession {
  sessionId: number;
}

export interface SessionExpired {
  sessionId: number;
}

function createBaseStartSession(): StartSession {
  return { authCode: new Uint8Array(0) };
}

export const StartSession = {
  encode(message: StartSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authCode.length !== 0) {
      writer.uint32(10).bytes(message.authCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authCode = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartSession {
    return { authCode: isSet(object.authCode) ? bytesFromBase64(object.authCode) : new Uint8Array(0) };
  },

  toJSON(message: StartSession): unknown {
    const obj: any = {};
    message.authCode !== undefined &&
      (obj.authCode = base64FromBytes(message.authCode !== undefined ? message.authCode : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<StartSession>, I>>(base?: I): StartSession {
    return StartSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartSession>, I>>(object: I): StartSession {
    const message = createBaseStartSession();
    message.authCode = object.authCode ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSessionStarted(): SessionStarted {
  return { sessionId: 0, expirySeconds: 0, authCode: new Uint8Array(0) };
}

export const SessionStarted = {
  encode(message: SessionStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    if (message.expirySeconds !== 0) {
      writer.uint32(16).int32(message.expirySeconds);
    }
    if (message.authCode.length !== 0) {
      writer.uint32(26).bytes(message.authCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionStarted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sessionId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expirySeconds = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.authCode = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionStarted {
    return {
      sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0,
      expirySeconds: isSet(object.expirySeconds) ? Number(object.expirySeconds) : 0,
      authCode: isSet(object.authCode) ? bytesFromBase64(object.authCode) : new Uint8Array(0),
    };
  },

  toJSON(message: SessionStarted): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = Math.round(message.sessionId));
    message.expirySeconds !== undefined && (obj.expirySeconds = Math.round(message.expirySeconds));
    message.authCode !== undefined &&
      (obj.authCode = base64FromBytes(message.authCode !== undefined ? message.authCode : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<SessionStarted>, I>>(base?: I): SessionStarted {
    return SessionStarted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SessionStarted>, I>>(object: I): SessionStarted {
    const message = createBaseSessionStarted();
    message.sessionId = object.sessionId ?? 0;
    message.expirySeconds = object.expirySeconds ?? 0;
    message.authCode = object.authCode ?? new Uint8Array(0);
    return message;
  },
};

function createBaseExpireSession(): ExpireSession {
  return { sessionId: 0 };
}

export const ExpireSession = {
  encode(message: ExpireSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpireSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpireSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sessionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExpireSession {
    return { sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0 };
  },

  toJSON(message: ExpireSession): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = Math.round(message.sessionId));
    return obj;
  },

  create<I extends Exact<DeepPartial<ExpireSession>, I>>(base?: I): ExpireSession {
    return ExpireSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExpireSession>, I>>(object: I): ExpireSession {
    const message = createBaseExpireSession();
    message.sessionId = object.sessionId ?? 0;
    return message;
  },
};

function createBaseSessionExpired(): SessionExpired {
  return { sessionId: 0 };
}

export const SessionExpired = {
  encode(message: SessionExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionExpired {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionExpired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sessionId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionExpired {
    return { sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0 };
  },

  toJSON(message: SessionExpired): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = Math.round(message.sessionId));
    return obj;
  },

  create<I extends Exact<DeepPartial<SessionExpired>, I>>(base?: I): SessionExpired {
    return SessionExpired.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SessionExpired>, I>>(object: I): SessionExpired {
    const message = createBaseSessionExpired();
    message.sessionId = object.sessionId ?? 0;
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
