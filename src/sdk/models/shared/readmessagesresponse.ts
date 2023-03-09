import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Message } from "./message";
import { Expose, Type } from "class-transformer";


export class ReadMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  @Type(() => Message)
  message?: Message;
}