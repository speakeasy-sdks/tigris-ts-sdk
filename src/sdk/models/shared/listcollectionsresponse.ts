/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollectionInfo } from "./collectioninfo";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class ListCollectionsResponse extends SpeakeasyBase {
    /**
     * List of the collections info in the database.
     */
    @SpeakeasyMetadata({ elemType: CollectionInfo })
    @Expose({ name: "collections" })
    @Type(() => CollectionInfo)
    collections?: CollectionInfo[];
}
