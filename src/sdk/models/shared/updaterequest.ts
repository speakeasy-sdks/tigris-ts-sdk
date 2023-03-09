import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UpdateRequestOptions } from "./updaterequestoptions";
import { Expose, Type } from "class-transformer";


export class UpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fields" })
  fields?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "filter" })
  filter?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => UpdateRequestOptions)
  options?: UpdateRequestOptions;
}