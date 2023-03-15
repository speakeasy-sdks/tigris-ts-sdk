import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class SearchCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=index",
  })
  index: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class SearchCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateDocumentRequest;
}

export class SearchCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDocumentResponse?: shared.CreateDocumentResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
