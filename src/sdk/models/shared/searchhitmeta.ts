/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Contains metadata related to the search hit, has information about document created_at/updated_at as well.
 */
export class SearchHitMeta extends SpeakeasyBase {
    /**
     * Time at which the document was inserted/replaced. Measured in nano-seconds since the Unix epoch.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Time at which the document was updated. Measured in nano-seconds since the Unix epoch.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
