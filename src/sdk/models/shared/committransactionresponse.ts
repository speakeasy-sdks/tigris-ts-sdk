/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK
 */
export class CommitTransactionResponse extends SpeakeasyBase {
    /**
     * Status of commit transaction operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
