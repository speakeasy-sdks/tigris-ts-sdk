/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The realtime section provide APIs that can be used realtime operations.
 */
export class Channel {
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
   * Get the details about a channel
   */
  async get(
    req: operations.RealtimeGetRTChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RealtimeGetRTChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RealtimeGetRTChannelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/realtime/channels/{channel}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RealtimeGetRTChannelResponse =
      new operations.RealtimeGetRTChannelResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getRTChannelResponse = utils.objectToClass(
            httpRes?.data,
            shared.GetRTChannelResponse
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
   * Get all messages for a channel
   */
  async getMessages(
    req: operations.RealtimeReadMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RealtimeReadMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RealtimeReadMessagesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/realtime/channels/{channel}/messages",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RealtimeReadMessagesResponse =
      new operations.RealtimeReadMessagesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.readMessagesResponse = utils.objectToClass(
            httpRes?.data,
            shared.ReadMessagesResponse
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
   * Get all channels for your application project
   */
  async list(
    req: operations.RealtimeGetRTChannelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RealtimeGetRTChannelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RealtimeGetRTChannelsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/realtime/channels",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RealtimeGetRTChannelsResponse =
      new operations.RealtimeGetRTChannelsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getRTChannelsResponse = utils.objectToClass(
            httpRes?.data,
            shared.GetRTChannelsResponse
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
   * Get the subscriptions details about a channel
   */
  async listSubscriptions(
    req: operations.RealtimeListSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RealtimeListSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RealtimeListSubscriptionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/realtime/channels/{channel}/subscriptions",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RealtimeListSubscriptionsResponse =
      new operations.RealtimeListSubscriptionsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listSubscriptionResponse = utils.objectToClass(
            httpRes?.data,
            shared.ListSubscriptionResponse
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
   * push messages to a single channel
   */
  async pushMessages(
    req: operations.RealtimeMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RealtimeMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RealtimeMessagesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/realtime/channels/{channel}/messages",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "messagesRequest",
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
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.RealtimeMessagesResponse =
      new operations.RealtimeMessagesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.messagesResponse = utils.objectToClass(
            httpRes?.data,
            shared.MessagesResponse
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
   * Presence about the channel
   */
  async realtimePresence(
    req: operations.RealtimePresenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RealtimePresenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RealtimePresenceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/realtime/channels/{channel}/presence",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RealtimePresenceResponse =
      new operations.RealtimePresenceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.presenceResponse = utils.objectToClass(
            httpRes?.data,
            shared.PresenceResponse
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
