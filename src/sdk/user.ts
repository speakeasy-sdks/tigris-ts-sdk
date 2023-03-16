import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class User {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * getMetadata - Reads the User Metadata
   *
   * GetUserMetadata inserts the user metadata object
   **/
  getMetadata(
    req: operations.ManagementGetUserMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementGetUserMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementGetUserMetadataRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/management/users/metadata/{metadataKey}/get",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ManagementGetUserMetadataResponse =
        new operations.ManagementGetUserMetadataResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getUserMetadataResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetUserMetadataResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.status = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Status
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * insertMetadata - Inserts User Metadata
   *
   * insertUserMetadata inserts the user metadata object
   **/
  insertMetadata(
    req: operations.ManagementInsertUserMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementInsertUserMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementInsertUserMetadataRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/management/users/metadata/{metadataKey}/insert",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ManagementInsertUserMetadataResponse =
        new operations.ManagementInsertUserMetadataResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.insertUserMetadataResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.InsertUserMetadataResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.status = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Status
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateMetadata - Updates User Metadata
   *
   * updateUserMetadata updates the user metadata object
   **/
  updateMetadata(
    req: operations.ManagementUpdateUserMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementUpdateUserMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementUpdateUserMetadataRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/management/users/metadata/{metadataKey}/update",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ManagementUpdateUserMetadataResponse =
        new operations.ManagementUpdateUserMetadataResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateUserMetadataResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UpdateUserMetadataResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.status = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Status
            );
          }
          break;
      }

      return res;
    });
  }
}
