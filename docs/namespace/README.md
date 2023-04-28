# namespace

## Overview

The Management section provide APIs that can be used to manage users, and app_keys.

### Available Operations

* [create](#create) - Creates a Namespace
* [get](#get) - Describe the details of all namespaces
* [getMetadata](#getmetadata) - Reads the Namespace Metadata
* [insertMetadata](#insertmetadata) - Inserts Namespace Metadata
* [list](#list) - Lists all Namespaces
* [updateMetadata](#updatemetadata) - Updates Namespace Metadata

## create

Creates a new namespace, if it does not exist

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CreateNamespaceResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.namespace.create({
  code: 286915,
  id: "3a1108e0-adcf-44b9-a187-9fce953f73ef",
  name: "Darla Rau",
}).then((res: CreateNamespaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get details for all namespaces

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementDescribeNamespacesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.namespace.get().then((res: ManagementDescribeNamespacesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMetadata

GetNamespaceMetadata inserts the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementGetNamespaceMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.namespace.getMetadata({
  getNamespaceMetadataRequest: {
    metadataKey: "similique",
    value: {
      "vero": "ducimus",
      "dolore": "quibusdam",
      "illum": "sequi",
    },
  },
  metadataKey: "natus",
}).then((res: ManagementGetNamespaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## insertMetadata

InsertNamespaceMetadata inserts the namespace metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementInsertNamespaceMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.namespace.insertMetadata({
  insertNamespaceMetadataRequest: {
    metadataKey: "impedit",
    value: {
      "voluptatibus": "exercitationem",
    },
  },
  metadataKey: "nulla",
}).then((res: ManagementInsertNamespaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List all namespace

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementListNamespacesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.namespace.list().then((res: ManagementListNamespacesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMetadata

UpdateNamespaceMetadata updates the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementUpdateNamespaceMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.namespace.updateMetadata({
  updateNamespaceMetadataRequest: {
    metadataKey: "fugit",
    value: {
      "maiores": "doloribus",
      "iusto": "eligendi",
      "ducimus": "alias",
      "officia": "tempora",
    },
  },
  metadataKey: "ipsam",
}).then((res: ManagementUpdateNamespaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
