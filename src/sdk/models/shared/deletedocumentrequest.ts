import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DeleteDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ids" })
  ids?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}
