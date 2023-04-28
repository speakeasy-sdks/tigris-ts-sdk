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
import { SDK } from "tigris-core";
import { CacheCreateCacheResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.create({
  createCacheRequest: {
    options: {
      ttlMs: 509624,
    },
  },
  name: "Jose Moen",
  project: "perferendis",
}).then((res: CacheCreateCacheResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes the cache

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CacheDeleteCacheResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.delete({
  requestBody: {
    "reprehenderit": "ut",
  },
  name: "Willie Hessel",
  project: "dicta",
}).then((res: CacheDeleteCacheResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteKeys

Deletes an entry from cache

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CacheDelResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.deleteKeys({
  requestBody: {
    "enim": "accusamus",
    "commodi": "repudiandae",
    "quae": "ipsum",
  },
  key: "quidem",
  name: "Andy Streich",
  project: "rem",
}).then((res: CacheDelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getKey

Reads an entry from cache

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CacheGetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.getKey({
  key: "voluptates",
  name: "Dr. Casey Mayer",
  project: "enim",
}).then((res: CacheGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSetKey

Sets an entry in the cache and returns the previous value if exists

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CacheGetSetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.getSetKey({
  getSetRequest: {
    value: "consequatur",
  },
  key: "est",
  name: "Benjamin O'Connell",
  project: "labore",
}).then((res: CacheGetSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Lists all the caches for the given project

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CacheListCachesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.list({
  project: "modi",
}).then((res: CacheListCachesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listKeys

Lists all the key for this cache

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CacheKeysResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.listKeys({
  count: 183191,
  cursor: 397821,
  name: "Isaac Aufderhar",
  pattern: "ipsam",
  project: "alias",
}).then((res: CacheKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setKey

Sets an entry in the cache

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { CacheSetResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.setKey({
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
}).then((res: CacheSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
