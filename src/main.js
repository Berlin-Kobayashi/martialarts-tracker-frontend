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
api.metaSwaggerGet(callback);
