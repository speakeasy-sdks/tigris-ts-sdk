/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK
 */
export class DelResponse extends SpeakeasyBase {
  /**
   * A detailed response message.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  /**
   * An enum with value set as "deleted" or "not_found"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
