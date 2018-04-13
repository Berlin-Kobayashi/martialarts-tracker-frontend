import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs, {Tab} from 'material-ui/Tabs';
import {ApiClient, DefaultApi} from '../../client/src/index';
import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import AppBar from 'material-ui/AppBar';
import TechniqueTable from "./technique/techniqueTable";
import ExerciseTable from "./exercise/exerciseTable";
import TrainingUnitTable from "./trainingUnit/trainingUnitTable";
import MethodTable from "./method/methodTable";

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

function transformTrainingUnit(trainingUnit) {
    let startDate = new Date(Date.parse(trainingUnit.data.start));
    trainingUnit.data.start = startDate.toLocaleString();

    let endDate = new Date(Date.parse(trainingUnit.data.end));
    trainingUnit.data.end = endDate.toLocaleString();

    return trainingUnit;
}

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
        this.fetchExercises = this.fetchExercises.bind(this);
        this.createTechnique = this.createTechnique.bind(this);
        this.createExercise = this.createExercise.bind(this);
        this.createMethod = this.createMethod.bind(this);
        this.createTrainingUnit = this.createTrainingUnit.bind(this);
        this.renderTable = this.renderTable.bind(this);
    }

    componentDidMount() {
        this.fetchTrainingUnits();
        this.fetchTechniques();
        this.fetchMethods();
        this.fetchExercises();
    }

    fetchTrainingUnits() {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                data = data.map((row) => {
                    return transformTrainingUnit(row);
                });
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

    fetchExercises() {
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

    createExercise(exercise) {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({exercises: [...this.state.exercises, data]});
            }
        };

        callback = callback.bind(this);
        api.exercisePost(exercise, callback)
    }

    createMethod(method) {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({methods: [...this.state.methods, data]});
            }
        };

        callback = callback.bind(this);
        api.methodPost(method, callback)
    }

    createTrainingUnit(trainingUnit) {
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({trainingUnits: [...this.state.trainingUnits, transformTrainingUnit(data)]});
            }
        };

        callback = callback.bind(this);
        api.trainingunitPost(trainingUnit, callback)
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
                this.fetchExercises();
                break;
        }
    }

    renderTable() {
        switch (this.state.tab) {
            case tabTrainingUnit :
                return <TrainingUnitTable onSubmit={this.createTrainingUnit} data={this.state.trainingUnits}/>;
            case tabTechnique :
                return <TechniqueTable onSubmit={this.createTechnique} data={this.state.techniques}/>;
            case tabMethod :
                return <MethodTable onSubmit={this.createMethod} data={this.state.methods}/>;
            case tabExercise :
                return <ExerciseTable onSubmit={this.createExercise} data={this.state.exercises}/>;
        }
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
