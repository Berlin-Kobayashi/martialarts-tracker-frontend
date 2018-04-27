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
import Method from "../../../client/src/model/Method";
import Autocomplete from "./../util/autocomplete";

class NewMethodButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            name: "",
            kind: "",
            description: ""
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

        let method = new Method();
        method.data = new ExerciseData();
        method.data.name = this.state.name;
        method.data.kind = this.state.kind;
        method.data.description = this.state.description;

        this.props.onSubmit(method);
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
                    <DialogTitle id="new-dialog-title">New Method</DialogTitle>
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
                        <Autocomplete
                            placeholder={"Techniques"}
                            id={"techniques"}
                            options={this.props.techniques.map((row) =>
                                row.data.name
                            )}
                            onChange={function (d) {
                                console.log(d);
                            }}
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

NewMethodButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    techniques: PropTypes.array.isRequired
};
export default NewMethodButton;
