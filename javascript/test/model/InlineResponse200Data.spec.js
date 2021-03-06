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
    instance = new TransferMoney.InlineResponse200Data();
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

  describe('InlineResponse200Data', function() {
    it('should create an instance of InlineResponse200Data', function() {
      // uncomment below and update the code to test InlineResponse200Data
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be.a(TransferMoney.InlineResponse200Data);
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be();
    });

    it('should have the property customerIdType (base name: "customer_id_type")', function() {
      // uncomment below and update the code to test the property customerIdType
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be();
    });

    it('should have the property stateDesc (base name: "state_desc")', function() {
      // uncomment below and update the code to test the property stateDesc
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be();
    });

    it('should have the property mobile (base name: "mobile")', function() {
      // uncomment below and update the code to test the property mobile
      //var instane = new TransferMoney.InlineResponse200Data();
      //expect(instance).to.be();
    });

  });

}));
