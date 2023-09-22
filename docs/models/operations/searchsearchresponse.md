# SearchSearchResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `searchIndexResponse`                                                    | [shared.SearchIndexResponse](../../models/shared/searchindexresponse.md) | :heavy_minus_sign:                                                       | OK                                                                       |
| `status`                                                                 | [shared.Status](../../models/shared/status.md)                           | :heavy_minus_sign:                                                       | Default error response                                                   |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rawResponse`                                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)                  | :heavy_minus_sign:                                                       | N/A                                                                      |