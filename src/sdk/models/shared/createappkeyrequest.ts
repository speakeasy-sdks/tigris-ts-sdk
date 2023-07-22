/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Request creation of user app key
 */
export class CreateAppKeyRequest extends SpeakeasyBase {
    /**
     * A human readable app description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * A human readable app name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
