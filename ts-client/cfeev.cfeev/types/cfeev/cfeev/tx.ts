/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PlugType, plugTypeFromJSON, plugTypeToJSON } from "./energy_transfer_offer";
import { Location } from "./location";

export const protobufPackage = "cfeev.cfeev";

export interface MsgPublishEnergyTransferOffer {
  creator: string;
  chargerId: string;
  tariff: string;
  location: Location | undefined;
  name: string;
  plugType: PlugType;
}

export interface MsgPublishEnergyTransferOfferResponse {
  id: number;
}

export interface MsgStartEnergyTransferRequest {
  creator: string;
  energyTransferOfferId: number;
  chargerId: string;
  ownerAccountAddress: string;
  offeredTariff: string;
}

export interface MsgStartEnergyTransferRequestResponse {
  id: number;
}

export interface MsgEnergyTransferStartedRequest {
  creator: string;
  energyTransferId: number;
  chargerId: string;
  info: string;
}

export interface MsgEnergyTransferStartedRequestResponse {
}

export interface MsgEnergyTransferCompletedRequest {
  creator: string;
  energyTransferId: number;
  chargerId: string;
  usedServiceUnits: string;
  info: string;
}

export interface MsgEnergyTransferCompletedRequestResponse {
}

export interface MsgCancelEnergyTransferRequest {
  creator: string;
  energyTransferId: number;
  chargerId: string;
  errorInfo: string;
  errorCode: string;
}

export interface MsgCancelEnergyTransferRequestResponse {
}

export interface MsgRemoveEnergyOffer {
  creator: string;
  id: number;
}

export interface MsgRemoveEnergyOfferResponse {
}

function createBaseMsgPublishEnergyTransferOffer(): MsgPublishEnergyTransferOffer {
  return { creator: "", chargerId: "", tariff: "", location: undefined, name: "", plugType: 0 };
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
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.plugType !== 0) {
      writer.uint32(48).int32(message.plugType);
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
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.plugType = reader.int32() as any;
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
      name: isSet(object.name) ? String(object.name) : "",
      plugType: isSet(object.plugType) ? plugTypeFromJSON(object.plugType) : 0,
    };
  },

  toJSON(message: MsgPublishEnergyTransferOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.tariff !== undefined && (obj.tariff = message.tariff);
    message.location !== undefined && (obj.location = message.location ? Location.toJSON(message.location) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.plugType !== undefined && (obj.plugType = plugTypeToJSON(message.plugType));
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
    message.name = object.name ?? "";
    message.plugType = object.plugType ?? 0;
    return message;
  },
};

function createBaseMsgPublishEnergyTransferOfferResponse(): MsgPublishEnergyTransferOfferResponse {
  return { id: 0 };
}

