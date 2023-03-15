import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataPoint } from "./datapoint";
import { Expose, Type } from "class-transformer";

// MetricSeries
/**
 * Represents series in timeseries based on input query.
 **/
export class MetricSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DataPoint })
  @Expose({ name: "dataPoints" })
  @Type(() => DataPoint)
  dataPoints?: DataPoint[];

  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "metric" })
  metric?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: number;
}
