import Technique from "../../client/src/model/Technique";
import ExerciseData from "../../client/src/model/ExerciseData";
import {ApiClient, DefaultApi} from '../../client/src/index';
import Method from "../../client/src/model/Method";
import MethodReferences from "../../client/src/model/MethodReferences";
import Exercise from "../../client/src/model/Exercise";
import Trainingunit from "../../client/src/model/Trainingunit";
import TrainingunitData from "../../client/src/model/TrainingunitData";
import TrainingunitReferences from "../../client/src/model/TrainingunitReferences";
import {addNew, getAll, remove, update} from "./actions";

let client = new ApiClient();
client.basePath = process.env.API;
client.defaultHeaders = {"Authorization" : process.env.TOKEN};

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
        "new": function () {
            let data = new Trainingunit();
            data.id = "";
            data.data = new TrainingunitData();
            data.references = new TrainingunitReferences();

            return data;
        },
        "client": {
            "new": function (data, references, dispatch) {
                let trainingUnit = new Trainingunit();
                trainingUnit.data = TrainingunitData.constructFromObject(data);
                trainingUnit.references = TrainingunitReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("trainingunit", data))
                    }
                };

                api.trainingunitPost(trainingUnit, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("trainingunit", data));
                    }
                };

                api.trainingunitGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let trainingUnit = new Trainingunit();
                trainingUnit.id = id;
                trainingUnit.data = TrainingunitData.constructFromObject(data);
                trainingUnit.references = TrainingunitReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("trainingunit", data))
                    }
                };

                api.trainingunitTrainingunitIdPut(id, trainingUnit, httpCallback)
            },
            "remove": function (id, dispatch) {
                let httpCallback = function (error) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(remove("trainingunit", id))
                    }
                };

                api.trainingunitTrainingunitIdDelete(id, httpCallback)
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
        "new": function () {
            let data = new Technique();
            data.id = "";
            data.data = new ExerciseData();
            data.references = {};

            return data;
        },
        "client": {
            "new": function (data, references, dispatch) {
                let technique = new Technique();
                technique.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("technique", data))
                    }
                };

                api.techniquePost(technique, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("technique", data));
                    }
                };

                api.techniqueGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let technique = new Technique();
                technique.id = id;
                technique.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("technique", data))
                    }
                };

                api.techniqueTechniqueIdPut(id, technique, httpCallback)
            },
            "remove": function (id, dispatch) {
                let httpCallback = function (error) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(remove("technique", id))
                    }
                };

                api.techniqueTechniqueIdDelete(id, httpCallback)
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
        "new": function () {
            let data = new Method();
            data.id = "";
            data.data = new ExerciseData();
            data.references = {};

            return data;
        },
        "client": {
            "new": function (data, references, dispatch) {
                let method = new Method();
                method.data = ExerciseData.constructFromObject(data);
                method.references = MethodReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("method", data))
                    }
                };

                api.methodPost(method, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("method", data));
                    }
                };

                api.methodGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let method = new Method();
                method.id = id;
                method.data = ExerciseData.constructFromObject(data);
                method.references = MethodReferences.constructFromObject(references);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("method", data))
                    }
                };

                api.methodMethodIdPut(id, method, httpCallback)
            },
            "remove": function (id, dispatch) {
                let httpCallback = function (error) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(remove("method", id))
                    }
                };

                api.methodMethodIdDelete(id, httpCallback)
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
        "new": function () {
            let data = new Exercise();
            data.id = "";
            data.data = new ExerciseData();
            data.references = {};

            return data;
        },
        "client": {
            "new": function (data, references, dispatch) {
                let exercise = new Exercise();
                exercise.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(addNew("exercise", data))
                    }
                };

                api.exercisePost(exercise, httpCallback)
            },
            "getAll": function (dispatch) {
                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(getAll("exercise", data))
                    }
                };

                api.exerciseGet(httpCallback);
            },
            "update": function (id, data, references, dispatch) {
                let exercise = new Exercise();
                exercise.id = id;
                exercise.data = ExerciseData.constructFromObject(data);

                let httpCallback = function (error, data) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(update("exercise", data))
                    }
                };

                api.exerciseExerciseIdPut(id, exercise, httpCallback)
            },
            "remove": function (id, dispatch) {
                let httpCallback = function (error) {
                    if (error) {
                        alert(error);
                    } else {
                        dispatch(remove("exercise", id))
                    }
                };

                api.exerciseExerciseIdDelete(id, httpCallback)
            }
        }
    },
];
