import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// CreateAppKeyRequest
/**
 * Request creation of user app key
 **/
export class CreateAppKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
