# TransferMoney.TransactionsApi

All URIs are relative to *https://staging.eko.in:25004/ekoapi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactionsPost**](TransactionsApi.md#transactionsPost) | **POST** /transactions | Initiate Transaction
[**transactionsidGet**](TransactionsApi.md#transactionsidGet) | **GET** /transactions/:id | Get Transaction Status
[**transactionsidRefundOtpPost**](TransactionsApi.md#transactionsidRefundOtpPost) | **POST** /transactions/:id/refund/otp | Resend Refund OTP
[**transactionsidRefundPost**](TransactionsApi.md#transactionsidRefundPost) | **POST** /transactions/:id/refund | Refund


<a name="transactionsPost"></a>
# **transactionsPost**
> InlineResponse2007 transactionsPost(recipientId, amount, timeStamp, currency, customerId, initiatorId, clientRefId, state, channel, developerKey, opts)

Initiate Transaction

Initiate a Money Transfer transaction to a bank account via NEFT/IMPS

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.TransactionsApi();

var recipientId = 56; // Number | 

var amount = 56; // Number | 

var timeStamp = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var currency = "INR"; // String | 

var customerId = 56; // Number | 

var initiatorId = 56; // Number | 

var clientRefId = 56; // Number | 

var state = 56; // Number | 

var channel = 56; // Number | 

var developerKey = "developerKey_example"; // String | Your unique API key that will authenticate your request

var opts = { 
  'holdTimeout': 56, // Number | 
  'merchantDocumentIdType': 56, // Number | 
  'merchantDocumentId': "merchantDocumentId_example", // String | value of the merchant document id
  'latlong': "latlong_example", // String | 
  'pincode': 56, // Number | 
  'userPan': "userPan_example", // String | captures pan number of the user incase of cash collection services being used
  'secretKey': "secretKey_example", // String | refer to authentication section
  'secretKeyTimestamp': "secretKeyTimestamp_example" // String | refer to authentication section
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsPost(recipientId, amount, timeStamp, currency, customerId, initiatorId, clientRefId, state, channel, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipientId** | **Number**|  | 
 **amount** | **Number**|  | 
 **timeStamp** | **Date**|  | 
 **currency** | **String**|  | [default to INR]
 **customerId** | **Number**|  | 
 **initiatorId** | **Number**|  | 
 **clientRefId** | **Number**|  | 
 **state** | **Number**|  | 
 **channel** | **Number**|  | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **holdTimeout** | **Number**|  | [optional] 
 **merchantDocumentIdType** | **Number**|  | [optional] 
 **merchantDocumentId** | **String**| value of the merchant document id | [optional] 
 **latlong** | **String**|  | [optional] 
 **pincode** | **Number**|  | [optional] 
 **userPan** | **String**| captures pan number of the user incase of cash collection services being used | [optional] 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="transactionsidGet"></a>
# **transactionsidGet**
> InlineResponse2008 transactionsidGet(initiatorId, developerKey, opts)

Get Transaction Status

Get the status of a Money Transfer transaction basis Eko TID or client-reference-ID

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.TransactionsApi();

var initiatorId = 789; // Number | 

var developerKey = "developerKey_example"; // String | Your unique API key that will authenticate your request

var opts = { 
  'tid': "tid_example", // String | This can be Eko tid or partner's unique id
  'clientRefId': "clientRefId_example", // String | 
  'secretKey': "secretKey_example", // String | refer to authentication section
  'secretKeyTimestamp': "secretKeyTimestamp_example" // String | refer to authentication section
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsidGet(initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **initiatorId** | **Number**|  | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **tid** | **String**| This can be Eko tid or partner&#39;s unique id | [optional] 
 **clientRefId** | **String**|  | [optional] 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="transactionsidRefundOtpPost"></a>
# **transactionsidRefundOtpPost**
> InlineResponse20010 transactionsidRefundOtpPost(id, initiatorId, developerKey, opts)

Resend Refund OTP

Resend the OTP to the customer to initiate the refund process

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.TransactionsApi();

var id = 56; // Number | tid of the transaction for which refund needs to be initiated

var initiatorId = 789; // Number | partner id from where the request has been initiated

var developerKey = "developerKey_example"; // String | Your unique API key that will authenticate your request

var opts = { 
  'secretKey': "secretKey_example", // String | refer to authentication section
  'secretKeyTimestamp': "secretKeyTimestamp_example" // String | refer to authentication section
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsidRefundOtpPost(id, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| tid of the transaction for which refund needs to be initiated | 
 **initiatorId** | **Number**| partner id from where the request has been initiated | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="transactionsidRefundPost"></a>
# **transactionsidRefundPost**
> InlineResponse2009 transactionsidRefundPost(tid, clientRefId, initiatorId, otp, state, developerKey, opts)

Refund

Initiate refund to the customer for a failed cash to digital transaction

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.TransactionsApi();

var tid = "tid_example"; // String | This can be Eko tid or partner's unique reference id

var clientRefId = "clientRefId_example"; // String | unique id of transaction on client platform

var initiatorId = 789; // Number | 

var otp = 56; // Number | OTP shared with customer on the registered mobile number

var state = 1; // Number | current status of the transaction; 1 denotes 'commit'

var developerKey = "developerKey_example"; // String | Your unique API key that will authenticate your request

var opts = { 
  'secretKey': "secretKey_example", // String | refer to authentication section
  'secretKeyTimestamp': "secretKeyTimestamp_example" // String | refer to authentication section
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsidRefundPost(tid, clientRefId, initiatorId, otp, state, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | **String**| This can be Eko tid or partner&#39;s unique reference id | 
 **clientRefId** | **String**| unique id of transaction on client platform | 
 **initiatorId** | **Number**|  | 
 **otp** | **Number**| OTP shared with customer on the registered mobile number | 
 **state** | **Number**| current status of the transaction; 1 denotes &#39;commit&#39; | [default to 1]
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

