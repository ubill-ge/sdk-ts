/* tslint:disable */
/* eslint-disable */
/**
 * UBill API
 * UBill API - provides programmatic access to our resources. You will be able to integrate our service into your system and communicate with clients easily.
 *
 * The version of the OpenAPI document: 2.1.8
 * Contact: info@ubill.ge
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { BrandNamesResponse } from '../model';
// @ts-ignore
import type { CreateBrandNameRequest } from '../model';
// @ts-ignore
import type { CreateBrandNameResponse } from '../model';
// @ts-ignore
import type { DeliveryReportResponse } from '../model';
// @ts-ignore
import type { SMSBalanceResponse } from '../model';
// @ts-ignore
import type { SendSMSRequest } from '../model';
// @ts-ignore
import type { SendSMSResponse } from '../model';
/**
 * SmsApi - axios parameter creator
 * @export
 */
export const SmsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Register a new brand name for SMS messaging. Brand names are used to identify the sender of SMS messages (e.g., \"ubill-info\"). 
         * @summary Create Brand Name
         * @param {CreateBrandNameRequest} createBrandNameRequest Brand Name payload to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBrandName: async (createBrandNameRequest: CreateBrandNameRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createBrandNameRequest' is not null or undefined
            assertParamExists('createBrandName', 'createBrandNameRequest', createBrandNameRequest)
            const localVarPath = `/sms/brandNameCreate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarQueryParameter, "key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createBrandNameRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch the delivery status of a previously sent SMS using its unique identifier.
         * @summary Get Delivery Report
         * @param {number} smsID Unique identifier of the SMS
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeliveryReport: async (smsID: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'smsID' is not null or undefined
            assertParamExists('getDeliveryReport', 'smsID', smsID)
            const localVarPath = `/sms/report/{smsID}`
                .replace(`{${"smsID"}}`, encodeURIComponent(String(smsID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarQueryParameter, "key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve your current SMS balance, indicating how many messages you can send.
         * @summary Get SMS Balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSMSBalance: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sms/balance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarQueryParameter, "key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a list of all registered brand names associated with your account.
         * @summary Get All Brand Names
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBrandNames: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sms/brandNames`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarQueryParameter, "key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Send SMS messages to one or multiple recipients using a registered brand name.
         * @summary Send SMS
         * @param {SendSMSRequest} sendSMSRequest SMS payload for sending messages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSMS: async (sendSMSRequest: SendSMSRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sendSMSRequest' is not null or undefined
            assertParamExists('sendSMS', 'sendSMSRequest', sendSMSRequest)
            const localVarPath = `/sms/send`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarQueryParameter, "key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(sendSMSRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SmsApi - functional programming interface
 * @export
 */
export const SmsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SmsApiAxiosParamCreator(configuration)
    return {
        /**
         * Register a new brand name for SMS messaging. Brand names are used to identify the sender of SMS messages (e.g., \"ubill-info\"). 
         * @summary Create Brand Name
         * @param {CreateBrandNameRequest} createBrandNameRequest Brand Name payload to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBrandName(createBrandNameRequest: CreateBrandNameRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateBrandNameResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBrandName(createBrandNameRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmsApi.createBrandName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch the delivery status of a previously sent SMS using its unique identifier.
         * @summary Get Delivery Report
         * @param {number} smsID Unique identifier of the SMS
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDeliveryReport(smsID: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeliveryReportResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeliveryReport(smsID, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmsApi.getDeliveryReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieve your current SMS balance, indicating how many messages you can send.
         * @summary Get SMS Balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSMSBalance(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SMSBalanceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSMSBalance(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmsApi.getSMSBalance']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieve a list of all registered brand names associated with your account.
         * @summary Get All Brand Names
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listBrandNames(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BrandNamesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listBrandNames(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmsApi.listBrandNames']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Send SMS messages to one or multiple recipients using a registered brand name.
         * @summary Send SMS
         * @param {SendSMSRequest} sendSMSRequest SMS payload for sending messages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendSMS(sendSMSRequest: SendSMSRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SendSMSResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSMS(sendSMSRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmsApi.sendSMS']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SmsApi - factory interface
 * @export
 */
export const SmsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SmsApiFp(configuration)
    return {
        /**
         * Register a new brand name for SMS messaging. Brand names are used to identify the sender of SMS messages (e.g., \"ubill-info\"). 
         * @summary Create Brand Name
         * @param {SmsApiCreateBrandNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBrandName(requestParameters: SmsApiCreateBrandNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateBrandNameResponse> {
            return localVarFp.createBrandName(requestParameters.createBrandNameRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch the delivery status of a previously sent SMS using its unique identifier.
         * @summary Get Delivery Report
         * @param {SmsApiGetDeliveryReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDeliveryReport(requestParameters: SmsApiGetDeliveryReportRequest, options?: RawAxiosRequestConfig): AxiosPromise<DeliveryReportResponse> {
            return localVarFp.getDeliveryReport(requestParameters.smsID, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve your current SMS balance, indicating how many messages you can send.
         * @summary Get SMS Balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSMSBalance(options?: RawAxiosRequestConfig): AxiosPromise<SMSBalanceResponse> {
            return localVarFp.getSMSBalance(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all registered brand names associated with your account.
         * @summary Get All Brand Names
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBrandNames(options?: RawAxiosRequestConfig): AxiosPromise<BrandNamesResponse> {
            return localVarFp.listBrandNames(options).then((request) => request(axios, basePath));
        },
        /**
         * Send SMS messages to one or multiple recipients using a registered brand name.
         * @summary Send SMS
         * @param {SmsApiSendSMSRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSMS(requestParameters: SmsApiSendSMSRequest, options?: RawAxiosRequestConfig): AxiosPromise<SendSMSResponse> {
            return localVarFp.sendSMS(requestParameters.sendSMSRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SmsApi - interface
 * @export
 * @interface SmsApi
 */
export interface SmsApiInterface {
    /**
     * Register a new brand name for SMS messaging. Brand names are used to identify the sender of SMS messages (e.g., \"ubill-info\"). 
     * @summary Create Brand Name
     * @param {SmsApiCreateBrandNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApiInterface
     */
    createBrandName(requestParameters: SmsApiCreateBrandNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateBrandNameResponse>;

    /**
     * Fetch the delivery status of a previously sent SMS using its unique identifier.
     * @summary Get Delivery Report
     * @param {SmsApiGetDeliveryReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApiInterface
     */
    getDeliveryReport(requestParameters: SmsApiGetDeliveryReportRequest, options?: RawAxiosRequestConfig): AxiosPromise<DeliveryReportResponse>;

    /**
     * Retrieve your current SMS balance, indicating how many messages you can send.
     * @summary Get SMS Balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApiInterface
     */
    getSMSBalance(options?: RawAxiosRequestConfig): AxiosPromise<SMSBalanceResponse>;

    /**
     * Retrieve a list of all registered brand names associated with your account.
     * @summary Get All Brand Names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApiInterface
     */
    listBrandNames(options?: RawAxiosRequestConfig): AxiosPromise<BrandNamesResponse>;

    /**
     * Send SMS messages to one or multiple recipients using a registered brand name.
     * @summary Send SMS
     * @param {SmsApiSendSMSRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApiInterface
     */
    sendSMS(requestParameters: SmsApiSendSMSRequest, options?: RawAxiosRequestConfig): AxiosPromise<SendSMSResponse>;

}

/**
 * Request parameters for createBrandName operation in SmsApi.
 * @export
 * @interface SmsApiCreateBrandNameRequest
 */
export interface SmsApiCreateBrandNameRequest {
    /**
     * Brand Name payload to create
     * @type {CreateBrandNameRequest}
     * @memberof SmsApiCreateBrandName
     */
    readonly createBrandNameRequest: CreateBrandNameRequest
}

/**
 * Request parameters for getDeliveryReport operation in SmsApi.
 * @export
 * @interface SmsApiGetDeliveryReportRequest
 */
export interface SmsApiGetDeliveryReportRequest {
    /**
     * Unique identifier of the SMS
     * @type {number}
     * @memberof SmsApiGetDeliveryReport
     */
    readonly smsID: number
}

/**
 * Request parameters for sendSMS operation in SmsApi.
 * @export
 * @interface SmsApiSendSMSRequest
 */
export interface SmsApiSendSMSRequest {
    /**
     * SMS payload for sending messages
     * @type {SendSMSRequest}
     * @memberof SmsApiSendSMS
     */
    readonly sendSMSRequest: SendSMSRequest
}

/**
 * SmsApi - object-oriented interface
 * @export
 * @class SmsApi
 * @extends {BaseAPI}
 */
export class SmsApi extends BaseAPI implements SmsApiInterface {
    /**
     * Register a new brand name for SMS messaging. Brand names are used to identify the sender of SMS messages (e.g., \"ubill-info\"). 
     * @summary Create Brand Name
     * @param {SmsApiCreateBrandNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApi
     */
    public createBrandName(requestParameters: SmsApiCreateBrandNameRequest, options?: RawAxiosRequestConfig) {
        return SmsApiFp(this.configuration).createBrandName(requestParameters.createBrandNameRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch the delivery status of a previously sent SMS using its unique identifier.
     * @summary Get Delivery Report
     * @param {SmsApiGetDeliveryReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApi
     */
    public getDeliveryReport(requestParameters: SmsApiGetDeliveryReportRequest, options?: RawAxiosRequestConfig) {
        return SmsApiFp(this.configuration).getDeliveryReport(requestParameters.smsID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve your current SMS balance, indicating how many messages you can send.
     * @summary Get SMS Balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApi
     */
    public getSMSBalance(options?: RawAxiosRequestConfig) {
        return SmsApiFp(this.configuration).getSMSBalance(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of all registered brand names associated with your account.
     * @summary Get All Brand Names
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApi
     */
    public listBrandNames(options?: RawAxiosRequestConfig) {
        return SmsApiFp(this.configuration).listBrandNames(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Send SMS messages to one or multiple recipients using a registered brand name.
     * @summary Send SMS
     * @param {SmsApiSendSMSRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmsApi
     */
    public sendSMS(requestParameters: SmsApiSendSMSRequest, options?: RawAxiosRequestConfig) {
        return SmsApiFp(this.configuration).sendSMS(requestParameters.sendSMSRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

