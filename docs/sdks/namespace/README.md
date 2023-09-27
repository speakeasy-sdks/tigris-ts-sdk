# Namespace
(*namespace*)

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

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.namespace.create({
  code: 779051,
  id: "ddc69260-1fb5-476b-8d5f-0d30c5fbb258",
  name: "Cynthia Hayes",
}).then((res: CreateNamespaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateNamespaceRequest](../../models/shared/createnamespacerequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateNamespaceResponse](../../models/operations/createnamespaceresponse.md)>**


## get

Get details for all namespaces

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementDescribeNamespacesResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.namespace.get().then((res: ManagementDescribeNamespacesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ManagementDescribeNamespacesResponse](../../models/operations/managementdescribenamespacesresponse.md)>**


## getMetadata

GetNamespaceMetadata inserts the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementGetNamespaceMetadataResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.namespace.getMetadata({
  getNamespaceMetadataRequest: {
    metadataKey: "perferendis",
    value: {},
  },
  metadataKey: "dolores",
}).then((res: ManagementGetNamespaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.ManagementGetNamespaceMetadataRequest](../../models/operations/managementgetnamespacemetadatarequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.ManagementGetNamespaceMetadataResponse](../../models/operations/managementgetnamespacemetadataresponse.md)>**


## insertMetadata

InsertNamespaceMetadata inserts the namespace metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementInsertNamespaceMetadataResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.namespace.insertMetadata({
  insertNamespaceMetadataRequest: {
    metadataKey: "minus",
    value: {},
  },
  metadataKey: "quam",
}).then((res: ManagementInsertNamespaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.ManagementInsertNamespaceMetadataRequest](../../models/operations/managementinsertnamespacemetadatarequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.ManagementInsertNamespaceMetadataResponse](../../models/operations/managementinsertnamespacemetadataresponse.md)>**


## list

List all namespace

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementListNamespacesResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.namespace.list().then((res: ManagementListNamespacesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ManagementListNamespacesResponse](../../models/operations/managementlistnamespacesresponse.md)>**


## updateMetadata

UpdateNamespaceMetadata updates the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementUpdateNamespaceMetadataResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.namespace.updateMetadata({
  updateNamespaceMetadataRequest: {
    metadataKey: "dolor",
    value: {},
  },
  metadataKey: "vero",
}).then((res: ManagementUpdateNamespaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.ManagementUpdateNamespaceMetadataRequest](../../models/operations/managementupdatenamespacemetadatarequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.ManagementUpdateNamespaceMetadataResponse](../../models/operations/managementupdatenamespacemetadataresponse.md)>**

