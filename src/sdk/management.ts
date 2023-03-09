import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Management {
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
   * managementCreateNamespace - Creates a Namespace
   *
   * Creates a new namespace, if it does not exist
  **/
  managementCreateNamespace(
    req: operations.ManagementCreateNamespaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementCreateNamespaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementCreateNamespaceRequest(req);
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
        const res: operations.ManagementCreateNamespaceResponse =
            new operations.ManagementCreateNamespaceResponse({
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
   * managementDescribeNamespaces - Describe the details of all namespaces
   *
   * Get details for all namespaces
  **/
  managementDescribeNamespaces(
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
   * managementGetNamespaceMetadata - Reads the Namespace Metadata
   *
   * GetNamespaceMetadata inserts the user metadata object
  **/
  managementGetNamespaceMetadata(
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
   * managementGetUserMetadata - Reads the User Metadata
   *
   * GetUserMetadata inserts the user metadata object
  **/
  managementGetUserMetadata(
    req: operations.ManagementGetUserMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementGetUserMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementGetUserMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/management/users/metadata/{metadataKey}/get", req.pathParams);

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
        const res: operations.ManagementGetUserMetadataResponse =
            new operations.ManagementGetUserMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getUserMetadataResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.GetUserMetadataResponse,
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
   * managementInsertNamespaceMetadata - Inserts Namespace Metadata
   *
   * InsertNamespaceMetadata inserts the namespace metadata object
  **/
  managementInsertNamespaceMetadata(
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
   * managementInsertUserMetadata - Inserts User Metadata
   *
   * insertUserMetadata inserts the user metadata object
  **/
  managementInsertUserMetadata(
    req: operations.ManagementInsertUserMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementInsertUserMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementInsertUserMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/management/users/metadata/{metadataKey}/insert", req.pathParams);

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
        const res: operations.ManagementInsertUserMetadataResponse =
            new operations.ManagementInsertUserMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.insertUserMetadataResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.InsertUserMetadataResponse,
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
   * managementListNamespaces - Lists all Namespaces
   *
   * List all namespace
  **/
  managementListNamespaces(
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
   * managementUpdateNamespaceMetadata - Updates Namespace Metadata
   *
   * UpdateNamespaceMetadata updates the user metadata object
  **/
  managementUpdateNamespaceMetadata(
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

  
  /**
   * managementUpdateUserMetadata - Updates User Metadata
   *
   * updateUserMetadata updates the user metadata object
  **/
  managementUpdateUserMetadata(
    req: operations.ManagementUpdateUserMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ManagementUpdateUserMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ManagementUpdateUserMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/management/users/metadata/{metadataKey}/update", req.pathParams);

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
        const res: operations.ManagementUpdateUserMetadataResponse =
            new operations.ManagementUpdateUserMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateUserMetadataResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UpdateUserMetadataResponse,
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
