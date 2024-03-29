/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ImportRequestOptions } from "./importrequestoptions";
import { Expose, Type } from "class-transformer";

export class Documents extends SpeakeasyBase {}

export class ImportRequest extends SpeakeasyBase {
    /**
     * The list of autogenerated fields of the collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "autogenerated" })
    autogenerated?: string[];

    /**
     * Optionally specify a database branch name to perform operation on
     */
    @SpeakeasyMetadata()
    @Expose({ name: "branch" })
    branch?: string;

    /**
     * Allow to create collection if it doesn't exists
     */
    @SpeakeasyMetadata()
    @Expose({ name: "create_collection" })
    createCollection?: boolean;

    /**
     * Array of documents to import. Each document is a JSON object.
     */
    @SpeakeasyMetadata({ elemType: Documents })
    @Expose({ name: "documents" })
    @Type(() => Documents)
    documents?: Documents[];

    /**
     * additional options for import requests.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "options" })
    @Type(() => ImportRequestOptions)
    options?: ImportRequestOptions;

    /**
     * List of fields which constitutes primary key of the collection If not specified and field with name 'id' is present, it's used as a primary key, further if inferred type is UUID, then it's set as autogenerated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "primary_key" })
    primaryKey?: string[];
}
