<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "tigris-core";

async function run() {
    const sdk = new SDK({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
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
}

run();

```
<!-- End SDK Example Usage [usage] -->