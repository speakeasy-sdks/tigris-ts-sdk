# SearchIndexResponse

Response struct for search


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `facets`                                                          | Record<string, [SearchFacet](../../models/shared/searchfacet.md)> | :heavy_minus_sign:                                                | N/A                                                               |
| `hits`                                                            | [IndexDoc](../../models/shared/indexdoc.md)[]                     | :heavy_minus_sign:                                                | N/A                                                               |
| `meta`                                                            | [SearchMetadata](../../models/shared/searchmetadata.md)           | :heavy_minus_sign:                                                | N/A                                                               |