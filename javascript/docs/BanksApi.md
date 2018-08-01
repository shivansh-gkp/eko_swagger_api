# TransferMoney.BanksApi

All URIs are relative to *https://staging.eko.in:25004/ekoapi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**banksGet**](BanksApi.md#banksGet) | **GET** /banks | Get Bank Details
[**banksIdTypeidAccountsidPost**](BanksApi.md#banksIdTypeidAccountsidPost) | **POST** /banks/id_type::id/accounts/:id | Verify Bank Account Details
[**panVerifyPost**](BanksApi.md#panVerifyPost) | **POST** /pan/verify | PAN verification


<a name="banksGet"></a>
# **banksGet**
> InlineResponse20011 banksGet(bankCode, initiatorId, developerKey, opts)

Get Bank Details

Get the details of a bank like name, bank code, available channels, is IFSC required, is verification available, etc.

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.BanksApi();

var bankCode = "bankCode_example"; // String | 

var initiatorId = 789; // Number | 

var developerKey = "developerKey_example"; // String | Your unique API key that will authenticate your request

var opts = { 
  'ifsc': "ifsc_example", // String | 
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
apiInstance.banksGet(bankCode, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankCode** | **String**|  | 
 **initiatorId** | **Number**|  | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **ifsc** | **String**|  | [optional] 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="banksIdTypeidAccountsidPost"></a>
# **banksIdTypeidAccountsidPost**
> InlineResponse20013 banksIdTypeidAccountsidPost(idType, id, initiatorId, customerId, developerKey, opts)

Verify Bank Account Details

Enables customers to verify bank account number by returning the name of the account holder

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.BanksApi();

var idType = "idType_example"; // String | 

var id = 789; // Number | need to mention account number which needs to be verified

var initiatorId = 789; // Number | 

var customerId = 56; // Number | 

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
apiInstance.banksIdTypeidAccountsidPost(idType, id, initiatorId, customerId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idType** | **String**|  | 
 **id** | **Number**| need to mention account number which needs to be verified | 
 **initiatorId** | **Number**|  | 
 **customerId** | **Number**|  | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="panVerifyPost"></a>
# **panVerifyPost**
> InlineResponse20012 panVerifyPost(panNumber, purpose, purposeDesc, customerMobile, initiatorId, developerKey, opts)

PAN verification

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.BanksApi();

var panNumber = "panNumber_example"; // String | This is the pan number that needs to be verified

var purpose = 789; // Number | 

var purposeDesc = "purposeDesc_example"; // String | 

var customerMobile = 56; // Number | 

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
apiInstance.panVerifyPost(panNumber, purpose, purposeDesc, customerMobile, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **panNumber** | **String**| This is the pan number that needs to be verified | 
 **purpose** | **Number**|  | 
 **purposeDesc** | **String**|  | 
 **customerMobile** | **Number**|  | 
 **initiatorId** | **Number**| partner id from where the request has been initiated | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

