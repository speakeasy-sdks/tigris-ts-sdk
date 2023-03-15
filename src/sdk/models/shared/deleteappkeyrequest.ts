import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// DeleteAppKeyRequest
/**
 * Request deletion of an app key
 **/
export class DeleteAppKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
