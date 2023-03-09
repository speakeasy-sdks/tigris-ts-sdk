import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DescribeNamespacesData } from "./describenamespacesdata";
import { Expose, Type } from "class-transformer";


export class DescribeNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => DescribeNamespacesData)
  data?: DescribeNamespacesData;
}