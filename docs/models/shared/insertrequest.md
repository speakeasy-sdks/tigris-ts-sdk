# InsertRequest


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `branch`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Optionally specify a database branch name to perform operation on         |
| `documents`                                                               | [InsertRequestDocuments](../../models/shared/insertrequestdocuments.md)[] | :heavy_minus_sign:                                                        | Array of documents to insert. Each document is a JSON object.             |
| `options`                                                                 | [InsertRequestOptions](../../models/shared/insertrequestoptions.md)       | :heavy_minus_sign:                                                        | additional options for insert requests.                                   |