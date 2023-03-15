import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// BeginTransactionRequest
/**
 * Start new transaction in project specified by "project".
 **/
export class BeginTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  options?: Record<string, any>;
}