export const MsgPublishEnergyTransferOfferResponse = {
  encode(message: MsgPublishEnergyTransferOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishEnergyTransferOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPublishEnergyTransferOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPublishEnergyTransferOfferResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgPublishEnergyTransferOfferResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPublishEnergyTransferOfferResponse>, I>>(
    object: I,
  ): MsgPublishEnergyTransferOfferResponse {
    const message = createBaseMsgPublishEnergyTransferOfferResponse();
    message.id = object.id ?? 0;
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
  return { id: 0 };
}

export const MsgStartEnergyTransferRequestResponse = {
  encode(message: MsgStartEnergyTransferRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartEnergyTransferRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartEnergyTransferRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartEnergyTransferRequestResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgStartEnergyTransferRequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartEnergyTransferRequestResponse>, I>>(
    object: I,
  ): MsgStartEnergyTransferRequestResponse {
    const message = createBaseMsgStartEnergyTransferRequestResponse();
    message.id = object.id ?? 0;
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

function createBaseMsgEnergyTransferCompletedRequest(): MsgEnergyTransferCompletedRequest {
  return { creator: "", energyTransferId: 0, chargerId: "", usedServiceUnits: "", info: "" };
}

export const MsgEnergyTransferCompletedRequest = {
  encode(message: MsgEnergyTransferCompletedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.energyTransferId !== 0) {
      writer.uint32(16).uint64(message.energyTransferId);
    }
    if (message.chargerId !== "") {
      writer.uint32(26).string(message.chargerId);
    }
    if (message.usedServiceUnits !== "") {
      writer.uint32(34).string(message.usedServiceUnits);
    }
    if (message.info !== "") {
      writer.uint32(42).string(message.info);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnergyTransferCompletedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnergyTransferCompletedRequest();
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
          message.usedServiceUnits = reader.string();
          break;
        case 5:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnergyTransferCompletedRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      energyTransferId: isSet(object.energyTransferId) ? Number(object.energyTransferId) : 0,
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      usedServiceUnits: isSet(object.usedServiceUnits) ? String(object.usedServiceUnits) : "",
      info: isSet(object.info) ? String(object.info) : "",
    };
  },

  toJSON(message: MsgEnergyTransferCompletedRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.energyTransferId !== undefined && (obj.energyTransferId = Math.round(message.energyTransferId));
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.usedServiceUnits !== undefined && (obj.usedServiceUnits = message.usedServiceUnits);
    message.info !== undefined && (obj.info = message.info);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnergyTransferCompletedRequest>, I>>(
    object: I,
  ): MsgEnergyTransferCompletedRequest {
    const message = createBaseMsgEnergyTransferCompletedRequest();
    message.creator = object.creator ?? "";
    message.energyTransferId = object.energyTransferId ?? 0;
    message.chargerId = object.chargerId ?? "";
    message.usedServiceUnits = object.usedServiceUnits ?? "";
    message.info = object.info ?? "";
    return message;
  },
};

function createBaseMsgEnergyTransferCompletedRequestResponse(): MsgEnergyTransferCompletedRequestResponse {
  return {};
}

export const MsgEnergyTransferCompletedRequestResponse = {
  encode(_: MsgEnergyTransferCompletedRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnergyTransferCompletedRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnergyTransferCompletedRequestResponse();
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

  fromJSON(_: any): MsgEnergyTransferCompletedRequestResponse {
    return {};
  },

  toJSON(_: MsgEnergyTransferCompletedRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnergyTransferCompletedRequestResponse>, I>>(
    _: I,
  ): MsgEnergyTransferCompletedRequestResponse {
    const message = createBaseMsgEnergyTransferCompletedRequestResponse();
    return message;
  },
};

function createBaseMsgCancelEnergyTransferRequest(): MsgCancelEnergyTransferRequest {
  return { creator: "", energyTransferId: 0, chargerId: "", errorInfo: "", errorCode: "" };
}

export const MsgCancelEnergyTransferRequest = {
  encode(message: MsgCancelEnergyTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.energyTransferId !== 0) {
      writer.uint32(16).uint64(message.energyTransferId);
    }
    if (message.chargerId !== "") {
      writer.uint32(26).string(message.chargerId);
    }
    if (message.errorInfo !== "") {
      writer.uint32(34).string(message.errorInfo);
    }
    if (message.errorCode !== "") {
      writer.uint32(42).string(message.errorCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelEnergyTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelEnergyTransferRequest();
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
          message.errorInfo = reader.string();
          break;
        case 5:
          message.errorCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelEnergyTransferRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      energyTransferId: isSet(object.energyTransferId) ? Number(object.energyTransferId) : 0,
      chargerId: isSet(object.chargerId) ? String(object.chargerId) : "",
      errorInfo: isSet(object.errorInfo) ? String(object.errorInfo) : "",
      errorCode: isSet(object.errorCode) ? String(object.errorCode) : "",
    };
  },

  toJSON(message: MsgCancelEnergyTransferRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.energyTransferId !== undefined && (obj.energyTransferId = Math.round(message.energyTransferId));
    message.chargerId !== undefined && (obj.chargerId = message.chargerId);
    message.errorInfo !== undefined && (obj.errorInfo = message.errorInfo);
    message.errorCode !== undefined && (obj.errorCode = message.errorCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelEnergyTransferRequest>, I>>(
    object: I,
  ): MsgCancelEnergyTransferRequest {
    const message = createBaseMsgCancelEnergyTransferRequest();
    message.creator = object.creator ?? "";
    message.energyTransferId = object.energyTransferId ?? 0;
    message.chargerId = object.chargerId ?? "";
    message.errorInfo = object.errorInfo ?? "";
    message.errorCode = object.errorCode ?? "";
    return message;
  },
};

function createBaseMsgCancelEnergyTransferRequestResponse(): MsgCancelEnergyTransferRequestResponse {
  return {};
}

export const MsgCancelEnergyTransferRequestResponse = {
  encode(_: MsgCancelEnergyTransferRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelEnergyTransferRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelEnergyTransferRequestResponse();
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

  fromJSON(_: any): MsgCancelEnergyTransferRequestResponse {
    return {};
  },

  toJSON(_: MsgCancelEnergyTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelEnergyTransferRequestResponse>, I>>(
    _: I,
  ): MsgCancelEnergyTransferRequestResponse {
    const message = createBaseMsgCancelEnergyTransferRequestResponse();
    return message;
  },
};

function createBaseMsgRemoveEnergyOffer(): MsgRemoveEnergyOffer {
  return { creator: "", id: 0 };
}

export const MsgRemoveEnergyOffer = {
  encode(message: MsgRemoveEnergyOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveEnergyOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveEnergyOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveEnergyOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgRemoveEnergyOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveEnergyOffer>, I>>(object: I): MsgRemoveEnergyOffer {
    const message = createBaseMsgRemoveEnergyOffer();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgRemoveEnergyOfferResponse(): MsgRemoveEnergyOfferResponse {
  return {};
}

export const MsgRemoveEnergyOfferResponse = {
  encode(_: MsgRemoveEnergyOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveEnergyOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveEnergyOfferResponse();
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

  fromJSON(_: any): MsgRemoveEnergyOfferResponse {
    return {};
  },

  toJSON(_: MsgRemoveEnergyOfferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveEnergyOfferResponse>, I>>(_: I): MsgRemoveEnergyOfferResponse {
    const message = createBaseMsgRemoveEnergyOfferResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PublishEnergyTransferOffer(request: MsgPublishEnergyTransferOffer): Promise<MsgPublishEnergyTransferOfferResponse>;
  StartEnergyTransferRequest(request: MsgStartEnergyTransferRequest): Promise<MsgStartEnergyTransferRequestResponse>;
  EnergyTransferStartedRequest(
    request: MsgEnergyTransferStartedRequest,
  ): Promise<MsgEnergyTransferStartedRequestResponse>;
  EnergyTransferCompletedRequest(
    request: MsgEnergyTransferCompletedRequest,
  ): Promise<MsgEnergyTransferCompletedRequestResponse>;
  CancelEnergyTransferRequest(request: MsgCancelEnergyTransferRequest): Promise<MsgCancelEnergyTransferRequestResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RemoveEnergyOffer(request: MsgRemoveEnergyOffer): Promise<MsgRemoveEnergyOfferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PublishEnergyTransferOffer = this.PublishEnergyTransferOffer.bind(this);
    this.StartEnergyTransferRequest = this.StartEnergyTransferRequest.bind(this);
    this.EnergyTransferStartedRequest = this.EnergyTransferStartedRequest.bind(this);
    this.EnergyTransferCompletedRequest = this.EnergyTransferCompletedRequest.bind(this);
    this.CancelEnergyTransferRequest = this.CancelEnergyTransferRequest.bind(this);
    this.RemoveEnergyOffer = this.RemoveEnergyOffer.bind(this);
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

  EnergyTransferCompletedRequest(
    request: MsgEnergyTransferCompletedRequest,
  ): Promise<MsgEnergyTransferCompletedRequestResponse> {
    const data = MsgEnergyTransferCompletedRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Msg", "EnergyTransferCompletedRequest", data);
    return promise.then((data) => MsgEnergyTransferCompletedRequestResponse.decode(new _m0.Reader(data)));
  }

  CancelEnergyTransferRequest(
    request: MsgCancelEnergyTransferRequest,
  ): Promise<MsgCancelEnergyTransferRequestResponse> {
    const data = MsgCancelEnergyTransferRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Msg", "CancelEnergyTransferRequest", data);
    return promise.then((data) => MsgCancelEnergyTransferRequestResponse.decode(new _m0.Reader(data)));
  }

  RemoveEnergyOffer(request: MsgRemoveEnergyOffer): Promise<MsgRemoveEnergyOfferResponse> {
    const data = MsgRemoveEnergyOffer.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Msg", "RemoveEnergyOffer", data);
    return promise.then((data) => MsgRemoveEnergyOfferResponse.decode(new _m0.Reader(data)));
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
