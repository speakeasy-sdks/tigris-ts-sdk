/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The Management section provide APIs that can be used to manage users, and app_keys.
 */
export class Namespace {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * Creates a Namespace
     *
     * @remarks
     * Creates a new namespace, if it does not exist
     */
    async create(
        req: shared.CreateNamespaceRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateNamespaceResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.CreateNamespaceRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/v1/management/namespaces/create";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateNamespaceResponse = new operations.CreateNamespaceResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createNamespaceResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.CreateNamespaceResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.status = utils.objectToClass(httpRes?.data, shared.Status);
                }
                break;
        }

        return res;
    }

    /**
     * Describe the details of all namespaces
     *
     * @remarks
     * Get details for all namespaces
     */
    async get(
        config?: AxiosRequestConfig
    ): Promise<operations.ManagementDescribeNamespacesResponse> {
        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/v1/management/namespaces/describe";

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ManagementDescribeNamespacesResponse =
            new operations.ManagementDescribeNamespacesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.describeNamespacesResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.DescribeNamespacesResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.status = utils.objectToClass(httpRes?.data, shared.Status);
                }
                break;
        }

        return res;
    }

    /**
     * Reads the Namespace Metadata
     *
     * @remarks
     * GetNamespaceMetadata inserts the user metadata object
     */
    async getMetadata(
        req: operations.ManagementGetNamespaceMetadataRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ManagementGetNamespaceMetadataResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ManagementGetNamespaceMetadataRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/v1/management/namespace/metadata/{metadataKey}/get",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "getNamespaceMetadataRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ManagementGetNamespaceMetadataResponse =
            new operations.ManagementGetNamespaceMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getNamespaceMetadataResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.GetNamespaceMetadataResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.status = utils.objectToClass(httpRes?.data, shared.Status);
                }
                break;
        }

        return res;
    }

    /**
     * Inserts Namespace Metadata
     *
     * @remarks
     * InsertNamespaceMetadata inserts the namespace metadata object
     */
    async insertMetadata(
        req: operations.ManagementInsertNamespaceMetadataRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ManagementInsertNamespaceMetadataResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ManagementInsertNamespaceMetadataRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/v1/management/namespace/metadata/{metadataKey}/insert",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "insertNamespaceMetadataRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ManagementInsertNamespaceMetadataResponse =
            new operations.ManagementInsertNamespaceMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.insertNamespaceMetadataResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.InsertNamespaceMetadataResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.status = utils.objectToClass(httpRes?.data, shared.Status);
                }
                break;
        }

        return res;
    }

    /**
     * Lists all Namespaces
     *
     * @remarks
     * List all namespace
     */
    async list(config?: AxiosRequestConfig): Promise<operations.ManagementListNamespacesResponse> {
        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/v1/management/namespaces/list";

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ManagementListNamespacesResponse =
            new operations.ManagementListNamespacesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listNamespacesResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ListNamespacesResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.status = utils.objectToClass(httpRes?.data, shared.Status);
                }
                break;
        }

        return res;
    }

    /**
     * Updates Namespace Metadata
     *
     * @remarks
     * UpdateNamespaceMetadata updates the user metadata object
     */
    async updateMetadata(
        req: operations.ManagementUpdateNamespaceMetadataRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ManagementUpdateNamespaceMetadataResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ManagementUpdateNamespaceMetadataRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/v1/management/namespace/metadata/{metadataKey}/update",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "updateNamespaceMetadataRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ManagementUpdateNamespaceMetadataResponse =
            new operations.ManagementUpdateNamespaceMetadataResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateNamespaceMetadataResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.UpdateNamespaceMetadataResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.status = utils.objectToClass(httpRes?.data, shared.Status);
                }
                break;
        }

        return res;
    }
}
