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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.get({
  channel: "eligendi",
  project: "sint",
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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.getMessages({
  channel: "aliquid",
  end: "provident",
  event: "necessitatibus",
  limit: 572252,
  project: "officia",
  sessionId: "dolor",
  socketId: "debitis",
  start: "a",
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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.list({
  project: "dolorum",
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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.listSubscriptions({
  channel: "in",
  page: 449198,
  pageSize: 846409,
  project: "maiores",
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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.pushMessages({
  messagesRequest: {
    channel: "rerum",
    messages: [
      {
        data: "magnam",
        id: "cd66ae39-5efb-49ba-88f3-a66997074ba4",
        name: "Laurie Mosciski",
        sequence: "vero",
      },
    ],
    project: "aspernatur",
  },
  channel: "architecto",
  project: "magnam",
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
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.channel.realtimePresence({
  channel: "et",
  project: "excepturi",
}).then((res: RealtimePresenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
