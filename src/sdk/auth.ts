/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The auth section of API provides OAuth 2.0 APIs. Tigris supports pluggable OAuth provider. Pass the token in the headers for authentication, as an example `-H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6I"`(replace it with your token). All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
 */
export class Auth {
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
   * Access Token
   *
   * @remarks
   * Endpoint for receiving access token from Tigris Server. The endpoint requires Grant Type(`grant_type`) which has
   *  two possible values <i>"REFRESH_TOKEN"</i> or <i>"CLIENT_CREDENTIALS"</i> based on which either Refresh token(`refresh_token`)
   *  needs to be set or client credentials(`client_id`, `client_secret`).
   */
  async get(
    config?: AxiosRequestConfig
  ): Promise<operations.AuthGetAccessTokenResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/auth/token";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.AuthGetAccessTokenResponse =
      new operations.AuthGetAccessTokenResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getAccessTokenResponse = utils.objectToClass(
            httpRes?.data,
            shared.GetAccessTokenResponse
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
