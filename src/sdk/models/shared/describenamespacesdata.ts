/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DescribeNamespacesData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "details" })
    details?: string;
}
