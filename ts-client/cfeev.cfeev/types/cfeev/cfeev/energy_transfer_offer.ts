/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Location } from "./location";

export const protobufPackage = "cfeev.cfeev";

export enum ChargerStatus {
  ACTIVE = 0,
  BUSY = 1,
  INACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function chargerStatusFromJSON(object: any): ChargerStatus {
  switch (object) {
    case 0:
    case "ACTIVE":
      return ChargerStatus.ACTIVE;
    case 1:
    case "BUSY":
      return ChargerStatus.BUSY;
    case 2:
    case "INACTIVE":
      return ChargerStatus.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChargerStatus.UNRECOGNIZED;
  }
}

export function chargerStatusToJSON(object: ChargerStatus): string {
  switch (object) {
    case ChargerStatus.ACTIVE:
      return "ACTIVE";
    case ChargerStatus.BUSY:
      return "BUSY";
    case ChargerStatus.INACTIVE:
      return "INACTIVE";
    case ChargerStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EnergyTransferOffer {
  id: number;
  owner: string;
  chargerId: string;
  chargerStatus: ChargerStatus;
  location: Location | undefined;
  tariff: number;
}

function createBaseEnergyTransferOffer(): EnergyTransferOffer {
  return { id: 0, owner: "", chargerId: "", chargerStatus: 0, location: undefined, tariff: 0 };
}

export const EnergyTransferOffer = {
  encode(message: EnergyTransferOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.chargerId !== "") {
      writer.uint32(26).string(message.chargerId);
    }
    if (message.chargerStatus !== 0) {
      writer.uint32(32).int32(message.chargerStatus);
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(42).fork()).ldelim();
    }
    if (message.tariff !== 0) {
      writer.uint32(53).float(message.tariff);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnergyTransferOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyTransferOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.chargerId = reader.string();
          break;
        case 4:
          message.chargerStatus = reader.int32() as any;
          break;
        case 5:
          message.location = Location.decode(reader, reader.uint32());
          break;
        case 6:
          message.tariff = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnergyTransferOffer {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      chargerStatus: isSet(object.chargerStatus) ? chargerStatusFromJSON(object.chargerStatus) : 0,
      location: isSet(object.location) ? Location.fromJSON(object.location) : undefined,
      tariff: isSet(object.tariff) ? Number(object.tariff) : 0,
    };
  },

  toJSON(message: EnergyTransferOffer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.chargerStatus !== undefined && (obj.chargerStatus = chargerStatusToJSON(message.chargerStatus));
    message.location !== undefined && (obj.location = message.location ? Location.toJSON(message.location) : undefined);
    message.tariff !== undefined && (obj.tariff = message.tariff);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnergyTransferOffer>, I>>(object: I): EnergyTransferOffer {
    const message = createBaseEnergyTransferOffer();
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.chargerId = object.chargerId ?? "";
    message.chargerStatus = object.chargerStatus ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? Location.fromPartial(object.location)
      : undefined;
    message.tariff = object.tariff ?? 0;
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
