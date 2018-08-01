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
    instance = new TransferMoney.InlineResponse2009Data();
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

  describe('InlineResponse2009Data', function() {
    it('should create an instance of InlineResponse2009Data', function() {
      // uncomment below and update the code to test InlineResponse2009Data
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be.a(TransferMoney.InlineResponse2009Data);
    });

    it('should have the property refundedAmount (base name: "refunded_amount")', function() {
      // uncomment below and update the code to test the property refundedAmount
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property serviceTax (base name: "service_tax")', function() {
      // uncomment below and update the code to test the property serviceTax
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property tid (base name: "tid")', function() {
      // uncomment below and update the code to test the property tid
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property clientRefId (base name: "client_ref_id")', function() {
      // uncomment below and update the code to test the property clientRefId
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

    it('should have the property refundTid (base name: "refund_tid")', function() {
      // uncomment below and update the code to test the property refundTid
      //var instane = new TransferMoney.InlineResponse2009Data();
      //expect(instance).to.be();
    });

  });

}));