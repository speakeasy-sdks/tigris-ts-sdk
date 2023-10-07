<!-- Start SDK Example Usage -->


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
    name: "Electric pirouette",
    project: "Sausages ASCII",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->