/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class MessagesResponse extends SpeakeasyBase {
    /**
     * ids of the published messages
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ids" })
    ids?: string[];
}
