import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// InsertUserMetadataRequest
/** 
 * Request insertion of user metadata
**/
export class InsertUserMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: Record<string, any>;
}