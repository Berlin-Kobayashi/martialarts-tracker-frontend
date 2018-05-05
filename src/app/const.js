import Technique from "../../client/src/model/Technique";
import ExerciseData from "../../client/src/model/ExerciseData";
import {ApiClient, DefaultApi} from '../../client/src/index';
import Method from "../../client/src/model/Method";
import MethodReferences from "../../client/src/model/MethodReferences";

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

const api = new DefaultApi(client);

export const typeString = "string";
export const entities = [{
    "dialogName": "technique",
    "headerName": "techniques",
    "columns": [
        "name",
        "kind"
    ],
    "data": [
        {
            "name": "name",
            "type": typeString,
            "options": []
        },
        {
            "name": "kind",
            "type": typeString,
            "options": []
        },
        {
            "name": "description",
            "type": typeString,
            "options": {
                "multiLine": true
            }
        }
    ],
    "references": [],
    "client": {
        "new": function (data, references, callback) {
            let technique = new Technique();
            technique.data = ExerciseData.constructFromObject(data);

            let httpCallback = function (error, data) {
                if (error) {
                    alert(error);
                } else {
                    callback("technique", data);
                }
            };

            api.techniquePost(technique, httpCallback)
        },
        "getAll": function (callback) {
            let httpCallback = function (error, data) {
                if (error) {
                    alert(error);
                } else {
                    callback("technique", data);
                }
            };

            api.techniqueGet(httpCallback);
        }
    }
},
    {
        "dialogName": "method",
        "headerName": "methods",
        "columns": [
            "name",
            "kind"
        ],
        "data": [
            {
                "name": "name",
                "type": typeString,
                "options": []
            },
            {
                "name": "kind",
                "type": typeString,
                "options": []
            },
            {
                "name": "description",
                "type": typeString,
                "options": {
                    "multiLine": true
                }
            }
        ],
        "references": [
            {
                "name": "covers",
                "entity": "technique"
            }
        ],
        "client": {
            "new": function (data, references, callback) {
                let method = new Method();
                method.data = ExerciseData.constructFromObject(data);
                method.references = MethodReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("method", data);
                    }
                };

                api.methodPost(method, httpCallback)
            },
            "getAll": function (callback) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("method", data);
                    }
                };

                api.methodGet(httpCallback);
            }
        }
    }
];
