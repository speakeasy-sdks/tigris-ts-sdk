<!-- Start SDK Example Usage -->
```typescript
import {
  TigrisDeleteAppKeyRequest,
  TigrisDeleteAppKeyResponse
} from "tigris-core/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "tigris-core";

const sdk = new SDK({
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
});
    
const req: TigrisDeleteAppKeyRequest = {
  pathParams: {
    project: "unde",
  },
  request: {
    id: "deserunt",
  },
};

sdk.appKey.delete(req).then((res: TigrisDeleteAppKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->