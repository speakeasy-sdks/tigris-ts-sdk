import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateCacheOptions } from "./createcacheoptions";
import { Expose, Type } from "class-transformer";


export class CreateCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => CreateCacheOptions)
  options?: CreateCacheOptions;
}