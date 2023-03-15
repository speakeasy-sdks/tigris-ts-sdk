import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisDeleteBranchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=branch",
  })
  branch: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisDeleteBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisDeleteBranchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}

export class TigrisDeleteBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteBranchResponse?: shared.DeleteBranchResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
