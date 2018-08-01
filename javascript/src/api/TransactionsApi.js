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
    define(['ApiClient', 'model/InlineResponse20010', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20010'), require('../model/InlineResponse2007'), require('../model/InlineResponse2008'), require('../model/InlineResponse2009'));
  } else {
    // Browser globals (root is window)
    if (!root.TransferMoney) {
      root.TransferMoney = {};
    }
    root.TransferMoney.TransactionsApi = factory(root.TransferMoney.ApiClient, root.TransferMoney.InlineResponse20010, root.TransferMoney.InlineResponse2007, root.TransferMoney.InlineResponse2008, root.TransferMoney.InlineResponse2009);
  }
}(this, function(ApiClient, InlineResponse20010, InlineResponse2007, InlineResponse2008, InlineResponse2009) {
  'use strict';

  /**
   * Transactions service.
   * @module api/TransactionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new TransactionsApi. 
   * @alias module:api/TransactionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the transactionsPost operation.
     * @callback module:api/TransactionsApi~transactionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate Transaction
     * Initiate a Money Transfer transaction to a bank account via NEFT/IMPS
     * @param {Number} recipientId 
     * @param {Number} amount 
     * @param {Date} timeStamp 
     * @param {String} currency 
     * @param {Number} customerId 
     * @param {Number} initiatorId 
     * @param {Number} clientRefId 
     * @param {Number} state 
     * @param {Number} channel 
     * @param {String} developerKey Your unique API key that will authenticate your request
     * @param {Object} opts Optional parameters
     * @param {Number} opts.holdTimeout 
     * @param {Number} opts.merchantDocumentIdType 
     * @param {String} opts.merchantDocumentId value of the merchant document id
     * @param {String} opts.latlong 
     * @param {Number} opts.pincode 
     * @param {String} opts.userPan captures pan number of the user incase of cash collection services being used
     * @param {String} opts.secretKey refer to authentication section
     * @param {String} opts.secretKeyTimestamp refer to authentication section
     * @param {module:api/TransactionsApi~transactionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.transactionsPost = function(recipientId, amount, timeStamp, currency, customerId, initiatorId, clientRefId, state, channel, developerKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw new Error("Missing the required parameter 'recipientId' when calling transactionsPost");
      }

      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling transactionsPost");
      }

      // verify the required parameter 'timeStamp' is set
      if (timeStamp === undefined || timeStamp === null) {
        throw new Error("Missing the required parameter 'timeStamp' when calling transactionsPost");
      }

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling transactionsPost");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling transactionsPost");
      }

      // verify the required parameter 'initiatorId' is set
      if (initiatorId === undefined || initiatorId === null) {
        throw new Error("Missing the required parameter 'initiatorId' when calling transactionsPost");
      }

      // verify the required parameter 'clientRefId' is set
      if (clientRefId === undefined || clientRefId === null) {
        throw new Error("Missing the required parameter 'clientRefId' when calling transactionsPost");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling transactionsPost");
      }

      // verify the required parameter 'channel' is set
      if (channel === undefined || channel === null) {
        throw new Error("Missing the required parameter 'channel' when calling transactionsPost");
      }

      // verify the required parameter 'developerKey' is set
      if (developerKey === undefined || developerKey === null) {
        throw new Error("Missing the required parameter 'developerKey' when calling transactionsPost");
      }


      var pathParams = {
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
        'recipient_id': recipientId,
        'amount': amount,
        'time_stamp': timeStamp,
        'currency': currency,
        'customer_id': customerId,
        'initiator_id': initiatorId,
        'client_ref_id': clientRefId,
        'hold_timeout': opts['holdTimeout'],
        'state': state,
        'channel': channel,
        'merchant_document_id_type': opts['merchantDocumentIdType'],
        'merchant_document_id': opts['merchantDocumentId'],
        'latlong': opts['latlong'],
        'pincode': opts['pincode'],
        'user_pan': opts['userPan']
      };

      var authNames = ['developer_key'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/transactions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionsidGet operation.
     * @callback module:api/TransactionsApi~transactionsidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Transaction Status
     * Get the status of a Money Transfer transaction basis Eko TID or client-reference-ID
     * @param {Number} initiatorId 
     * @param {String} developerKey Your unique API key that will authenticate your request
     * @param {Object} opts Optional parameters
     * @param {String} opts.tid This can be Eko tid or partner&#39;s unique id
     * @param {String} opts.clientRefId 
     * @param {String} opts.secretKey refer to authentication section
     * @param {String} opts.secretKeyTimestamp refer to authentication section
     * @param {module:api/TransactionsApi~transactionsidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    this.transactionsidGet = function(initiatorId, developerKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'initiatorId' is set
      if (initiatorId === undefined || initiatorId === null) {
        throw new Error("Missing the required parameter 'initiatorId' when calling transactionsidGet");
      }

      // verify the required parameter 'developerKey' is set
      if (developerKey === undefined || developerKey === null) {
        throw new Error("Missing the required parameter 'developerKey' when calling transactionsidGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'tid': opts['tid'],
        'client_ref_id': opts['clientRefId'],
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
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/transactions/:id', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionsidRefundOtpPost operation.
     * @callback module:api/TransactionsApi~transactionsidRefundOtpPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resend Refund OTP
     * Resend the OTP to the customer to initiate the refund process
     * @param {Number} id tid of the transaction for which refund needs to be initiated
     * @param {Number} initiatorId partner id from where the request has been initiated
     * @param {String} developerKey Your unique API key that will authenticate your request
     * @param {Object} opts Optional parameters
     * @param {String} opts.secretKey refer to authentication section
     * @param {String} opts.secretKeyTimestamp refer to authentication section
     * @param {module:api/TransactionsApi~transactionsidRefundOtpPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */
    this.transactionsidRefundOtpPost = function(id, initiatorId, developerKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling transactionsidRefundOtpPost");
      }

      // verify the required parameter 'initiatorId' is set
      if (initiatorId === undefined || initiatorId === null) {
        throw new Error("Missing the required parameter 'initiatorId' when calling transactionsidRefundOtpPost");
      }

      // verify the required parameter 'developerKey' is set
      if (developerKey === undefined || developerKey === null) {
        throw new Error("Missing the required parameter 'developerKey' when calling transactionsidRefundOtpPost");
      }


      var pathParams = {
        'id': id
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
        'initiator_id': initiatorId
      };

      var authNames = ['developer_key'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/transactions/:id/refund/otp', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionsidRefundPost operation.
     * @callback module:api/TransactionsApi~transactionsidRefundPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund
     * Initiate refund to the customer for a failed cash to digital transaction
     * @param {String} tid This can be Eko tid or partner&#39;s unique reference id
     * @param {String} clientRefId unique id of transaction on client platform
     * @param {Number} initiatorId 
     * @param {Number} otp OTP shared with customer on the registered mobile number
     * @param {Number} state current status of the transaction; 1 denotes &#39;commit&#39;
     * @param {String} developerKey Your unique API key that will authenticate your request
     * @param {Object} opts Optional parameters
     * @param {String} opts.secretKey refer to authentication section
     * @param {String} opts.secretKeyTimestamp refer to authentication section
     * @param {module:api/TransactionsApi~transactionsidRefundPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    this.transactionsidRefundPost = function(tid, clientRefId, initiatorId, otp, state, developerKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tid' is set
      if (tid === undefined || tid === null) {
        throw new Error("Missing the required parameter 'tid' when calling transactionsidRefundPost");
      }

      // verify the required parameter 'clientRefId' is set
      if (clientRefId === undefined || clientRefId === null) {
        throw new Error("Missing the required parameter 'clientRefId' when calling transactionsidRefundPost");
      }

      // verify the required parameter 'initiatorId' is set
      if (initiatorId === undefined || initiatorId === null) {
        throw new Error("Missing the required parameter 'initiatorId' when calling transactionsidRefundPost");
      }

      // verify the required parameter 'otp' is set
      if (otp === undefined || otp === null) {
        throw new Error("Missing the required parameter 'otp' when calling transactionsidRefundPost");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling transactionsidRefundPost");
      }

      // verify the required parameter 'developerKey' is set
      if (developerKey === undefined || developerKey === null) {
        throw new Error("Missing the required parameter 'developerKey' when calling transactionsidRefundPost");
      }


      var pathParams = {
        'tid': tid,
        'client_ref_id': clientRefId
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
        'otp': otp,
        'state': state
      };

      var authNames = ['developer_key'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/transactions/:id/refund', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));