/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The application keys section provide APIs that can be used to manage application keys for your project. A single project can have one or more application keys.
 */
export class AppKey {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Deletes the app key
     *
     * @remarks
     * Delete an app key.
     */
    async delete(
        req: operations.TigrisDeleteAppKeyRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.TigrisDeleteAppKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TigrisDeleteAppKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/projects/{project}/apps/keys/delete",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "deleteAppKeyRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.TigrisDeleteAppKeyResponse =
            new operations.TigrisDeleteAppKeyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteAppKeyResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.DeleteAppKeyResponse
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
     * List all the app keys
     *
     * @remarks
     * Lists all app keys visible to requesting actor.
     */
    async list(
        req: operations.TigrisListAppKeysRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.TigrisListAppKeysResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TigrisListAppKeysRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/projects/{project}/apps/keys", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.TigrisListAppKeysResponse = new operations.TigrisListAppKeysResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listAppKeysResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ListAppKeysResponse
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
     * Rotates the app key secret
     *
     * @remarks
     * Endpoint is used to rotate the secret for the app key.
     */
    async rotate(
        req: operations.TigrisRotateAppKeySecretRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.TigrisRotateAppKeySecretResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TigrisRotateAppKeySecretRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/projects/{project}/apps/keys/rotate",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "rotateAppKeyRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.TigrisRotateAppKeySecretResponse =
            new operations.TigrisRotateAppKeySecretResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.rotateAppKeyResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.RotateAppKeyResponse
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
     * Creates the app key
     *
     * @remarks
     * Create an app key.
     */
    async tigrisCreateAppKey(
        req: operations.TigrisCreateAppKeyRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.TigrisCreateAppKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TigrisCreateAppKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/projects/{project}/apps/keys/create",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createAppKeyRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.TigrisCreateAppKeyResponse =
            new operations.TigrisCreateAppKeyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createAppKeyResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.CreateAppKeyResponse
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
     * Updates the description of the app key
     *
     * @remarks
     * Update the description of an app key.
     */
    async update(
        req: operations.TigrisUpdateAppKeyRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.TigrisUpdateAppKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TigrisUpdateAppKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/projects/{project}/apps/keys/update",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "updateAppKeyRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.TigrisUpdateAppKeyResponse =
            new operations.TigrisUpdateAppKeyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateAppKeyResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.UpdateAppKeyResponse
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
