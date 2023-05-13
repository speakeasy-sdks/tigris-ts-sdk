<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "tigris-core";
import { CacheCreateCacheResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.create({
  createCacheRequest: {
    options: {
      ttlMs: 548814,
    },
  },
  name: "Kelvin Sporer",
  project: "corrupti",
}).then((res: CacheCreateCacheResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->