/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SearchCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createDocumentRequest: shared.CreateDocumentRequest;

    /**
     * index name where to create documents.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
    index: string;

    /**
     * Tigris project name.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
    project: string;
}

export class SearchCreateResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    createDocumentResponse?: shared.CreateDocumentResponse;

    /**
     * Default error response
     */
    @SpeakeasyMetadata()
    status?: shared.Status;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
