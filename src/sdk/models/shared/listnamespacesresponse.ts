import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NamespaceInfo } from "./namespaceinfo";
import { Expose, Type } from "class-transformer";


export class ListNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NamespaceInfo })
  @Expose({ name: "namespaces" })
  @Type(() => NamespaceInfo)
  namespaces?: NamespaceInfo[];
}