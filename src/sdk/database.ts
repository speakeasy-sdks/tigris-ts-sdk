/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The Database section provide APIs that can be used to interact with the database. A single Database can have one or more collections. A database is created automatically for you when you create a project.
 */
export class Database {
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
   * Begin a transaction
   *
   * @remarks
   * Starts a new transaction and returns a transactional object. All reads/writes performed
   *  within a transaction will run with serializable isolation. Tigris offers global transactions,
   *  with ACID properties and strict serializability.
   */
  async beginTransaction(
    req: operations.TigrisBeginTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisBeginTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisBeginTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/transactions/begin",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "beginTransactionRequest",
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

    const res: operations.TigrisBeginTransactionResponse =
      new operations.TigrisBeginTransactionResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.beginTransactionResponse = utils.objectToClass(
            httpRes?.data,
            shared.BeginTransactionResponse
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
   * Commit a Transaction
   *
   * @remarks
   * Atomically commit all the changes performed in the context of the transaction. Commit provides all
   *  or nothing semantics by ensuring no partial updates are in the project due to a transaction failure.
   */
  async commitTransaction(
    req: operations.TigrisCommitTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisCommitTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisCommitTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/transactions/commit",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "commitTransactionRequest",
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

    const res: operations.TigrisCommitTransactionResponse =
      new operations.TigrisCommitTransactionResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.commitTransactionResponse = utils.objectToClass(
            httpRes?.data,
            shared.CommitTransactionResponse
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
   * Create a database branch
   *
   * @remarks
   * Creates a new database branch, if not already existing.
   */
  async createBranch(
    req: operations.TigrisCreateBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisCreateBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisCreateBranchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/branches/{branch}/create",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
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

    const res: operations.TigrisCreateBranchResponse =
      new operations.TigrisCreateBranchResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.createBranchResponse = utils.objectToClass(
            httpRes?.data,
            shared.CreateBranchResponse
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
   * Delete a database branch
   *
   * @remarks
   * Deletes a database branch, if exists.
   *  Throws 400 Bad Request if "main" branch is being deleted
   */
  async deleteBranch(
    req: operations.TigrisDeleteBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisDeleteBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisDeleteBranchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/branches/{branch}/delete",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
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
      method: "delete",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.TigrisDeleteBranchResponse =
      new operations.TigrisDeleteBranchResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.deleteBranchResponse = utils.objectToClass(
            httpRes?.data,
            shared.DeleteBranchResponse
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
   * Describe database
   *
   * @remarks
   * This API returns information related to the project along with all the collections inside the project.
   *  This can be used to retrieve the size of the project or to retrieve schemas, branches and the size of all the collections present in this project.
   */
  async describe(
    req: operations.TigrisDescribeDatabaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisDescribeDatabaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisDescribeDatabaseRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/describe",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "describeDatabaseRequest",
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

    const res: operations.TigrisDescribeDatabaseResponse =
      new operations.TigrisDescribeDatabaseResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.describeDatabaseResponse = utils.objectToClass(
            httpRes?.data,
            shared.DescribeDatabaseResponse
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
   * List Collections
   *
   * @remarks
   * List all the collections present in the project passed in the request.
   */
  async listCollections(
    req: operations.TigrisListCollectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisListCollectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisListCollectionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/collections",
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

    const res: operations.TigrisListCollectionsResponse =
      new operations.TigrisListCollectionsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listCollectionsResponse = utils.objectToClass(
            httpRes?.data,
            shared.ListCollectionsResponse
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
   * Rollback a transaction
   *
   * @remarks
   * Rollback transaction discards all the changes
   *  performed in the transaction
   */
  async rollbackTransaction(
    req: operations.TigrisRollbackTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisRollbackTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisRollbackTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/transactions/rollback",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "rollbackTransactionRequest",
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

    const res: operations.TigrisRollbackTransactionResponse =
      new operations.TigrisRollbackTransactionResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.rollbackTransactionResponse = utils.objectToClass(
            httpRes?.data,
            shared.RollbackTransactionResponse
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
   * List database branches
   *
   * @remarks
   * List database branches
   */
  async tigrisListBranches(
    req: operations.TigrisListBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisListBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisListBranchesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/projects/{project}/database/branches",
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

    const res: operations.TigrisListBranchesResponse =
      new operations.TigrisListBranchesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listBranchesResponse = utils.objectToClass(
            httpRes?.data,
            shared.ListBranchesResponse
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
