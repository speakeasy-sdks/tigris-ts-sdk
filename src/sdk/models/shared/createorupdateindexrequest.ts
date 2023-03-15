import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateOrUpdateIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "only_create" })
  onlyCreate?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "schema" })
  schema?: string;
}
