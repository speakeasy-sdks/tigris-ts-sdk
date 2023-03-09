import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FacetCount } from "./facetcount";
import { FacetStats } from "./facetstats";
import { Expose, Type } from "class-transformer";


export class SearchFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FacetCount })
  @Expose({ name: "counts" })
  @Type(() => FacetCount)
  counts?: FacetCount[];

  @SpeakeasyMetadata()
  @Expose({ name: "stats" })
  @Type(() => FacetStats)
  stats?: FacetStats;
}