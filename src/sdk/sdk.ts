/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { AppKey } from "./appkey";
import { Auth } from "./auth";
import { Cache } from "./cache";
import { Channel } from "./channel";
import { Collection } from "./collection";
import { Database } from "./database";
import { Namespace } from "./namespace";
import { Project } from "./project";
import { Search } from "./search";
import { System } from "./system";
import { User } from "./user";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Tigris Cloud
     */
    "https://api.preview.tigrisdata.cloud",
    /**
     * Localhost
     */
    "http://localhost:8081",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.0.1";
    sdkVersion = "0.54.6";
    genVersion = "2.283.1";
    userAgent = "speakeasy-sdk/typescript 0.54.6 2.283.1 0.0.1 tigris-core";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Tigris API Reference: # Overview
 *
 * @remarks
 * This section is organized around HTTP APIs. The APIs accepts JSON requests and returns JSON-encoded responses.The APIs conforms to standard HTTP status codes.
 *
 * # Errors
 * Tigris uses conventional HTTP response codes to indicate the success or failure of an API request.The response will  contain an error code or other information that reveals the reason of the error.
 * The error response is in JSON format and is structured like this:
 * ```
 *  {
 *    "error": {
 *      "code": "ALREADY_EXISTS",
 *      "message": "row already exists"
 *    }
 *  }
 *
 * ```
 *
 * ## Status 2xx
 *
 *   HTTP Code  | Reason
 *   ----------------|-------------
 *   200 - OK | Everything worked as expected.
 *
 *
 * ## Status 4xx
 * Status codes in the `400-499` range indicate errors that have been caused by the requesting application (e.g., a malformed request body has been sent).
 * Retrying such requests with the same request body is pointless and _will_ result in the same status code again. Some `4xx` errors can be handled programmatically. Change the request accordingly before retrying. Below you can find the most frequent 4XX errors and how to fix them.
 *
 *   HTTP Code  | Tigris Code | Reason
 *   ----------------|-------------|---------
 *   400 - Bad Request | INVALID_ARGUMENT | The request was unacceptable, often due to missing a required parameter. <br>Examples: <li>Missing documents for write request</li><li>Collection or Database name is not following the allowed characters</li>
 *   401 - Unauthorized | UNAUTHENTICATED | No valid API key provided. Check that your `api_key` and `api_secret` are correct.
 *   403 - Forbidden | PERMISSION_DENIED | The API key doesn't have permissions to perform the request.
 *   404 - Not Found | NOT_FOUND | The requested resource doesn't exist. <br>Examples: <li>Database or Collection doesn't exists</li><li>Access Token missing in the request header</li>
 *   409 - Conflict | ALREADY_EXISTS | TThe request conflicts with another request (perhaps due to using the same idempotent key). <br>Examples: <li>Trying to insert document again for the primary key that already exists</li><li>Creating a database that already exists</li>
 *   429 - Too Many Requests | RESOURCE_EXHAUSTED | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
 *
 *
 *
 * ## Status 5xx
 * The 5xx range indicate an error with Tigris servers (these are rare).
 *
 *   HTTP Code  | Tigris Code | Reason
 *   ----------------|-------------|---------
 *   500 - Internal Server Error | UNKNOWN | Something went wrong on Tigris server side.
 *   501 - Not Implemented       | UNIMPLEMENTED | Not supported by the Tigris server and cannot be handled.
 *   502 - Bad Gateway           | BAD_GATEWAY | The API key doesn't have permissions to perform the request.
 *   503 - Service Unavailable   | UNAVAILABLE | The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.
 *   504 - Gateway Timeout       | DEADLINE_EXCEEDED | Tigris server is unable to process the request timely. Common causes are that request is expensive, or server is overloaded.
 *
 * # Idempotent Requests
 *
 *   Tigris provides idempotency guarantees when an API call is disrupted and either no response is returned or an HTTP
 *   Status code `429,500,501,502,503` is returned. These errors ensure that the request is not committed and retrying the same request will have the same effect.
 *
 *
 * # Limitations
 * <li>Do not rely on case to distinguish between databases or collections names.</li> <li>Database Name and Collection Name cannot be empty and can only have the characters matches the regex: <code>^[a-zA-Z]+[a-zA-Z0-9_]+$</code>.</li> <li>Duplicate field names are not allowed. </li> <li>The maximum allowed document size is 100KB.</li> <li>The maximum allowed transaction size is 10MB.</li>
 *
 */
export class SDK {
    /**
     * The auth section of API provides OAuth 2.0 APIs. Tigris supports pluggable OAuth provider. Pass the token in the headers for authentication, as an example `-H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6I"`(replace it with your token). All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
     */
    public auth: Auth;
    /**
     * The Observability section has APIs that provides full visibility into the health, metrics, and monitoring of the Server.
     */
    public system: System;
    /**
     * The Management section provide APIs that can be used to manage users, and app_keys.
     */
    public namespace: Namespace;
    /**
     * A User on the Tigris Platform.
     */
    public user: User;
    /**
     * Every Tigris projects comes with a transactional document database built on FoundationDB, one of the most resilient and battle-tested open source distributed key-value store. A database is created automatically for you when you create a project.
     */
    public project: Project;
    /**
     * The application keys section provide APIs that can be used to manage application keys for your project. A single project can have one or more application keys.
     */
    public appKey: AppKey;
    /**
     * The cache section provide APIs that can be used to perform cache operations.
     */
    public cache: Cache;
    /**
     * The Database section provide APIs that can be used to interact with the database. A single Database can have one or more collections. A database is created automatically for you when you create a project.
     */
    public database: Database;
    /**
     * The Collections section provide APIs that can be used to manage collections. A collection can have one or more documents.
     */
    public collection: Collection;
    /**
     * The realtime section provide APIs that can be used realtime operations.
     */
    public channel: Channel;
    /**
     * The search section provides you APIs that can be used to implement powerful apps with search experiences. You can manage storing documents on your own or you can simply integrate it with your database.
     */
    public search: Search;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;

        if (!serverURL) {
            const serverIdx = props?.serverIdx ?? 0;
            if (serverIdx < 0 || serverIdx >= ServerList.length) {
                throw new Error(`Invalid server index ${serverIdx}`);
            }
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.auth = new Auth(this.sdkConfiguration);
        this.system = new System(this.sdkConfiguration);
        this.namespace = new Namespace(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.project = new Project(this.sdkConfiguration);
        this.appKey = new AppKey(this.sdkConfiguration);
        this.cache = new Cache(this.sdkConfiguration);
        this.database = new Database(this.sdkConfiguration);
        this.collection = new Collection(this.sdkConfiguration);
        this.channel = new Channel(this.sdkConfiguration);
        this.search = new Search(this.sdkConfiguration);
    }
}
