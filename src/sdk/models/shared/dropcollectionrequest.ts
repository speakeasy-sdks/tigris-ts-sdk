/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DropCollectionRequest extends SpeakeasyBase {
  /**
   * Optionally specify a project branch name to perform operation on
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  /**
   * Collection requests modifying options.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  options?: Record<string, any>;
}
