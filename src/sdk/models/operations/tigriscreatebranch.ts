/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class TigrisCreateBranchRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createBranchRequest: shared.CreateBranchRequest;

    /**
     * Name of the database branch to be created. <p></p>**Note**: `main` is a reserved branch name for primary database and is automatically created with CreateProject
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
    branch: string;

    /**
     * Create a database branch in this project
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
    project: string;
}

export class TigrisCreateBranchResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    createBranchResponse?: shared.CreateBranchResponse;

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
    rawResponse: AxiosResponse;
}
