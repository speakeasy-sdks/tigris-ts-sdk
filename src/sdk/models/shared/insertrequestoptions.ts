import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// InsertRequestOptions
/** 
 * additional options for insert requests.
**/
export class InsertRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "write_options" })
  writeOptions?: Record<string, any>;
}