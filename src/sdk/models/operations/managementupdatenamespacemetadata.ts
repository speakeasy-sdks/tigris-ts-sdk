import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ManagementUpdateNamespaceMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metadataKey" })
  metadataKey: string;
}

export class ManagementUpdateNamespaceMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ManagementUpdateNamespaceMetadataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateNamespaceMetadataRequest;
}

export class ManagementUpdateNamespaceMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  updateNamespaceMetadataResponse?: shared.UpdateNamespaceMetadataResponse;
}