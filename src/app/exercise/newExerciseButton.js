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
import ExerciseData from "../../../client/src/model/ExerciseData";
import Exercise from "../../../client/src/model/Exercise";

class NewExerciseButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            name : "",
            kind : "",
            description : ""
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleKindChange = this.handleKindChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleKindChange(e) {
        this.setState({kind: e.target.value});
    }

    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    handleSubmit() {
        this.setState({open: false});

        let exercise = new Exercise();
        exercise.data = new ExerciseData();
        exercise.data.name = this.state.name;
        exercise.data.kind = this.state.kind;
        exercise.data.description = this.state.description;

        this.props.onSubmit(exercise);
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
                    <DialogTitle id="new-dialog-title">New Exercise</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            onChange={this.handleNameChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="kind"
                            label="Kind"
                            fullWidth
                            onChange={this.handleKindChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Description"
                            fullWidth
                            multiline
                            onChange={this.handleDescriptionChange}
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

NewExerciseButton.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
export default NewExerciseButton;
