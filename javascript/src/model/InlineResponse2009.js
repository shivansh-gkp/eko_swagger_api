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
    define(['ApiClient', 'model/InlineResponse2009Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2009Data'));
  } else {
    // Browser globals (root is window)
    if (!root.TransferMoney) {
      root.TransferMoney = {};
    }
    root.TransferMoney.InlineResponse2009 = factory(root.TransferMoney.ApiClient, root.TransferMoney.InlineResponse2009Data);
  }
}(this, function(ApiClient, InlineResponse2009Data) {
  'use strict';




  /**
   * The InlineResponse2009 model module.
   * @module model/InlineResponse2009
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2009</code>.
   * @alias module:model/InlineResponse2009
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('response_type_id')) {
        obj['response_type_id'] = ApiClient.convertToType(data['response_type_id'], 'Number');
      }
      if (data.hasOwnProperty('response_status_id')) {
        obj['response_status_id'] = ApiClient.convertToType(data['response_status_id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = InlineResponse2009Data.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Number} response_type_id
   */
  exports.prototype['response_type_id'] = undefined;
  /**
   * @member {Number} response_status_id
   */
  exports.prototype['response_status_id'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse2009Data} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


