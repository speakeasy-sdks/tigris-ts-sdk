import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// AppKey
/** 
 * An user AppKey
**/
export class AppKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  createdAt?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  updatedAt?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_by" })
  updatedBy?: string;
}