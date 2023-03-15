import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CommitTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
