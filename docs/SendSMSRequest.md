# SendSMSRequest

Request payload for sending SMS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brandID** | **number** | Brand identifier as integer | [default to undefined]
**numbers** | **Array&lt;number&gt;** | Array of phone numbers as integers | [default to undefined]
**text** | **string** | SMS message text | [default to undefined]
**stopList** | **boolean** | Enable/disable checking numbers in the stop list | [default to undefined]

## Example

```typescript
import { SendSMSRequest } from '@ubill/sdk';

const instance: SendSMSRequest = {
    brandID,
    numbers,
    text,
    stopList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
