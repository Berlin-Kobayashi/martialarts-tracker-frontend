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


import ApiClient from '../ApiClient';
import ExerciseData from './ExerciseData';





/**
* The Exercise model module.
* @module model/Exercise
* @version 0.0.1
*/
export default class Exercise {
    /**
    * Constructs a new <code>Exercise</code>.
    * @alias module:model/Exercise
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Exercise</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Exercise} obj Optional instance to populate.
    * @return {module:model/Exercise} The populated <code>Exercise</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Exercise();

            
            
            

            if (data.hasOwnProperty('data')) {
                obj['data'] = ExerciseData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ExerciseData} data
    */
    data = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {Object} references
    */
    references = undefined;








}

