import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tab, Tabs} from 'material-ui/Tabs';
import {ApiClient, DefaultApi} from '../../client/src/index';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

let api = new DefaultApi(client);

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            entity: "Training Units",
            data: []
        };

        this.handleActive = this.handleActive.bind(this);
        this.renderTableBody = this.renderTableBody.bind(this);
        this.fetchData = this.fetchData.bind(this);

        this.fetchData("Training Units")
    }

    fetchData(entity) {
        this.setState({entity: entity});
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({data: data});
            }
        };

        callback = callback.bind(this);

        switch (entity) {
            case "Techniques" :
                api.techniqueGet(callback);
                break;
            case "Training Units" :
                api.trainingunitGet(callback);
                break;
            case "Methods" :
                api.methodGet(callback);
                break;
            case "Exercises" :
                api.exerciseGet(callback);
                break;
        }
    }

    handleActive(tab) {
        let label = tab.props.label;
        this.fetchData(label)
    }

    renderTableBody() {
        return (
            <TableBody displayRowCheckbox={false}>
                {this.state.data.map((row) =>
                    <TableRow>
                        <TableRowColumn>{this.state.entity == "Training Units" ? row.data.series : row.data.name}</TableRowColumn>
                        <TableRowColumn>{this.state.entity == "Training Units" ? row.data.start : row.data.kind}</TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        );

    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Tabs>
                        <Tab label="Training Units" onActive={this.handleActive}>
                        </Tab>
                        <Tab label="Techniques" onActive={this.handleActive}>
                        </Tab>
                        <Tab label="Methods" onActive={this.handleActive}>
                        </Tab>
                        <Tab label="Exercises" onActive={this.handleActive}>
                        </Tab>
                    </Tabs>
                    <Table>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>{this.state.entity == "Training Units" ? "Series" : "Name"}</TableHeaderColumn>
                                <TableHeaderColumn>{this.state.entity == "Training Units" ? "Date" : "Kind"}</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        {this.renderTableBody()}
                    </Table>
                    <FloatingActionButton>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
