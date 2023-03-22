/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class TigrisCreateBranchPathParams extends SpeakeasyBase {
  /**
   * Name of the database branch to be created. <p></p>**Note**: `main` is a reserved branch name for primary database and is automatically created with CreateProject
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=branch",
  })
  branch: string;

  /**
   * Create a database branch in this project
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class TigrisCreateBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TigrisCreateBranchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}

export class TigrisCreateBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  createBranchResponse?: shared.CreateBranchResponse;

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
