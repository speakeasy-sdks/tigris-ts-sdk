/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AdditionalFunction } from "./additionalfunction";
import { Expose, Type } from "class-transformer";

export enum FunctionT {
    Rate = "RATE",
    Count = "COUNT",
    None = "NONE",
}

export enum SpaceAggregation {
    Avg = "AVG",
    Min = "MIN",
    Max = "MAX",
    Sum = "SUM",
}

export enum TigrisOperation {
    All = "ALL",
    Read = "READ",
    Write = "WRITE",
    Metadata = "METADATA",
}

/**
 * Requests the time series metrics
 */
export class QueryTimeSeriesMetricsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: AdditionalFunction })
    @Expose({ name: "additionalFunctions" })
    @Type(() => AdditionalFunction)
    additionalFunctions?: AdditionalFunction[];

    @SpeakeasyMetadata()
    @Expose({ name: "branch" })
    branch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collection" })
    collection?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "db" })
    db?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    from?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "function" })
    function?: FunctionT;

    @SpeakeasyMetadata()
    @Expose({ name: "metric_name" })
    metricName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "quantile" })
    quantile?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "space_aggregated_by" })
    spaceAggregatedBy?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "space_aggregation" })
    spaceAggregation?: SpaceAggregation;

    @SpeakeasyMetadata()
    @Expose({ name: "tigris_operation" })
    tigrisOperation?: TigrisOperation;

    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    to?: number;
}
