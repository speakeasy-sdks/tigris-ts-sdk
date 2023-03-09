import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IndexInfo } from "./indexinfo";
import { Expose, Type } from "class-transformer";


export class GetIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  @Type(() => IndexInfo)
  index?: IndexInfo;
}