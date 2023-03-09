import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ManagementGetUserMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metadataKey" })
  metadataKey: string;
}

export class ManagementGetUserMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ManagementGetUserMetadataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetUserMetadataRequest;
}

export class ManagementGetUserMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserMetadataResponse?: shared.GetUserMetadataResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}