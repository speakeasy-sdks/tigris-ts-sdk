# GetAccessTokenResponse

The response of GetAccessToken which contains access_token and optionally refresh_token.


## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `accessToken`                               | *string*                                    | :heavy_minus_sign:                          | An Access Token.                            |
| `expiresIn`                                 | *number*                                    | :heavy_minus_sign:                          | Access token expiration timeout in seconds. |
| `refreshToken`                              | *string*                                    | :heavy_minus_sign:                          | The Refresh Token.                          |