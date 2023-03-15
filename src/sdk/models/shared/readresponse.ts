import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResponseMetadata } from "./responsemetadata";
import { Expose, Type } from "class-transformer";

export class ReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ResponseMetadata)
  metadata?: ResponseMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "resume_token" })
  resumeToken?: string;
}
