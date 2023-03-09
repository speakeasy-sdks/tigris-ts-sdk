import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocMeta } from "./docmeta";
import { Expose, Type } from "class-transformer";


export class IndexDoc extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "doc" })
  doc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => DocMeta)
  metadata?: DocMeta;
}