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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TransferMoney) {
      root.TransferMoney = {};
    }
    root.TransferMoney.InlineResponse200Data = factory(root.TransferMoney.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse200Data model module.
   * @module model/InlineResponse200Data
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse200Data</code>.
   * @alias module:model/InlineResponse200Data
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>InlineResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Data} The populated <code>InlineResponse200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('customer_id_type')) {
        obj['customer_id_type'] = ApiClient.convertToType(data['customer_id_type'], 'String');
      }
      if (data.hasOwnProperty('state_desc')) {
        obj['state_desc'] = ApiClient.convertToType(data['state_desc'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} customer_id_type
   */
  exports.prototype['customer_id_type'] = undefined;
  /**
   * @member {String} state_desc
   */
  exports.prototype['state_desc'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;



  return exports;
}));


