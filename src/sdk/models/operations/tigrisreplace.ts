/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class TigrisReplacePathParams extends SpeakeasyBase {
  /**
   * Collection name where to replace documents.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=collection",
  })
  collection: string;

  /**
   * Project name whose db is under target to replace documents.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisReplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisReplacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReplaceRequest;
}

export class TigrisReplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  replaceResponse?: shared.ReplaceResponse;

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
