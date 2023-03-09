import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DeleteRequestOptions } from "./deleterequestoptions";
import { Expose, Type } from "class-transformer";


export class DeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filter" })
  filter?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => DeleteRequestOptions)
  options?: DeleteRequestOptions;
}