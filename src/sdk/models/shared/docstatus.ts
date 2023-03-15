import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Expose, Type } from "class-transformer";

export class DocStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => ErrorT)
  error?: ErrorT;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
