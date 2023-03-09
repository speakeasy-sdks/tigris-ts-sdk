import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Collation } from "./collation";
import { Expose, Type } from "class-transformer";


// DeleteRequestOptions
/** 
 * Additional options for deleted requests.
**/
export class DeleteRequestOptions extends SpeakeasyBase {
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