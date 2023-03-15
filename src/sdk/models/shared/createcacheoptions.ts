import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateCacheOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ttl_ms" })
  ttlMs?: number;
}
