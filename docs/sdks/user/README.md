# User
(*user*)

## Overview

A User on the Tigris Platform.

### Available Operations

* [getMetadata](#getmetadata) - Reads the User Metadata
* [insertMetadata](#insertmetadata) - Inserts User Metadata
* [updateMetadata](#updatemetadata) - Updates User Metadata

## getMetadata

GetUserMetadata inserts the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.user.getMetadata({
    getUserMetadataRequest: {
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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.ManagementGetUserMetadataRequest](../../sdk/models/operations/managementgetusermetadatarequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ManagementGetUserMetadataResponse](../../sdk/models/operations/managementgetusermetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## insertMetadata

insertUserMetadata inserts the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.user.insertMetadata({
    insertUserMetadataRequest: {
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
| `request`                                                                                                            | [operations.ManagementInsertUserMetadataRequest](../../sdk/models/operations/managementinsertusermetadatarequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.ManagementInsertUserMetadataResponse](../../sdk/models/operations/managementinsertusermetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateMetadata

updateUserMetadata updates the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.user.updateMetadata({
    updateUserMetadataRequest: {
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
| `request`                                                                                                            | [operations.ManagementUpdateUserMetadataRequest](../../sdk/models/operations/managementupdateusermetadatarequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.ManagementUpdateUserMetadataResponse](../../sdk/models/operations/managementupdateusermetadataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
