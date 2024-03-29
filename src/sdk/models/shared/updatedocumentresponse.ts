/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocStatus } from "./docstatus";
import { Expose, Type } from "class-transformer";

export class UpdateDocumentResponse extends SpeakeasyBase {
    /**
     * An array of statuses of all the documents received in the request. Order is same as it is received in the request. Each item of this array has an “id” and “error” key. Id is set as document id and error will be null in case of success, otherwise error is set with an error code and message.
     */
    @SpeakeasyMetadata({ elemType: DocStatus })
    @Expose({ name: "status" })
    @Type(() => DocStatus)
    status?: DocStatus[];
}
