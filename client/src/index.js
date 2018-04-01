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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Exercise', 'model/ExerciseData', 'model/ExerciseExpanded', 'model/ExerciseReferencedBy', 'model/ExerciseReferencedByTrainingunit', 'model/Method', 'model/MethodExpanded', 'model/MethodExpandedReferences', 'model/MethodExpandedReferencesCovers', 'model/MethodReferencedBy', 'model/MethodReferencedByTrainingunit', 'model/MethodReferences', 'model/Technique', 'model/TechniqueExpanded', 'model/TechniqueReferencedBy', 'model/TechniqueReferencedByTrainingunit', 'model/Trainingunit', 'model/TrainingunitData', 'model/TrainingunitExpanded', 'model/TrainingunitExpandedReferences', 'model/TrainingunitExpandedReferencesMethods', 'model/TrainingunitReferencedBy', 'model/TrainingunitReferences', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Exercise'), require('./model/ExerciseData'), require('./model/ExerciseExpanded'), require('./model/ExerciseReferencedBy'), require('./model/ExerciseReferencedByTrainingunit'), require('./model/Method'), require('./model/MethodExpanded'), require('./model/MethodExpandedReferences'), require('./model/MethodExpandedReferencesCovers'), require('./model/MethodReferencedBy'), require('./model/MethodReferencedByTrainingunit'), require('./model/MethodReferences'), require('./model/Technique'), require('./model/TechniqueExpanded'), require('./model/TechniqueReferencedBy'), require('./model/TechniqueReferencedByTrainingunit'), require('./model/Trainingunit'), require('./model/TrainingunitData'), require('./model/TrainingunitExpanded'), require('./model/TrainingunitExpandedReferences'), require('./model/TrainingunitExpandedReferencesMethods'), require('./model/TrainingunitReferencedBy'), require('./model/TrainingunitReferences'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Exercise, ExerciseData, ExerciseExpanded, ExerciseReferencedBy, ExerciseReferencedByTrainingunit, Method, MethodExpanded, MethodExpandedReferences, MethodExpandedReferencesCovers, MethodReferencedBy, MethodReferencedByTrainingunit, MethodReferences, Technique, TechniqueExpanded, TechniqueReferencedBy, TechniqueReferencedByTrainingunit, Trainingunit, TrainingunitData, TrainingunitExpanded, TrainingunitExpandedReferences, TrainingunitExpandedReferencesMethods, TrainingunitReferencedBy, TrainingunitReferences, DefaultApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MartialartsTracker = require('index'); // See note below*.
   * var xxxSvc = new MartialartsTracker.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MartialartsTracker.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MartialartsTracker.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MartialartsTracker.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Exercise model constructor.
     * @property {module:model/Exercise}
     */
    Exercise: Exercise,
    /**
     * The ExerciseData model constructor.
     * @property {module:model/ExerciseData}
     */
    ExerciseData: ExerciseData,
    /**
     * The ExerciseExpanded model constructor.
     * @property {module:model/ExerciseExpanded}
     */
    ExerciseExpanded: ExerciseExpanded,
    /**
     * The ExerciseReferencedBy model constructor.
     * @property {module:model/ExerciseReferencedBy}
     */
    ExerciseReferencedBy: ExerciseReferencedBy,
    /**
     * The ExerciseReferencedByTrainingunit model constructor.
     * @property {module:model/ExerciseReferencedByTrainingunit}
     */
    ExerciseReferencedByTrainingunit: ExerciseReferencedByTrainingunit,
    /**
     * The Method model constructor.
     * @property {module:model/Method}
     */
    Method: Method,
    /**
     * The MethodExpanded model constructor.
     * @property {module:model/MethodExpanded}
     */
    MethodExpanded: MethodExpanded,
    /**
     * The MethodExpandedReferences model constructor.
     * @property {module:model/MethodExpandedReferences}
     */
    MethodExpandedReferences: MethodExpandedReferences,
    /**
     * The MethodExpandedReferencesCovers model constructor.
     * @property {module:model/MethodExpandedReferencesCovers}
     */
    MethodExpandedReferencesCovers: MethodExpandedReferencesCovers,
    /**
     * The MethodReferencedBy model constructor.
     * @property {module:model/MethodReferencedBy}
     */
    MethodReferencedBy: MethodReferencedBy,
    /**
     * The MethodReferencedByTrainingunit model constructor.
     * @property {module:model/MethodReferencedByTrainingunit}
     */
    MethodReferencedByTrainingunit: MethodReferencedByTrainingunit,
    /**
     * The MethodReferences model constructor.
     * @property {module:model/MethodReferences}
     */
    MethodReferences: MethodReferences,
    /**
     * The Technique model constructor.
     * @property {module:model/Technique}
     */
    Technique: Technique,
    /**
     * The TechniqueExpanded model constructor.
     * @property {module:model/TechniqueExpanded}
     */
    TechniqueExpanded: TechniqueExpanded,
    /**
     * The TechniqueReferencedBy model constructor.
     * @property {module:model/TechniqueReferencedBy}
     */
    TechniqueReferencedBy: TechniqueReferencedBy,
    /**
     * The TechniqueReferencedByTrainingunit model constructor.
     * @property {module:model/TechniqueReferencedByTrainingunit}
     */
    TechniqueReferencedByTrainingunit: TechniqueReferencedByTrainingunit,
    /**
     * The Trainingunit model constructor.
     * @property {module:model/Trainingunit}
     */
    Trainingunit: Trainingunit,
    /**
     * The TrainingunitData model constructor.
     * @property {module:model/TrainingunitData}
     */
    TrainingunitData: TrainingunitData,
    /**
     * The TrainingunitExpanded model constructor.
     * @property {module:model/TrainingunitExpanded}
     */
    TrainingunitExpanded: TrainingunitExpanded,
    /**
     * The TrainingunitExpandedReferences model constructor.
     * @property {module:model/TrainingunitExpandedReferences}
     */
    TrainingunitExpandedReferences: TrainingunitExpandedReferences,
    /**
     * The TrainingunitExpandedReferencesMethods model constructor.
     * @property {module:model/TrainingunitExpandedReferencesMethods}
     */
    TrainingunitExpandedReferencesMethods: TrainingunitExpandedReferencesMethods,
    /**
     * The TrainingunitReferencedBy model constructor.
     * @property {module:model/TrainingunitReferencedBy}
     */
    TrainingunitReferencedBy: TrainingunitReferencedBy,
    /**
     * The TrainingunitReferences model constructor.
     * @property {module:model/TrainingunitReferences}
     */
    TrainingunitReferences: TrainingunitReferences,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
