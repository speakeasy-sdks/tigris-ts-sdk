/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DescribeNamespacesData } from "./describenamespacesdata";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class DescribeNamespacesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => DescribeNamespacesData)
    data?: DescribeNamespacesData;
}
