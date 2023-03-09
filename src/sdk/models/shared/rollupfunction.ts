import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum RollupFunctionAggregatorEnum {
    RollupAggregatorSum = "ROLLUP_AGGREGATOR_SUM",
    RollupAggregatorCount = "ROLLUP_AGGREGATOR_COUNT",
    RollupAggregatorMin = "ROLLUP_AGGREGATOR_MIN",
    RollupAggregatorMax = "ROLLUP_AGGREGATOR_MAX",
    RollupAggregatorAvg = "ROLLUP_AGGREGATOR_AVG"
}

// RollupFunction
/** 
 * Rollup function aggregates the slices of metrics returned by original query and lets you operate on the slices using aggregator and constructs the bigger slice of your choice of interval (specified in seconds).
**/
export class RollupFunction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "aggregator" })
  aggregator?: RollupFunctionAggregatorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "interval" })
  interval?: number;
}