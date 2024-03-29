/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An user AppKey
 */
export class AppKey extends SpeakeasyBase {
    /**
     * Created at
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: number;

    /**
     * Created by
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_by" })
    createdBy?: string;

    /**
     * A human readable app description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Generated client id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * A human readable app name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Project it belongs to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    project?: string;

    /**
     * Generated app secret
     */
    @SpeakeasyMetadata()
    @Expose({ name: "secret" })
    secret?: string;

    /**
     * Updated at
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: number;

    /**
     * Updated by
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_by" })
    updatedBy?: string;
}
