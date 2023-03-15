import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// FacetStats
/**
 * Additional stats for faceted field
 **/
export class FacetStats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avg" })
  avg?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sum" })
  sum?: number;
}
