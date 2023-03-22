/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisBeginTransactionPathParams extends SpeakeasyBase {
  /**
   * Project name whose DB this transaction belongs to.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisBeginTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisBeginTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BeginTransactionRequest;
}

export class TigrisBeginTransactionResponse extends SpeakeasyBase {
  /**
   * OK
   */
  @SpeakeasyMetadata()
  beginTransactionResponse?: shared.BeginTransactionResponse;

  @SpeakeasyMetadata()
  contentType: string;

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
