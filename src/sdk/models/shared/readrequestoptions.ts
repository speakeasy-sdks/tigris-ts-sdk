import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Collation } from "./collation";
import { Expose, Type } from "class-transformer";


// ReadRequestOptions
/** 
 * Options that can be used to modify the results, for example "limit" to control the number of documents returned by the server.
**/
export class ReadRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "collation" })
  @Type(() => Collation)
  collation?: Collation;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "skip" })
  skip?: number;
}