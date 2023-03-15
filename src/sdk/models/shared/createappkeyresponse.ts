import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppKey } from "./appkey";
import { Expose, Type } from "class-transformer";

// CreateAppKeyResponse
/**
 * CreateAppKeyResponse returns created app keys
 **/
export class CreateAppKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_app_key" })
  @Type(() => AppKey)
  createdAppKey?: AppKey;
}
