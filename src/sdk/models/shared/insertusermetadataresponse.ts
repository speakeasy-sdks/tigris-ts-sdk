import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// InsertUserMetadataResponse
/**
 * Insertion of user metadata response
 **/
export class InsertUserMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "namespaceId" })
  namespaceId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "userId" })
  userId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: Record<string, any>;
}
