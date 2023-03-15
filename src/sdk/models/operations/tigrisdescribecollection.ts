import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisDescribeCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=collection",
  })
  collection: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisDescribeCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisDescribeCollectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCollectionRequest;
}

export class TigrisDescribeCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeCollectionResponse?: shared.DescribeCollectionResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
