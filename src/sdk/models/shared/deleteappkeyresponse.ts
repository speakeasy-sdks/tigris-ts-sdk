import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// DeleteAppKeyResponse
/**
 * AppKeys returns the flag to convey if app key was deleted
 **/
export class DeleteAppKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;
}
