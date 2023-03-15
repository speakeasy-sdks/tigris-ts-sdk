import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisListCollectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisListCollectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=branch",
  })
  branch?: string;
}

export class TigrisListCollectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisListCollectionsPathParams;

  @SpeakeasyMetadata()
  queryParams: TigrisListCollectionsQueryParams;
}

export class TigrisListCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCollectionsResponse?: shared.ListCollectionsResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
