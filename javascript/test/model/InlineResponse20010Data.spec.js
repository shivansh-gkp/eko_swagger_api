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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TransferMoney);
  }
}(this, function(expect, TransferMoney) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TransferMoney.InlineResponse20010Data();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse20010Data', function() {
    it('should create an instance of InlineResponse20010Data', function() {
      // uncomment below and update the code to test InlineResponse20010Data
      //var instane = new TransferMoney.InlineResponse20010Data();
      //expect(instance).to.be.a(TransferMoney.InlineResponse20010Data);
    });

    it('should have the property tid (base name: "tid")', function() {
      // uncomment below and update the code to test the property tid
      //var instane = new TransferMoney.InlineResponse20010Data();
      //expect(instance).to.be();
    });

    it('should have the property otp (base name: "otp")', function() {
      // uncomment below and update the code to test the property otp
      //var instane = new TransferMoney.InlineResponse20010Data();
      //expect(instance).to.be();
    });

  });

}));