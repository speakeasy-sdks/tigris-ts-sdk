import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppKey } from "./appkey";
import { Expose, Type } from "class-transformer";


// RotateAppKeyResponse
/** 
 * RotateAppKeyResponse returns the new app key with rotated secret
**/
export class RotateAppKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "app_key" })
  @Type(() => AppKey)
  appKey?: AppKey;
}