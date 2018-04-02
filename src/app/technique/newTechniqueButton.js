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
import Technique from "../../../client/src/model/Technique";
import ExerciseData from "../../../client/src/model/ExerciseData";

class NewTechniqueButton extends Component {
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

        let technique = new Technique();
        technique.data = new ExerciseData();
        technique.data.name = this.state.name;
        technique.data.kind = this.state.kind;
        technique.data.description = this.state.description;

        this.props.onSubmit(technique);
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
                >
                    <DialogTitle id="new-dialog-title">New Technique</DialogTitle>
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

NewTechniqueButton.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
export default NewTechniqueButton;
