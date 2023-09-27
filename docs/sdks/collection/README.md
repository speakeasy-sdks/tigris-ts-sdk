# Collection
(*collection*)

## Overview

The Collections section provide APIs that can be used to manage collections. A collection can have one or more documents.

### Available Operations

* [create](#create) - Create or update a collection
* [deleteDocuments](#deletedocuments) - Delete Documents
* [describe](#describe) - Describe Collection
* [drop](#drop) - Drop Collection
* [importDocuments](#importdocuments) - Import Documents
* [insertDocuments](#insertdocuments) - Insert Documents
* [readDocuments](#readdocuments) - Read Documents
* [replaceDocuments](#replacedocuments) - Insert or Replace Documents
* [searchDocuments](#searchdocuments) - Search Documents.
* [updateDocuments](#updatedocuments) - Update Documents.

## create

Creates a new collection or atomically upgrades the collection to the new schema provided in the request.
 Schema changes are applied atomically and immediately without any downtime.
 Tigris Offers two types of collections: <p></p>
    <li> `DOCUMENTS`: Offers rich CRUD APIs.
    <li> `MESSAGES`: Offers event streaming APIs.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisCreateOrUpdateCollectionResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.create({
  createOrUpdateCollectionRequest: {
    branch: "id",
    onlyCreate: false,
    options: {},
    schema: {},
  },
  collection: "blanditiis",
  project: "deleniti",
}).then((res: TigrisCreateOrUpdateCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.TigrisCreateOrUpdateCollectionRequest](../../models/operations/tigriscreateorupdatecollectionrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.TigrisCreateOrUpdateCollectionResponse](../../models/operations/tigriscreateorupdatecollectionresponse.md)>**


## deleteDocuments

Delete a range of documents in the collection using the condition provided in the filter.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDeleteResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.deleteDocuments({
  deleteRequest: {
    branch: "sapiente",
    filter: {},
    options: {
      collation: {
        case: "amet",
      },
      limit: 643990,
      writeOptions: {},
    },
  },
  collection: "nisi",
  project: "vel",
}).then((res: TigrisDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.TigrisDeleteRequest](../../models/operations/tigrisdeleterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TigrisDeleteResponse](../../models/operations/tigrisdeleteresponse.md)>**


## describe

Returns the information related to the collection. This can be used to retrieve the schema or size of the collection.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDescribeCollectionResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.describe({
  describeCollectionRequest: {
    branch: "natus",
    collection: "omnis",
    options: {},
    project: "molestiae",
    schemaFormat: "perferendis",
  },
  collection: "nihil",
  project: "magnam",
}).then((res: TigrisDescribeCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.TigrisDescribeCollectionRequest](../../models/operations/tigrisdescribecollectionrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.TigrisDescribeCollectionResponse](../../models/operations/tigrisdescribecollectionresponse.md)>**


## drop

Drops the collection inside this project. This API deletes all of the
 documents inside this collection and any metadata associated with it.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDropCollectionResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.drop({
  dropCollectionRequest: {
    branch: "distinctio",
    options: {},
  },
  collection: "id",
  project: "labore",
}).then((res: TigrisDropCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.TigrisDropCollectionRequest](../../models/operations/tigrisdropcollectionrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.TigrisDropCollectionResponse](../../models/operations/tigrisdropcollectionresponse.md)>**


## importDocuments

Imports documents into the collection.

 It automatically:
  * Detects the schema of the documents in the batch
  * Evolves the schema as soon as it's backward compatible
  * Creates collection with inferred schema (if requested)

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisImportResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.importDocuments({
  importRequest: {
    autogenerated: [
      "labore",
    ],
    branch: "suscipit",
    createCollection: false,
    documents: [
      {},
    ],
    options: {
      writeOptions: {},
    },
    primaryKey: [
      "natus",
    ],
  },
  collection: "nobis",
  project: "eum",
}).then((res: TigrisImportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.TigrisImportRequest](../../models/operations/tigrisimportrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TigrisImportResponse](../../models/operations/tigrisimportresponse.md)>**


## insertDocuments

Inserts new documents in the collection and returns an AlreadyExists error if any of the documents
 in the request already exists. Insert provides idempotency by returning an error if the document
 already exists. To replace documents, use REPLACE API instead of INSERT.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisInsertResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.insertDocuments({
  insertRequest: {
    branch: "vero",
    documents: [
      {},
    ],
    options: {
      writeOptions: {},
    },
  },
  collection: "aspernatur",
  project: "architecto",
}).then((res: TigrisInsertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.TigrisInsertRequest](../../models/operations/tigrisinsertrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TigrisInsertResponse](../../models/operations/tigrisinsertresponse.md)>**


## readDocuments

Reads a range of documents from the collection, or messages from a collection in case of event streaming. Tigris does not require you to
 index any fields and automatically index all the fields which means you can filter by any field in the document.
 An empty filter will trigger reading all the documents inside this collection. The API supports pagination that
 can be used by passing `Limit/Skip` parameters. The `skip` parameter skips the number of documents from the start and
 the `limit` parameter is used to specify the number of documents to read. You can find more detailed documentation
 of the Read API <a href="https://docs.tigrisdata.com/overview/query" title="here">here</a>.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisReadResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.readDocuments({
  readRequest: {
    branch: "magnam",
    fields: {},
    filter: {},
    options: {
      collation: {
        case: "et",
      },
      limit: 569965,
      offset: "ullam",
      skip: 590873,
    },
    sort: "quos",
  },
  collection: "sint",
  project: "accusantium",
}).then((res: TigrisReadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.TigrisReadRequest](../../models/operations/tigrisreadrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.TigrisReadResponse](../../models/operations/tigrisreadresponse.md)>**


## replaceDocuments

Inserts the documents or replaces the existing documents in the collections.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisReplaceResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.replaceDocuments({
  replaceRequest: {
    branch: "mollitia",
    documents: [
      {},
    ],
    options: {
      writeOptions: {},
    },
  },
  collection: "reiciendis",
  project: "mollitia",
}).then((res: TigrisReplaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.TigrisReplaceRequest](../../models/operations/tigrisreplacerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.TigrisReplaceResponse](../../models/operations/tigrisreplaceresponse.md)>**


## searchDocuments

Searches a collection for the documents matching the query, or messages in case of event streaming. A search can be
 a term search or a phrase search. Search API allows filtering the result set using filters as documented <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>.
 You can also perform a faceted search by passing the fields in the facet parameter.
 You can find more detailed documentation of the Search API with multiple examples <a href="https://docs.tigrisdata.com/overview/search" title="here">here</a>.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisSearchResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.searchDocuments({
  searchRequest: {
    branch: "ad",
    collation: {
      case: "eum",
    },
    excludeFields: [
      "dolor",
    ],
    facet: {},
    fields: {},
    filter: {},
    includeFields: [
      "necessitatibus",
    ],
    page: 141264,
    pageSize: 367562,
    q: "quasi",
    searchFields: [
      "iure",
    ],
    sort: {},
  },
  collection: "doloribus",
  project: "debitis",
}).then((res: TigrisSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.TigrisSearchRequest](../../models/operations/tigrissearchrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TigrisSearchResponse](../../models/operations/tigrissearchresponse.md)>**


## updateDocuments

Update a range of documents in the collection using the condition provided in the filter.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisUpdateResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.collection.updateDocuments({
  updateRequest: {
    branch: "eius",
    fields: {},
    filter: {},
    options: {
      collation: {
        case: "maxime",
      },
      limit: 537023,
      writeOptions: {},
    },
  },
  collection: "facilis",
  project: "in",
}).then((res: TigrisUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.TigrisUpdateRequest](../../models/operations/tigrisupdaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TigrisUpdateResponse](../../models/operations/tigrisupdateresponse.md)>**

