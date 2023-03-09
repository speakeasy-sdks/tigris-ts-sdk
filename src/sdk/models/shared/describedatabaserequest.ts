import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DescribeDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "schema_format" })
  schemaFormat?: string;
}