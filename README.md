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

const sdk = new SDK({
  security: {
    bearerAuth: "",
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


### [appKey](docs/sdks/appkey/README.md)

* [delete](docs/sdks/appkey/README.md#delete) - Deletes the app key
* [list](docs/sdks/appkey/README.md#list) - List all the app keys
* [rotate](docs/sdks/appkey/README.md#rotate) - Rotates the app key secret
* [tigrisCreateAppKey](docs/sdks/appkey/README.md#tigriscreateappkey) - Creates the app key
* [update](docs/sdks/appkey/README.md#update) - Updates the description of the app key

### [auth](docs/sdks/auth/README.md)

* [get](docs/sdks/auth/README.md#get) - Access Token

### [cache](docs/sdks/cache/README.md)

* [create](docs/sdks/cache/README.md#create) - Creates the cache
* [delete](docs/sdks/cache/README.md#delete) - Deletes the cache
* [deleteKeys](docs/sdks/cache/README.md#deletekeys) - Deletes an entry from cache
* [getKey](docs/sdks/cache/README.md#getkey) - Reads an entry from cache
* [getSetKey](docs/sdks/cache/README.md#getsetkey) - Sets an entry in the cache and returns the previous value if exists
* [list](docs/sdks/cache/README.md#list) - Lists all the caches for the given project
* [listKeys](docs/sdks/cache/README.md#listkeys) - Lists all the key for this cache
* [setKey](docs/sdks/cache/README.md#setkey) - Sets an entry in the cache

### [channel](docs/sdks/channel/README.md)

* [get](docs/sdks/channel/README.md#get) - Get the details about a channel
* [getMessages](docs/sdks/channel/README.md#getmessages) - Get all messages for a channel
* [list](docs/sdks/channel/README.md#list) - Get all channels for your application project
* [listSubscriptions](docs/sdks/channel/README.md#listsubscriptions) - Get the subscriptions details about a channel
* [pushMessages](docs/sdks/channel/README.md#pushmessages) - push messages to a single channel
* [realtimePresence](docs/sdks/channel/README.md#realtimepresence) - Presence about the channel

### [collection](docs/sdks/collection/README.md)

* [create](docs/sdks/collection/README.md#create) - Create or update a collection
* [deleteDocuments](docs/sdks/collection/README.md#deletedocuments) - Delete Documents
* [describe](docs/sdks/collection/README.md#describe) - Describe Collection
* [drop](docs/sdks/collection/README.md#drop) - Drop Collection
* [importDocuments](docs/sdks/collection/README.md#importdocuments) - Import Documents
* [insertDocuments](docs/sdks/collection/README.md#insertdocuments) - Insert Documents
* [readDocuments](docs/sdks/collection/README.md#readdocuments) - Read Documents
* [replaceDocuments](docs/sdks/collection/README.md#replacedocuments) - Insert or Replace Documents
* [searchDocuments](docs/sdks/collection/README.md#searchdocuments) - Search Documents.
* [updateDocuments](docs/sdks/collection/README.md#updatedocuments) - Update Documents.

### [database](docs/sdks/database/README.md)

* [beginTransaction](docs/sdks/database/README.md#begintransaction) - Begin a transaction
* [commitTransaction](docs/sdks/database/README.md#committransaction) - Commit a Transaction
* [createBranch](docs/sdks/database/README.md#createbranch) - Create a database branch
* [deleteBranch](docs/sdks/database/README.md#deletebranch) - Delete a database branch
* [describe](docs/sdks/database/README.md#describe) - Describe database
* [listCollections](docs/sdks/database/README.md#listcollections) - List Collections
* [rollbackTransaction](docs/sdks/database/README.md#rollbacktransaction) - Rollback a transaction
* [tigrisListBranches](docs/sdks/database/README.md#tigrislistbranches) - List database branches

### [namespace](docs/sdks/namespace/README.md)

* [create](docs/sdks/namespace/README.md#create) - Creates a Namespace
* [get](docs/sdks/namespace/README.md#get) - Describe the details of all namespaces
* [getMetadata](docs/sdks/namespace/README.md#getmetadata) - Reads the Namespace Metadata
* [insertMetadata](docs/sdks/namespace/README.md#insertmetadata) - Inserts Namespace Metadata
* [list](docs/sdks/namespace/README.md#list) - Lists all Namespaces
* [updateMetadata](docs/sdks/namespace/README.md#updatemetadata) - Updates Namespace Metadata

### [project](docs/sdks/project/README.md)

* [create](docs/sdks/project/README.md#create) - Create Project
* [deleteProject](docs/sdks/project/README.md#deleteproject) - Delete Project and all resources under project
* [list](docs/sdks/project/README.md#list) - List Projects

### [search](docs/sdks/search/README.md)

* [createDocument](docs/sdks/search/README.md#createdocument) - Create a single document
* [createDocuments](docs/sdks/search/README.md#createdocuments) - Create multiple documents
* [deleteDocuments](docs/sdks/search/README.md#deletedocuments) - Delete documents by ids
* [deleteIndex](docs/sdks/search/README.md#deleteindex) - Deletes search index
* [findDocuments](docs/sdks/search/README.md#finddocuments) - Search Documents.
* [getDocuments](docs/sdks/search/README.md#getdocuments) - Get a single or multiple documents
* [getIndex](docs/sdks/search/README.md#getindex) - Get information about a search index
* [listIndexes](docs/sdks/search/README.md#listindexes) - List search indexes
* [queryDeleteDocuments](docs/sdks/search/README.md#querydeletedocuments) - Delete documents by query
* [replaceDocuments](docs/sdks/search/README.md#replacedocuments) - Create or replace documents in an index
* [updateDocuments](docs/sdks/search/README.md#updatedocuments) - Update documents in an index
* [updateIndex](docs/sdks/search/README.md#updateindex) - Creates or updates search index

### [system](docs/sdks/system/README.md)

* [getHealth](docs/sdks/system/README.md#gethealth) - Health Check
* [getServerInfo](docs/sdks/system/README.md#getserverinfo) - Information about the server
* [observabilityQuotaUsage](docs/sdks/system/README.md#observabilityquotausage) - Queries current namespace quota usage
* [queryQuotaLimits](docs/sdks/system/README.md#queryquotalimits) - Queries current namespace quota limits
* [queryTimeSeriesMetrics](docs/sdks/system/README.md#querytimeseriesmetrics) - Queries time series metrics

### [user](docs/sdks/user/README.md)

* [getMetadata](docs/sdks/user/README.md#getmetadata) - Reads the User Metadata
* [insertMetadata](docs/sdks/user/README.md#insertmetadata) - Inserts User Metadata
* [updateMetadata](docs/sdks/user/README.md#updatemetadata) - Updates User Metadata
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
