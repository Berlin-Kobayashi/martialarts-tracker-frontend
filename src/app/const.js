import Technique from "../../client/src/model/Technique";
import ExerciseData from "../../client/src/model/ExerciseData";
import {ApiClient, DefaultApi} from '../../client/src/index';

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
            "name": "description",
            "type": typeString,
            "options": {
                "multiLine": true
            }
        },
        {
            "name": "kind",
            "type": typeString,
            "options": []
        }
    ],
    "references": [],
    "client": {
        "new": function (data, references, callback) {
            let technique = new Technique();
            technique.data = new ExerciseData();
            technique.data.name = data.name;
            technique.data.kind = data.kind;
            technique.data.description = data.description;

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
}];
