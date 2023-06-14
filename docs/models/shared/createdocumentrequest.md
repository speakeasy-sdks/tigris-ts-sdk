# CreateDocumentRequest


## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `documents`                                                                      | *string*[]                                                                       | :heavy_minus_sign:                                                               | An array of documents to be created or replaced. Each document is a JSON object. |
| `index`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | index name where to create documents.                                            |
| `project`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | Tigris project name.                                                             |