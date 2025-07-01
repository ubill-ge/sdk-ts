# SmsApi

All URIs are relative to *https://api.ubill.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBrandName**](#createbrandname) | **POST** /sms/brandNameCreate | Create Brand Name|
|[**getDeliveryReport**](#getdeliveryreport) | **GET** /sms/report/{smsID} | Get Delivery Report|
|[**getSMSBalance**](#getsmsbalance) | **GET** /sms/balance | Get SMS Balance|
|[**listBrandNames**](#listbrandnames) | **GET** /sms/brandNames | Get All Brand Names|
|[**sendSMS**](#sendsms) | **POST** /sms/send | Send SMS|

# **createBrandName**
> CreateBrandNameResponse createBrandName(createBrandNameRequest)

Register a new brand name for SMS messaging. Brand names are used to identify the sender of SMS messages (e.g., \"ubill-info\"). 

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateBrandNameRequest
} from '@ubill/sdk';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let createBrandNameRequest: CreateBrandNameRequest; //Brand Name payload to create

const { status, data } = await apiInstance.createBrandName(
    createBrandNameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBrandNameRequest** | **CreateBrandNameRequest**| Brand Name payload to create | |


### Return type

**CreateBrandNameResponse**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Brand name created successfully |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDeliveryReport**
> DeliveryReportResponse getDeliveryReport()

Fetch the delivery status of a previously sent SMS using its unique identifier.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from '@ubill/sdk';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let smsID: number; //Unique identifier of the SMS (default to undefined)

const { status, data } = await apiInstance.getDeliveryReport(
    smsID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smsID** | [**number**] | Unique identifier of the SMS | defaults to undefined|


### Return type

**DeliveryReportResponse**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delivery report retrieved successfully |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSMSBalance**
> SMSBalanceResponse getSMSBalance()

Retrieve your current SMS balance, indicating how many messages you can send.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from '@ubill/sdk';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

const { status, data } = await apiInstance.getSMSBalance();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SMSBalanceResponse**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMS balance retrieved successfully |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBrandNames**
> BrandNamesResponse listBrandNames()

Retrieve a list of all registered brand names associated with your account.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from '@ubill/sdk';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

const { status, data } = await apiInstance.listBrandNames();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BrandNamesResponse**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Brand names retrieved successfully |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendSMS**
> SendSMSResponse sendSMS(sendSMSRequest)

Send SMS messages to one or multiple recipients using a registered brand name.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    SendSMSRequest
} from '@ubill/sdk';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let sendSMSRequest: SendSMSRequest; //SMS payload for sending messages

const { status, data } = await apiInstance.sendSMS(
    sendSMSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendSMSRequest** | **SendSMSRequest**| SMS payload for sending messages | |


### Return type

**SendSMSResponse**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMS sent successfully |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

