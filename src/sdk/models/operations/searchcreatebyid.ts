/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class SearchCreateByIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createByIdRequest: shared.CreateByIdRequest;

    /**
     * document id.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * index name where to create document.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
    index: string;

    /**
     * Tigris project name.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
    project: string;
}

export class SearchCreateByIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    createByIdResponse?: shared.CreateByIdResponse;

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
