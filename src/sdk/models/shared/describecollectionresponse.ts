import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// DescribeCollectionResponse
/**
 * A detailed description of the collection. The description returns collection metadata and the schema.
 **/
export class DescribeCollectionResponse extends SpeakeasyBase {
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
