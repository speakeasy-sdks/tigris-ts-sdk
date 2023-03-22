/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class SearchCreatePathParams extends SpeakeasyBase {
  /**
   * index name where to create documents.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=index",
  })
  index: string;

  /**
   * Tigris project name.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class SearchCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateDocumentRequest;
}

export class SearchCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  createDocumentResponse?: shared.CreateDocumentResponse;

  /**
   * Default error response
   */
  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
