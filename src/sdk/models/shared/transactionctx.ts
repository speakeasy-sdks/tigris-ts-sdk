/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Contains ID which uniquely identifies transaction This context is returned by BeginTransaction request and should be passed in the metadata (headers) of subsequent requests in order to run them in the context of the same transaction.
 */
export class TransactionCtx extends SpeakeasyBase {
    /**
     * Unique for a single transactional request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Serves as an internal identifier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "origin" })
    origin?: string;
}
