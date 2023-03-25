/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CacheKeysPathParams extends SpeakeasyBase {
  /**
   * cache name
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=name",
  })
  name: string;

  /**
   * Tigris project name
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class CacheKeysQueryParams extends SpeakeasyBase {
  /**
   * optional - count of keys to return a stream response line.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  /**
   * optional - cursor - skip this argument if no cursor is associated
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: number;

  /**
   * optional key pattern
   */
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

  /**
   * OK
   */
  @SpeakeasyMetadata()
  keysResponse?: shared.KeysResponse;

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
