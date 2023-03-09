<!-- Start SDK Example Usage -->
```typescript
import {
  TigrisCreateAppKeyRequest,
  TigrisCreateAppKeyResponse 
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
    
const req: TigrisCreateAppKeyRequest = {
  pathParams: {
    project: "unde",
  },
  request: {
    description: "deserunt",
    name: "porro",
  },
};

sdk.applicationKeys.tigrisCreateAppKey(req).then((res: TigrisCreateAppKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->