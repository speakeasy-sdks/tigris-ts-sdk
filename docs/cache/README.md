# cache

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
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheCreateCacheRequest, CacheCreateCacheResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheCreateCacheRequest = {
  createCacheRequest: {
    options: {
      ttlMs: 509624,
    },
  },
  name: "Jose Moen",
  project: "perferendis",
};

sdk.cache.create(req).then((res: CacheCreateCacheResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes the cache

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheDeleteCacheRequest, CacheDeleteCacheResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheDeleteCacheRequest = {
  requestBody: {
    "reprehenderit": "ut",
  },
  name: "Willie Hessel",
  project: "dicta",
};

sdk.cache.delete(req).then((res: CacheDeleteCacheResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteKeys

Deletes an entry from cache

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheDelRequest, CacheDelResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheDelRequest = {
  requestBody: {
    "enim": "accusamus",
    "commodi": "repudiandae",
    "quae": "ipsum",
  },
  key: "quidem",
  name: "Andy Streich",
  project: "rem",
};

sdk.cache.deleteKeys(req).then((res: CacheDelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getKey

Reads an entry from cache

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheGetRequest, CacheGetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheGetRequest = {
  key: "voluptates",
  name: "Dr. Casey Mayer",
  project: "enim",
};

sdk.cache.getKey(req).then((res: CacheGetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSetKey

Sets an entry in the cache and returns the previous value if exists

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheGetSetRequest, CacheGetSetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheGetSetRequest = {
  getSetRequest: {
    value: "consequatur",
  },
  key: "est",
  name: "Benjamin O'Connell",
  project: "labore",
};

sdk.cache.getSetKey(req).then((res: CacheGetSetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Lists all the caches for the given project

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheListCachesRequest, CacheListCachesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheListCachesRequest = {
  project: "modi",
};

sdk.cache.list(req).then((res: CacheListCachesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listKeys

Lists all the key for this cache

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheKeysRequest, CacheKeysResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheKeysRequest = {
  count: 183191,
  cursor: 397821,
  name: "Isaac Aufderhar",
  pattern: "ipsam",
  project: "alias",
};

sdk.cache.listKeys(req).then((res: CacheKeysResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## setKey

Sets an entry in the cache

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { CacheSetRequest, CacheSetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CacheSetRequest = {
  setRequest: {
    ex: 146441,
    nx: false,
    px: 677817,
    value: "excepturi",
    xx: false,
  },
  key: "tempora",
  name: "Geoffrey Green",
  project: "non",
};

sdk.cache.setKey(req).then((res: CacheSetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
