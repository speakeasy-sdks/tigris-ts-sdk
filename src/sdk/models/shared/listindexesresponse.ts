import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IndexInfo } from "./indexinfo";
import { Expose, Type } from "class-transformer";

export class ListIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IndexInfo })
  @Expose({ name: "indexes" })
  @Type(() => IndexInfo)
  indexes?: IndexInfo[];
}
