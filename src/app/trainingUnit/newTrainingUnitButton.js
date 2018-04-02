import React, {Component} from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';
import Trainingunit from "../../../client/src/model/Trainingunit";
import TrainingunitData from "../../../client/src/model/TrainingunitData";

class NewTrainingUnitButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            start: "",
            end: "",
            series: ""
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleSeriesChange = this.handleSeriesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleStartChange(e) {
        this.setState({start: e.target.value});
    }

    handleEndChange(e) {
        this.setState({end: e.target.value});
    }

    handleSeriesChange(e) {
        this.setState({series: e.target.value});
    }

    handleSubmit() {
        this.setState({open: false});

        let trainingUnit = new Trainingunit();
        trainingUnit.data = new TrainingunitData();
        trainingUnit.data.start = this.state.start;
        trainingUnit.data.end = this.state.end;
        trainingUnit.data.series = this.state.series;

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
                        <TextField
                            autoFocus
                            margin="dense"
                            id="series"
                            label="Series"
                            fullWidth
                            multiline
                            onChange={this.handleSeriesChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="start"
                            label="Start"
                            fullWidth
                            onChange={this.handleStartChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="end"
                            label="End"
                            fullWidth
                            onChange={this.handleEndChange}
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
    onSubmit: PropTypes.func.isRequired
};
export default NewTrainingUnitButton;
