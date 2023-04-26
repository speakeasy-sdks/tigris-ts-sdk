# collection

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
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisCreateOrUpdateCollectionRequest, TigrisCreateOrUpdateCollectionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisCreateOrUpdateCollectionRequest = {
  createOrUpdateCollectionRequest: {
    branch: "ullam",
    onlyCreate: false,
    options: {
      "quos": "sint",
      "accusantium": "mollitia",
      "reiciendis": "mollitia",
    },
    schema: {
      "eum": "dolor",
      "necessitatibus": "odit",
    },
  },
  collection: "nemo",
  project: "quasi",
};

sdk.collection.create(req).then((res: TigrisCreateOrUpdateCollectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDocuments

Delete a range of documents in the collection using the condition provided in the filter.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisDeleteRequest, TigrisDeleteResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisDeleteRequest = {
  deleteRequest: {
    branch: "iure",
    filter: {
      "debitis": "eius",
      "maxime": "deleniti",
      "facilis": "in",
      "architecto": "architecto",
    },
    options: {
      collation: {
        case: "repudiandae",
      },
      limit: 352312,
      writeOptions: {
        "nihil": "repellat",
        "quibusdam": "sed",
        "saepe": "pariatur",
      },
    },
  },
  collection: "accusantium",
  project: "consequuntur",
};

sdk.collection.deleteDocuments(req).then((res: TigrisDeleteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## describe

Returns the information related to the collection. This can be used to retrieve the schema or size of the collection.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisDescribeCollectionRequest, TigrisDescribeCollectionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisDescribeCollectionRequest = {
  describeCollectionRequest: {
    branch: "praesentium",
    collection: "natus",
    options: {
      "sunt": "quo",
    },
    project: "illum",
    schemaFormat: "pariatur",
  },
  collection: "maxime",
  project: "ea",
};

sdk.collection.describe(req).then((res: TigrisDescribeCollectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## drop

Drops the collection inside this project. This API deletes all of the
 documents inside this collection and any metadata associated with it.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisDropCollectionRequest, TigrisDropCollectionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisDropCollectionRequest = {
  dropCollectionRequest: {
    branch: "excepturi",
    options: {
      "ea": "accusantium",
    },
  },
  collection: "ab",
  project: "maiores",
};

sdk.collection.drop(req).then((res: TigrisDropCollectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## importDocuments

Imports documents into the collection.

 It automatically:
  * Detects the schema of the documents in the batch
  * Evolves the schema as soon as it's backward compatible
  * Creates collection with inferred schema (if requested)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisImportRequest, TigrisImportResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisImportRequest = {
  importRequest: {
    autogenerated: [
      "ipsam",
      "voluptate",
      "autem",
    ],
    branch: "nam",
    createCollection: false,
    documents: [
      {
        "nemo": "voluptatibus",
        "perferendis": "fugiat",
        "amet": "aut",
        "cumque": "corporis",
      },
    ],
    options: {
      writeOptions: {
        "libero": "nobis",
        "dolores": "quis",
        "totam": "dignissimos",
        "eaque": "quis",
      },
    },
    primaryKey: [
      "eos",
    ],
  },
  collection: "perferendis",
  project: "dolores",
};

sdk.collection.importDocuments(req).then((res: TigrisImportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## insertDocuments

Inserts new documents in the collection and returns an AlreadyExists error if any of the documents
 in the request already exists. Insert provides idempotency by returning an error if the document
 already exists. To replace documents, use REPLACE API instead of INSERT.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisInsertRequest, TigrisInsertResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisInsertRequest = {
  insertRequest: {
    branch: "minus",
    documents: [
      {
        "vero": "nostrum",
      },
      {
        "recusandae": "omnis",
        "facilis": "perspiciatis",
        "voluptatem": "porro",
        "consequuntur": "blanditiis",
      },
    ],
    options: {
      writeOptions: {
        "eaque": "occaecati",
        "rerum": "adipisci",
        "asperiores": "earum",
      },
    },
  },
  collection: "modi",
  project: "iste",
};

sdk.collection.insertDocuments(req).then((res: TigrisInsertResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## readDocuments

Reads a range of documents from the collection, or messages from a collection in case of event streaming. Tigris does not require you to
 index any fields and automatically index all the fields which means you can filter by any field in the document.
 An empty filter will trigger reading all the documents inside this collection. The API supports pagination that
 can be used by passing `Limit/Skip` parameters. The `skip` parameter skips the number of documents from the start and
 the `limit` parameter is used to specify the number of documents to read. You can find more detailed documentation
 of the Read API <a href="https://docs.tigrisdata.com/overview/query" title="here">here</a>.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisReadRequest, TigrisReadResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisReadRequest = {
  readRequest: {
    branch: "dolorum",
    fields: {
      "pariatur": "provident",
      "nobis": "libero",
      "delectus": "quaerat",
    },
    filter: {
      "aliquid": "dolorem",
      "dolorem": "dolor",
      "qui": "ipsum",
    },
    options: {
      collation: {
        case: "hic",
      },
      limit: 569574,
      offset: "cum",
      skip: 452109,
    },
    sort: "dignissimos",
  },
  collection: "reiciendis",
  project: "amet",
};

sdk.collection.readDocuments(req).then((res: TigrisReadResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## replaceDocuments

Inserts the documents or replaces the existing documents in the collections.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisReplaceRequest, TigrisReplaceResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisReplaceRequest = {
  replaceRequest: {
    branch: "dolorum",
    documents: [
      {
        "ipsa": "ipsa",
      },
      {
        "odio": "quaerat",
        "accusamus": "quidem",
      },
    ],
    options: {
      writeOptions: {
        "voluptas": "natus",
        "eos": "atque",
        "sit": "fugiat",
        "ab": "soluta",
      },
    },
  },
  collection: "dolorum",
  project: "iusto",
};

sdk.collection.replaceDocuments(req).then((res: TigrisReplaceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## searchDocuments

Searches a collection for the documents matching the query, or messages in case of event streaming. A search can be
 a term search or a phrase search. Search API allows filtering the result set using filters as documented <a href="https://docs.tigrisdata.com/overview/query#specification-1" title="here">here</a>.
 You can also perform a faceted search by passing the fields in the facet parameter.
 You can find more detailed documentation of the Search API with multiple examples <a href="https://docs.tigrisdata.com/overview/search" title="here">here</a>.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisSearchRequest, TigrisSearchResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisSearchRequest = {
  searchRequest: {
    branch: "voluptate",
    collation: {
      case: "dolorum",
    },
    excludeFields: [
      "omnis",
      "necessitatibus",
      "distinctio",
    ],
    facet: {
      "nihil": "ipsum",
      "voluptate": "id",
      "saepe": "eius",
      "aspernatur": "perferendis",
    },
    fields: {
      "optio": "accusamus",
    },
    filter: {
      "saepe": "suscipit",
      "deserunt": "provident",
    },
    includeFields: [
      "repellendus",
      "totam",
    ],
    page: 628982,
    pageSize: 55,
    q: "at",
    searchFields: [
      "tempora",
      "vel",
    ],
    sort: {
      "officiis": "qui",
      "dolorum": "a",
      "esse": "harum",
      "iusto": "ipsum",
    },
  },
  collection: "quisquam",
  project: "tenetur",
};

sdk.collection.searchDocuments(req).then((res: TigrisSearchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateDocuments

Update a range of documents in the collection using the condition provided in the filter.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisUpdateRequest, TigrisUpdateResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisUpdateRequest = {
  updateRequest: {
    branch: "amet",
    fields: {
      "accusamus": "numquam",
      "enim": "dolorem",
      "sapiente": "totam",
    },
    filter: {
      "sit": "expedita",
      "neque": "sed",
    },
    options: {
      collation: {
        case: "vel",
      },
      limit: 730442,
      writeOptions: {
        "deserunt": "quam",
        "ipsum": "incidunt",
      },
    },
  },
  collection: "qui",
  project: "cupiditate",
};

sdk.collection.updateDocuments(req).then((res: TigrisUpdateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
