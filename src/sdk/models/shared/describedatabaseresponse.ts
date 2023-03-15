import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollectionDescription } from "./collectiondescription";
import { Expose, Type } from "class-transformer";

// DescribeDatabaseResponse
/**
 * A detailed description of the database and all the associated collections. Description of the collection includes schema details as well.
 **/
export class DescribeDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branches" })
  branches?: string[];

  @SpeakeasyMetadata({ elemType: CollectionDescription })
  @Expose({ name: "collections" })
  @Type(() => CollectionDescription)
  collections?: CollectionDescription[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;
}
