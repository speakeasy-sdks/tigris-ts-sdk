# BeginTransactionRequest

Start new transaction in project specified by "project".


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `branch`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Optionally specify a project branch name to perform operation on |
| `options`                                                        | [TransactionOptions](../../models/shared/transactionoptions.md)  | :heavy_minus_sign:                                               | Options that can be used to modify the transaction semantics.    |