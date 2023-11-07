# Cache
(*.cache*)

## Overview

The cache section provide APIs that can be used to perform cache operations.

### Available Operations

* [create](#create) - Creates the cache
* [delete](#delete) - Deletes the cache
* [deleteKeys](#deletekeys) - Deletes an entry from cache
* [getKey](#getkey) - Reads an entry from cache
* [getSetKey](#getsetkey) - Sets an entry in the cache and returns the previous value if exists
* [list](#list) - Lists all the caches for the given project
* [listKeys](#listkeys) - Lists all the key for this cache
* [setKey](#setkey) - Sets an entry in the cache

## create

Creates the cache

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.create({
    createCacheRequest: {
      options: {},
    },
    name: "string",
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CacheCreateCacheRequest](../../models/operations/cachecreatecacherequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CacheCreateCacheResponse](../../models/operations/cachecreatecacheresponse.md)>**


## delete

Deletes the cache

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.delete({
    deleteCacheRequest: {},
    name: "string",
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CacheDeleteCacheRequest](../../models/operations/cachedeletecacherequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CacheDeleteCacheResponse](../../models/operations/cachedeletecacheresponse.md)>**


## deleteKeys

Deletes an entry from cache

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.deleteKeys({
    delRequest: {},
    key: "<key>",
    name: "string",
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.CacheDelRequest](../../models/operations/cachedelrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CacheDelResponse](../../models/operations/cachedelresponse.md)>**


## getKey

Reads an entry from cache

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.getKey({
    key: "<key>",
    name: "string",
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.CacheGetRequest](../../models/operations/cachegetrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CacheGetResponse](../../models/operations/cachegetresponse.md)>**


## getSetKey

Sets an entry in the cache and returns the previous value if exists

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.getSetKey({
    getSetRequest: {},
    key: "<key>",
    name: "string",
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.CacheGetSetRequest](../../models/operations/cachegetsetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CacheGetSetResponse](../../models/operations/cachegetsetresponse.md)>**


## list

Lists all the caches for the given project

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.list({
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CacheListCachesRequest](../../models/operations/cachelistcachesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CacheListCachesResponse](../../models/operations/cachelistcachesresponse.md)>**


## listKeys

Lists all the key for this cache

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.listKeys({
    name: "string",
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.CacheKeysRequest](../../models/operations/cachekeysrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CacheKeysResponse](../../models/operations/cachekeysresponse.md)>**


## setKey

Sets an entry in the cache

### Example Usage

```typescript
import { SDK } from "tigris-core";

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.cache.setKey({
    setRequest: {},
    key: "<key>",
    name: "string",
    project: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.CacheSetRequest](../../models/operations/cachesetrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CacheSetResponse](../../models/operations/cachesetresponse.md)>**

