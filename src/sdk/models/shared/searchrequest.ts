import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Collation } from "./collation";
import { Expose, Type } from "class-transformer";

export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "collation" })
  @Type(() => Collation)
  collation?: Collation;

  @SpeakeasyMetadata()
  @Expose({ name: "exclude_fields" })
  excludeFields?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "facet" })
  facet?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "fields" })
  fields?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "filter" })
  filter?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "include_fields" })
  includeFields?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "page_size" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "q" })
  q?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "search_fields" })
  searchFields?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sort" })
  sort?: Record<string, any>;
}
