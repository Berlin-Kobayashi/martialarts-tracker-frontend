import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import {ApiClient, DefaultApi} from '../../client/src/index';

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

let api = new DefaultApi(client);

let callback = function(error, data, response) {
    if (error) {
        alert(error);
    } else {
        alert(JSON.stringify(response.body));
    }
};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

function handleActive(tab) {
    api.techniqueGet(callback);
}

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Tabs>
                    <Tab label="Techniques" onActive={handleActive}>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

export default Main;
