import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResponseMetadata } from "./responsemetadata";
import { Expose, Type } from "class-transformer";

export class UpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ResponseMetadata)
  metadata?: ResponseMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modified_count" })
  modifiedCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
