import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { SearchResponse } from "./searchresponse";
import { Expose, Type } from "class-transformer";


export class StreamingSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => ErrorT)
  error?: ErrorT;

  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  @Type(() => SearchResponse)
  result?: SearchResponse;
}