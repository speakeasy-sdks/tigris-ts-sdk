import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Observability {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * healthAPIHealth - Health Check
   *
   * This endpoint can be used to check the liveness of the server.
  **/
  healthAPIHealth(
    config?: AxiosRequestConfig
  ): Promise<operations.HealthAPIHealthResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/health";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthAPIHealthResponse =
            new operations.HealthAPIHealthResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.healthCheckResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.HealthCheckResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.status = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Status,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * observabilityGetInfo - Information about the server
   *
   * Provides the information about the server. This information includes returning the server version, etc.
  **/
  observabilityGetInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.ObservabilityGetInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/observability/info";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ObservabilityGetInfoResponse =
            new operations.ObservabilityGetInfoResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getInfoResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.GetInfoResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.status = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Status,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * observabilityQueryTimeSeriesMetrics - Queries time series metrics
   *
   * Queries time series metrics
  **/
  observabilityQueryTimeSeriesMetrics(
    req: operations.ObservabilityQueryTimeSeriesMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObservabilityQueryTimeSeriesMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObservabilityQueryTimeSeriesMetricsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/observability/metrics/timeseries/query";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ObservabilityQueryTimeSeriesMetricsResponse =
            new operations.ObservabilityQueryTimeSeriesMetricsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.queryTimeSeriesMetricsResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.QueryTimeSeriesMetricsResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.status = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Status,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * observabilityQuotaLimits - Queries current namespace quota limits
   *
   * Returns current namespace quota limits
  **/
  observabilityQuotaLimits(
    req: operations.ObservabilityQuotaLimitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObservabilityQuotaLimitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObservabilityQuotaLimitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/observability/quota/limits";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ObservabilityQuotaLimitsResponse =
            new operations.ObservabilityQuotaLimitsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.quotaLimitsResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.QuotaLimitsResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.status = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Status,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * observabilityQuotaUsage - Queries current namespace quota usage
   *
   * Returns current namespace quota limits
  **/
  observabilityQuotaUsage(
    req: operations.ObservabilityQuotaUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObservabilityQuotaUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObservabilityQuotaUsageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/observability/quota/usage";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ObservabilityQuotaUsageResponse =
            new operations.ObservabilityQuotaUsageResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.quotaUsageResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.QuotaUsageResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.status = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.Status,
              );
            }
            break;
        }

        return res;
      })
  }

}
