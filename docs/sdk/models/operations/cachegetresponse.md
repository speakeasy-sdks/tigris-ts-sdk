# CacheGetResponse


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `contentType`                                                   | *string*                                                        | :heavy_check_mark:                                              | HTTP response content type for this operation                   |
| `getResponse`                                                   | [shared.GetResponse](../../../sdk/models/shared/getresponse.md) | :heavy_minus_sign:                                              | OK                                                              |
| `status`                                                        | [shared.Status](../../../sdk/models/shared/status.md)           | :heavy_minus_sign:                                              | Default error response                                          |
| `statusCode`                                                    | *number*                                                        | :heavy_check_mark:                                              | HTTP response status code for this operation                    |
| `rawResponse`                                                   | [AxiosResponse](https://axios-http.com/docs/res_schema)         | :heavy_minus_sign:                                              | Raw HTTP response; suitable for custom response parsing         |