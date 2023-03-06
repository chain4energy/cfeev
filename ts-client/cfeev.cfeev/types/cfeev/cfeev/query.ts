/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { EnergyTransfer } from "./energy_transfer";
import { EnergyTransferOffer } from "./energy_transfer_offer";
import { Params } from "./params";

export const protobufPackage = "cfeev.cfeev";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetEnergyTransferOfferRequest {
  id: number;
}

export interface QueryGetEnergyTransferOfferResponse {
  EnergyTransferOffer: EnergyTransferOffer | undefined;
}

export interface QueryAllEnergyTransferOfferRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllEnergyTransferOfferResponse {
  EnergyTransferOffer: EnergyTransferOffer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetEnergyTransferRequest {
  id: number;
}

export interface QueryGetEnergyTransferResponse {
  EnergyTransfer: EnergyTransfer | undefined;
}

export interface QueryAllEnergyTransferRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllEnergyTransferResponse {
  EnergyTransfer: EnergyTransfer[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetEnergyTransferOfferRequest(): QueryGetEnergyTransferOfferRequest {
  return { id: 0 };
}

export const QueryGetEnergyTransferOfferRequest = {
  encode(message: QueryGetEnergyTransferOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEnergyTransferOfferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEnergyTransferOfferRequest();
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

  fromJSON(object: any): QueryGetEnergyTransferOfferRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetEnergyTransferOfferRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEnergyTransferOfferRequest>, I>>(
    object: I,
  ): QueryGetEnergyTransferOfferRequest {
    const message = createBaseQueryGetEnergyTransferOfferRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetEnergyTransferOfferResponse(): QueryGetEnergyTransferOfferResponse {
  return { EnergyTransferOffer: undefined };
}

export const QueryGetEnergyTransferOfferResponse = {
  encode(message: QueryGetEnergyTransferOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EnergyTransferOffer !== undefined) {
      EnergyTransferOffer.encode(message.EnergyTransferOffer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEnergyTransferOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEnergyTransferOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EnergyTransferOffer = EnergyTransferOffer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEnergyTransferOfferResponse {
    return {
      EnergyTransferOffer: isSet(object.EnergyTransferOffer)
        ? EnergyTransferOffer.fromJSON(object.EnergyTransferOffer)
        : undefined,
    };
  },

  toJSON(message: QueryGetEnergyTransferOfferResponse): unknown {
    const obj: any = {};
    message.EnergyTransferOffer !== undefined && (obj.EnergyTransferOffer = message.EnergyTransferOffer
      ? EnergyTransferOffer.toJSON(message.EnergyTransferOffer)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEnergyTransferOfferResponse>, I>>(
    object: I,
  ): QueryGetEnergyTransferOfferResponse {
    const message = createBaseQueryGetEnergyTransferOfferResponse();
    message.EnergyTransferOffer = (object.EnergyTransferOffer !== undefined && object.EnergyTransferOffer !== null)
      ? EnergyTransferOffer.fromPartial(object.EnergyTransferOffer)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEnergyTransferOfferRequest(): QueryAllEnergyTransferOfferRequest {
  return { pagination: undefined };
}

export const QueryAllEnergyTransferOfferRequest = {
  encode(message: QueryAllEnergyTransferOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEnergyTransferOfferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEnergyTransferOfferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEnergyTransferOfferRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllEnergyTransferOfferRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEnergyTransferOfferRequest>, I>>(
    object: I,
  ): QueryAllEnergyTransferOfferRequest {
    const message = createBaseQueryAllEnergyTransferOfferRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEnergyTransferOfferResponse(): QueryAllEnergyTransferOfferResponse {
  return { EnergyTransferOffer: [], pagination: undefined };
}

export const QueryAllEnergyTransferOfferResponse = {
  encode(message: QueryAllEnergyTransferOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EnergyTransferOffer) {
      EnergyTransferOffer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEnergyTransferOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEnergyTransferOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EnergyTransferOffer.push(EnergyTransferOffer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEnergyTransferOfferResponse {
    return {
      EnergyTransferOffer: Array.isArray(object?.EnergyTransferOffer)
        ? object.EnergyTransferOffer.map((e: any) => EnergyTransferOffer.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEnergyTransferOfferResponse): unknown {
    const obj: any = {};
    if (message.EnergyTransferOffer) {
      obj.EnergyTransferOffer = message.EnergyTransferOffer.map((e) => e ? EnergyTransferOffer.toJSON(e) : undefined);
    } else {
      obj.EnergyTransferOffer = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEnergyTransferOfferResponse>, I>>(
    object: I,
  ): QueryAllEnergyTransferOfferResponse {
    const message = createBaseQueryAllEnergyTransferOfferResponse();
    message.EnergyTransferOffer = object.EnergyTransferOffer?.map((e) => EnergyTransferOffer.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetEnergyTransferRequest(): QueryGetEnergyTransferRequest {
  return { id: 0 };
}

export const QueryGetEnergyTransferRequest = {
  encode(message: QueryGetEnergyTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEnergyTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEnergyTransferRequest();
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

  fromJSON(object: any): QueryGetEnergyTransferRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetEnergyTransferRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEnergyTransferRequest>, I>>(
    object: I,
  ): QueryGetEnergyTransferRequest {
    const message = createBaseQueryGetEnergyTransferRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetEnergyTransferResponse(): QueryGetEnergyTransferResponse {
  return { EnergyTransfer: undefined };
}

export const QueryGetEnergyTransferResponse = {
  encode(message: QueryGetEnergyTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EnergyTransfer !== undefined) {
      EnergyTransfer.encode(message.EnergyTransfer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEnergyTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEnergyTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EnergyTransfer = EnergyTransfer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEnergyTransferResponse {
    return {
      EnergyTransfer: isSet(object.EnergyTransfer) ? EnergyTransfer.fromJSON(object.EnergyTransfer) : undefined,
    };
  },

  toJSON(message: QueryGetEnergyTransferResponse): unknown {
    const obj: any = {};
    message.EnergyTransfer !== undefined
      && (obj.EnergyTransfer = message.EnergyTransfer ? EnergyTransfer.toJSON(message.EnergyTransfer) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetEnergyTransferResponse>, I>>(
    object: I,
  ): QueryGetEnergyTransferResponse {
    const message = createBaseQueryGetEnergyTransferResponse();
    message.EnergyTransfer = (object.EnergyTransfer !== undefined && object.EnergyTransfer !== null)
      ? EnergyTransfer.fromPartial(object.EnergyTransfer)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEnergyTransferRequest(): QueryAllEnergyTransferRequest {
  return { pagination: undefined };
}

export const QueryAllEnergyTransferRequest = {
  encode(message: QueryAllEnergyTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEnergyTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEnergyTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEnergyTransferRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllEnergyTransferRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEnergyTransferRequest>, I>>(
    object: I,
  ): QueryAllEnergyTransferRequest {
    const message = createBaseQueryAllEnergyTransferRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEnergyTransferResponse(): QueryAllEnergyTransferResponse {
  return { EnergyTransfer: [], pagination: undefined };
}

export const QueryAllEnergyTransferResponse = {
  encode(message: QueryAllEnergyTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EnergyTransfer) {
      EnergyTransfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEnergyTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEnergyTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EnergyTransfer.push(EnergyTransfer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEnergyTransferResponse {
    return {
      EnergyTransfer: Array.isArray(object?.EnergyTransfer)
        ? object.EnergyTransfer.map((e: any) => EnergyTransfer.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEnergyTransferResponse): unknown {
    const obj: any = {};
    if (message.EnergyTransfer) {
      obj.EnergyTransfer = message.EnergyTransfer.map((e) => e ? EnergyTransfer.toJSON(e) : undefined);
    } else {
      obj.EnergyTransfer = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEnergyTransferResponse>, I>>(
    object: I,
  ): QueryAllEnergyTransferResponse {
    const message = createBaseQueryAllEnergyTransferResponse();
    message.EnergyTransfer = object.EnergyTransfer?.map((e) => EnergyTransfer.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a EnergyTransferOffer by id. */
  EnergyTransferOffer(request: QueryGetEnergyTransferOfferRequest): Promise<QueryGetEnergyTransferOfferResponse>;
  /** Queries a list of EnergyTransferOffer items. */
  EnergyTransferOfferAll(request: QueryAllEnergyTransferOfferRequest): Promise<QueryAllEnergyTransferOfferResponse>;
  /** Queries a EnergyTransfer by id. */
  EnergyTransfer(request: QueryGetEnergyTransferRequest): Promise<QueryGetEnergyTransferResponse>;
  /** Queries a list of EnergyTransfer items. */
  EnergyTransferAll(request: QueryAllEnergyTransferRequest): Promise<QueryAllEnergyTransferResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EnergyTransferOffer = this.EnergyTransferOffer.bind(this);
    this.EnergyTransferOfferAll = this.EnergyTransferOfferAll.bind(this);
    this.EnergyTransfer = this.EnergyTransfer.bind(this);
    this.EnergyTransferAll = this.EnergyTransferAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  EnergyTransferOffer(request: QueryGetEnergyTransferOfferRequest): Promise<QueryGetEnergyTransferOfferResponse> {
    const data = QueryGetEnergyTransferOfferRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Query", "EnergyTransferOffer", data);
    return promise.then((data) => QueryGetEnergyTransferOfferResponse.decode(new _m0.Reader(data)));
  }

  EnergyTransferOfferAll(request: QueryAllEnergyTransferOfferRequest): Promise<QueryAllEnergyTransferOfferResponse> {
    const data = QueryAllEnergyTransferOfferRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Query", "EnergyTransferOfferAll", data);
    return promise.then((data) => QueryAllEnergyTransferOfferResponse.decode(new _m0.Reader(data)));
  }

  EnergyTransfer(request: QueryGetEnergyTransferRequest): Promise<QueryGetEnergyTransferResponse> {
    const data = QueryGetEnergyTransferRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Query", "EnergyTransfer", data);
    return promise.then((data) => QueryGetEnergyTransferResponse.decode(new _m0.Reader(data)));
  }

  EnergyTransferAll(request: QueryAllEnergyTransferRequest): Promise<QueryAllEnergyTransferResponse> {
    const data = QueryAllEnergyTransferRequest.encode(request).finish();
    const promise = this.rpc.request("cfeev.cfeev.Query", "EnergyTransferAll", data);
    return promise.then((data) => QueryAllEnergyTransferResponse.decode(new _m0.Reader(data)));
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
