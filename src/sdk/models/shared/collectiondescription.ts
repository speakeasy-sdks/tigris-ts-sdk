import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CollectionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "collection" })
  collection?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "schema" })
  schema?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;
}