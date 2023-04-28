/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * A User on the Tigris Platform.
 */
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
   * Reads the User Metadata
   *
   * @remarks
   * GetUserMetadata inserts the user metadata object
   */
  async getMetadata(
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
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "getUserMetadataRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ManagementGetUserMetadataResponse =
      new operations.ManagementGetUserMetadataResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getUserMetadataResponse = utils.objectToClass(
            httpRes?.data,
            shared.GetUserMetadataResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.status = utils.objectToClass(httpRes?.data, shared.Status);
        }
        break;
    }

    return res;
  }

  /**
   * Inserts User Metadata
   *
   * @remarks
   * insertUserMetadata inserts the user metadata object
   */
  async insertMetadata(
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
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "insertUserMetadataRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ManagementInsertUserMetadataResponse =
      new operations.ManagementInsertUserMetadataResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.insertUserMetadataResponse = utils.objectToClass(
            httpRes?.data,
            shared.InsertUserMetadataResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.status = utils.objectToClass(httpRes?.data, shared.Status);
        }
        break;
    }

    return res;
  }

  /**
   * Updates User Metadata
   *
   * @remarks
   * updateUserMetadata updates the user metadata object
   */
  async updateMetadata(
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
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "updateUserMetadataRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ManagementUpdateUserMetadataResponse =
      new operations.ManagementUpdateUserMetadataResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.updateUserMetadataResponse = utils.objectToClass(
            httpRes?.data,
            shared.UpdateUserMetadataResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.status = utils.objectToClass(httpRes?.data, shared.Status);
        }
        break;
    }

    return res;
  }
}
