import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SearchFacet } from "./searchfacet";
import { SearchHit } from "./searchhit";
import { SearchMetadata } from "./searchmetadata";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


// SearchResponse
/** 
 * Response struct for search
**/
export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SearchFacet })
  @Expose({ name: "facets" })
  @Transform(({ value }) => {
    const obj: Record<string, SearchFacet> = {};
    for (const key in value) {
      obj[key] = plainToInstance(SearchFacet,
        value[key] as SearchFacet,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  facets?: Record<string, SearchFacet>;

  @SpeakeasyMetadata({ elemType: SearchHit })
  @Expose({ name: "hits" })
  @Type(() => SearchHit)
  hits?: SearchHit[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => SearchMetadata)
  meta?: SearchMetadata;
}