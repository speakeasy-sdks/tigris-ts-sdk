import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class HealthCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "response" })
  response?: string;
}