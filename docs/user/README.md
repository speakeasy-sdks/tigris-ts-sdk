# user

## Overview

A User on the Tigris Platform.

### Available Operations

* [getMetadata](#getmetadata) - Reads the User Metadata
* [insertMetadata](#insertmetadata) - Inserts User Metadata
* [updateMetadata](#updatemetadata) - Updates User Metadata

## getMetadata

GetUserMetadata inserts the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementGetUserMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.user.getMetadata({
  getUserMetadataRequest: {
    metadataKey: "qui",
    value: {
      "ex": "deleniti",
      "itaque": "dolorum",
      "architecto": "omnis",
      "tenetur": "quasi",
    },
  },
  metadataKey: "at",
}).then((res: ManagementGetUserMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## insertMetadata

insertUserMetadata inserts the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementInsertUserMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.user.insertMetadata({
  insertUserMetadataRequest: {
    metadataKey: "et",
    value: {
      "ipsa": "minima",
      "veritatis": "consectetur",
    },
  },
  metadataKey: "adipisci",
}).then((res: ManagementInsertUserMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMetadata

updateUserMetadata updates the user metadata object

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ManagementUpdateUserMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.user.updateMetadata({
  updateUserMetadataRequest: {
    metadataKey: "iste",
    value: {
      "accusantium": "rem",
      "aut": "laudantium",
      "eum": "mollitia",
      "ab": "corrupti",
    },
  },
  metadataKey: "non",
}).then((res: ManagementUpdateUserMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
