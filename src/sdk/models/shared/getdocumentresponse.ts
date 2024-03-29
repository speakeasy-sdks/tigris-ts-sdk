/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IndexDoc } from "./indexdoc";
import { Expose, Type } from "class-transformer";

export class GetDocumentResponse extends SpeakeasyBase {
    /**
     * An array of documents.
     */
    @SpeakeasyMetadata({ elemType: IndexDoc })
    @Expose({ name: "documents" })
    @Type(() => IndexDoc)
    documents?: IndexDoc[];
}
