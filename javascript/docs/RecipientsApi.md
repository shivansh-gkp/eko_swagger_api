# TransferMoney.RecipientsApi

All URIs are relative to *https://staging.eko.in:25004/ekoapi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersCustomerIdTypecustomerIdRecipientsGet**](RecipientsApi.md#customersCustomerIdTypecustomerIdRecipientsGet) | **GET** /customers/{customer_id_type}:{customer_id}/recipients | Get List of Recipients
[**customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet**](RecipientsApi.md#customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet) | **GET** /customers/{customer_id_type}:{customer_id}/recipients/recipient_id:{id} | Get Recipient Details
[**customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut**](RecipientsApi.md#customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut) | **PUT** /customers/:customer_id_type::customer_id/recipients/:recipients_id_type::id | Add Recipient


<a name="customersCustomerIdTypecustomerIdRecipientsGet"></a>
# **customersCustomerIdTypecustomerIdRecipientsGet**
> InlineResponse2004 customersCustomerIdTypecustomerIdRecipientsGet(customerIdType, customerId, initiatorId, developerKey, opts)

Get List of Recipients

Get list of recipients for a customer

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.RecipientsApi();

var customerIdType = "customerIdType_example"; // String | 

var customerId = 789; // Number | id of the customer; currently only mobile number of the customer can be used

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
apiInstance.customersCustomerIdTypecustomerIdRecipientsGet(customerIdType, customerId, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIdType** | **String**|  | 
 **customerId** | **Number**| id of the customer; currently only mobile number of the customer can be used | 
 **initiatorId** | **Number**| partner id from where the request has been initiated | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet"></a>
# **customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet**
> InlineResponse2005 customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet(id, customerIdType, customerId, initiatorId, developerKey, opts)

Get Recipient Details

Get the details of a recipient, like name, account number, etc

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.RecipientsApi();

var id = 56; // Number | This is the unique recipient id that is returned when a recipient is added to the customer in Create recipient API

var customerIdType = "customerIdType_example"; // String | 

var customerId = 789; // Number | id of the customer; currently only mobile number of the customer can be used

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
apiInstance.customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet(id, customerIdType, customerId, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| This is the unique recipient id that is returned when a recipient is added to the customer in Create recipient API | 
 **customerIdType** | **String**|  | 
 **customerId** | **Number**| id of the customer; currently only mobile number of the customer can be used | 
 **initiatorId** | **Number**| partner id from where the request has been initiated | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut"></a>
# **customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut**
> InlineResponse2006 customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut(id, recipientIdType, customerIdType, customerId, initiatorId, bankId, recipientName, recipientMobile, recipientType, developerKey, opts)

Add Recipient

Add a new recipient or update an existing recipient for a customer

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.RecipientsApi();

var id = "id_example"; // String | value of the recipient_id

var recipientIdType = "recipientIdType_example"; // String | recipient_id_type can have the following parameters: a) acc_ifsc b) acc_bankcode (only applicable when IMPS service is available and IFSC is not required)

var customerIdType = "customerIdType_example"; // String | 

var customerId = 789; // Number | id of the customer; currently only mobile number of the customer can be used

var initiatorId = 789; // Number | id of the customer; currently only mobile number of the customer can be used

var bankId = 56; // Number | a unique id for each bank has been allocated and that has to passed here

var recipientName = "recipientName_example"; // String | name of the recipient

var recipientMobile = 56; // Number | 

var recipientType = 56; // Number | 

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
apiInstance.customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut(id, recipientIdType, customerIdType, customerId, initiatorId, bankId, recipientName, recipientMobile, recipientType, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| value of the recipient_id | 
 **recipientIdType** | **String**| recipient_id_type can have the following parameters: a) acc_ifsc b) acc_bankcode (only applicable when IMPS service is available and IFSC is not required) | 
 **customerIdType** | **String**|  | 
 **customerId** | **Number**| id of the customer; currently only mobile number of the customer can be used | 
 **initiatorId** | **Number**| id of the customer; currently only mobile number of the customer can be used | 
 **bankId** | **Number**| a unique id for each bank has been allocated and that has to passed here | 
 **recipientName** | **String**| name of the recipient | 
 **recipientMobile** | **Number**|  | 
 **recipientType** | **Number**|  | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

