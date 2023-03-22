/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProjectInfo } from "./projectinfo";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class ListProjectsResponse extends SpeakeasyBase {
  /**
   * List of the projects.
   */
  @SpeakeasyMetadata({ elemType: ProjectInfo })
  @Expose({ name: "projects" })
  @Type(() => ProjectInfo)
  projects?: ProjectInfo[];
}
