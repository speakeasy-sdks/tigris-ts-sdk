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
import { SDK } from "tigris-core";
import { HealthAPIHealthResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.system.getHealth().then((res: HealthAPIHealthResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getServerInfo

Provides the information about the server. This information includes returning the server version, etc.

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityGetInfoResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.system.getServerInfo().then((res: ObservabilityGetInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## observabilityQuotaUsage

Returns current namespace quota limits

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityQuotaUsageResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.system.observabilityQuotaUsage({
  "libero": "illum",
  "soluta": "accusantium",
}).then((res: ObservabilityQuotaUsageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## queryQuotaLimits

Returns current namespace quota limits

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityQuotaLimitsResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCodeEnum } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.system.queryQuotaLimits({
  "sapiente": "dicta",
  "ullam": "reprehenderit",
}).then((res: ObservabilityQuotaLimitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## queryTimeSeriesMetrics

Queries time series metrics

### Example Usage

```typescript
import { SDK } from "tigris-core";
import { ObservabilityQueryTimeSeriesMetricsResponse } from "tigris-core/dist/sdk/models/operations";
import {
  ErrorCodeEnum,
  QueryTimeSeriesMetricsRequestFunctionEnum,
  QueryTimeSeriesMetricsRequestSpaceAggregationEnum,
  QueryTimeSeriesMetricsRequestTigrisOperationEnum,
  RollupFunctionAggregatorEnum,
} from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.system.queryTimeSeriesMetrics({
  additionalFunctions: [
    {
      rollup: {
        aggregator: RollupFunctionAggregatorEnum.RollupAggregatorCount,
        interval: 16328,
      },
    },
    {
      rollup: {
        aggregator: RollupFunctionAggregatorEnum.RollupAggregatorMin,
        interval: 185232,
      },
    },
  ],
  branch: "quibusdam",
  collection: "ex",
  db: "deleniti",
  from: 929292,
  function: QueryTimeSeriesMetricsRequestFunctionEnum.None,
  metricName: "architecto",
  quantile: 6091.78,
  spaceAggregatedBy: [
    "quasi",
    "at",
    "et",
    "voluptate",
  ],
  spaceAggregation: QueryTimeSeriesMetricsRequestSpaceAggregationEnum.Avg,
  tigrisOperation: QueryTimeSeriesMetricsRequestTigrisOperationEnum.Read,
  to: 86532,
}).then((res: ObservabilityQueryTimeSeriesMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
