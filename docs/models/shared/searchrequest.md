# SearchRequest


## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `branch`                                                                                                                                                                                           | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Optionally specify a database branch name to perform operation on                                                                                                                                  |
| `collation`                                                                                                                                                                                        | [Collation](../../models/shared/collation.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | A collation allows you to specify string comparison rules. Default is case-sensitive, to override it you can set this option to 'ci' that will apply to all the text fields in the filters.        |
| `excludeFields`                                                                                                                                                                                    | *string*[]                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                 | Array of document field names to exclude from results. `include_fields`, if specified, takes precedence over `exclude_fields`.                                                                     |
| `facet`                                                                                                                                                                                            | [SearchRequestFacet](../../models/shared/searchrequestfacet.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                 | Facet query to aggregate results on given fields. The field name for the facet search can be passed like this `{"brand": { "size": 10 }}` where the size controls the total facets for this field. |
| `fields`                                                                                                                                                                                           | [SearchRequestFields](../../models/shared/searchrequestfields.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `filter`                                                                                                                                                                                           | [SearchRequestFilter](../../models/shared/searchrequestfilter.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                 | Filter stacks on top of query results to further narrow down the results. Similar to `ReadRequest.filter`                                                                                          |
| `includeFields`                                                                                                                                                                                    | *string*[]                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                 | Array of document field names to include in results. By default, all fields are included.                                                                                                          |
| `page`                                                                                                                                                                                             | *number*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Optionally can specify the page to retrieve. If page is set then only hits for this page is returned                                                                                               |
| `pageSize`                                                                                                                                                                                         | *number*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Optionally can set the number of hits to be returned per page, default is 20.                                                                                                                      |
| `q`                                                                                                                                                                                                | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Query string for searching across text fields                                                                                                                                                      |
| `searchFields`                                                                                                                                                                                     | *string*[]                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                 | Array of fields to project search query against                                                                                                                                                    |
| `sort`                                                                                                                                                                                             | [SearchRequestSort](../../models/shared/searchrequestsort.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Array of fields and corresponding sort orders to order the results `[{ "salary": "$desc" }]`                                                                                                       |