/**
 * martialarts-tracker
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
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
    factory(root.expect, root.MartialartsTracker);
  }
}(this, function(expect, MartialartsTracker) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MartialartsTracker.MethodExpandedReferencesCovers();
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

  describe('MethodExpandedReferencesCovers', function() {
    it('should create an instance of MethodExpandedReferencesCovers', function() {
      // uncomment below and update the code to test MethodExpandedReferencesCovers
      //var instance = new MartialartsTracker.MethodExpandedReferencesCovers();
      //expect(instance).to.be.a(MartialartsTracker.MethodExpandedReferencesCovers);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new MartialartsTracker.MethodExpandedReferencesCovers();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MartialartsTracker.MethodExpandedReferencesCovers();
      //expect(instance).to.be();
    });

    it('should have the property references (base name: "references")', function() {
      // uncomment below and update the code to test the property references
      //var instance = new MartialartsTracker.MethodExpandedReferencesCovers();
      //expect(instance).to.be();
    });

  });

}));
