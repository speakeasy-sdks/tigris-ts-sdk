import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppKey } from "./appkey";
import { Expose, Type } from "class-transformer";


// ListAppKeysResponse
/** 
 * ListAppKeysResponse returns one or more visible app keys to user
**/
export class ListAppKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AppKey })
  @Expose({ name: "app_keys" })
  @Type(() => AppKey)
  appKeys?: AppKey[];
}