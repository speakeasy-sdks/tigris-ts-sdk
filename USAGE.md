<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "tigris-core";
import { TigrisDeleteAppKeyResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.appKey.delete({
  deleteAppKeyRequest: {
    id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  },
  project: "deserunt",
}).then((res: TigrisDeleteAppKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->