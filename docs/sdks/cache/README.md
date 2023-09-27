# Cache
(*cache*)

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
import { CacheCreateCacheResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.create({
  createCacheRequest: {
    options: {
      ttlMs: 138183,
    },
  },
  name: "Jimmy Wiegand",
  project: "possimus",
}).then((res: CacheCreateCacheResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CacheDeleteCacheResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.delete({
  deleteCacheRequest: {},
  name: "Joyce Mueller",
  project: "quasi",
}).then((res: CacheDeleteCacheResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CacheDelResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.deleteKeys({
  delRequest: {},
  key: "reiciendis",
  name: "Caleb Koss",
  project: "ipsa",
}).then((res: CacheDelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CacheGetResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.getKey({
  key: "omnis",
  name: "Ms. Karla Aufderhar",
  project: "maiores",
}).then((res: CacheGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CacheGetSetResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.getSetKey({
  getSetRequest: {
    value: "dicta",
  },
  key: "corporis",
  name: "Heidi Carter",
  project: "accusamus",
}).then((res: CacheGetSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CacheListCachesResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.list({
  project: "commodi",
}).then((res: CacheListCachesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CacheKeysResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.listKeys({
  count: 918236,
  cursor: 64147,
  name: "Alison Mann",
  pattern: "modi",
  project: "praesentium",
}).then((res: CacheKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CacheSetResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.cache.setKey({
  setRequest: {
    ex: 523248,
    nx: false,
    px: 916723,
    value: "quasi",
    xx: false,
  },
  key: "repudiandae",
  name: "Patrick Ward",
  project: "consequatur",
}).then((res: CacheSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.CacheSetRequest](../../models/operations/cachesetrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CacheSetResponse](../../models/operations/cachesetresponse.md)>**

