import Technique from "../../client/src/model/Technique";
import ExerciseData from "../../client/src/model/ExerciseData";
import {ApiClient, DefaultApi} from '../../client/src/index';
import Method from "../../client/src/model/Method";
import MethodReferences from "../../client/src/model/MethodReferences";
import Exercise from "../../client/src/model/Exercise";
import Trainingunit from "../../client/src/model/Trainingunit";
import TrainingunitData from "../../client/src/model/TrainingunitData";
import TrainingunitReferences from "../../client/src/model/TrainingunitReferences";

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

const api = new DefaultApi(client);

export const typeString = "string";
export const typeNumber = "number";
export const typeDate = "date";

export const entities = [
    {
        "dialogName": "trainingunit",
        "headerName": "diary",
        "columns": [
            "start",
            "series"
        ],
        "data": [
            {
                "name": "series",
                "type": typeString,
                "options": {}
            },
            {
                "name": "start",
                "type": typeDate,
                "options": {}
            },
            {
                "name": "minutes",
                "type": typeNumber,
                "options": {}
            },
        ],
        "references": [
            {
                "name": "techniques",
                "entity": "technique"
            },
            {
                "name": "exercises",
                "entity": "exercise"
            },
            {
                "name": "methods",
                "entity": "method"
            }
        ],
        "client": {
            "new": function (data, references, callback) {
                let trainingUnit = new Trainingunit();
                trainingUnit.data = TrainingunitData.constructFromObject(data);
                trainingUnit.references = TrainingunitReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("trainingunit", data);
                    }
                };

                api.trainingunitPost(trainingUnit, httpCallback)
            },
            "getAll": function (callback) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("trainingunit", data);
                    }
                };

                api.trainingunitGet(httpCallback);
            },
            "update": function (id, data, references, callback) {
                let trainingUnit = new Trainingunit();
                trainingUnit.data = TrainingunitData.constructFromObject(data);
                trainingUnit.references = TrainingunitReferences.constructFromObject(references);
                trainingUnit.id = id;

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("exercise", data);
                    }
                };

                api.trainingunitTrainingunitIdPut(id, trainingUnit, httpCallback)
            }
        }
    },
    {
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
                "options": {}
            },
            {
                "name": "kind",
                "type": typeString,
                "options": {}
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
            },
            "update": function (id, data, references, callback) {
                let technique = new Technique();
                technique.data = ExerciseData.constructFromObject(data);
                technique.id = id;

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("exercise", data);
                    }
                };

                api.techniqueTechniqueIdPut(id, technique, httpCallback)
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
                "options": {}
            },
            {
                "name": "kind",
                "type": typeString,
                "options": {}
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
            },
            "update": function (id, data, references, callback) {
                let method = new Method();
                method.data = ExerciseData.constructFromObject(data);
                method.references = MethodReferences.constructFromObject(references);
                method.id = id;

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("exercise", data);
                    }
                };

                api.methodMethodIdPut(id, method, httpCallback)
            }
        }
    }, {
        "dialogName": "exercise",
        "headerName": "exercises",
        "columns": [
            "name",
            "kind"
        ],
        "data": [
            {
                "name": "name",
                "type": typeString,
                "options": {}
            },
            {
                "name": "kind",
                "type": typeString,
                "options": {}
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
                let exercise = new Exercise();
                exercise.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("exercise", data);
                    }
                };

                api.exercisePost(exercise, httpCallback)
            },
            "getAll": function (callback) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("exercise", data);
                    }
                };

                api.exerciseGet(httpCallback);
            }, "update": function (id, data, references, callback) {
                let exercise = new Exercise();
                exercise.id = id;
                exercise.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        callback("exercise", data);
                    }
                };

                api.exerciseExerciseIdPut(id, exercise, httpCallback)
            }
        }
    },
];
