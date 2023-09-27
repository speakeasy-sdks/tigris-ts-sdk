# Channel
(*channel*)

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

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.channel.get({
  channel: "est",
  project: "quibusdam",
}).then((res: RealtimeGetRTChannelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RealtimeGetRTChannelRequest](../../models/operations/realtimegetrtchannelrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RealtimeGetRTChannelResponse](../../models/operations/realtimegetrtchannelresponse.md)>**


## getMessages

Get all messages for a channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeReadMessagesResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.channel.getMessages({
  channel: "explicabo",
  end: "deserunt",
  event: "distinctio",
  limit: 841386,
  project: "labore",
  sessionId: "modi",
  socketId: "qui",
  start: "aliquid",
}).then((res: RealtimeReadMessagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RealtimeReadMessagesRequest](../../models/operations/realtimereadmessagesrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RealtimeReadMessagesResponse](../../models/operations/realtimereadmessagesresponse.md)>**


## list

Get all channels for your application project

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeGetRTChannelsResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.channel.list({
  project: "cupiditate",
}).then((res: RealtimeGetRTChannelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RealtimeGetRTChannelsRequest](../../models/operations/realtimegetrtchannelsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RealtimeGetRTChannelsResponse](../../models/operations/realtimegetrtchannelsresponse.md)>**


## listSubscriptions

Get the subscriptions details about a channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeListSubscriptionsResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.channel.listSubscriptions({
  channel: "quos",
  page: 20107,
  pageSize: 164940,
  project: "assumenda",
}).then((res: RealtimeListSubscriptionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RealtimeListSubscriptionsRequest](../../models/operations/realtimelistsubscriptionsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RealtimeListSubscriptionsResponse](../../models/operations/realtimelistsubscriptionsresponse.md)>**


## pushMessages

push messages to a single channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimeMessagesResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.channel.pushMessages({
  messagesRequest: {
    channel: "ipsam",
    messages: [
      {
        data: "alias",
        id: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
        name: "Kayla Thompson",
        sequence: "enim",
      },
    ],
    project: "accusamus",
  },
  channel: "delectus",
  project: "quidem",
}).then((res: RealtimeMessagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RealtimeMessagesRequest](../../models/operations/realtimemessagesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RealtimeMessagesResponse](../../models/operations/realtimemessagesresponse.md)>**


## realtimePresence

Presence about the channel

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { RealtimePresenceResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.channel.realtimePresence({
  channel: "provident",
  project: "nam",
}).then((res: RealtimePresenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RealtimePresenceRequest](../../models/operations/realtimepresencerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RealtimePresenceResponse](../../models/operations/realtimepresenceresponse.md)>**

