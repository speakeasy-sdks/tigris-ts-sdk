# RollupFunction

Rollup function aggregates the slices of metrics returned by original query and lets you operate on the slices using aggregator and constructs the bigger slice of your choice of interval (specified in seconds).


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `aggregator`                                                  | [shared.Aggregator](../../../sdk/models/shared/aggregator.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `interval`                                                    | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |