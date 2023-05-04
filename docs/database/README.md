# database

## Overview

The Database section provide APIs that can be used to interact with the database. A single Database can have one or more collections. A database is created automatically for you when you create a project.

### Available Operations

* [beginTransaction](#begintransaction) - Begin a transaction
* [commitTransaction](#committransaction) - Commit a Transaction
* [createBranch](#createbranch) - Create a database branch
* [deleteBranch](#deletebranch) - Delete a database branch
* [describe](#describe) - Describe database
* [listCollections](#listcollections) - List Collections
* [rollbackTransaction](#rollbacktransaction) - Rollback a transaction
* [tigrisListBranches](#tigrislistbranches) - List database branches

## beginTransaction

Starts a new transaction and returns a transactional object. All reads/writes performed
 within a transaction will run with serializable isolation. Tigris offers global transactions,
 with ACID properties and strict serializability.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisBeginTransactionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.beginTransaction({
  beginTransactionRequest: {
    branch: "et",
    options: {
      "ipsum": "veritatis",
      "nobis": "quos",
      "tempore": "cupiditate",
      "aperiam": "delectus",
    },
  },
  project: "dolorem",
}).then((res: TigrisBeginTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## commitTransaction

Atomically commit all the changes performed in the context of the transaction. Commit provides all
 or nothing semantics by ensuring no partial updates are in the project due to a transaction failure.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisCommitTransactionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.commitTransaction({
  commitTransactionRequest: {
    branch: "dolore",
  },
  project: "labore",
}).then((res: TigrisCommitTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createBranch

Creates a new database branch, if not already existing.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisCreateBranchResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.createBranch({
  requestBody: {
    "dolorum": "architecto",
  },
  branch: "quae",
  project: "aut",
}).then((res: TigrisCreateBranchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteBranch

Deletes a database branch, if exists.
 Throws 400 Bad Request if "main" branch is being deleted

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDeleteBranchResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.deleteBranch({
  requestBody: {
    "itaque": "consequatur",
    "est": "repellendus",
    "porro": "doloribus",
  },
  branch: "ut",
  project: "facilis",
}).then((res: TigrisDeleteBranchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## describe

This API returns information related to the project along with all the collections inside the project.
 This can be used to retrieve the size of the project or to retrieve schemas, branches and the size of all the collections present in this project.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDescribeDatabaseResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.describe({
  describeDatabaseRequest: {
    branch: "cupiditate",
    project: "qui",
    schemaFormat: "quae",
  },
  project: "laudantium",
}).then((res: TigrisDescribeDatabaseResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listCollections

List all the collections present in the project passed in the request.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisListCollectionsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.listCollections({
  branch: "odio",
  project: "occaecati",
}).then((res: TigrisListCollectionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## rollbackTransaction

Rollback transaction discards all the changes
 performed in the transaction

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisRollbackTransactionResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.rollbackTransaction({
  rollbackTransactionRequest: {
    branch: "voluptatibus",
  },
  project: "quisquam",
}).then((res: TigrisRollbackTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## tigrisListBranches

List database branches

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisListBranchesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.database.tigrisListBranches({
  project: "vero",
}).then((res: TigrisListBranchesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
