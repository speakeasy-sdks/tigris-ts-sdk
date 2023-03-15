import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DeleteByQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;
}
