var MartialartsTracker = require('../client/src/index.js');

var client = new MartialartsTracker.ApiClient();
client.basePath = 'http://localhost:8888';

var api = new MartialartsTracker.DefaultApi(client);

var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log(response);
    }
};

technique = {
    "id": "bc5ac88f-3d3f-4a1a-83b2-92f847eb6ae6",
    "data": {
        "kind": "Language",
        "name": "Go",
        "description": "compiled, concurrent, imperative, structured"
    }
};

api.techniquePost(technique,callback);
