import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// DataPoint
/**
 * Represents the data point in timeseries.
 **/
export class DataPoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}
