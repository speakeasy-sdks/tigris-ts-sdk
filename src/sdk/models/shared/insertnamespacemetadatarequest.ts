import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// InsertNamespaceMetadataRequest
/** 
 * Request insertion of namespace metadata
**/
export class InsertNamespaceMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: Record<string, any>;
}