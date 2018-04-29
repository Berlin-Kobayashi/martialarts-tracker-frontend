import React, {Component} from 'react';
import Dialog, {DialogActions, DialogContent, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';
import Trainingunit from "../../../client/src/model/Trainingunit";
import TrainingunitData from "../../../client/src/model/TrainingunitData";
import Autocomplete from "./../util/autocomplete";
import {getIdsByNames} from "../util/utils";
import TrainingunitReferences from "../../../client/src/model/TrainingunitReferences";

class NewTrainingUnitButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            start: "",
            minutes: "",
            series: "",
            techniques: [],
            methods: [],
            exercises: [],
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleSeriesChange = this.handleSeriesChange.bind(this);
        this.handleTechniquesChange = this.handleTechniquesChange.bind(this);
        this.handleMethodsChange = this.handleMethodsChange.bind(this);
        this.handleExercisesChange = this.handleExercisesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleStartChange(e) {
        let d = new Date(Date.parse(e.target.value));
        this.setState({start: d.toISOString()});
    }

    handleMinutesChange(e) {
        this.setState({minutes: e.target.value});
    }

    handleSeriesChange(e) {
        this.setState({series: e.target.value});
    }

    handleTechniquesChange(e) {
        this.setState({techniques: e});
    }

    handleMethodsChange(e) {
        this.setState({methods: e});
    }

    handleExercisesChange(e) {
        this.setState({exercises: e});
    }

    handleSubmit() {
        this.setState({open: false});

        let trainingUnit = new Trainingunit();
        trainingUnit.data = new TrainingunitData();
        trainingUnit.data.start = this.state.start;
        trainingUnit.data.minutes = parseInt(this.state.minutes);
        trainingUnit.data.series = this.state.series;

        trainingUnit.references = new TrainingunitReferences();
        trainingUnit.references.techniques = getIdsByNames(this.state.techniques, this.props.techniques);
        trainingUnit.references.methods = getIdsByNames(this.state.methods, this.props.methods);
        trainingUnit.references.exercises = getIdsByNames(this.state.exercises, this.props.exercises);

        this.props.onSubmit(trainingUnit);
    }

    render() {
        return (
            <div>
                <Button variant="fab" color="primary" aria-label="new" onClick={this.handleOpen}>
                    <AddIcon/>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="new-dialog-title"
                    fullScreen
                >
                    <DialogTitle id="new-dialog-title">New Training Unit</DialogTitle>
                    <DialogContent>
                        <div>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="series"
                                label="Series"
                                fullWidth
                                multiline
                                onChange={this.handleSeriesChange}
                            />
                        </div>
                        <div>
                            <TextField
                                margin="dense"
                                id="start"
                                label="Start"
                                // FIXME max/min can overflow the date waiting for new MUI date picker
                                type="datetime-local"
                                onChange={this.handleStartChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                margin="dense"
                                id="minutes"
                                label="Minutes"
                                type="number"
                                onChange={this.handleMinutesChange}
                            />
                        </div>
                        <Autocomplete
                            placeholder={"Techniques"}
                            id={"techniques"}
                            options={this.props.techniques.map((row) =>
                                row.data.name
                            )}
                            onChange={this.handleTechniquesChange}
                        />
                        <Autocomplete
                            placeholder={"Methods"}
                            id={"methods"}
                            options={this.props.methods.map((row) =>
                                row.data.name
                            )}
                            onChange={this.handleMethodsChange}
                        />
                        <Autocomplete
                            placeholder={"Exercises"}
                            id={"exercises"}
                            options={this.props.exercises.map((row) =>
                                row.data.name
                            )}
                            onChange={this.handleExercisesChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

NewTrainingUnitButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    techniques: PropTypes.array.isRequired,
    methods: PropTypes.array.isRequired,
    exercises: PropTypes.array.isRequired
};
export default NewTrainingUnitButton;
