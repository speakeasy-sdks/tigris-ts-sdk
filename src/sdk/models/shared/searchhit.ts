import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SearchHitMeta } from "./searchhitmeta";
import { Expose, Type } from "class-transformer";


export class SearchHit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => SearchHitMeta)
  metadata?: SearchHitMeta;
}