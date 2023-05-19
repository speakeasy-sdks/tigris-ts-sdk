# project

## Overview

Every Tigris projects comes with a transactional document database built on FoundationDB, one of the most resilient and battle-tested open source distributed key-value store. A database is created automatically for you when you create a project.

### Available Operations

* [create](#create) - Create Project
* [deleteProject](#deleteproject) - Delete Project and all resources under project
* [list](#list) - List Projects

## create

Creates a new project. Returns an AlreadyExists error with a status code 409 if the project already exists.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisCreateProjectResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.create({
  requestBody: {
    "veniam": "aliquid",
    "inventore": "magnam",
  },
  project: "ea",
}).then((res: TigrisCreateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteProject

Delete Project deletes all the collections in this project along with all of the documents, and associated metadata for these collections.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDeleteProjectResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.deleteProject({
  requestBody: {
    "consectetur": "recusandae",
    "aspernatur": "minima",
    "eaque": "a",
    "libero": "aut",
  },
  project: "aut",
}).then((res: TigrisDeleteProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List returns all the projects.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisListProjectsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.list().then((res: TigrisListProjectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
