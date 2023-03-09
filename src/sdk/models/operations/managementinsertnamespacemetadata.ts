import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ManagementInsertNamespaceMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metadataKey" })
  metadataKey: string;
}

export class ManagementInsertNamespaceMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ManagementInsertNamespaceMetadataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.InsertNamespaceMetadataRequest;
}

export class ManagementInsertNamespaceMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insertNamespaceMetadataResponse?: shared.InsertNamespaceMetadataResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}