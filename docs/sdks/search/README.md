# search

## Overview

The search section provides you APIs that can be used to implement powerful apps with search experiences. You can manage storing documents on your own or you can simply integrate it with your database.

### Available Operations

* [createDocument](#createdocument) - Create a single document
* [createDocuments](#createdocuments) - Create multiple documents
* [deleteDocuments](#deletedocuments) - Delete documents by ids
* [deleteIndex](#deleteindex) - Deletes search index
* [findDocuments](#finddocuments) - Search Documents.
* [getDocuments](#getdocuments) - Get a single or multiple documents
* [getIndex](#getindex) - Get information about a search index
* [listIndexes](#listindexes) - List search indexes
* [queryDeleteDocuments](#querydeletedocuments) - Delete documents by query
* [replaceDocuments](#replacedocuments) - Create or replace documents in an index
* [updateDocuments](#updatedocuments) - Update documents in an index
* [updateIndex](#updateindex) - Creates or updates search index

## createDocument

CreateById is used for indexing a single document. The API expects a single document. An "id" is optional
 and the server can automatically generate it for you in case it is missing. In cases an id is provided in
 the document and the document already exists then that document will not be indexed and an error is returned
 with HTTP status code 409.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchCreateByIdResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.createDocument({
  createByIdRequest: {
    document: "occaecati",
    id: "b3fe49a8-d9cb-4f48-a333-23f9b77f3a41",
    index: "ipsa",
    project: "ipsa",
  },
  id: "674ebf69-280d-41ba-b7a8-9ebf737ae420",
  index: "amet",
  project: "optio",
}).then((res: SearchCreateByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.SearchCreateByIdRequest](../../models/operations/searchcreatebyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SearchCreateByIdResponse](../../models/operations/searchcreatebyidresponse.md)>**


## createDocuments

Create is used for indexing a single or multiple documents. The API expects an array of documents.
 Each document is a JSON object. An "id" is optional and the server can automatically generate it for you in
 case it is missing. In cases when an id is provided in the document and the document already exists then that
 document will not be indexed and in the response there will be an error corresponding to that document id other
 documents will succeed. Returns an array of status indicating the status of each document.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchCreateResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.createDocuments({
  createDocumentRequest: {
    documents: [
      "ad",
      "saepe",
      "suscipit",
      "deserunt",
    ],
    index: "provident",
    project: "minima",
  },
  index: "repellendus",
  project: "totam",
}).then((res: SearchCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.SearchCreateRequest](../../models/operations/searchcreaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.SearchCreateResponse](../../models/operations/searchcreateresponse.md)>**


## deleteDocuments

Delete one or more documents by id. Returns an array of status indicating the status of each document. Each status
 has an error field that is set to null in case document is deleted successfully otherwise it will non null with
 an error code and message.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchDeleteResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.deleteDocuments({
  deleteDocumentRequest: {
    ids: [
      "alias",
      "at",
      "quaerat",
    ],
    index: "tempora",
    project: "vel",
  },
  index: "quod",
  project: "officiis",
}).then((res: SearchDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.SearchDeleteRequest](../../models/operations/searchdeleterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.SearchDeleteResponse](../../models/operations/searchdeleteresponse.md)>**


## deleteIndex

Deletes search index

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchDeleteIndexResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.deleteIndex({
  deleteIndexRequest: {
    name: "Jan Wilderman",
    project: "iusto",
  },
  name: "Rosalie White",
  project: "accusamus",
}).then((res: SearchDeleteIndexResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.SearchDeleteIndexRequest](../../models/operations/searchdeleteindexrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.SearchDeleteIndexResponse](../../models/operations/searchdeleteindexresponse.md)>**


## findDocuments

Searches an index for the documents matching the query. A search can be a term search or a phrase search.
 Search API allows filtering the result set using filters as documented
 <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>. You can also perform
 a faceted search by passing the fields in the facet parameter. You can find more detailed documentation of the
 Search API with multiple examples <a href="https://docs.tigrisdata.com/overview/search" title="here">here</a>.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchSearchResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.findDocuments({
  searchIndexRequest: {
    collation: {
      case: "numquam",
    },
    excludeFields: [
      "dolorem",
      "sapiente",
    ],
    facet: "totam",
    filter: "nihil",
    includeFields: [
      "expedita",
    ],
    index: "neque",
    page: 153694,
    pageSize: 424685,
    project: "libero",
    q: "voluptas",
    searchFields: [
      "quam",
      "ipsum",
      "incidunt",
    ],
    sort: "qui",
  },
  index: "cupiditate",
  project: "maxime",
}).then((res: SearchSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.SearchSearchRequest](../../models/operations/searchsearchrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.SearchSearchResponse](../../models/operations/searchsearchresponse.md)>**


## getDocuments

Retrieves one or more documents by id. The response is an array of documents in the same order it is requests.
 A null is returned for the documents that are not found.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchGetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.getDocuments({
  ids: [
    "soluta",
    "dicta",
    "laborum",
    "totam",
  ],
  index: "incidunt",
  project: "aspernatur",
}).then((res: SearchGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.SearchGetRequest](../../models/operations/searchgetrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.SearchGetResponse](../../models/operations/searchgetresponse.md)>**


## getIndex

Get information about a search index

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchGetIndexResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.getIndex({
  name: "Verna Purdy",
  project: "molestias",
}).then((res: SearchGetIndexResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.SearchGetIndexRequest](../../models/operations/searchgetindexrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.SearchGetIndexResponse](../../models/operations/searchgetindexresponse.md)>**


## listIndexes

List search indexes

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchListIndexesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.listIndexes({
  filterBranch: "temporibus",
  filterCollection: "qui",
  filterType: "neque",
  project: "fugit",
}).then((res: SearchListIndexesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.SearchListIndexesRequest](../../models/operations/searchlistindexesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.SearchListIndexesResponse](../../models/operations/searchlistindexesresponse.md)>**


## queryDeleteDocuments

DeleteByQuery is used to delete documents that match the filter. A filter is required. To delete document by id,
 you can pass the filter as follows ```{"id": "test"}```. Returns a count of number of documents deleted.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchDeleteByQueryResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.queryDeleteDocuments({
  deleteByQueryRequest: {
    filter: "magni",
    index: "odio",
    project: "sunt",
  },
  index: "ullam",
  project: "nam",
}).then((res: SearchDeleteByQueryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.SearchDeleteByQueryRequest](../../models/operations/searchdeletebyqueryrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.SearchDeleteByQueryResponse](../../models/operations/searchdeletebyqueryresponse.md)>**


## replaceDocuments

Creates or replaces one or more documents. Each document is a JSON object. A document is replaced
 if it already exists. An "id" is generated automatically in case it is missing in the document. The
 document is created if "id" doesn't exists otherwise it is replaced. Returns an array of status indicating
 the status of each document.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchCreateOrReplaceResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.replaceDocuments({
  createOrReplaceDocumentRequest: {
    documents: [
      "voluptatem",
      "cumque",
      "soluta",
      "nobis",
    ],
    index: "et",
    project: "saepe",
  },
  index: "ipsum",
  project: "veritatis",
}).then((res: SearchCreateOrReplaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.SearchCreateOrReplaceRequest](../../models/operations/searchcreateorreplacerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.SearchCreateOrReplaceResponse](../../models/operations/searchcreateorreplaceresponse.md)>**


## updateDocuments

Updates one or more documents by "id". Each document is required to have the
 "id" field in it. Returns an array of status indicating the status of each document. Each status
 has an error field that is set to null in case document is updated successfully otherwise the error
 field is set with a code and message.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchUpdateResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.updateDocuments({
  updateDocumentRequest: {
    documents: [
      "quos",
      "tempore",
      "cupiditate",
    ],
    index: "aperiam",
    project: "delectus",
  },
  index: "dolorem",
  project: "dolore",
}).then((res: SearchUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.SearchUpdateRequest](../../models/operations/searchupdaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.SearchUpdateResponse](../../models/operations/searchupdateresponse.md)>**


## updateIndex

Creates or updates search index

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchCreateOrUpdateIndexResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.search.updateIndex({
  createOrUpdateIndexRequest: {
    name: "Mr. Josephine Pagac V",
    onlyCreate: false,
    project: "itaque",
    schema: "consequatur",
  },
  name: "Marcos Schaden",
  project: "facilis",
}).then((res: SearchCreateOrUpdateIndexResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.SearchCreateOrUpdateIndexRequest](../../models/operations/searchcreateorupdateindexrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.SearchCreateOrUpdateIndexResponse](../../models/operations/searchcreateorupdateindexresponse.md)>**

