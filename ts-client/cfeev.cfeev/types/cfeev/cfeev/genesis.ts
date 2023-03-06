/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EnergyTransfer } from "./energy_transfer";
import { EnergyTransferOffer } from "./energy_transfer_offer";
import { Params } from "./params";

export const protobufPackage = "cfeev.cfeev";

/** GenesisState defines the cfeev module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  energyTransferOfferList: EnergyTransferOffer[];
  energyTransferOfferCount: number;
  energyTransferList: EnergyTransfer[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  energyTransferCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    energyTransferOfferList: [],
    energyTransferOfferCount: 0,
    energyTransferList: [],
    energyTransferCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.energyTransferOfferList) {
      EnergyTransferOffer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.energyTransferOfferCount !== 0) {
      writer.uint32(24).uint64(message.energyTransferOfferCount);
    }
    for (const v of message.energyTransferList) {
      EnergyTransfer.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.energyTransferCount !== 0) {
      writer.uint32(40).uint64(message.energyTransferCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.energyTransferOfferList.push(EnergyTransferOffer.decode(reader, reader.uint32()));
          break;
        case 3:
          message.energyTransferOfferCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.energyTransferList.push(EnergyTransfer.decode(reader, reader.uint32()));
          break;
        case 5:
          message.energyTransferCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      energyTransferOfferList: Array.isArray(object?.energyTransferOfferList)
        ? object.energyTransferOfferList.map((e: any) => EnergyTransferOffer.fromJSON(e))
        : [],
      energyTransferOfferCount: isSet(object.energyTransferOfferCount) ? Number(object.energyTransferOfferCount) : 0,
      energyTransferList: Array.isArray(object?.energyTransferList)
        ? object.energyTransferList.map((e: any) => EnergyTransfer.fromJSON(e))
        : [],
      energyTransferCount: isSet(object.energyTransferCount) ? Number(object.energyTransferCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.energyTransferOfferList) {
      obj.energyTransferOfferList = message.energyTransferOfferList.map((e) =>
        e ? EnergyTransferOffer.toJSON(e) : undefined
      );
    } else {
      obj.energyTransferOfferList = [];
    }
    message.energyTransferOfferCount !== undefined
      && (obj.energyTransferOfferCount = Math.round(message.energyTransferOfferCount));
    if (message.energyTransferList) {
      obj.energyTransferList = message.energyTransferList.map((e) => e ? EnergyTransfer.toJSON(e) : undefined);
    } else {
      obj.energyTransferList = [];
    }
    message.energyTransferCount !== undefined && (obj.energyTransferCount = Math.round(message.energyTransferCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.energyTransferOfferList = object.energyTransferOfferList?.map((e) => EnergyTransferOffer.fromPartial(e))
      || [];
    message.energyTransferOfferCount = object.energyTransferOfferCount ?? 0;
    message.energyTransferList = object.energyTransferList?.map((e) => EnergyTransfer.fromPartial(e)) || [];
    message.energyTransferCount = object.energyTransferCount ?? 0;
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
