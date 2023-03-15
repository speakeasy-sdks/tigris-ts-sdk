import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// RotateAppKeyRequest
/**
 * Request rotation of an app key secret
 **/
export class RotateAppKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}
