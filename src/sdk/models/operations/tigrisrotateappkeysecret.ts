import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisRotateAppKeySecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisRotateAppKeySecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisRotateAppKeySecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RotateAppKeyRequest;
}

export class TigrisRotateAppKeySecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rotateAppKeyResponse?: shared.RotateAppKeyResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
