# CacheKeysRequest


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_minus_sign:                                                | optional - count of keys to return a stream response line.        |
| `cursor`                                                          | *number*                                                          | :heavy_minus_sign:                                                | optional - cursor - skip this argument if no cursor is associated |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | cache name                                                        |
| `pattern`                                                         | *string*                                                          | :heavy_minus_sign:                                                | optional key pattern                                              |
| `project`                                                         | *string*                                                          | :heavy_check_mark:                                                | Tigris project name                                               |