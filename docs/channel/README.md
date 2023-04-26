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
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { RealtimeGetRTChannelRequest, RealtimeGetRTChannelResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: RealtimeGetRTChannelRequest = {
  channel: "eligendi",
  project: "sint",
};

sdk.channel.get(req).then((res: RealtimeGetRTChannelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getMessages

Get all messages for a channel

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { RealtimeReadMessagesRequest, RealtimeReadMessagesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: RealtimeReadMessagesRequest = {
  channel: "aliquid",
  end: "provident",
  event: "necessitatibus",
  limit: 572252,
  project: "officia",
  sessionId: "dolor",
  socketId: "debitis",
  start: "a",
};

sdk.channel.getMessages(req).then((res: RealtimeReadMessagesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get all channels for your application project

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { RealtimeGetRTChannelsRequest, RealtimeGetRTChannelsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: RealtimeGetRTChannelsRequest = {
  project: "dolorum",
};

sdk.channel.list(req).then((res: RealtimeGetRTChannelsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listSubscriptions

Get the subscriptions details about a channel

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { RealtimeListSubscriptionsRequest, RealtimeListSubscriptionsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: RealtimeListSubscriptionsRequest = {
  channel: "in",
  page: 449198,
  pageSize: 846409,
  project: "maiores",
};

sdk.channel.listSubscriptions(req).then((res: RealtimeListSubscriptionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## pushMessages

push messages to a single channel

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { RealtimeMessagesRequest, RealtimeMessagesResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: RealtimeMessagesRequest = {
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
};

sdk.channel.pushMessages(req).then((res: RealtimeMessagesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## realtimePresence

Presence about the channel

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { RealtimePresenceRequest, RealtimePresenceResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: RealtimePresenceRequest = {
  channel: "et",
  project: "excepturi",
};

sdk.channel.realtimePresence(req).then((res: RealtimePresenceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
