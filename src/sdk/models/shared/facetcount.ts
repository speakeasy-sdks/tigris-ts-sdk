import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class FacetCount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}