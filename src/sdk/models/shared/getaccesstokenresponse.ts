import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// GetAccessTokenResponse
/** 
 * The response of GetAccessToken which contains access_token and optionally refresh_token.
**/
export class GetAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "access_token" })
  accessToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "refresh_token" })
  refreshToken?: string;
}