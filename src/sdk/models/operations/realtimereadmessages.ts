/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class RealtimeReadMessagesRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel" })
    channel: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
    end?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" })
    event?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
    project: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=session_id" })
    sessionId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=socket_id" })
    socketId?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
    start?: string;
}

export class RealtimeReadMessagesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    readMessagesResponse?: shared.ReadMessagesResponse;

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
