import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class GetSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "old_value" })
  oldValue?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}