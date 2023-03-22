/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class RealtimePresencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=channel",
  })
  channel: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class RealtimePresenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RealtimePresencePathParams;
}

export class RealtimePresenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  presenceResponse?: shared.PresenceResponse;

  /**
   * Default error response
   */
  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
