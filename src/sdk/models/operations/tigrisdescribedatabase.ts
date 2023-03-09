import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class TigrisDescribeDatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}

export class TigrisDescribeDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisDescribeDatabasePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDatabaseRequest;
}

export class TigrisDescribeDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeDatabaseResponse?: shared.DescribeDatabaseResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}