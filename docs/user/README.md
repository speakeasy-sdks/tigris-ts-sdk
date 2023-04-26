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
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { ManagementGetUserMetadataRequest, ManagementGetUserMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ManagementGetUserMetadataRequest = {
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
};

sdk.user.getMetadata(req).then((res: ManagementGetUserMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## insertMetadata

insertUserMetadata inserts the user metadata object

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { ManagementInsertUserMetadataRequest, ManagementInsertUserMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ManagementInsertUserMetadataRequest = {
  insertUserMetadataRequest: {
    metadataKey: "et",
    value: {
      "ipsa": "minima",
      "veritatis": "consectetur",
    },
  },
  metadataKey: "adipisci",
};

sdk.user.insertMetadata(req).then((res: ManagementInsertUserMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateMetadata

updateUserMetadata updates the user metadata object

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { ManagementUpdateUserMetadataRequest, ManagementUpdateUserMetadataResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ManagementUpdateUserMetadataRequest = {
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
};

sdk.user.updateMetadata(req).then((res: ManagementUpdateUserMetadataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
