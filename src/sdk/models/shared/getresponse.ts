import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "expires_in_ms" })
  expiresInMs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}