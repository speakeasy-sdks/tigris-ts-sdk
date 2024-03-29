/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class Value extends SpeakeasyBase {}

/**
 * Request namespace metadata
 */
export class GetNamespaceMetadataRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "metadataKey" })
    metadataKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    @Type(() => Value)
    value?: Value;
}
