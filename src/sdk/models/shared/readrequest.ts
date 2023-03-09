import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReadRequestOptions } from "./readrequestoptions";
import { Expose, Type } from "class-transformer";


export class ReadRequest extends SpeakeasyBase {
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
  @Type(() => ReadRequestOptions)
  options?: ReadRequestOptions;

  @SpeakeasyMetadata()
  @Expose({ name: "sort" })
  sort?: string;
}