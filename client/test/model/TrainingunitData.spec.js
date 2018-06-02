/**
 * martialarts-tracker
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    factory(root.expect, root.MartialartsTracker);
  }
}(this, function(expect, MartialartsTracker) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MartialartsTracker.TrainingunitData();
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

  describe('TrainingunitData', function() {
    it('should create an instance of TrainingunitData', function() {
      // uncomment below and update the code to test TrainingunitData
      //var instane = new MartialartsTracker.TrainingunitData();
      //expect(instance).to.be.a(MartialartsTracker.TrainingunitData);
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instane = new MartialartsTracker.TrainingunitData();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MartialartsTracker.TrainingunitData();
      //expect(instance).to.be();
    });

    it('should have the property series (base name: "series")', function() {
      // uncomment below and update the code to test the property series
      //var instane = new MartialartsTracker.TrainingunitData();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new MartialartsTracker.TrainingunitData();
      //expect(instance).to.be();
    });

  });

}));
