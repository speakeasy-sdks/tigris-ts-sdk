/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * User metadata response
 */
export class GetUserMetadataResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "metadataKey" })
    metadataKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "namespaceId" })
    namespaceId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}
