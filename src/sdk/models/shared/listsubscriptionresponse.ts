import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ListSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "devices" })
  devices?: string[];
}
