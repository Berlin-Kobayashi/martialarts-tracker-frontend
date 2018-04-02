import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs, {Tab} from 'material-ui/Tabs';
import {ApiClient, DefaultApi} from '../../client/src/index';
import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import AppBar from 'material-ui/AppBar';
import TechniqueTable from "./techniqueTable";

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

let api = new DefaultApi(client);

const tabTrainingUnit = 0;
const tabTechnique = 1;
const tabMethod = 2;
const tabExercise = 3;

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            trainingUnits: [],
            techniques: [],
            methods: [],
            exercises: [],
            tab: tabTrainingUnit
        };

        this.handleTabChange = this.handleTabChange.bind(this);
        this.fetchTrainingUnits = this.fetchTrainingUnits.bind(this);
        this.fetchTechniques = this.fetchTechniques.bind(this);
        this.fetchMethods = this.fetchMethods.bind(this);
        this.fetchExcercises = this.fetchExcercises.bind(this);
        this.createTechnique = this.createTechnique.bind(this);
        this.renderTable = this.renderTable.bind(this);
    }

    componentDidMount() {
        this.fetchTrainingUnits();
        this.fetchTechniques();
        this.fetchMethods();
        this.fetchExcercises();
    }

    fetchTrainingUnits() {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({trainingUnits: data});
            }
        };

        callback = callback.bind(this);
        api.trainingunitGet(callback);
    }

    fetchTechniques() {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({techniques: data});
            }
        };

        callback = callback.bind(this);
        api.techniqueGet(callback);
    }

    fetchMethods() {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({methods: data});
            }
        };

        callback = callback.bind(this);
        api.methodGet(callback);
    }

    fetchExcercises() {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({exercises: data});
            }
        };

        callback = callback.bind(this);
        api.exerciseGet(callback);
    }

    createTechnique(technique) {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({techniques: [...this.state.techniques, data]});
            }
        };

        callback = callback.bind(this);
        api.techniquePost(technique, callback)
    }

    handleTabChange(event, value) {
        this.setState({tab: value});

        switch (value) {
            case tabTrainingUnit :
                this.fetchTrainingUnits();
                break;
            case tabTechnique :
                this.fetchTechniques();
                break;
            case tabMethod :
                this.fetchMethods();
                break;
            case tabExercise :
                this.fetchExcercises();
                break;
        }
    }

    renderTable() {
        return <TechniqueTable onSubmit={this.createTechnique} data={this.state.techniques}/>
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar position="static">
                        <Tabs fullWidth centered value={this.state.tab} onChange={this.handleTabChange}>
                            <Tab label="Training Units"/>
                            <Tab label="Techniques"/>
                            <Tab label="Methods"/>
                            <Tab label="Exercises"/>
                        </Tabs>
                    </AppBar>
                    {this.renderTable()}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
