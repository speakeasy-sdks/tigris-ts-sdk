/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppKey } from "./appkey";
import { Expose, Type } from "class-transformer";

/**
 * Returns response for updating the app key description
 */
export class UpdateAppKeyResponse extends SpeakeasyBase {
    /**
     * An user AppKey
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_app_key" })
    @Type(() => AppKey)
    updatedAppKey?: AppKey;
}
