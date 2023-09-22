# AppKey

## Overview

The application keys section provide APIs that can be used to manage application keys for your project. A single project can have one or more application keys.

### Available Operations

* [delete](#delete) - Deletes the app key
* [list](#list) - List all the app keys
* [rotate](#rotate) - Rotates the app key secret
* [tigrisCreateAppKey](#tigriscreateappkey) - Creates the app key
* [update](#update) - Updates the description of the app key

## delete

Delete an app key.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisDeleteAppKeyResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.appKey.delete({
  deleteAppKeyRequest: {
    id: "e0f467cc-8796-4ed1-91a0-5dfc2ddf7cc7",
  },
  project: "totam",
}).then((res: TigrisDeleteAppKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.TigrisDeleteAppKeyRequest](../../models/operations/tigrisdeleteappkeyrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.TigrisDeleteAppKeyResponse](../../models/operations/tigrisdeleteappkeyresponse.md)>**


## list

Lists all app keys visible to requesting actor.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisListAppKeysResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.appKey.list({
  project: "porro",
}).then((res: TigrisListAppKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.TigrisListAppKeysRequest](../../models/operations/tigrislistappkeysrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.TigrisListAppKeysResponse](../../models/operations/tigrislistappkeysresponse.md)>**


## rotate

Endpoint is used to rotate the secret for the app key.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisRotateAppKeySecretResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.appKey.rotate({
  rotateAppKeyRequest: {
    id: "a1ba928f-c816-4742-8b73-9205929396fe",
    project: "fuga",
  },
  project: "in",
}).then((res: TigrisRotateAppKeySecretResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.TigrisRotateAppKeySecretRequest](../../models/operations/tigrisrotateappkeysecretrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.TigrisRotateAppKeySecretResponse](../../models/operations/tigrisrotateappkeysecretresponse.md)>**


## tigrisCreateAppKey

Create an app key.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisCreateAppKeyResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.appKey.tigrisCreateAppKey({
  createAppKeyRequest: {
    description: "corporis",
    name: "Brad Turcotte Jr.",
  },
  project: "reiciendis",
}).then((res: TigrisCreateAppKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.TigrisCreateAppKeyRequest](../../models/operations/tigriscreateappkeyrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.TigrisCreateAppKeyResponse](../../models/operations/tigriscreateappkeyresponse.md)>**


## update

Update the description of an app key.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { TigrisUpdateAppKeyResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.appKey.update({
  updateAppKeyRequest: {
    description: "est",
    id: "aa2352c5-9559-407a-bf1a-3a2fa9467739",
    name: "Beatrice Brown",
  },
  project: "enim",
}).then((res: TigrisUpdateAppKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.TigrisUpdateAppKeyRequest](../../models/operations/tigrisupdateappkeyrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.TigrisUpdateAppKeyResponse](../../models/operations/tigrisupdateappkeyresponse.md)>**

