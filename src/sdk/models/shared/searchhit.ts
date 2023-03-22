/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SearchHitMeta } from "./searchhitmeta";
import { Expose, Type } from "class-transformer";

export class SearchHit extends SpeakeasyBase {
  /**
   * Actual search document
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  /**
   * Contains metadata related to the search hit, has information about document created_at/updated_at as well.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => SearchHitMeta)
  metadata?: SearchHitMeta;
}
