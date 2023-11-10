<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "tigris-core";

(async () => {
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
<!-- End SDK Example Usage -->