/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * To update the description of the app key
 */
export class UpdateAppKeyRequest extends SpeakeasyBase {
  /**
   * A new human readable app description
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * app key id - this is not allowed to update
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * A new human readable app name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
