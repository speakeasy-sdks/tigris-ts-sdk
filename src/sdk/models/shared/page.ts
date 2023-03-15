import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// Page
/**
 * Pagination metadata for SearchResponse
 **/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  current?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;
}
