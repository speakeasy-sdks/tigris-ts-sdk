/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollectionMetadata } from "./collectionmetadata";
import { Expose, Type } from "class-transformer";

/**
 * Schema of this collection.
 */
export class DescribeCollectionResponseSchema extends SpeakeasyBase {}

/**
 * A detailed description of the collection. The description returns collection metadata and the schema.
 */
export class DescribeCollectionResponse extends SpeakeasyBase {
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
     * Schema of this collection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schema" })
    @Type(() => DescribeCollectionResponseSchema)
    schema?: DescribeCollectionResponseSchema;

    /**
     * The size of this collection in bytes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;
}
