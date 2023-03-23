/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cfeev.cfeev";

export interface EnergyTransferCreatedEvent {
  energyTransferId: number;
  chargerId: string;
  energyAmountToTransfer: number;
  action: string;
}

function createBaseEnergyTransferCreatedEvent(): EnergyTransferCreatedEvent {
  return { energyTransferId: 0, chargerId: "", energyAmountToTransfer: 0, action: "" };
}

export const EnergyTransferCreatedEvent = {
  encode(message: EnergyTransferCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.energyTransferId !== 0) {
      writer.uint32(8).uint64(message.energyTransferId);
    }
    if (message.chargerId !== "") {
      writer.uint32(18).string(message.chargerId);
    }
    if (message.energyAmountToTransfer !== 0) {
      writer.uint32(24).int32(message.energyAmountToTransfer);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnergyTransferCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyTransferCreatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.energyTransferId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chargerId = reader.string();
          break;
        case 3:
          message.energyAmountToTransfer = reader.int32();
          break;
        case 4:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnergyTransferCreatedEvent {
    return {
      energyTransferId: isSet(object.energyTransferId) ? Number(object.energyTransferId) : 0,
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      energyAmountToTransfer: isSet(object.energyAmountToTransfer) ? Number(object.energyAmountToTransfer) : 0,
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: EnergyTransferCreatedEvent): unknown {
    const obj: any = {};
    message.energyTransferId !== undefined && (obj.energyTransferId = Math.round(message.energyTransferId));
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.energyAmountToTransfer !== undefined
      && (obj.energyAmountToTransfer = Math.round(message.energyAmountToTransfer));
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnergyTransferCreatedEvent>, I>>(object: I): EnergyTransferCreatedEvent {
    const message = createBaseEnergyTransferCreatedEvent();
    message.energyTransferId = object.energyTransferId ?? 0;
    message.chargerId = object.chargerId ?? "";
    message.energyAmountToTransfer = object.energyAmountToTransfer ?? 0;
    message.action = object.action ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
