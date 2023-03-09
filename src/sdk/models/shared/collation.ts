import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// Collation
/** 
 * A collation allows you to specify string comparison rules. Default is case-sensitive, to override it you can set this option to 'ci' that will apply to all the text fields in the filters.
**/
export class Collation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "case" })
  case?: string;
}