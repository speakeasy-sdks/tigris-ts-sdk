/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Message extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    data?: string;

    /**
     * an optional id if idempotency is needed to ensure only a single time message is published during retries. If not specified then server will automatically add an id to message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sequence" })
    sequence?: string;
}
