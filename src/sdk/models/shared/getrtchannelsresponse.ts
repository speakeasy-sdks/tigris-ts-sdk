import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChannelMetadata } from "./channelmetadata";
import { Expose, Type } from "class-transformer";


export class GetRTChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ChannelMetadata })
  @Expose({ name: "channels" })
  @Type(() => ChannelMetadata)
  channels?: ChannelMetadata[];
}