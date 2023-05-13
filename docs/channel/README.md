# channel

## Overview

The realtime section provide APIs that can be used realtime operations.

### Available Operations

* [get](#get) - Get the details about a channel
* [getMessages](#getmessages) - Get all messages for a channel
* [list](#list) - Get all channels for your application project
* [listSubscriptions](#listsubscriptions) - Get the subscriptions details about a channel
* [pushMessages](#pushmessages) - push messages to a single channel
* [realtimePresence](#realtimepresence) - Presence about the channel

## get

Get the details about a channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeGetRTChannelResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.get({
  channel: "modi",
  project: "qui",
}).then((res: RealtimeGetRTChannelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMessages

Get all messages for a channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeReadMessagesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.getMessages({
  channel: "aliquid",
  end: "cupiditate",
  event: "quos",
  limit: 20107,
  project: "magni",
  sessionId: "assumenda",
  socketId: "ipsam",
  start: "alias",
}).then((res: RealtimeReadMessagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get all channels for your application project

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeGetRTChannelsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.list({
  project: "fugit",
}).then((res: RealtimeGetRTChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listSubscriptions

Get the subscriptions details about a channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeListSubscriptionsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.listSubscriptions({
  channel: "dolorum",
  page: 569618,
  pageSize: 270008,
  project: "facilis",
}).then((res: RealtimeListSubscriptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## pushMessages

push messages to a single channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeMessagesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.pushMessages({
  messagesRequest: {
    channel: "tempore",
    messages: [
      {
        data: "delectus",
        id: "63c969e9-a3ef-4a77-9fb1-4cd66ae395ef",
        name: "Rene Reinger",
        sequence: "deleniti",
      },
      {
        data: "sapiente",
        id: "3a669970-74ba-4446-9b6e-2141959890af",
        name: "Tommy Kemmer",
        sequence: "odit",
      },
    ],
    project: "nemo",
  },
  channel: "quasi",
  project: "iure",
}).then((res: RealtimeMessagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## realtimePresence

Presence about the channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimePresenceResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.realtimePresence({
  channel: "doloribus",
  project: "debitis",
}).then((res: RealtimePresenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
