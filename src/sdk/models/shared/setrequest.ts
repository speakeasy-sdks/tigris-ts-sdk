import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ex" })
  ex?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "nx" })
  nx?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "px" })
  px?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "xx" })
  xx?: boolean;
}
