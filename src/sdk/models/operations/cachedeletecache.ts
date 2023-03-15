import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class CacheDeleteCachePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=name",
  })
  name: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class CacheDeleteCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CacheDeleteCachePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}

export class CacheDeleteCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCacheResponse?: shared.DeleteCacheResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
