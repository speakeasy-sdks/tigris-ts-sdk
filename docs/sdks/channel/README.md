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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.channel.get({
    channel: "string",
    project: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.channel.getMessages({
    channel: "string",
    project: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.channel.list({
    project: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.channel.listSubscriptions({
    channel: "string",
    project: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.channel.pushMessages({
    messagesRequest: {
      messages: [
        {},
      ],
    },
    channel: "string",
    project: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new SDK({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.channel.realtimePresence({
    channel: "string",
    project: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RealtimePresenceRequest](../../models/operations/realtimepresencerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RealtimePresenceResponse](../../models/operations/realtimepresenceresponse.md)>**

