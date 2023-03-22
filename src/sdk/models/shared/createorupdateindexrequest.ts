/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateOrUpdateIndexRequest extends SpeakeasyBase {
  /**
   * search index name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * If set to `true` then a conflict with HTTP Status code 409 is returned if an index already exists. The default is false.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "only_create" })
  onlyCreate?: boolean;

  /**
   * Tigris project name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;

  /**
   * schema of the index. The schema specifications are same as JSON schema specification defined <a href="https://json-schema.org/specification.html" title="here">here</a>.<p></p> Schema example: `{  "title": "ecommerce_index",  "description": "an ecommerce store search index",  "properties": {    "name": {      "description": "Name of the product",      "type": "string",      "maxLength": 128    },    "brand": {      "description": "Brand of the product",      "type": "string"    },    "price": {      "description": "Price of the product",      "type": "number"    }  } }`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "schema" })
  schema?: string;
}
