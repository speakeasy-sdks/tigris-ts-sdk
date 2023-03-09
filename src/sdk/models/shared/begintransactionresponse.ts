import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TransactionCtx } from "./transactionctx";
import { Expose, Type } from "class-transformer";


// BeginTransactionResponse
/** 
 * Start transaction returns transaction context  which uniquely identifies the transaction
**/
export class BeginTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "tx_ctx" })
  @Type(() => TransactionCtx)
  txCtx?: TransactionCtx;
}