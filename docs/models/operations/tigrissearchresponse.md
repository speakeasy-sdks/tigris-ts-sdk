# TigrisSearchResponse


## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `contentType`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `rawResponse`                                                                    | [AxiosResponse>](https://axios-http.com/docs/res_schema)                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `status`                                                                         | [shared.Status](../../models/shared/status.md)                                   | :heavy_minus_sign:                                                               | Default error response                                                           |
| `streamingSearchResponse`                                                        | [shared.StreamingSearchResponse](../../models/shared/streamingsearchresponse.md) | :heavy_minus_sign:                                                               | OK                                                                               |