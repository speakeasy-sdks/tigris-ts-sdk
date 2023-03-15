import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateOrUpdateCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "only_create" })
  onlyCreate?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  options?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "schema" })
  schema?: Record<string, any>;
}
