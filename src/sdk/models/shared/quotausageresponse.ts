import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// QuotaUsageResponse
/** 
 * Contains current quota usage
**/
export class QuotaUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ReadUnits" })
  readUnits?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ReadUnitsThrottled" })
  readUnitsThrottled?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "StorageSize" })
  storageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "StorageSizeThrottled" })
  storageSizeThrottled?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "WriteUnits" })
  writeUnits?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "WriteUnitsThrottled" })
  writeUnitsThrottled?: number;
}