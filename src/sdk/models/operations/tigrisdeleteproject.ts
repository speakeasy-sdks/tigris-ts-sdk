/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class TigrisDeleteProjectRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    deleteProjectRequest: shared.DeleteProjectRequest;

    /**
     * Delete Project with this name. <p></p>**Note**: Deletes all resources under this project. Use with caution.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
    project: string;
}

export class TigrisDeleteProjectResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    deleteProjectResponse?: shared.DeleteProjectResponse;

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
