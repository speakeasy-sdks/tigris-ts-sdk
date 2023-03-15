import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DeleteByQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "filter" })
  filter?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}
