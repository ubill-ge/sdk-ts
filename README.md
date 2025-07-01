## @ubill/sdk@0.2.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ubill/sdk@0.2.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.ubill.dev/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SmsApi* | [**createBrandName**](docs/SmsApi.md#createbrandname) | **POST** /sms/brandNameCreate | Create Brand Name
*SmsApi* | [**getDeliveryReport**](docs/SmsApi.md#getdeliveryreport) | **GET** /sms/report/{smsID} | Get Delivery Report
*SmsApi* | [**getSMSBalance**](docs/SmsApi.md#getsmsbalance) | **GET** /sms/balance | Get SMS Balance
*SmsApi* | [**listBrandNames**](docs/SmsApi.md#listbrandnames) | **GET** /sms/brandNames | Get All Brand Names
*SmsApi* | [**sendSMS**](docs/SmsApi.md#sendsms) | **POST** /sms/send | Send SMS


### Documentation For Models

 - [BaseResponse](docs/BaseResponse.md)
 - [BrandName](docs/BrandName.md)
 - [BrandNamesResponse](docs/BrandNamesResponse.md)
 - [CreateBrandNameRequest](docs/CreateBrandNameRequest.md)
 - [CreateBrandNameResponse](docs/CreateBrandNameResponse.md)
 - [DeliveryReportItem](docs/DeliveryReportItem.md)
 - [DeliveryReportResponse](docs/DeliveryReportResponse.md)
 - [SMSBalanceResponse](docs/SMSBalanceResponse.md)
 - [SendSMSRequest](docs/SendSMSRequest.md)
 - [SendSMSResponse](docs/SendSMSResponse.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="apiKey"></a>
### apiKey

- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string


## Authors

- [Temuri Takalandze](https://www.abgeo.dev) - *Maintainer*
