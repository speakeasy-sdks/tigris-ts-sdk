import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResponseMetadata } from "./responsemetadata";
import { Expose, Type } from "class-transformer";

export class DeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ResponseMetadata)
  metadata?: ResponseMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
