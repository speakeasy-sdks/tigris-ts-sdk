import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisCommitTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisCommitTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisCommitTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CommitTransactionRequest;
}

export class TigrisCommitTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commitTransactionResponse?: shared.CommitTransactionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
