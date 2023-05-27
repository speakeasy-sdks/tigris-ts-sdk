/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The response of GetAccessToken which contains access_token and optionally refresh_token.
 */
export class GetAccessTokenResponse extends SpeakeasyBase {
    /**
     * An Access Token.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "access_token" })
    accessToken?: string;

    /**
     * Access token expiration timeout in seconds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expires_in" })
    expiresIn?: number;

    /**
     * The Refresh Token.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refresh_token" })
    refreshToken?: string;
}
