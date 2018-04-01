import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import {ApiClient, DefaultApi, Technique} from '../../client/src/index';
import ExerciseData from "../../client/src/model/ExerciseData";

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

let api = new DefaultApi(client);

let callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log(response);
    }
};

let technique = new Technique();
technique.data = new ExerciseData();
technique.data.description = "abc";

api.techniquePost(technique,callback);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Main/>, document.getElementById('app'));
