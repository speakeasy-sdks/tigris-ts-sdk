import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Page } from "./page";
import { Expose, Type } from "class-transformer";


export class SearchMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "found" })
  found?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  @Type(() => Page)
  page?: Page;

  @SpeakeasyMetadata()
  @Expose({ name: "total_pages" })
  totalPages?: number;
}