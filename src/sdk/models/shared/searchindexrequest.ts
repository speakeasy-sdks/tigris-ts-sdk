import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Collation } from "./collation";
import { Expose, Type } from "class-transformer";

export class SearchIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "collation" })
  @Type(() => Collation)
  collation?: Collation;

  @SpeakeasyMetadata()
  @Expose({ name: "exclude_fields" })
  excludeFields?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "facet" })
  facet?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filter" })
  filter?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "include_fields" })
  includeFields?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "page_size" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "q" })
  q?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "search_fields" })
  searchFields?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sort" })
  sort?: string;
}
