import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RollbackTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
