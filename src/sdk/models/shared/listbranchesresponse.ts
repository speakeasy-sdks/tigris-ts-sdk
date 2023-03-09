import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BranchInfo } from "./branchinfo";
import { Expose, Type } from "class-transformer";


export class ListBranchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BranchInfo })
  @Expose({ name: "branches" })
  @Type(() => BranchInfo)
  branches?: BranchInfo[];
}