/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PresenceResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "response" })
    response?: string;
}
