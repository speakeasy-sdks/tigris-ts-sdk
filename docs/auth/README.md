# auth

## Overview

The auth section of API provides OAuth 2.0 APIs. Tigris supports pluggable OAuth provider. Pass the token in the headers for authentication, as an example `-H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6I"`(replace it with your token). All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

### Available Operations

* [get](#get) - Access Token

## get

Endpoint for receiving access token from Tigris Server. The endpoint requires Grant Type(`grant_type`) which has
 two possible values <i>"REFRESH_TOKEN"</i> or <i>"CLIENT_CREDENTIALS"</i> based on which either Refresh token(`refresh_token`)
 needs to be set or client credentials(`client_id`, `client_secret`).

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { AuthGetAccessTokenResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.auth.get().then((res: AuthGetAccessTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
