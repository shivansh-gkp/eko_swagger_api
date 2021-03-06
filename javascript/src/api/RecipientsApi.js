/**
 * transfer_money
 * An API depicting the working of EKO platform
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2004'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'));
  } else {
    // Browser globals (root is window)
    if (!root.TransferMoney) {
      root.TransferMoney = {};
    }
    root.TransferMoney.RecipientsApi = factory(root.TransferMoney.ApiClient, root.TransferMoney.InlineResponse2004, root.TransferMoney.InlineResponse2005, root.TransferMoney.InlineResponse2006);
  }
}(this, function(ApiClient, InlineResponse2004, InlineResponse2005, InlineResponse2006) {
  'use strict';

  /**
   * Recipients service.
   * @module api/RecipientsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new RecipientsApi. 
   * @alias module:api/RecipientsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the customersCustomerIdTypecustomerIdRecipientsGet operation.
     * @callback module:api/RecipientsApi~customersCustomerIdTypecustomerIdRecipientsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get List of Recipients
     * Get list of recipients for a customer
     * @param {String} customerIdType 
     * @param {Number} customerId id of the customer; currently only mobile number of the customer can be used
     * @param {Number} initiatorId partner id from where the request has been initiated
     * @param {String} developerKey Your unique API key that will authenticate your request
     * @param {Object} opts Optional parameters
     * @param {String} opts.secretKey refer to authentication section
     * @param {String} opts.secretKeyTimestamp refer to authentication section
     * @param {module:api/RecipientsApi~customersCustomerIdTypecustomerIdRecipientsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.customersCustomerIdTypecustomerIdRecipientsGet = function(customerIdType, customerId, initiatorId, developerKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerIdType' is set
      if (customerIdType === undefined || customerIdType === null) {
        throw new Error("Missing the required parameter 'customerIdType' when calling customersCustomerIdTypecustomerIdRecipientsGet");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling customersCustomerIdTypecustomerIdRecipientsGet");
      }

      // verify the required parameter 'initiatorId' is set
      if (initiatorId === undefined || initiatorId === null) {
        throw new Error("Missing the required parameter 'initiatorId' when calling customersCustomerIdTypecustomerIdRecipientsGet");
      }

      // verify the required parameter 'developerKey' is set
      if (developerKey === undefined || developerKey === null) {
        throw new Error("Missing the required parameter 'developerKey' when calling customersCustomerIdTypecustomerIdRecipientsGet");
      }


      var pathParams = {
        'customer_id_type': customerIdType,
        'customer_id': customerId
      };
      var queryParams = {
        'initiator_id': initiatorId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'developer_key': developerKey,
        'secret-key': opts['secretKey'],
        'secret-key-timestamp': opts['secretKeyTimestamp']
      };
      var formParams = {
      };

      var authNames = ['developer_key'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/customers/{customer_id_type}:{customer_id}/recipients', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet operation.
     * @callback module:api/RecipientsApi~customersCustomerIdTypecustomerIdRecipientsRecipientIdidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recipient Details
     * Get the details of a recipient, like name, account number, etc
     * @param {Number} id This is the unique recipient id that is returned when a recipient is added to the customer in Create recipient API
     * @param {String} customerIdType 
     * @param {Number} customerId id of the customer; currently only mobile number of the customer can be used
     * @param {Number} initiatorId partner id from where the request has been initiated
     * @param {String} developerKey Your unique API key that will authenticate your request
     * @param {Object} opts Optional parameters
     * @param {String} opts.secretKey refer to authentication section
     * @param {String} opts.secretKeyTimestamp refer to authentication section
     * @param {module:api/RecipientsApi~customersCustomerIdTypecustomerIdRecipientsRecipientIdidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet = function(id, customerIdType, customerId, initiatorId, developerKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet");
      }

      // verify the required parameter 'customerIdType' is set
      if (customerIdType === undefined || customerIdType === null) {
        throw new Error("Missing the required parameter 'customerIdType' when calling customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet");
      }

      // verify the required parameter 'initiatorId' is set
      if (initiatorId === undefined || initiatorId === null) {
        throw new Error("Missing the required parameter 'initiatorId' when calling customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet");
      }

      // verify the required parameter 'developerKey' is set
      if (developerKey === undefined || developerKey === null) {
        throw new Error("Missing the required parameter 'developerKey' when calling customersCustomerIdTypecustomerIdRecipientsRecipientIdidGet");
      }


      var pathParams = {
        'id': id,
        'customer_id_type': customerIdType,
        'customer_id': customerId
      };
      var queryParams = {
        'initiator_id': initiatorId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'developer_key': developerKey,
        'secret-key': opts['secretKey'],
        'secret-key-timestamp': opts['secretKeyTimestamp']
      };
      var formParams = {
      };

      var authNames = ['developer_key'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/customers/{customer_id_type}:{customer_id}/recipients/recipient_id:{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut operation.
     * @callback module:api/RecipientsApi~customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Recipient
     * Add a new recipient or update an existing recipient for a customer
     * @param {String} id value of the recipient_id
     * @param {String} recipientIdType recipient_id_type can have the following parameters: a) acc_ifsc b) acc_bankcode (only applicable when IMPS service is available and IFSC is not required)
     * @param {String} customerIdType 
     * @param {Number} customerId id of the customer; currently only mobile number of the customer can be used
     * @param {Number} initiatorId id of the customer; currently only mobile number of the customer can be used
     * @param {Number} bankId a unique id for each bank has been allocated and that has to passed here
     * @param {String} recipientName name of the recipient
     * @param {Number} recipientMobile 
     * @param {Number} recipientType 
     * @param {String} developerKey Your unique API key that will authenticate your request
     * @param {Object} opts Optional parameters
     * @param {String} opts.secretKey refer to authentication section
     * @param {String} opts.secretKeyTimestamp refer to authentication section
     * @param {module:api/RecipientsApi~customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut = function(id, recipientIdType, customerIdType, customerId, initiatorId, bankId, recipientName, recipientMobile, recipientType, developerKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'recipientIdType' is set
      if (recipientIdType === undefined || recipientIdType === null) {
        throw new Error("Missing the required parameter 'recipientIdType' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'customerIdType' is set
      if (customerIdType === undefined || customerIdType === null) {
        throw new Error("Missing the required parameter 'customerIdType' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'initiatorId' is set
      if (initiatorId === undefined || initiatorId === null) {
        throw new Error("Missing the required parameter 'initiatorId' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'bankId' is set
      if (bankId === undefined || bankId === null) {
        throw new Error("Missing the required parameter 'bankId' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'recipientName' is set
      if (recipientName === undefined || recipientName === null) {
        throw new Error("Missing the required parameter 'recipientName' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'recipientMobile' is set
      if (recipientMobile === undefined || recipientMobile === null) {
        throw new Error("Missing the required parameter 'recipientMobile' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'recipientType' is set
      if (recipientType === undefined || recipientType === null) {
        throw new Error("Missing the required parameter 'recipientType' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }

      // verify the required parameter 'developerKey' is set
      if (developerKey === undefined || developerKey === null) {
        throw new Error("Missing the required parameter 'developerKey' when calling customerscustomerIdTypecustomerIdRecipientsrecipientsIdTypeidPut");
      }


      var pathParams = {
        'id': id,
        'recipient_id_type': recipientIdType,
        'customer_id_type': customerIdType,
        'customer_id': customerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'developer_key': developerKey,
        'secret-key': opts['secretKey'],
        'secret-key-timestamp': opts['secretKeyTimestamp']
      };
      var formParams = {
        'initiator_id': initiatorId,
        'bank_id': bankId,
        'recipient_name': recipientName,
        'recipient_mobile': recipientMobile,
        'recipient_type': recipientType
      };

      var authNames = ['developer_key'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/customers/:customer_id_type::customer_id/recipients/:recipients_id_type::id', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
