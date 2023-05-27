/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TransactionCtx } from "./transactionctx";
import { Expose, Type } from "class-transformer";

/**
 * Start transaction returns transaction context  which uniquely identifies the transaction
 */
export class BeginTransactionResponse extends SpeakeasyBase {
    /**
     * Contains ID which uniquely identifies transaction This context is returned by BeginTransaction request and should be passed in the metadata (headers) of subsequent requests in order to run them in the context of the same transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tx_ctx" })
    @Type(() => TransactionCtx)
    txCtx?: TransactionCtx;
}
