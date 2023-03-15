import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class GetSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
