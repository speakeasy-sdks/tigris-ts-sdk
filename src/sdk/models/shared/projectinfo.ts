import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ProjectInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}
