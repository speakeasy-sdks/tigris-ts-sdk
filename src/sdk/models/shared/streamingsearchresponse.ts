/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { SearchResponse } from "./searchresponse";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class StreamingSearchResponse extends SpeakeasyBase {
  /**
   * The Error type defines a logical error model
   */
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => ErrorT)
  error?: ErrorT;

  /**
   * Response struct for search
   */
  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  @Type(() => SearchResponse)
  result?: SearchResponse;
}
