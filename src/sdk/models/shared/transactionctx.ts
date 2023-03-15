import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// TransactionCtx
/**
 * Contains ID which uniquely identifies transaction This context is returned by BeginTransaction request and should be passed in the metadata (headers) of subsequent requests in order to run them in the context of the same transaction.
 **/
export class TransactionCtx extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "origin" })
  origin?: string;
}
