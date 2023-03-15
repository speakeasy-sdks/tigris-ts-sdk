import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class MessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ids" })
  ids?: string[];
}
