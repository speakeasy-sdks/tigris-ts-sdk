import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class TigrisRollbackTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}

export class TigrisRollbackTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisRollbackTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RollbackTransactionRequest;
}

export class TigrisRollbackTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rollbackTransactionResponse?: shared.RollbackTransactionResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}