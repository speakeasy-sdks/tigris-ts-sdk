import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NamespaceInfo } from "./namespaceinfo";
import { Expose, Type } from "class-transformer";


export class CreateNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "namespace" })
  @Type(() => NamespaceInfo)
  namespace?: NamespaceInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}