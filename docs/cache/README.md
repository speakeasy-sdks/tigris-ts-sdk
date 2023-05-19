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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.create({
  createCacheRequest: {
    options: {
      ttlMs: 244425,
    },
  },
  name: "Miss Eugene Hauck",
  project: "enim",
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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.delete({
  requestBody: {
    "quo": "sequi",
  },
  name: "Vernon Ondricka Sr.",
  project: "error",
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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.deleteKeys({
  requestBody: {
    "laborum": "quasi",
    "reiciendis": "voluptatibus",
    "vero": "nihil",
    "praesentium": "voluptatibus",
  },
  key: "ipsa",
  name: "Mr. Jared Ritchie",
  project: "ut",
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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.getKey({
  key: "maiores",
  name: "Stacy Gulgowski MD",
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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.getSetKey({
  getSetRequest: {
    value: "accusamus",
  },
  key: "commodi",
  name: "Eric Emmerich",
  project: "excepturi",
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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.list({
  project: "pariatur",
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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.listKeys({
  count: 265389,
  cursor: 508969,
  name: "Grady Botsford",
  pattern: "veritatis",
  project: "itaque",
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
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.setKey({
  setRequest: {
    ex: 277718,
    nx: false,
    px: 318569,
    value: "consequatur",
    xx: false,
  },
  key: "est",
  name: "Benjamin O'Connell",
  project: "labore",
}).then((res: CacheSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
