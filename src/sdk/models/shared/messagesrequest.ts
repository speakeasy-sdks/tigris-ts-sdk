import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Message } from "./message";
import { Expose, Type } from "class-transformer";


export class MessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: string;

  @SpeakeasyMetadata({ elemType: Message })
  @Expose({ name: "messages" })
  @Type(() => Message)
  messages?: Message[];

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}