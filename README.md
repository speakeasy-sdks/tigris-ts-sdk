# tigris-core

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/tigris-ts-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/tigris-ts-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "tigris-core";
import { CacheCreateCacheResponse } from "tigris-core/dist/sdk/models/operations";
import { ErrorCode } from "tigris-core/dist/sdk/models/shared";

const sdk = new SDK({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.cache.create({
  createCacheRequest: {
    options: {
      ttlMs: 548814,
    },
  },
  name: "Kelvin Sporer",
  project: "corrupti",
}).then((res: CacheCreateCacheResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [appKey](docs/appkey/README.md)

* [delete](docs/appkey/README.md#delete) - Deletes the app key
* [list](docs/appkey/README.md#list) - List all the app keys
* [rotate](docs/appkey/README.md#rotate) - Rotates the app key secret
* [tigrisCreateAppKey](docs/appkey/README.md#tigriscreateappkey) - Creates the app key
* [update](docs/appkey/README.md#update) - Updates the description of the app key

### [auth](docs/auth/README.md)

* [get](docs/auth/README.md#get) - Access Token

### [cache](docs/cache/README.md)

* [create](docs/cache/README.md#create) - Creates the cache
* [delete](docs/cache/README.md#delete) - Deletes the cache
* [deleteKeys](docs/cache/README.md#deletekeys) - Deletes an entry from cache
* [getKey](docs/cache/README.md#getkey) - Reads an entry from cache
* [getSetKey](docs/cache/README.md#getsetkey) - Sets an entry in the cache and returns the previous value if exists
* [list](docs/cache/README.md#list) - Lists all the caches for the given project
* [listKeys](docs/cache/README.md#listkeys) - Lists all the key for this cache
* [setKey](docs/cache/README.md#setkey) - Sets an entry in the cache

### [channel](docs/channel/README.md)

* [get](docs/channel/README.md#get) - Get the details about a channel
* [getMessages](docs/channel/README.md#getmessages) - Get all messages for a channel
* [list](docs/channel/README.md#list) - Get all channels for your application project
* [listSubscriptions](docs/channel/README.md#listsubscriptions) - Get the subscriptions details about a channel
* [pushMessages](docs/channel/README.md#pushmessages) - push messages to a single channel
* [realtimePresence](docs/channel/README.md#realtimepresence) - Presence about the channel

### [collection](docs/collection/README.md)

* [create](docs/collection/README.md#create) - Create or update a collection
* [deleteDocuments](docs/collection/README.md#deletedocuments) - Delete Documents
* [describe](docs/collection/README.md#describe) - Describe Collection
* [drop](docs/collection/README.md#drop) - Drop Collection
* [importDocuments](docs/collection/README.md#importdocuments) - Import Documents
* [insertDocuments](docs/collection/README.md#insertdocuments) - Insert Documents
* [readDocuments](docs/collection/README.md#readdocuments) - Read Documents
* [replaceDocuments](docs/collection/README.md#replacedocuments) - Insert or Replace Documents
* [searchDocuments](docs/collection/README.md#searchdocuments) - Search Documents.
* [updateDocuments](docs/collection/README.md#updatedocuments) - Update Documents.

### [database](docs/database/README.md)

* [beginTransaction](docs/database/README.md#begintransaction) - Begin a transaction
* [commitTransaction](docs/database/README.md#committransaction) - Commit a Transaction
* [createBranch](docs/database/README.md#createbranch) - Create a database branch
* [deleteBranch](docs/database/README.md#deletebranch) - Delete a database branch
* [describe](docs/database/README.md#describe) - Describe database
* [listCollections](docs/database/README.md#listcollections) - List Collections
* [rollbackTransaction](docs/database/README.md#rollbacktransaction) - Rollback a transaction
* [tigrisListBranches](docs/database/README.md#tigrislistbranches) - List database branches

### [namespace](docs/namespace/README.md)

* [create](docs/namespace/README.md#create) - Creates a Namespace
* [get](docs/namespace/README.md#get) - Describe the details of all namespaces
* [getMetadata](docs/namespace/README.md#getmetadata) - Reads the Namespace Metadata
* [insertMetadata](docs/namespace/README.md#insertmetadata) - Inserts Namespace Metadata
* [list](docs/namespace/README.md#list) - Lists all Namespaces
* [updateMetadata](docs/namespace/README.md#updatemetadata) - Updates Namespace Metadata

### [project](docs/project/README.md)

* [create](docs/project/README.md#create) - Create Project
* [deleteProject](docs/project/README.md#deleteproject) - Delete Project and all resources under project
* [list](docs/project/README.md#list) - List Projects

### [search](docs/search/README.md)

* [createDocument](docs/search/README.md#createdocument) - Create a single document
* [createDocuments](docs/search/README.md#createdocuments) - Create multiple documents
* [deleteDocuments](docs/search/README.md#deletedocuments) - Delete documents by ids
* [deleteIndex](docs/search/README.md#deleteindex) - Deletes search index
* [findDocuments](docs/search/README.md#finddocuments) - Search Documents.
* [getDocuments](docs/search/README.md#getdocuments) - Get a single or multiple documents
* [getIndex](docs/search/README.md#getindex) - Get information about a search index
* [listIndexes](docs/search/README.md#listindexes) - List search indexes
* [queryDeleteDocuments](docs/search/README.md#querydeletedocuments) - Delete documents by query
* [replaceDocuments](docs/search/README.md#replacedocuments) - Create or replace documents in an index
* [updateDocuments](docs/search/README.md#updatedocuments) - Update documents in an index
* [updateIndex](docs/search/README.md#updateindex) - Creates or updates search index

### [system](docs/system/README.md)

* [getHealth](docs/system/README.md#gethealth) - Health Check
* [getServerInfo](docs/system/README.md#getserverinfo) - Information about the server
* [observabilityQuotaUsage](docs/system/README.md#observabilityquotausage) - Queries current namespace quota usage
* [queryQuotaLimits](docs/system/README.md#queryquotalimits) - Queries current namespace quota limits
* [queryTimeSeriesMetrics](docs/system/README.md#querytimeseriesmetrics) - Queries time series metrics

### [user](docs/user/README.md)

* [getMetadata](docs/user/README.md#getmetadata) - Reads the User Metadata
* [insertMetadata](docs/user/README.md#insertmetadata) - Inserts User Metadata
* [updateMetadata](docs/user/README.md#updatemetadata) - Updates User Metadata
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
