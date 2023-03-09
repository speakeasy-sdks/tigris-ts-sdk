import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// ReplaceRequestOptions
/** 
 * Additional options for replace requests.
**/
export class ReplaceRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "write_options" })
  writeOptions?: Record<string, any>;
}