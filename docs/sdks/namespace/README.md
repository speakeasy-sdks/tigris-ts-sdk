# Namespace
(*.namespace*)

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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.namespace.create({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.namespace.get();


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.namespace.getMetadata({
    getNamespaceMetadataRequest: {
      value: {},
    },
    metadataKey: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.namespace.insertMetadata({
    insertNamespaceMetadataRequest: {
      value: {},
    },
    metadataKey: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.namespace.list();


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.namespace.updateMetadata({
    updateNamespaceMetadataRequest: {
      value: {},
    },
    metadataKey: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.ManagementUpdateNamespaceMetadataRequest](../../models/operations/managementupdatenamespacemetadatarequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.ManagementUpdateNamespaceMetadataResponse](../../models/operations/managementupdatenamespacemetadataresponse.md)>**

