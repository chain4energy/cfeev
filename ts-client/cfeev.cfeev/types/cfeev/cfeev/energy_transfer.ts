/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cfeev.cfeev";

export enum TransferStatus {
  REQUESTED = 0,
  ONGOING = 1,
  PAID = 2,
  CANCELLED = 3,
  UNRECOGNIZED = -1,
}

export function transferStatusFromJSON(object: any): TransferStatus {
  switch (object) {
    case 0:
    case "REQUESTED":
      return TransferStatus.REQUESTED;
    case 1:
    case "ONGOING":
      return TransferStatus.ONGOING;
    case 2:
    case "PAID":
      return TransferStatus.PAID;
    case 3:
    case "CANCELLED":
      return TransferStatus.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferStatus.UNRECOGNIZED;
  }
}

export function transferStatusToJSON(object: TransferStatus): string {
  switch (object) {
    case TransferStatus.REQUESTED:
      return "REQUESTED";
    case TransferStatus.ONGOING:
      return "ONGOING";
    case TransferStatus.PAID:
      return "PAID";
    case TransferStatus.CANCELLED:
      return "CANCELLED";
    case TransferStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EnergyTransfer {
  id: number;
  energyTransferOfferId: number;
  chargerId: string;
  ownerAccountAddress: string;
  driverAccountAddress: string;
  offeredTariff: number;
  status: TransferStatus;
  collateral: number;
  energyToTransfer: number;
  energyTransferred: number;
  paidDate: string;
}

function createBaseEnergyTransfer(): EnergyTransfer {
  return {
    id: 0,
    energyTransferOfferId: 0,
    chargerId: "",
    ownerAccountAddress: "",
    driverAccountAddress: "",
    offeredTariff: 0,
    status: 0,
    collateral: 0,
    energyToTransfer: 0,
    energyTransferred: 0,
    paidDate: "",
  };
}

export const EnergyTransfer = {
  encode(message: EnergyTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.energyTransferOfferId !== 0) {
      writer.uint32(16).uint64(message.energyTransferOfferId);
    }
    if (message.chargerId !== "") {
      writer.uint32(26).string(message.chargerId);
    }
    if (message.ownerAccountAddress !== "") {
      writer.uint32(34).string(message.ownerAccountAddress);
    }
    if (message.driverAccountAddress !== "") {
      writer.uint32(42).string(message.driverAccountAddress);
    }
    if (message.offeredTariff !== 0) {
      writer.uint32(48).int32(message.offeredTariff);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.collateral !== 0) {
      writer.uint32(64).uint64(message.collateral);
    }
    if (message.energyToTransfer !== 0) {
      writer.uint32(72).int32(message.energyToTransfer);
    }
    if (message.energyTransferred !== 0) {
      writer.uint32(80).int32(message.energyTransferred);
    }
    if (message.paidDate !== "") {
      writer.uint32(90).string(message.paidDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnergyTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.energyTransferOfferId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.chargerId = reader.string();
          break;
        case 4:
          message.ownerAccountAddress = reader.string();
          break;
        case 5:
          message.driverAccountAddress = reader.string();
          break;
        case 6:
          message.offeredTariff = reader.int32();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.collateral = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.energyToTransfer = reader.int32();
          break;
        case 10:
          message.energyTransferred = reader.int32();
          break;
        case 11:
          message.paidDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnergyTransfer {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      energyTransferOfferId: isSet(object.energyTransferOfferId) ? Number(object.energyTransferOfferId) : 0,
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      ownerAccountAddress: isSet(object.ownerAccountAddress) ? String(object.ownerAccountAddress) : "",
      driverAccountAddress: isSet(object.driverAccountAddress) ? String(object.driverAccountAddress) : "",
      offeredTariff: isSet(object.offeredTariff) ? Number(object.offeredTariff) : 0,
      status: isSet(object.status) ? transferStatusFromJSON(object.status) : 0,
      collateral: isSet(object.collateral) ? Number(object.collateral) : 0,
      energyToTransfer: isSet(object.energyToTransfer) ? Number(object.energyToTransfer) : 0,
      energyTransferred: isSet(object.energyTransferred) ? Number(object.energyTransferred) : 0,
      paidDate: isSet(object.paidDate) ? String(object.paidDate) : "",
    };
  },

  toJSON(message: EnergyTransfer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.energyTransferOfferId !== undefined
      && (obj.energyTransferOfferId = Math.round(message.energyTransferOfferId));
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.ownerAccountAddress !== undefined && (obj.ownerAccountAddress = message.ownerAccountAddress);
    message.driverAccountAddress !== undefined && (obj.driverAccountAddress = message.driverAccountAddress);
    message.offeredTariff !== undefined && (obj.offeredTariff = Math.round(message.offeredTariff));
    message.status !== undefined && (obj.status = transferStatusToJSON(message.status));
    message.collateral !== undefined && (obj.collateral = Math.round(message.collateral));
    message.energyToTransfer !== undefined && (obj.energyToTransfer = Math.round(message.energyToTransfer));
    message.energyTransferred !== undefined && (obj.energyTransferred = Math.round(message.energyTransferred));
    message.paidDate !== undefined && (obj.paidDate = message.paidDate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnergyTransfer>, I>>(object: I): EnergyTransfer {
    const message = createBaseEnergyTransfer();
    message.id = object.id ?? 0;
    message.energyTransferOfferId = object.energyTransferOfferId ?? 0;
    message.chargerId = object.chargerId ?? "";
    message.ownerAccountAddress = object.ownerAccountAddress ?? "";
    message.driverAccountAddress = object.driverAccountAddress ?? "";
    message.offeredTariff = object.offeredTariff ?? 0;
    message.status = object.status ?? 0;
    message.collateral = object.collateral ?? 0;
    message.energyToTransfer = object.energyToTransfer ?? 0;
    message.energyTransferred = object.energyTransferred ?? 0;
    message.paidDate = object.paidDate ?? "";
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
