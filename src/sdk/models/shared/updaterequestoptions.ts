import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Collation } from "./collation";
import { Expose, Type } from "class-transformer";


// UpdateRequestOptions
/** 
 * Additional options for update requests.
**/
export class UpdateRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "collation" })
  @Type(() => Collation)
  collation?: Collation;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "write_options" })
  writeOptions?: Record<string, any>;
}