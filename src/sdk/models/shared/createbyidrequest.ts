import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  document?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}