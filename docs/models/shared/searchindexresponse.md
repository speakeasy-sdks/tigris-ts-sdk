# SearchIndexResponse

Response struct for search


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `facets`                                                                 | Record<string, [shared.SearchFacet](../../models/shared/searchfacet.md)> | :heavy_minus_sign:                                                       | N/A                                                                      |
| `hits`                                                                   | [shared.IndexDoc](../../models/shared/indexdoc.md)[]                     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `meta`                                                                   | [shared.SearchMetadata](../../models/shared/searchmetadata.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |