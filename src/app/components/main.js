import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs, {Tab} from 'material-ui/Tabs';
import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import {entities} from "../const";
import EntityTableContainer from "../containers/entityTableContainer";

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            tab: 0
        };

        this.handleTabChange = this.handleTabChange.bind(this);
        this.renderTable = this.renderTable.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    componentDidMount() {
        entities.map((entity) => entity.client.getAll(this.props.dispatch));
    }

    handleTabChange(event, value) {
        this.setState({tab: value});

        let entity = this.props.entities[this.state.tab];
        entity.client.getAll(this.props.dispatch);
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

        return <EntityTableContainer entity={entity}/>
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
    entities: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Main;
