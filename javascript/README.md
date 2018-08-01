# transfer_money

TransferMoney - JavaScript client for transfer_money
An API depicting the working of EKO platform
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install transfer_money --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your transfer_money from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('transfer_money')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/transfer_money
then install it via:

```shell
    npm install YOUR_USERNAME/transfer_money --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TransferMoney = require('transfer_money');

var defaultClient = TransferMoney.ApiClient.instance;

// Configure API key authorization: developer_key
var developer_key = defaultClient.authentications['developer_key'];
developer_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//developer_key.apiKeyPrefix['developer_key'] = "Token"

var api = new TransferMoney.BanksApi()

var bankCode = "bankCode_example"; // {String} 

var initiatorId = 789; // {Number} 

var developerKey = "developerKey_example"; // {String} Your unique API key that will authenticate your request

var opts = { 
  'ifsc': "ifsc_example", // {String} 
  'secretKey': "secretKey_example", // {String} refer to authentication section
  'secretKeyTimestamp': "secretKeyTimestamp_example" // {String} refer to authentication section
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.banksGet(bankCode, initiatorId, developerKey, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://staging.eko.in:25004/ekoapi/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TransferMoney.BanksApi* | [**banksGet**](docs/BanksApi.md#banksGet) | **GET** /banks | Get Bank Details
*TransferMoney.BanksApi* | [**banksIdTypeidAccountsidPost**](docs/BanksApi.md#banksIdTypeidAccountsidPost) | **POST** /banks/id_type::id/accounts/:id | Verify Bank Account Details
*TransferMoney.BanksApi* | [**panVerifyPost**](docs/BanksApi.md#panVerifyPost) | **POST** /pan/verify | PAN verification
*TransferMoney.CustomersApi* | [**customersCustomerIdTypecustomerIdGet**](docs/CustomersApi.md#customersCustomerIdTypecustomerIdGet) | **GET** /customers/{customer_id_type}:{customer_id} | Get Customer Information
*TransferMoney.CustomersApi* | [**customersCustomerIdTypecustomerIdOtpPut**](docs/CustomersApi.md#customersCustomerIdTypecustomerIdOtpPut) | **PUT** /customers/{customer_id_type}:{customer_id}/otp | Resend Otp
*TransferMoney.CustomersApi* | [**customersCustomerIdTypecustomerIdPut**](docs/CustomersApi.md#customersCustomerIdTypecustomerIdPut) | **PUT** /customers/{customer_id_type}:{customer_id} | Create Customer
*TransferMoney.CustomersApi* | [**customersVerificationOtpotpPut**](docs/CustomersApi.md#customersVerificationOtpotpPut) | **PUT** /customers/verification/otp:{otp} | Verify Customer Identity
*TransferMoney.RecipientsApi* | [**customersCustomerIdTypecustomerIdRecipientsGet**](docs/RecipientsApi.md#customersCustomerIdTypecustomerIdRecipientsGet) | **GET** /customers/{customer_id_type}:{customer_id}/recipients | Get List of Recipients
*TransferMoney.RecipientsApi* | [**customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet**](docs/RecipientsApi.md#customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet) | **GET** /customers/{customer_id_type}:{customer_id}/recipients/recipient_id:{id} | Get Recipient Details
*TransferMoney.RecipientsApi* | [**customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut**](docs/RecipientsApi.md#customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut) | **PUT** /customers/:customer_id_type::customer_id/recipients/:recipients_id_type::id | Add Recipient
*TransferMoney.TransactionsApi* | [**transactionsPost**](docs/TransactionsApi.md#transactionsPost) | **POST** /transactions | Initiate Transaction
*TransferMoney.TransactionsApi* | [**transactionsidGet**](docs/TransactionsApi.md#transactionsidGet) | **GET** /transactions/:id | Get Transaction Status
*TransferMoney.TransactionsApi* | [**transactionsidRefundOtpPost**](docs/TransactionsApi.md#transactionsidRefundOtpPost) | **POST** /transactions/:id/refund/otp | Resend Refund OTP
*TransferMoney.TransactionsApi* | [**transactionsidRefundPost**](docs/TransactionsApi.md#transactionsidRefundPost) | **POST** /transactions/:id/refund | Refund


## Documentation for Models

 - [TransferMoney.InlineResponse200](docs/InlineResponse200.md)
 - [TransferMoney.InlineResponse2001](docs/InlineResponse2001.md)
 - [TransferMoney.InlineResponse20010](docs/InlineResponse20010.md)
 - [TransferMoney.InlineResponse20010Data](docs/InlineResponse20010Data.md)
 - [TransferMoney.InlineResponse20011](docs/InlineResponse20011.md)
 - [TransferMoney.InlineResponse20011Data](docs/InlineResponse20011Data.md)
 - [TransferMoney.InlineResponse20012](docs/InlineResponse20012.md)
 - [TransferMoney.InlineResponse20012Data](docs/InlineResponse20012Data.md)
 - [TransferMoney.InlineResponse20013](docs/InlineResponse20013.md)
 - [TransferMoney.InlineResponse20013Data](docs/InlineResponse20013Data.md)
 - [TransferMoney.InlineResponse2001Parameters](docs/InlineResponse2001Parameters.md)
 - [TransferMoney.InlineResponse2002](docs/InlineResponse2002.md)
 - [TransferMoney.InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [TransferMoney.InlineResponse2003](docs/InlineResponse2003.md)
 - [TransferMoney.InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [TransferMoney.InlineResponse2004](docs/InlineResponse2004.md)
 - [TransferMoney.InlineResponse2004Data](docs/InlineResponse2004Data.md)
 - [TransferMoney.InlineResponse2005](docs/InlineResponse2005.md)
 - [TransferMoney.InlineResponse2005Data](docs/InlineResponse2005Data.md)
 - [TransferMoney.InlineResponse2006](docs/InlineResponse2006.md)
 - [TransferMoney.InlineResponse2006Data](docs/InlineResponse2006Data.md)
 - [TransferMoney.InlineResponse2007](docs/InlineResponse2007.md)
 - [TransferMoney.InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [TransferMoney.InlineResponse2008](docs/InlineResponse2008.md)
 - [TransferMoney.InlineResponse2008Data](docs/InlineResponse2008Data.md)
 - [TransferMoney.InlineResponse2009](docs/InlineResponse2009.md)
 - [TransferMoney.InlineResponse2009Data](docs/InlineResponse2009Data.md)
 - [TransferMoney.InlineResponse200Data](docs/InlineResponse200Data.md)


## Documentation for Authorization


### developer_key

- **Type**: API key
- **API key parameter name**: developer_key
- **Location**: HTTP header
