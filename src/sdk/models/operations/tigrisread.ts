import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=collection",
  })
  collection: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisReadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReadRequest;
}

export class TigrisReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  streamingReadResponse?: shared.StreamingReadResponse;
}
