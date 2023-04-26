# system

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
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { HealthAPIHealthResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.system.getHealth().then((res: HealthAPIHealthResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getServerInfo

Provides the information about the server. This information includes returning the server version, etc.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { ObservabilityGetInfoResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.system.getServerInfo().then((res: ObservabilityGetInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## observabilityQuotaUsage

Returns current namespace quota limits

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { , ObservabilityQuotaUsageResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: . = {
  "quasi": "a",
  "error": "sint",
};

sdk.system.observabilityQuotaUsage(req).then((res: ObservabilityQuotaUsageResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## queryQuotaLimits

Returns current namespace quota limits

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { , ObservabilityQuotaLimitsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: . = {
  "possimus": "quia",
  "eveniet": "asperiores",
  "facere": "veritatis",
  "consequuntur": "quasi",
};

sdk.system.queryQuotaLimits(req).then((res: ObservabilityQuotaLimitsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## queryTimeSeriesMetrics

Queries time series metrics

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "tigris-core";
import { ObservabilityQueryTimeSeriesMetricsResponse, QueryTimeSeriesMetricsRequest } from "tigris-core/dist/sdk/models/operations";
import {
  ErrorCodeEnum,
  QueryTimeSeriesMetricsRequestFunctionEnum,
  QueryTimeSeriesMetricsRequestSpaceAggregationEnum,
  QueryTimeSeriesMetricsRequestTigrisOperationEnum,
  RollupFunctionAggregatorEnum,
} from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.QueryTimeSeriesMetricsRequest = {
  additionalFunctions: [
    {
      rollup: {
        aggregator: RollupFunctionAggregatorEnum.RollupAggregatorMax,
        interval: 398434,
      },
    },
    {
      rollup: {
        aggregator: RollupFunctionAggregatorEnum.RollupAggregatorAvg,
        interval: 62713,
      },
    },
    {
      rollup: {
        aggregator: RollupFunctionAggregatorEnum.RollupAggregatorAvg,
        interval: 424032,
      },
    },
  ],
  branch: "in",
  collection: "eius",
  db: "libero",
  from: 849039,
  function: QueryTimeSeriesMetricsRequestFunctionEnum.None,
  metricName: "accusantium",
  quantile: 3069.86,
  spaceAggregatedBy: [
    "dicta",
    "ullam",
    "reprehenderit",
    "ullam",
  ],
  spaceAggregation: QueryTimeSeriesMetricsRequestSpaceAggregationEnum.Min,
  tigrisOperation: QueryTimeSeriesMetricsRequestTigrisOperationEnum.All,
  to: 531849,
};

sdk.system.queryTimeSeriesMetrics(req).then((res: ObservabilityQueryTimeSeriesMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
