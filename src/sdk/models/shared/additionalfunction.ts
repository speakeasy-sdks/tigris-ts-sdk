import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RollupFunction } from "./rollupfunction";
import { Expose, Type } from "class-transformer";

// AdditionalFunction
/**
 * Additional function to apply on metrics query
 **/
export class AdditionalFunction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "rollup" })
  @Type(() => RollupFunction)
  rollup?: RollupFunction;
}
