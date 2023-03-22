/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class NamespaceInfo extends SpeakeasyBase {
  /**
   * The unique namespace code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: number;

  /**
   * The namespace unique id.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The namespace display name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
