import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// RollbackTransactionRequest
/** 
 * Rollback transaction with the given ID
**/
export class RollbackTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;
}