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
import { SDK } from "tigris-core";
import { TigrisCreateOrUpdateCollectionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.create({
  createOrUpdateCollectionRequest: {
    branch: "eius",
    onlyCreate: false,
    options: {
      "deleniti": "facilis",
      "in": "architecto",
      "architecto": "repudiandae",
      "ullam": "expedita",
    },
    schema: {
      "repellat": "quibusdam",
      "sed": "saepe",
    },
  },
  collection: "pariatur",
  project: "accusantium",
}).then((res: TigrisCreateOrUpdateCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDocuments

Delete a range of documents in the collection using the condition provided in the filter.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDeleteResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.deleteDocuments({
  deleteRequest: {
    branch: "consequuntur",
    filter: {
      "natus": "magni",
      "sunt": "quo",
      "illum": "pariatur",
    },
    options: {
      collation: {
        case: "maxime",
      },
      limit: 411397,
      writeOptions: {
        "odit": "ea",
        "accusantium": "ab",
        "maiores": "quidem",
      },
    },
  },
  collection: "ipsam",
  project: "voluptate",
}).then((res: TigrisDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## describe

Returns the information related to the collection. This can be used to retrieve the schema or size of the collection.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDescribeCollectionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.describe({
  describeCollectionRequest: {
    branch: "autem",
    collection: "nam",
    options: {
      "pariatur": "nemo",
    },
    project: "voluptatibus",
    schemaFormat: "perferendis",
  },
  collection: "fugiat",
  project: "amet",
}).then((res: TigrisDescribeCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## drop

Drops the collection inside this project. This API deletes all of the
 documents inside this collection and any metadata associated with it.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDropCollectionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.drop({
  dropCollectionRequest: {
    branch: "aut",
    options: {
      "corporis": "hic",
      "libero": "nobis",
      "dolores": "quis",
      "totam": "dignissimos",
    },
  },
  collection: "eaque",
  project: "quis",
}).then((res: TigrisDropCollectionResponse) => {
  if (res.statusCode == 200) {
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
import { SDK } from "tigris-core";
import { TigrisImportResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.importDocuments({
  importRequest: {
    autogenerated: [
      "eos",
    ],
    branch: "perferendis",
    createCollection: false,
    documents: [
      {
        "quam": "dolor",
        "vero": "nostrum",
        "hic": "recusandae",
        "omnis": "facilis",
      },
    ],
    options: {
      writeOptions: {
        "voluptatem": "porro",
        "consequuntur": "blanditiis",
        "error": "eaque",
      },
    },
    primaryKey: [
      "rerum",
      "adipisci",
      "asperiores",
    ],
  },
  collection: "earum",
  project: "modi",
}).then((res: TigrisImportResponse) => {
  if (res.statusCode == 200) {
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
import { SDK } from "tigris-core";
import { TigrisInsertResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.insertDocuments({
  insertRequest: {
    branch: "iste",
    documents: [
      {
        "pariatur": "provident",
        "nobis": "libero",
        "delectus": "quaerat",
      },
      {
        "aliquid": "dolorem",
        "dolorem": "dolor",
        "qui": "ipsum",
      },
      {
        "excepturi": "cum",
        "voluptate": "dignissimos",
        "reiciendis": "amet",
        "dolorum": "numquam",
      },
    ],
    options: {
      writeOptions: {
        "ipsa": "ipsa",
      },
    },
  },
  collection: "iure",
  project: "odio",
}).then((res: TigrisInsertResponse) => {
  if (res.statusCode == 200) {
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
import { SDK } from "tigris-core";
import { TigrisReadResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.readDocuments({
  readRequest: {
    branch: "quaerat",
    fields: {
      "quidem": "voluptatibus",
      "voluptas": "natus",
      "eos": "atque",
      "sit": "fugiat",
    },
    filter: {
      "soluta": "dolorum",
    },
    options: {
      collation: {
        case: "iusto",
      },
      limit: 453697,
      offset: "dolorum",
      skip: 536579,
    },
    sort: "omnis",
  },
  collection: "necessitatibus",
  project: "distinctio",
}).then((res: TigrisReadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## replaceDocuments

Inserts the documents or replaces the existing documents in the collections.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisReplaceResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.replaceDocuments({
  replaceRequest: {
    branch: "asperiores",
    documents: [
      {
        "voluptate": "id",
      },
      {
        "eius": "aspernatur",
        "perferendis": "amet",
        "optio": "accusamus",
        "ad": "saepe",
      },
    ],
    options: {
      writeOptions: {
        "deserunt": "provident",
        "minima": "repellendus",
      },
    },
  },
  collection: "totam",
  project: "similique",
}).then((res: TigrisReplaceResponse) => {
  if (res.statusCode == 200) {
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
import { SDK } from "tigris-core";
import { TigrisSearchResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.searchDocuments({
  searchRequest: {
    branch: "alias",
    collation: {
      case: "at",
    },
    excludeFields: [
      "tempora",
      "vel",
    ],
    facet: {
      "officiis": "qui",
      "dolorum": "a",
      "esse": "harum",
      "iusto": "ipsum",
    },
    fields: {
      "tenetur": "amet",
      "tempore": "accusamus",
      "numquam": "enim",
      "dolorem": "sapiente",
    },
    filter: {
      "nihil": "sit",
      "expedita": "neque",
      "sed": "vel",
    },
    includeFields: [
      "voluptas",
      "deserunt",
      "quam",
    ],
    page: 214880,
    pageSize: 277628,
    q: "qui",
    searchFields: [
      "maxime",
      "pariatur",
      "soluta",
    ],
    sort: {
      "laborum": "totam",
    },
  },
  collection: "incidunt",
  project: "aspernatur",
}).then((res: TigrisSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateDocuments

Update a range of documents in the collection using the condition provided in the filter.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisUpdateResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.collection.updateDocuments({
  updateRequest: {
    branch: "dolores",
    fields: {
      "facilis": "aliquid",
      "quam": "molestias",
      "temporibus": "qui",
    },
    filter: {
      "fugit": "magni",
    },
    options: {
      collation: {
        case: "odio",
      },
      limit: 124833,
      writeOptions: {
        "nam": "hic",
        "voluptatem": "cumque",
      },
    },
  },
  collection: "soluta",
  project: "nobis",
}).then((res: TigrisUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
