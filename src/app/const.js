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
            "type": typeString
        },
        {
            "name": "description",
            "type": typeString
        },
        {
            "name": "kind",
            "type": typeString
        }
    ],
    "references": [],
        "client": {
        "new": function (data, callback) {
            let technique = new Technique();
            technique.data = new ExerciseData();
            technique.data.name = data.data.name;
            technique.data.kind = data.data.kind;
            technique.data.description = data.data.description;

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
