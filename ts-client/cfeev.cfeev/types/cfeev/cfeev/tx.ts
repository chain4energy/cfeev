/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Location } from "./location";

export const protobufPackage = "cfeev.cfeev";

export interface MsgPublishEnergyTransferOffer {
  creator: string;
  chargerId: string;
  tariff: string;
  location: Location | undefined;
}

export interface MsgPublishEnergyTransferOfferResponse {
}

export interface MsgStartEnergyTransferRequest {
  creator: string;
  energyTransferOfferId: number;
  chargerId: string;
  ownerAccountAddress: string;
  offeredTariff: string;
}

export interface MsgStartEnergyTransferRequestResponse {
}

export interface MsgEnergyTransferStartedRequest {
  creator: string;
  energyTransferId: number;
  chargerId: string;
  info: string;
}

export interface MsgEnergyTransferStartedRequestResponse {
}

function createBaseMsgPublishEnergyTransferOffer(): MsgPublishEnergyTransferOffer {
  return { creator: "", chargerId: "", tariff: "", location: undefined };
}

export const MsgPublishEnergyTransferOffer = {
  encode(message: MsgPublishEnergyTransferOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chargerId !== "") {
      writer.uint32(18).string(message.chargerId);
    }
    if (message.tariff !== "") {
      writer.uint32(26).string(message.tariff);
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishEnergyTransferOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPublishEnergyTransferOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chargerId = reader.string();
          break;
        case 3:
          message.tariff = reader.string();
          break;
        case 4:
          message.location = Location.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPublishEnergyTransferOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      tariff: isSet(object.tariff) ? String(object.tariff) : "",
      location: isSet(object.location) ? Location.fromJSON(object.location) : undefined,
    };
  },

  toJSON(message: MsgPublishEnergyTransferOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.tariff !== undefined && (obj.tariff = message.tariff);
    message.location !== undefined && (obj.location = message.location ? Location.toJSON(message.location) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPublishEnergyTransferOffer>, I>>(
    object: I,
  ): MsgPublishEnergyTransferOffer {
    const message = createBaseMsgPublishEnergyTransferOffer();
    message.creator = object.creator ?? "";
    message.chargerId = object.chargerId ?? "";
    message.tariff = object.tariff ?? "";
    message.location = (object.location !== undefined && object.location !== null)
      ? Location.fromPartial(object.location)
      : undefined;
    return message;
  },
};

function createBaseMsgPublishEnergyTransferOfferResponse(): MsgPublishEnergyTransferOfferResponse {
  return {};
}

export const MsgPublishEnergyTransferOfferResponse = {
  encode(_: MsgPublishEnergyTransferOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishEnergyTransferOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPublishEnergyTransferOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgPublishEnergyTransferOfferResponse {
    return {};
  },

  toJSON(_: MsgPublishEnergyTransferOfferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPublishEnergyTransferOfferResponse>, I>>(
    _: I,
  ): MsgPublishEnergyTransferOfferResponse {
    const message = createBaseMsgPublishEnergyTransferOfferResponse();
    return message;
  },
};

function createBaseMsgStartEnergyTransferRequest(): MsgStartEnergyTransferRequest {
  return { creator: "", energyTransferOfferId: 0, chargerId: "", ownerAccountAddress: "", offeredTariff: "" };
}

export const MsgStartEnergyTransferRequest = {
  encode(message: MsgStartEnergyTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    if (message.offeredTariff !== "") {
      writer.uint32(42).string(message.offeredTariff);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartEnergyTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartEnergyTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
          message.offeredTariff = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartEnergyTransferRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      energyTransferOfferId: isSet(object.energyTransferOfferId) ? Number(object.energyTransferOfferId) : 0,
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      ownerAccountAddress: isSet(object.ownerAccountAddress) ? String(object.ownerAccountAddress) : "",
      offeredTariff: isSet(object.offeredTariff) ? String(object.offeredTariff) : "",
    };
  },

  toJSON(message: MsgStartEnergyTransferRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.energyTransferOfferId !== undefined
      && (obj.energyTransferOfferId = Math.round(message.energyTransferOfferId));
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.ownerAccountAddress !== undefined && (obj.ownerAccountAddress = message.ownerAccountAddress);
    message.offeredTariff !== undefined && (obj.offeredTariff = message.offeredTariff);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartEnergyTransferRequest>, I>>(
    object: I,
  ): MsgStartEnergyTransferRequest {
    const message = createBaseMsgStartEnergyTransferRequest();
    message.creator = object.creator ?? "";
    message.energyTransferOfferId = object.energyTransferOfferId ?? 0;
    message.chargerId = object.chargerId ?? "";
    message.ownerAccountAddress = object.ownerAccountAddress ?? "";
    message.offeredTariff = object.offeredTariff ?? "";
    return message;
  },
};

function createBaseMsgStartEnergyTransferRequestResponse(): MsgStartEnergyTransferRequestResponse {
  return {};
}

export const MsgStartEnergyTransferRequestResponse = {
  encode(_: MsgStartEnergyTransferRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartEnergyTransferRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartEnergyTransferRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgStartEnergyTransferRequestResponse {
    return {};
  },

  toJSON(_: MsgStartEnergyTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartEnergyTransferRequestResponse>, I>>(
    _: I,
  ): MsgStartEnergyTransferRequestResponse {
    const message = createBaseMsgStartEnergyTransferRequestResponse();
    return message;
  },
};

function createBaseMsgEnergyTransferStartedRequest(): MsgEnergyTransferStartedRequest {
  return { creator: "", energyTransferId: 0, chargerId: "", info: "" };
}

export const MsgEnergyTransferStartedRequest = {
  encode(message: MsgEnergyTransferStartedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.energyTransferId !== 0) {
      writer.uint32(16).uint64(message.energyTransferId);
    }
    if (message.chargerId !== "") {
      writer.uint32(26).string(message.chargerId);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnergyTransferStartedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnergyTransferStartedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.energyTransferId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.chargerId = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnergyTransferStartedRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      energyTransferId: isSet(object.energyTransferId) ? Number(object.energyTransferId) : 0,
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      info: isSet(object.info) ? String(object.info) : "",
    };
  },

  toJSON(message: MsgEnergyTransferStartedRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.energyTransferId !== undefined && (obj.energyTransferId = Math.round(message.energyTransferId));
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.info !== undefined && (obj.info = message.info);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnergyTransferStartedRequest>, I>>(
    object: I,
  ): MsgEnergyTransferStartedRequest {
    const message = createBaseMsgEnergyTransferStartedRequest();
    message.creator = object.creator ?? "";
    message.energyTransferId = object.energyTransferId ?? 0;
    message.chargerId = object.chargerId ?? "";
    message.info = object.info ?? "";
    return message;
  },
};

function createBaseMsgEnergyTransferStartedRequestResponse(): MsgEnergyTransferStartedRequestResponse {
  return {};
}

export const MsgEnergyTransferStartedRequestResponse = {
  encode(_: MsgEnergyTransferStartedRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnergyTransferStartedRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnergyTransferStartedRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEnergyTransferStartedRequestResponse {
    return {};
  },

  toJSON(_: MsgEnergyTransferStartedRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnergyTransferStartedRequestResponse>, I>>(
    _: I,
  ): MsgEnergyTransferStartedRequestResponse {
    const message = createBaseMsgEnergyTransferStartedRequestResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PublishEnergyTransferOffer(request: MsgPublishEnergyTransferOffer): Promise<MsgPublishEnergyTransferOfferResponse>;
  StartEnergyTransferRequest(request: MsgStartEnergyTransferRequest): Promise<MsgStartEnergyTransferRequestResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  EnergyTransferStartedRequest(
    request: MsgEnergyTransferStartedRequest,
  ): Promise<MsgEnergyTransferStartedRequestResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PublishEnergyTransferOffer = this.PublishEnergyTransferOffer.bind(this);
    this.StartEnergyTransferRequest = this.StartEnergyTransferRequest.bind(this);
    this.EnergyTransferStartedRequest = this.EnergyTransferStartedRequest.bind(this);
  }
  PublishEnergyTransferOffer(request: MsgPublishEnergyTransferOffer): Promise<MsgPublishEnergyTransferOfferResponse> {
    const data = MsgPublishEnergyTransferOffer.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Msg", "PublishEnergyTransferOffer", data);
    return promise.then((data) => MsgPublishEnergyTransferOfferResponse.decode(new _m0.Reader(data)));
  }

  StartEnergyTransferRequest(request: MsgStartEnergyTransferRequest): Promise<MsgStartEnergyTransferRequestResponse> {
    const data = MsgStartEnergyTransferRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Msg", "StartEnergyTransferRequest", data);
    return promise.then((data) => MsgStartEnergyTransferRequestResponse.decode(new _m0.Reader(data)));
  }

  EnergyTransferStartedRequest(
    request: MsgEnergyTransferStartedRequest,
  ): Promise<MsgEnergyTransferStartedRequestResponse> {
    const data = MsgEnergyTransferStartedRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Msg", "EnergyTransferStartedRequest", data);
    return promise.then((data) => MsgEnergyTransferStartedRequestResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
