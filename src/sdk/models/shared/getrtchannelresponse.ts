import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class GetRTChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: string;
}