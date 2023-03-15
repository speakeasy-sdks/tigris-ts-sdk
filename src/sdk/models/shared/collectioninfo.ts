import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CollectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "collection" })
  collection?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;
}
