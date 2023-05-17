/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum CfeevChargerStatus {
  ACTIVE = "ACTIVE",
  BUSY = "BUSY",
  INACTIVE = "INACTIVE",
}

export interface CfeevEnergyTransfer {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  energyTransferOfferId?: string;
  chargerId?: string;
  ownerAccountAddress?: string;
  driverAccountAddress?: string;

  /** @format int32 */
  offeredTariff?: number;
  status?: CfeevTransferStatus;

  /** @format uint64 */
  collateral?: string;

  /** @format int32 */
  energyToTransfer?: number;

  /** @format int32 */
  energyTransferred?: number;
  paidDate?: string;
}

export interface CfeevEnergyTransferOffer {
  /** @format uint64 */
  id?: string;
  owner?: string;
  chargerId?: string;
  chargerStatus?: CfeevChargerStatus;
  location?: CfeevcfeevLocation;

  /** @format int32 */
  tariff?: number;
  name?: string;
  plugType?: CfeevPlugType;
}

export type CfeevMsgCancelEnergyTransferRequestResponse = object;

export type CfeevMsgEnergyTransferCompletedRequestResponse = object;

export type CfeevMsgEnergyTransferStartedRequestResponse = object;

export interface CfeevMsgPublishEnergyTransferOfferResponse {
  /** @format uint64 */
  id?: string;
}

export type CfeevMsgRemoveEnergyOfferResponse = object;

export type CfeevMsgRemoveTransferResponse = object;

export interface CfeevMsgStartEnergyTransferRequestResponse {
  /** @format uint64 */
  id?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type CfeevParams = object;

export enum CfeevPlugType {
  Type1 = "Type1",
  Type2 = "Type2",
  CHAdeMO = "CHAdeMO",
  CCS = "CCS",
}

export interface CfeevQueryAllEnergyTransferOfferResponse {
  EnergyTransferOffer?: CfeevEnergyTransferOffer[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CfeevQueryAllEnergyTransferResponse {
  EnergyTransfer?: CfeevEnergyTransfer[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CfeevQueryGetEnergyTransferOfferResponse {
  EnergyTransferOffer?: CfeevEnergyTransferOffer;
}

export interface CfeevQueryGetEnergyTransferResponse {
  EnergyTransfer?: CfeevEnergyTransfer;
}

export interface CfeevQueryListOwnEnergyTransferOfferResponse {
  energyTransferOffer?: CfeevEnergyTransferOffer[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CfeevQueryListOwnEnergyTransferResponse {
  energyTransfer?: CfeevEnergyTransfer[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CfeevQueryListOwnerEnergyTransferResponse {
  energyTransfer?: CfeevEnergyTransfer[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CfeevQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: CfeevParams;
}

export enum CfeevTransferStatus {
  REQUESTED = "REQUESTED",
  ONGOING = "ONGOING",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}

export interface CfeevcfeevLocation {
  latitude?: string;
  longitude?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title cfeev/cfeev/energy_transfer.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryEnergyTransferAll
   * @summary Queries a list of EnergyTransfer items.
   * @request GET:/cfeev/cfeev/energy_transfer
   */
  queryEnergyTransferAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CfeevQueryAllEnergyTransferResponse, RpcStatus>({
      path: `/cfeev/cfeev/energy_transfer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEnergyTransfer
   * @summary Queries a EnergyTransfer by id.
   * @request GET:/cfeev/cfeev/energy_transfer/{id}
   */
  queryEnergyTransfer = (id: string, params: RequestParams = {}) =>
    this.request<CfeevQueryGetEnergyTransferResponse, RpcStatus>({
      path: `/cfeev/cfeev/energy_transfer/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEnergyTransferOfferAll
   * @summary Queries a list of EnergyTransferOffer items.
   * @request GET:/cfeev/cfeev/energy_transfer_offer
   */
  queryEnergyTransferOfferAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CfeevQueryAllEnergyTransferOfferResponse, RpcStatus>({
      path: `/cfeev/cfeev/energy_transfer_offer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEnergyTransferOffer
   * @summary Queries a EnergyTransferOffer by id.
   * @request GET:/cfeev/cfeev/energy_transfer_offer/{id}
   */
  queryEnergyTransferOffer = (id: string, params: RequestParams = {}) =>
    this.request<CfeevQueryGetEnergyTransferOfferResponse, RpcStatus>({
      path: `/cfeev/cfeev/energy_transfer_offer/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryListOwnEnergyTransfer
   * @summary Queries a list of ListOwnEnergyTransfer items.
   * @request GET:/cfeev/cfeev/list_own_energy_transfer/{driverAccAddress}
   */
  queryListOwnEnergyTransfer = (
    driverAccAddress: string,
    query?: {
      transferStatus?: number;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CfeevQueryListOwnEnergyTransferResponse, RpcStatus>({
      path: `/cfeev/cfeev/list_own_energy_transfer/${driverAccAddress}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryListOwnEnergyTransferOffer
   * @summary Queries a list of ListOwnEnergyTransferOffer items.
   * @request GET:/cfeev/cfeev/list_own_energy_transfer_offer/{ownerAccAddress}
   */
  queryListOwnEnergyTransferOffer = (
    ownerAccAddress: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CfeevQueryListOwnEnergyTransferOfferResponse, RpcStatus>({
      path: `/cfeev/cfeev/list_own_energy_transfer_offer/${ownerAccAddress}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/cfeev/cfeev/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<CfeevQueryParamsResponse, RpcStatus>({
      path: `/cfeev/cfeev/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryListOwnerEnergyTransfer
   * @summary Queries a list of ListOwnerEnergyTransfer items.
   * @request GET:/chain4energy/cfeev/cfeev/list_owner_energy_transfer/{ownerAccAddress}
   */
  queryListOwnerEnergyTransfer = (
    ownerAccAddress: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CfeevQueryListOwnerEnergyTransferResponse, RpcStatus>({
      path: `/chain4energy/cfeev/cfeev/list_owner_energy_transfer/${ownerAccAddress}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}