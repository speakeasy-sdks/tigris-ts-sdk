import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MetricSeries } from "./metricseries";
import { Expose, Type } from "class-transformer";


// QueryTimeSeriesMetricsResponse
/** 
 * QueryTimeSeriesMetric responds with this type.
**/
export class QueryTimeSeriesMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query?: string;

  @SpeakeasyMetadata({ elemType: MetricSeries })
  @Expose({ name: "series" })
  @Type(() => MetricSeries)
  series?: MetricSeries[];

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: number;
}