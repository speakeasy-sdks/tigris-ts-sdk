import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class TigrisBeginTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}

export class TigrisBeginTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisBeginTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BeginTransactionRequest;
}

export class TigrisBeginTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beginTransactionResponse?: shared.BeginTransactionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}