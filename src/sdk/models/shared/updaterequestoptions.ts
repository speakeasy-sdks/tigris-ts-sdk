/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Collation } from "./collation";
import { Expose, Type } from "class-transformer";

/**
 * Additional options for update requests.
 */
export class UpdateRequestOptions extends SpeakeasyBase {
    /**
     * A collation allows you to specify string comparison rules. Default is case-sensitive, to override it you can set this option to 'ci' that will apply to all the text fields in the filters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "collation" })
    @Type(() => Collation)
    collation?: Collation;

    /**
     * Limit the number of documents to be updated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "limit" })
    limit?: number;

    /**
     * Additional options to modify write requests.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "write_options" })
    writeOptions?: Record<string, any>;
}
