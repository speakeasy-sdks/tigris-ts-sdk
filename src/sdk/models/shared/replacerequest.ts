import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReplaceRequestOptions } from "./replacerequestoptions";
import { Expose, Type } from "class-transformer";


export class ReplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => ReplaceRequestOptions)
  options?: ReplaceRequestOptions;
}