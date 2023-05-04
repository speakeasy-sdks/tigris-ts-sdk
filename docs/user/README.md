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
    metadataKey: "consectetur",
    value: {
      "iste": "temporibus",
    },
  },
  metadataKey: "accusantium",
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
    metadataKey: "rem",
    value: {
      "laudantium": "eum",
    },
  },
  metadataKey: "mollitia",
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
    metadataKey: "ab",
    value: {
      "non": "voluptatem",
      "dolor": "occaecati",
      "numquam": "impedit",
    },
  },
  metadataKey: "explicabo",
}).then((res: ManagementUpdateUserMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
