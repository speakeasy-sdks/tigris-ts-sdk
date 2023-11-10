# SetRequest


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `ex`                                               | *number*                                           | :heavy_minus_sign:                                 | optional - ttl specific to this key in second      |
| `nx`                                               | *boolean*                                          | :heavy_minus_sign:                                 | set only if the key doesn't exist                  |
| `px`                                               | *number*                                           | :heavy_minus_sign:                                 | optional - ttl specific to this key in millisecond |
| `value`                                            | *string*                                           | :heavy_minus_sign:                                 | free form byte[] value                             |
| `xx`                                               | *boolean*                                          | :heavy_minus_sign:                                 | set only if the key exist                          |