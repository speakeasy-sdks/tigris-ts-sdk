import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DescribeCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "collection" })
  collection?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  options?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "schema_format" })
  schemaFormat?: string;
}