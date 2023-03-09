import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// QuotaLimitsResponse
/** 
 * Contains current quota limits
**/
export class QuotaLimitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ReadUnits" })
  readUnits?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "StorageSize" })
  storageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "WriteUnits" })
  writeUnits?: number;
}