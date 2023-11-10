/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollectionMetadata } from "./collectionmetadata";
import { Expose, Type } from "class-transformer";

/**
 * Collections schema
 */
export class Schema extends SpeakeasyBase {}

export class CollectionDescription extends SpeakeasyBase {
    /**
     * Name of the collection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "collection" })
    collection?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => CollectionMetadata)
    metadata?: CollectionMetadata;

    /**
     * Collections schema
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schema" })
    @Type(() => Schema)
    schema?: Schema;

    /**
     * Collection size in bytes
     */
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
