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
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisCreateProjectRequest, TigrisCreateProjectResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisCreateProjectRequest = {
  requestBody: {
    "aspernatur": "vel",
    "possimus": "magnam",
  },
  project: "ratione",
};

sdk.project.create(req).then((res: TigrisCreateProjectResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteProject

Delete Project deletes all the collections in this project along with all of the documents, and associated metadata for these collections.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisDeleteProjectRequest, TigrisDeleteProjectResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisDeleteProjectRequest = {
  requestBody: {
    "laudantium": "dicta",
    "dolor": "maiores",
  },
  project: "quasi",
};

sdk.project.deleteProject(req).then((res: TigrisDeleteProjectResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

List returns all the projects.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisListProjectsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.project.list().then((res: TigrisListProjectsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
