import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocStatus } from "./docstatus";
import { Expose, Type } from "class-transformer";

export class UpdateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DocStatus })
  @Expose({ name: "status" })
  @Type(() => DocStatus)
  status?: DocStatus[];
}
