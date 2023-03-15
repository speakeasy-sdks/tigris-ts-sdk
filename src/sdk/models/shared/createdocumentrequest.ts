import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}
