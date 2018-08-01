# TransferMoney.CustomersApi

All URIs are relative to *https://staging.eko.in:25004/ekoapi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersCustomerIdTypecustomerIdGet**](CustomersApi.md#customersCustomerIdTypecustomerIdGet) | **GET** /customers/{customer_id_type}:{customer_id} | Get Customer Information
[**customersCustomerIdTypecustomerIdOtpPut**](CustomersApi.md#customersCustomerIdTypecustomerIdOtpPut) | **PUT** /customers/{customer_id_type}:{customer_id}/otp | Resend Otp
[**customersCustomerIdTypecustomerIdPut**](CustomersApi.md#customersCustomerIdTypecustomerIdPut) | **PUT** /customers/{customer_id_type}:{customer_id} | Create Customer
[**customersVerificationOtpotpPut**](CustomersApi.md#customersVerificationOtpotpPut) | **PUT** /customers/verification/otp:{otp} | Verify Customer Identity


<a name="customersCustomerIdTypecustomerIdGet"></a>
# **customersCustomerIdTypecustomerIdGet**
> InlineResponse200 customersCustomerIdTypecustomerIdGet(customerIdType, customerId, initiatorId, developerKey, opts)

Get Customer Information

Get a customer&#39;s basic profile information

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.CustomersApi();

var customerIdType = "customerIdType_example"; // String | Your unique API key that will authenticate your request

var customerId = 789; // Number | Value of customer id

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
apiInstance.customersCustomerIdTypecustomerIdGet(customerIdType, customerId, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIdType** | **String**| Your unique API key that will authenticate your request | 
 **customerId** | **Number**| Value of customer id | 
 **initiatorId** | **Number**| partner id from where the request has been initiated | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="customersCustomerIdTypecustomerIdOtpPut"></a>
# **customersCustomerIdTypecustomerIdOtpPut**
> InlineResponse2003 customersCustomerIdTypecustomerIdOtpPut(customerIdType, customerId, initiatorId, developerKey, opts)

Resend Otp

Resend OTP to a customer for verifying his/her mobile number

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.CustomersApi();

var customerIdType = "customerIdType_example"; // String | 

var customerId = 789; // Number | id of the customer; currently only mobile number of the customer can be used

var initiatorId = "initiatorId_example"; // String | partner id from where the request has been initiated

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
apiInstance.customersCustomerIdTypecustomerIdOtpPut(customerIdType, customerId, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIdType** | **String**|  | 
 **customerId** | **Number**| id of the customer; currently only mobile number of the customer can be used | 
 **initiatorId** | **String**| partner id from where the request has been initiated | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="customersCustomerIdTypecustomerIdPut"></a>
# **customersCustomerIdTypecustomerIdPut**
> InlineResponse2001 customersCustomerIdTypecustomerIdPut(customerIdType, customerId, developerKeyname, initiatorId, opts)

Create Customer

Onboard a new customer to enable him/her to transact

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.CustomersApi();

var customerIdType = "customerIdType_example"; // String | 

var customerId = 789; // Number | id of the customer; currently only mobile number of the customer can be used

var developerKey = "developerKey_example"; // String | Your unique API key that will authenticate your request

var name = "name_example"; // String | name of customer

var initiatorId = 56; // Number | partner id from where the request has been initiated

var opts = { 
  'secretKey': "secretKey_example", // String | refer to authentication section
  'secretKeyTimestamp': "secretKeyTimestamp_example" // String | refer to authentication section
  'dob': new Date("2013-10-20T19:20:30+01:00"), // Date | date of birth of the customer as per id
  'gender': 56, // Number | 
  'addressLine1': "addressLine1_example", // String | 
  'nationality': "nationality_example", // String | 
  'idProofTypeId': "idProofTypeId_example", // String | 
  'idProof': "idProof_example", // String | 
  'file1': "/path/to/file.txt", // File | 
  'file2': "/path/to/file.txt", // File | 
  'incomeSource': "incomeSource_example", // String | 
  'remittanceReason': "remittanceReason_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersCustomerIdTypecustomerIdPut(customerIdType, customerId, developerKeyname, initiatorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIdType** | **String**|  | 
 **customerId** | **Number**| id of the customer; currently only mobile number of the customer can be used | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **name** | **String**| name of customer | 
 **initiatorId** | **Number**| partner id from where the request has been initiated | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 
 **dob** | **Date**| date of birth of the customer as per id | [optional] 
 **gender** | **Number**|  | [optional] 
 **addressLine1** | **String**|  | [optional] 
 **nationality** | **String**|  | [optional] 
 **idProofTypeId** | **String**|  | [optional] 
 **idProof** | **String**|  | [optional] 
 **file1** | **File**|  | [optional] 
 **file2** | **File**|  | [optional] 
 **incomeSource** | **String**|  | [optional] 
 **remittanceReason** | **String**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="customersVerificationOtpotpPut"></a>
# **customersVerificationOtpotpPut**
> InlineResponse2002 customersVerificationOtpotpPut(otp, customerIdType, customerId, initiatorId, developerKey, opts)

Verify Customer Identity

Verify a customer&#39;s mobile number via OTP

### Example
```javascript
var TransferMoney = require('transfer_money');
var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix = 'Token';

var apiInstance = new TransferMoney.CustomersApi();

var otp = 789; // Number | 

var customerIdType = "mobile_number"; // String | 

var customerId = 789; // Number | id of the customer; currently only mobile number of the customer can be used

var initiatorId = "initiatorId_example"; // String | partner id from where the request has been initiated

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
apiInstance.customersVerificationOtpotpPut(otp, customerIdType, customerId, initiatorId, developerKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otp** | **Number**|  | 
 **customerIdType** | **String**|  | [default to mobile_number]
 **customerId** | **Number**| id of the customer; currently only mobile number of the customer can be used | 
 **initiatorId** | **String**| partner id from where the request has been initiated | 
 **developerKey** | **String**| Your unique API key that will authenticate your request | 
 **secretKey** | **String**| refer to authentication section | [optional] 
 **secretKeyTimestamp** | **String**| refer to authentication section | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[developer_key](../README.md#developer_key)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

