import * as utils from "../internal/utils";
import { AppKey } from "./appkey";
import { Auth } from "./auth";
import { Cache } from "./cache";
import { Channel } from "./channel";
import { Collection } from "./collection";
import { Database } from "./database";
import * as shared from "./models/shared";
import { Namespace } from "./namespace";
import { Project } from "./project";
import { Search } from "./search";
import { System } from "./system";
import { User } from "./user";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.preview.tigrisdata.cloud",
	"http://localhost:8081",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: shared.Security;

  serverUrl?: string;
}

/* SDK Documentation: # Overview
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
 * */
export class SDK {
  public appKey: AppKey;
  public auth: Auth;
  public cache: Cache;
  public channel: Channel;
  public collection: Collection;
  public database: Database;
  public namespace: Namespace;
  public project: Project;
  public search: Search;
  public system: System;
  public user: User;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.2";
  private _genVersion = "1.9.2";

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[0];

    this._defaultClient = props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.appKey = new AppKey(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.auth = new Auth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cache = new Cache(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channel = new Channel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.collection = new Collection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.database = new Database(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.namespace = new Namespace(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.project = new Project(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.system = new System(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}