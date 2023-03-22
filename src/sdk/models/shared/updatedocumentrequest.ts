/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UpdateDocumentRequest extends SpeakeasyBase {
  /**
   * An array of documents. Each document should have "id" present which will be used by Tigris for updating the document.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents?: string[];

  /**
   * Index name where to create documents.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: string;

  /**
   * Project name whose db is under target to insert documents.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;
}
