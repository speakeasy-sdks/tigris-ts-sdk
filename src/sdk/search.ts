import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Search {
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
   * searchCreate - Create multiple documents
   *
   * Create is used for indexing a single or multiple documents. The API expects an array of documents.
   *  Each document is a JSON object. An "id" is optional and the server can automatically generate it for you in
   *  case it is missing. In cases when an id is provided in the document and the document already exists then that
   *  document will not be indexed and in the response there will be an error corresponding to that document id other
   *  documents will succeed. Returns an array of status indicating the status of each document.
  **/
  searchCreate(
    req: operations.SearchCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents", req.pathParams);

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
        const res: operations.SearchCreateResponse =
            new operations.SearchCreateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createDocumentResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CreateDocumentResponse,
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
   * searchCreateById - Create a single document
   *
   * CreateById is used for indexing a single document. The API expects a single document. An "id" is optional
   *  and the server can automatically generate it for you in case it is missing. In cases an id is provided in
   *  the document and the document already exists then that document will not be indexed and an error is returned
   *  with HTTP status code 409.
  **/
  searchCreateById(
    req: operations.SearchCreateByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCreateByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCreateByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents/{id}", req.pathParams);

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
        const res: operations.SearchCreateByIdResponse =
            new operations.SearchCreateByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createByIdResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CreateByIdResponse,
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
   * searchCreateOrReplace - Create or replace documents in an index
   *
   * Creates or replaces one or more documents. Each document is a JSON object. A document is replaced
   *  if it already exists. An "id" is generated automatically in case it is missing in the document. The
   *  document is created if "id" doesn't exists otherwise it is replaced. Returns an array of status indicating
   *  the status of each document.
  **/
  searchCreateOrReplace(
    req: operations.SearchCreateOrReplaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCreateOrReplaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCreateOrReplaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchCreateOrReplaceResponse =
            new operations.SearchCreateOrReplaceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createOrReplaceDocumentResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CreateOrReplaceDocumentResponse,
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
   * searchCreateOrUpdateIndex - Creates or updates search index
  **/
  searchCreateOrUpdateIndex(
    req: operations.SearchCreateOrUpdateIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCreateOrUpdateIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCreateOrUpdateIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{name}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchCreateOrUpdateIndexResponse =
            new operations.SearchCreateOrUpdateIndexResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createOrUpdateIndexResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CreateOrUpdateIndexResponse,
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
   * searchDelete - Delete documents by ids
   *
   * Delete one or more documents by id. Returns an array of status indicating the status of each document. Each status
   *  has an error field that is set to null in case document is deleted successfully otherwise it will non null with
   *  an error code and message.
  **/
  searchDelete(
    req: operations.SearchDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents", req.pathParams);

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
      method: "delete",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchDeleteResponse =
            new operations.SearchDeleteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteDocumentResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.DeleteDocumentResponse,
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
   * searchDeleteByQuery - Delete documents by query
   *
   * DeleteByQuery is used to delete documents that match the filter. A filter is required. To delete document by id,
   *  you can pass the filter as follows ```{"id": "test"}```. Returns a count of number of documents deleted.
  **/
  searchDeleteByQuery(
    req: operations.SearchDeleteByQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchDeleteByQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchDeleteByQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents/deleteByQuery", req.pathParams);

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
      method: "delete",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchDeleteByQueryResponse =
            new operations.SearchDeleteByQueryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteByQueryResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.DeleteByQueryResponse,
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
   * searchDeleteIndex - Deletes search index
  **/
  searchDeleteIndex(
    req: operations.SearchDeleteIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchDeleteIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchDeleteIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{name}", req.pathParams);

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
      method: "delete",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchDeleteIndexResponse =
            new operations.SearchDeleteIndexResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteIndexResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.DeleteIndexResponse,
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
   * searchGet - Get a single or multiple documents
   *
   * Retrieves one or more documents by id. The response is an array of documents in the same order it is requests.
   *  A null is returned for the documents that are not found.
  **/
  searchGet(
    req: operations.SearchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchGetResponse =
            new operations.SearchGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getDocumentResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.GetDocumentResponse,
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
   * searchGetIndex - Get information about a search index
  **/
  searchGetIndex(
    req: operations.SearchGetIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchGetIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchGetIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchGetIndexResponse =
            new operations.SearchGetIndexResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getIndexResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.GetIndexResponse,
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
   * searchListIndexes - List search indexes
  **/
  searchListIndexes(
    req: operations.SearchListIndexesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchListIndexesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchListIndexesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchListIndexesResponse =
            new operations.SearchListIndexesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listIndexesResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ListIndexesResponse,
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
   * searchSearch - Search Documents.
   *
   * Searches an index for the documents matching the query. A search can be a term search or a phrase search.
   *  Search API allows filtering the result set using filters as documented
   *  <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>. You can also perform
   *  a faceted search by passing the fields in the facet parameter. You can find more detailed documentation of the
   *  Search API with multiple examples <a href="https://docs.tigrisdata.com/overview/search" title="here">here</a>.
  **/
  searchSearch(
    req: operations.SearchSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents/search", req.pathParams);

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
        const res: operations.SearchSearchResponse =
            new operations.SearchSearchResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.searchIndexResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.SearchIndexResponse,
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
   * searchUpdate - Update documents in an index
   *
   * Updates one or more documents by "id". Each document is required to have the
   *  "id" field in it. Returns an array of status indicating the status of each document. Each status
   *  has an error field that is set to null in case document is updated successfully otherwise the error
   *  field is set with a code and message.
  **/
  searchUpdate(
    req: operations.SearchUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/search/indexes/{index}/documents", req.pathParams);

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
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchUpdateResponse =
            new operations.SearchUpdateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateDocumentResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UpdateDocumentResponse,
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
