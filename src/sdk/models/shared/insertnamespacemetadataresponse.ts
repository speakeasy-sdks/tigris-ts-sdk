import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// InsertNamespaceMetadataResponse
/**
 * Insertion of namespace metadata response
 **/
export class InsertNamespaceMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "namespaceId" })
  namespaceId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: Record<string, any>;
}
