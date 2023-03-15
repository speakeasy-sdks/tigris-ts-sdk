import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class SearchCreateOrReplacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=index",
  })
  index: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class SearchCreateOrReplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchCreateOrReplacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateOrReplaceDocumentRequest;
}

export class SearchCreateOrReplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createOrReplaceDocumentResponse?: shared.CreateOrReplaceDocumentResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
