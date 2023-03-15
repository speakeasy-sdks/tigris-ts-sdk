import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class SearchListIndexesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class SearchListIndexesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter.branch",
  })
  filterBranch?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter.collection",
  })
  filterCollection?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter.type",
  })
  filterType?: string;
}

export class SearchListIndexesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchListIndexesPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchListIndexesQueryParams;
}

export class SearchListIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listIndexesResponse?: shared.ListIndexesResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
