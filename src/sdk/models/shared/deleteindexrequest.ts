/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DeleteIndexRequest extends SpeakeasyBase {
    /**
     * index name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Tigris project name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    project?: string;
}
