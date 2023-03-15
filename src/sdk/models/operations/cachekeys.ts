import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class CacheKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=name",
  })
  name: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class CacheKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pattern",
  })
  pattern?: string;
}

export class CacheKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CacheKeysPathParams;

  @SpeakeasyMetadata()
  queryParams: CacheKeysQueryParams;
}

export class CacheKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keysResponse?: shared.KeysResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
