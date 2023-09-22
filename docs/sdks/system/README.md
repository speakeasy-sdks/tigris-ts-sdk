# System

## Overview

The Observability section has APIs that provides full visibility into the health, metrics, and monitoring of the Server.

### Available Operations

* [getHealth](#gethealth) - Health Check
* [getServerInfo](#getserverinfo) - Information about the server
* [observabilityQuotaUsage](#observabilityquotausage) - Queries current namespace quota usage
* [queryQuotaLimits](#queryquotalimits) - Queries current namespace quota limits
* [queryTimeSeriesMetrics](#querytimeseriesmetrics) - Queries time series metrics

## getHealth

This endpoint can be used to check the liveness of the server.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { HealthAPIHealthResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.system.getHealth().then((res: HealthAPIHealthResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.HealthAPIHealthResponse](../../models/operations/healthapihealthresponse.md)>**


## getServerInfo

Provides the information about the server. This information includes returning the server version, etc.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityGetInfoResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.system.getServerInfo().then((res: ObservabilityGetInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ObservabilityGetInfoResponse](../../models/operations/observabilitygetinforesponse.md)>**


## observabilityQuotaUsage

Returns current namespace quota limits

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityQuotaUsageResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.system.observabilityQuotaUsage({}).then((res: ObservabilityQuotaUsageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.QuotaUsageRequest](../../models/shared/quotausagerequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.ObservabilityQuotaUsageResponse](../../models/operations/observabilityquotausageresponse.md)>**


## queryQuotaLimits

Returns current namespace quota limits

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityQuotaLimitsResponse } from "tigris-core/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.system.queryQuotaLimits({}).then((res: ObservabilityQuotaLimitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.QuotaLimitsRequest](../../models/shared/quotalimitsrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.ObservabilityQuotaLimitsResponse](../../models/operations/observabilityquotalimitsresponse.md)>**


## queryTimeSeriesMetrics

Queries time series metrics

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityQueryTimeSeriesMetricsResponse } from "tigris-core/dist/sdk/models/operations";
import {
  QueryTimeSeriesMetricsRequestFunction,
  QueryTimeSeriesMetricsRequestSpaceAggregation,
  QueryTimeSeriesMetricsRequestTigrisOperation,
  RollupFunctionAggregator,
} from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "",
  },
});

sdk.system.queryTimeSeriesMetrics({
  additionalFunctions: [
    {
      rollup: {
        aggregator: RollupFunctionAggregator.RollupAggregatorSum,
        interval: 355613,
      },
    },
  ],
  branch: "nam",
  collection: "hic",
  db: "voluptatem",
  from: 765326,
  function: QueryTimeSeriesMetricsRequestFunction.None,
  metricName: "nobis",
  quantile: 925.96,
  spaceAggregatedBy: [
    "saepe",
  ],
  spaceAggregation: QueryTimeSeriesMetricsRequestSpaceAggregation.Avg,
  tigrisOperation: QueryTimeSeriesMetricsRequestTigrisOperation.All,
  to: 749255,
}).then((res: ObservabilityQueryTimeSeriesMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.QueryTimeSeriesMetricsRequest](../../models/shared/querytimeseriesmetricsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ObservabilityQueryTimeSeriesMetricsResponse](../../models/operations/observabilityquerytimeseriesmetricsresponse.md)>**

