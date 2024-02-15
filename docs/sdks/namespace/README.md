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

async function run() {
  const sdk = new SDK({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.namespace.create({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.CreateNamespaceRequest](../../sdk/models/shared/createnamespacerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateNamespaceResponse](../../sdk/models/operations/createnamespaceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get details for all namespaces

### Example Usage

```typescript
import { SDK } from "tigris-core";

async function run() {
  const sdk = new SDK({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.namespace.get();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ManagementDescribeNamespacesResponse](../../sdk/models/operations/managementdescribenamespacesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getMetadata

GetNamespaceMetadata inserts the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";

async function run() {
  const sdk = new SDK({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.namespace.getMetadata({
    getNamespaceMetadataRequest: {
      value: {},
    },
    metadataKey: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.ManagementGetNamespaceMetadataRequest](../../sdk/models/operations/managementgetnamespacemetadatarequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.ManagementGetNamespaceMetadataResponse](../../sdk/models/operations/managementgetnamespacemetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## insertMetadata

InsertNamespaceMetadata inserts the namespace metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";

async function run() {
  const sdk = new SDK({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.namespace.insertMetadata({
    insertNamespaceMetadataRequest: {
      value: {},
    },
    metadataKey: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.ManagementInsertNamespaceMetadataRequest](../../sdk/models/operations/managementinsertnamespacemetadatarequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.ManagementInsertNamespaceMetadataResponse](../../sdk/models/operations/managementinsertnamespacemetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

List all namespace

### Example Usage

```typescript
import { SDK } from "tigris-core";

async function run() {
  const sdk = new SDK({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.namespace.list();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ManagementListNamespacesResponse](../../sdk/models/operations/managementlistnamespacesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMetadata

UpdateNamespaceMetadata updates the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";

async function run() {
  const sdk = new SDK({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.namespace.updateMetadata({
    updateNamespaceMetadataRequest: {
      value: {},
    },
    metadataKey: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.ManagementUpdateNamespaceMetadataRequest](../../sdk/models/operations/managementupdatenamespacemetadatarequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.ManagementUpdateNamespaceMetadataResponse](../../sdk/models/operations/managementupdatenamespacemetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
