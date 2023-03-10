import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ManagementGetNamespaceMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metadataKey" })
  metadataKey: string;
}

export class ManagementGetNamespaceMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ManagementGetNamespaceMetadataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetNamespaceMetadataRequest;
}

export class ManagementGetNamespaceMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getNamespaceMetadataResponse?: shared.GetNamespaceMetadataResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}