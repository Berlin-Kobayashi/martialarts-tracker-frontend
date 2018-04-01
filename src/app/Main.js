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
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
            data: [],
            newOpen: false
        };

        this.handleActive = this.handleActive.bind(this);
        this.renderTableBody = this.renderTableBody.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.handleOpenNew = this.handleOpenNew.bind(this);
        this.handleCloseNew = this.handleCloseNew.bind(this);
    }

    componentDidMount() {
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

    handleOpenNew() {
        this.setState({newOpen: true});
    }

    handleCloseNew() {
        this.setState({newOpen: false});
    }

    render() {
        const newActions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleCloseNew}
            />,
        ];

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
                    <Table height={"500px"}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>{this.state.entity == "Training Units" ? "Series" : "Name"}</TableHeaderColumn>
                                <TableHeaderColumn>{this.state.entity == "Training Units" ? "Date" : "Kind"}</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        {this.renderTableBody()}
                    </Table>
                    <FloatingActionButton onClick={this.handleOpenNew}>
                        <ContentAdd/>
                    </FloatingActionButton>
                    <Dialog
                        title="Dialog With Date Picker"
                        actions={newActions}
                        modal={false}
                        open={this.state.newOpen}
                        onRequestClose={this.handleCloseNew}
                    >
                        Open a Date Picker dialog from within a dialog.
                        <DatePicker hintText="Date Picker"/>
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
