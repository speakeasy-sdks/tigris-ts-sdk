import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Collection {
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
   * create - Create or update a collection
   *
   * Creates a new collection or atomically upgrades the collection to the new schema provided in the request.
   *  Schema changes are applied atomically and immediately without any downtime.
   *  Tigris Offers two types of collections: <p></p>
   *     <li> `DOCUMENTS`: Offers rich CRUD APIs.
   *     <li> `MESSAGES`: Offers event streaming APIs.
  **/
  create(
    req: operations.TigrisCreateOrUpdateCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisCreateOrUpdateCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisCreateOrUpdateCollectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/createOrUpdate", req.pathParams);

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
        const res: operations.TigrisCreateOrUpdateCollectionResponse =
            new operations.TigrisCreateOrUpdateCollectionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createOrUpdateCollectionResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.CreateOrUpdateCollectionResponse,
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
   * deleteDocuments - Delete Documents
   *
   * Delete a range of documents in the collection using the condition provided in the filter.
  **/
  deleteDocuments(
    req: operations.TigrisDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/documents/delete", req.pathParams);

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
        const res: operations.TigrisDeleteResponse =
            new operations.TigrisDeleteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.DeleteResponse,
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
   * describe - Describe Collection
   *
   * Returns the information related to the collection. This can be used to retrieve the schema or size of the collection.
  **/
  describe(
    req: operations.TigrisDescribeCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisDescribeCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisDescribeCollectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/describe", req.pathParams);

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
        const res: operations.TigrisDescribeCollectionResponse =
            new operations.TigrisDescribeCollectionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.describeCollectionResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.DescribeCollectionResponse,
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
   * drop - Drop Collection
   *
   * Drops the collection inside this project. This API deletes all of the
   *  documents inside this collection and any metadata associated with it.
  **/
  drop(
    req: operations.TigrisDropCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisDropCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisDropCollectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/drop", req.pathParams);

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
        const res: operations.TigrisDropCollectionResponse =
            new operations.TigrisDropCollectionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.dropCollectionResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.DropCollectionResponse,
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
   * importDocuments - Import Documents
   *
   * Imports documents into the collection.
   * 
   *  It automatically:
   *   * Detects the schema of the documents in the batch
   *   * Evolves the schema as soon as it's backward compatible
   *   * Creates collection with inferred schema (if requested)
  **/
  importDocuments(
    req: operations.TigrisImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/documents/import", req.pathParams);

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
        const res: operations.TigrisImportResponse =
            new operations.TigrisImportResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.importResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ImportResponse,
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
   * insertDocuments - Insert Documents
   *
   * Inserts new documents in the collection and returns an AlreadyExists error if any of the documents
   *  in the request already exists. Insert provides idempotency by returning an error if the document
   *  already exists. To replace documents, use REPLACE API instead of INSERT.
  **/
  insertDocuments(
    req: operations.TigrisInsertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisInsertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisInsertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/documents/insert", req.pathParams);

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
        const res: operations.TigrisInsertResponse =
            new operations.TigrisInsertResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.insertResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.InsertResponse,
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
   * readDocuments - Read Documents
   *
   * Reads a range of documents from the collection, or messages from a collection in case of event streaming. Tigris does not require you to
   *  index any fields and automatically index all the fields which means you can filter by any field in the document.
   *  An empty filter will trigger reading all the documents inside this collection. The API supports pagination that
   *  can be used by passing `Limit/Skip` parameters. The `skip` parameter skips the number of documents from the start and
   *  the `limit` parameter is used to specify the number of documents to read. You can find more detailed documentation
   *  of the Read API <a href="https://docs.tigrisdata.com/overview/query" title="here">here</a>.
  **/
  readDocuments(
    req: operations.TigrisReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/documents/read", req.pathParams);

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
        const res: operations.TigrisReadResponse =
            new operations.TigrisReadResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.streamingReadResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.StreamingReadResponse,
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
   * replaceDocuments - Insert or Replace Documents
   *
   * Inserts the documents or replaces the existing documents in the collections.
  **/
  replaceDocuments(
    req: operations.TigrisReplaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisReplaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisReplaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/documents/replace", req.pathParams);

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
        const res: operations.TigrisReplaceResponse =
            new operations.TigrisReplaceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.replaceResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ReplaceResponse,
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
   * searchDocuments - Search Documents.
   *
   * Searches a collection for the documents matching the query, or messages in case of event streaming. A search can be
   *  a term search or a phrase search. Search API allows filtering the result set using filters as documented <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>.
   *  You can also perform a faceted search by passing the fields in the facet parameter.
   *  You can find more detailed documentation of the Search API with multiple examples <a href="https://docs.tigrisdata.com/overview/search" title="here">here</a>.
  **/
  searchDocuments(
    req: operations.TigrisSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/documents/search", req.pathParams);

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
        const res: operations.TigrisSearchResponse =
            new operations.TigrisSearchResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.streamingSearchResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.StreamingSearchResponse,
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
   * updateDocuments - Update Documents.
   *
   * Update a range of documents in the collection using the condition provided in the filter.
  **/
  updateDocuments(
    req: operations.TigrisUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TigrisUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TigrisUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/database/collections/{collection}/documents/update", req.pathParams);

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
        const res: operations.TigrisUpdateResponse =
            new operations.TigrisUpdateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.UpdateResponse,
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
