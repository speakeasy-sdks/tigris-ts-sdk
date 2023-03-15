import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProjectInfo } from "./projectinfo";
import { Expose, Type } from "class-transformer";

export class ListProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProjectInfo })
  @Expose({ name: "projects" })
  @Type(() => ProjectInfo)
  projects?: ProjectInfo[];
}
