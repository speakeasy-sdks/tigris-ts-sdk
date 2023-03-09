import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppKey } from "./appkey";
import { Expose, Type } from "class-transformer";


// UpdateAppKeyResponse
/** 
 * Returns response for updating the app key description
**/
export class UpdateAppKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "updated_app_key" })
  @Type(() => AppKey)
  updatedAppKey?: AppKey;
}