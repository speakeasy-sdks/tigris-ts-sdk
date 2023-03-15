import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CacheMetadata } from "./cachemetadata";
import { Expose, Type } from "class-transformer";

export class ListCachesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheMetadata })
  @Expose({ name: "caches" })
  @Type(() => CacheMetadata)
  caches?: CacheMetadata[];
}
