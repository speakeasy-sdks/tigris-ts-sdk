import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class BranchInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;
}
