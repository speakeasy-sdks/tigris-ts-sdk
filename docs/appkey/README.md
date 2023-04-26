# appKey

## Overview

The application keys section provide APIs that can be used to manage application keys for your project. A single project can have one or more application keys.

### Available Operations

* [delete](#delete) - Deletes the app key
* [list](#list) - List all the app keys
* [rotate](#rotate) - Rotates the app key secret
* [tigrisCreateAppKey](#tigriscreateappkey) - Creates the app key
* [update](#update) - Updates the description of the app key

## delete

Delete an app key.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisDeleteAppKeyRequest, TigrisDeleteAppKeyResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisDeleteAppKeyRequest = {
  deleteAppKeyRequest: {
    id: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
  },
  project: "cum",
};

sdk.appKey.delete(req).then((res: TigrisDeleteAppKeyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Lists all app keys visible to requesting actor.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisListAppKeysRequest, TigrisListAppKeysResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisListAppKeysRequest = {
  project: "esse",
};

sdk.appKey.list(req).then((res: TigrisListAppKeysResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## rotate

Endpoint is used to rotate the secret for the app key.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisRotateAppKeySecretRequest, TigrisRotateAppKeySecretResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisRotateAppKeySecretRequest = {
  rotateAppKeyRequest: {
    id: "39205929-396f-4ea7-996e-b10faaa2352c",
    project: "enim",
  },
  project: "omnis",
};

sdk.appKey.rotate(req).then((res: TigrisRotateAppKeySecretResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## tigrisCreateAppKey

Create an app key.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisCreateAppKeyRequest, TigrisCreateAppKeyResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisCreateAppKeyRequest = {
  createAppKeyRequest: {
    description: "nemo",
    name: "Velma Batz",
  },
  project: "doloribus",
};

sdk.appKey.tigrisCreateAppKey(req).then((res: TigrisCreateAppKeyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update the description of an app key.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { TigrisUpdateAppKeyRequest, TigrisUpdateAppKeyResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TigrisUpdateAppKeyRequest = {
  updateAppKeyRequest: {
    description: "sapiente",
    id: "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
    name: "Ryan Witting",
  },
  project: "nihil",
};

sdk.appKey.update(req).then((res: TigrisUpdateAppKeyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
