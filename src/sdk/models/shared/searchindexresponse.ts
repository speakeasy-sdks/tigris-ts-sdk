import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IndexDoc } from "./indexdoc";
import { SearchFacet } from "./searchfacet";
import { SearchMetadata } from "./searchmetadata";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


// SearchIndexResponse
/** 
 * Response struct for search
**/
export class SearchIndexResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: IndexDoc })
  @Expose({ name: "hits" })
  @Type(() => IndexDoc)
  hits?: IndexDoc[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => SearchMetadata)
  meta?: SearchMetadata;
}