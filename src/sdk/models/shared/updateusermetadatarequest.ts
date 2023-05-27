/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Request update of user metadata
 */
export class UpdateUserMetadataRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "metadataKey" })
    metadataKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: Record<string, any>;
}
