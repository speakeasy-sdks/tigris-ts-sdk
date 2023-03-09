import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// ImportRequestOptions
/** 
 * additional options for import requests.
**/
export class ImportRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "write_options" })
  writeOptions?: Record<string, any>;
}