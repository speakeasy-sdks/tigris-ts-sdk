import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// CommitTransactionRequest
/**
 * Commit transaction with the given ID
 **/
export class CommitTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;
}
