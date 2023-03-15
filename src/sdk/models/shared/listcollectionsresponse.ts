import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollectionInfo } from "./collectioninfo";
import { Expose, Type } from "class-transformer";

export class ListCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CollectionInfo })
  @Expose({ name: "collections" })
  @Type(() => CollectionInfo)
  collections?: CollectionInfo[];
}
