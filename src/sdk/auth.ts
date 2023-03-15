import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

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
   * get - Access Token
   *
   * Endpoint for receiving access token from Tigris Server. The endpoint requires Grant Type(`grant_type`) which has
   *  two possible values <i>"REFRESH_TOKEN"</i> or <i>"CLIENT_CREDENTIALS"</i> based on which either Refresh token(`refresh_token`)
   *  needs to be set or client credentials(`client_id`, `client_secret`).
   **/
  get(
    config?: AxiosRequestConfig
  ): Promise<operations.AuthGetAccessTokenResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/auth/token";

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.AuthGetAccessTokenResponse =
        new operations.AuthGetAccessTokenResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAccessTokenResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetAccessTokenResponse
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
