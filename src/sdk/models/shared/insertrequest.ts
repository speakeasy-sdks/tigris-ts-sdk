import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InsertRequestOptions } from "./insertrequestoptions";
import { Expose, Type } from "class-transformer";


export class InsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => InsertRequestOptions)
  options?: InsertRequestOptions;
}