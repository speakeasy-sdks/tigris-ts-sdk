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
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.createDocument({
  createByIdRequest: {
    document: "ex",
    id: "d9f5fce6-c556-4146-83e2-50fb008c42e1",
    index: "non",
    project: "et",
  },
  id: "aac366c8-dd6b-4144-a907-474778a7bd46",
  index: "suscipit",
  project: "assumenda",
}).then((res: SearchCreateByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.createDocuments({
  createDocumentRequest: {
    documents: [
      "praesentium",
    ],
    index: "quisquam",
    project: "veritatis",
  },
  index: "ipsa",
  project: "id",
}).then((res: SearchCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDocuments

Delete one or more documents by id. Returns an array of status indicating the status of each document. Each status
 has an error field that is set to null in case document is deleted successfully otherwise it will non null with
 an error code and message.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchDeleteResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.deleteDocuments({
  deleteDocumentRequest: {
    ids: [
      "neque",
      "quo",
      "illum",
    ],
    index: "quo",
    project: "fuga",
  },
  index: "eius",
  project: "eos",
}).then((res: SearchDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteIndex

Deletes search index

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchDeleteIndexResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.deleteIndex({
  deleteIndexRequest: {
    name: "Mrs. Virginia McGlynn",
    project: "ipsam",
  },
  name: "Emily Satterfield",
  project: "aperiam",
}).then((res: SearchDeleteIndexResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.findDocuments({
  searchIndexRequest: {
    collation: {
      case: "distinctio",
    },
    excludeFields: [
      "dignissimos",
      "inventore",
      "nihil",
      "totam",
    ],
    facet: "accusamus",
    filter: "aliquam",
    includeFields: [
      "occaecati",
      "commodi",
    ],
    index: "sapiente",
    page: 174112,
    pageSize: 645570,
    project: "molestiae",
    q: "accusantium",
    searchFields: [
      "eum",
      "quas",
      "praesentium",
      "consequuntur",
    ],
    sort: "deleniti",
  },
  index: "fugit",
  project: "fuga",
}).then((res: SearchSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDocuments

Retrieves one or more documents by id. The response is an array of documents in the same order it is requests.
 A null is returned for the documents that are not found.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchGetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.getDocuments({
  ids: [
    "incidunt",
    "atque",
    "explicabo",
  ],
  index: "minima",
  project: "nisi",
}).then((res: SearchGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getIndex

Get information about a search index

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchGetIndexResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.getIndex({
  name: "Jeannie Cronin",
  project: "saepe",
}).then((res: SearchGetIndexResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listIndexes

List search indexes

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchListIndexesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.listIndexes({
  filterBranch: "occaecati",
  filterCollection: "atque",
  filterType: "et",
  project: "esse",
}).then((res: SearchListIndexesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## queryDeleteDocuments

DeleteByQuery is used to delete documents that match the filter. A filter is required. To delete document by id,
 you can pass the filter as follows ```{"id": "test"}```. Returns a count of number of documents deleted.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchDeleteByQueryResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.queryDeleteDocuments({
  deleteByQueryRequest: {
    filter: "eveniet",
    index: "accusamus",
    project: "veritatis",
  },
  index: "esse",
  project: "quod",
}).then((res: SearchDeleteByQueryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## replaceDocuments

Creates or replaces one or more documents. Each document is a JSON object. A document is replaced
 if it already exists. An "id" is generated automatically in case it is missing in the document. The
 document is created if "id" doesn't exists otherwise it is replaced. Returns an array of status indicating
 the status of each document.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchCreateOrReplaceResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.replaceDocuments({
  createOrReplaceDocumentRequest: {
    documents: [
      "vero",
      "aliquid",
      "quasi",
    ],
    index: "saepe",
    project: "vel",
  },
  index: "harum",
  project: "molestiae",
}).then((res: SearchCreateOrReplaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateDocuments

Updates one or more documents by "id". Each document is required to have the
 "id" field in it. Returns an array of status indicating the status of each document. Each status
 has an error field that is set to null in case document is updated successfully otherwise the error
 field is set with a code and message.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchUpdateResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.updateDocuments({
  updateDocumentRequest: {
    documents: [
      "occaecati",
      "minima",
      "distinctio",
    ],
    index: "eligendi",
    project: "sit",
  },
  index: "culpa",
  project: "tempore",
}).then((res: SearchUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateIndex

Creates or updates search index

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { SearchCreateOrUpdateIndexResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.search.updateIndex({
  createOrUpdateIndexRequest: {
    name: "Miss Blanca Cronin",
    onlyCreate: false,
    project: "sapiente",
    schema: "consectetur",
  },
  name: "Mattie McLaughlin",
  project: "quas",
}).then((res: SearchCreateOrUpdateIndexResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
