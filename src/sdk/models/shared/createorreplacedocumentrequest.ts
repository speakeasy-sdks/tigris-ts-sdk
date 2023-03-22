/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateOrReplaceDocumentRequest extends SpeakeasyBase {
  /**
   * An array of documents to create. Each document is a JSON object. In case an id is missing then the server will automatically generate it for you and create the document and in case an id is provided in the document and the document already exists then that document will not index and in the response there will be an error corresponding to that document id other documents will succeed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents?: string[];

  /**
   * index name where to create documents.
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
