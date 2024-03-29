/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResponseMetadata } from "./responsemetadata";
import { Expose, Type } from "class-transformer";

export class DeleteResponse extends SpeakeasyBase {
    /**
     * Has metadata related to the documents stored.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => ResponseMetadata)
    metadata?: ResponseMetadata;

    /**
     * an enum with value set as "deleted"
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
