import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

// ResponseMetadata
/**
 * Has metadata related to the documents stored.
 **/
export class ResponseMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  deletedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}
