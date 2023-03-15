import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { ReadResponse } from "./readresponse";
import { Expose, Type } from "class-transformer";

export class StreamingReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => ErrorT)
  error?: ErrorT;

  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  @Type(() => ReadResponse)
  result?: ReadResponse;
}
