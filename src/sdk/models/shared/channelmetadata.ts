import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ChannelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: string;
}
