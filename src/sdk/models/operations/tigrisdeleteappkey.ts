import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class TigrisDeleteAppKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}

export class TigrisDeleteAppKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisDeleteAppKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAppKeyRequest;
}

export class TigrisDeleteAppKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteAppKeyResponse?: shared.DeleteAppKeyResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}