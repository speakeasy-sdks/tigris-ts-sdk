import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Namespace {
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
   * create - Creates a Namespace
   *
   * Creates a new namespace, if it does not exist
  **/
  create(
    req: operations.CreateNamespaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNamespaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNamespaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/management/namespaces/create";

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
        const res: operations.CreateNamespaceResponse =
            new operations.CreateNamespaceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createNamespaceResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CreateNamespaceResponse,
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
   * get - Describe the details of all namespaces
   *
   * Get details for all namespaces
  **/
  get(
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementDescribeNamespacesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/management/namespaces/describe";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ManagementDescribeNamespacesResponse =
            new operations.ManagementDescribeNamespacesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.describeNamespacesResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.DescribeNamespacesResponse,
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
   * getMetadata - Reads the Namespace Metadata
   *
   * GetNamespaceMetadata inserts the user metadata object
  **/
  getMetadata(
    req: operations.ManagementGetNamespaceMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementGetNamespaceMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementGetNamespaceMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/management/namespace/metadata/{metadataKey}/get", req.pathParams);

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
        const res: operations.ManagementGetNamespaceMetadataResponse =
            new operations.ManagementGetNamespaceMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getNamespaceMetadataResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.GetNamespaceMetadataResponse,
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
   * insertMetadata - Inserts Namespace Metadata
   *
   * InsertNamespaceMetadata inserts the namespace metadata object
  **/
  insertMetadata(
    req: operations.ManagementInsertNamespaceMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementInsertNamespaceMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementInsertNamespaceMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/management/namespace/metadata/{metadataKey}/insert", req.pathParams);

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
        const res: operations.ManagementInsertNamespaceMetadataResponse =
            new operations.ManagementInsertNamespaceMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.insertNamespaceMetadataResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.InsertNamespaceMetadataResponse,
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
   * list - Lists all Namespaces
   *
   * List all namespace
  **/
  list(
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementListNamespacesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/management/namespaces/list";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ManagementListNamespacesResponse =
            new operations.ManagementListNamespacesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listNamespacesResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ListNamespacesResponse,
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
   * updateMetadata - Updates Namespace Metadata
   *
   * UpdateNamespaceMetadata updates the user metadata object
  **/
  updateMetadata(
    req: operations.ManagementUpdateNamespaceMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementUpdateNamespaceMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementUpdateNamespaceMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/management/namespace/metadata/{metadataKey}/update", req.pathParams);

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
        const res: operations.ManagementUpdateNamespaceMetadataResponse =
            new operations.ManagementUpdateNamespaceMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateNamespaceMetadataResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UpdateNamespaceMetadataResponse,
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
