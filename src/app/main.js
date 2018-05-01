import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs, {Tab} from 'material-ui/Tabs';
import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import EntityTable from "./entityTable";

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        let data = {};
        this.props.entities.map((row) => data[row.dialogName] = []);

        this.state = {
            // TODO make init generic
            data: data,
            tab: 0
        };

        this.handleTabChange = this.handleTabChange.bind(this);
        this.setData = this.setData.bind(this);
        this.addData = this.addData.bind(this);
        this.renderTable = this.renderTable.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    // TODO try with willMount
    componentDidMount() {
        this.props.entities.map((entity) => entity.client.getAll(this.setData))
    }

    setData(entityName, data) {
        let newData = this.state.data;
        newData[entityName] = data;
        this.setState({data: newData});
    }

    addData(entityName, data) {
        let newData = this.state.data;
        newData[entityName] = [...this.state.data[entityName], data];
        this.setState({data: newData});
    }

    handleTabChange(event, value) {
        this.setState({tab: value});

        let entity = this.props.entities[this.state.tab];
        entity.client.getAll(this.setData);
    }

    renderHeader() {
        return <AppBar position="static">
            <Tabs fullWidth centered value={this.state.tab} onChange={this.handleTabChange}>
                {this.props.entities.map((row, i) =>
                    <Tab label={row.headerName} key={i}/>
                )}
            </Tabs>
        </AppBar>;
    }

    renderTable() {
        let entity = this.props.entities[this.state.tab];

        return <EntityTable onSubmit={this.addData} data={this.state.data} entity={entity}/>
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    {this.renderHeader()}
                    {this.renderTable()}
                </div>
            </MuiThemeProvider>
        );
    }
}

Main.propTypes = {
    entities: PropTypes.array.isRequired
};

export default Main;
