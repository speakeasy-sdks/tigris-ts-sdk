import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class KeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  cursor?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "keys" })
  keys?: string[];
}