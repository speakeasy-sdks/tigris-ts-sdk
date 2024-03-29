/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollectionMetadata } from "./collectionmetadata";
import { Expose, Type } from "class-transformer";

export class CollectionInfo extends SpeakeasyBase {
    /**
     * Collection name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "collection" })
    collection?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => CollectionMetadata)
    metadata?: CollectionMetadata;
}
