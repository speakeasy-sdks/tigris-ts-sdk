import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class SearchGetIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=name",
  })
  name: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class SearchGetIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchGetIndexPathParams;
}

export class SearchGetIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getIndexResponse?: shared.GetIndexResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
