import React, {Component} from 'react';
import Dialog, {DialogActions, DialogContent, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';

class EntityNewButton extends Component {
    constructor(props, context) {
        super(props, context);

        let data = {};
        this.props.entity.data.map((row) => data[row.name] = []);

        this.state = {
            open: false,
            data: data,
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
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
                    <DialogTitle id="new-dialog-title">{"New " + this.props.entity.dialogName}</DialogTitle>
                    <DialogContent>
                        {this.props.entity.data.map((row, i) =>
                            <TextField
                                key={i}
                                autoFocus
                                margin="dense"
                                id={row.name}
                                label={row.name}
                                fullWidth
                                multiline={row.options.multiLine}
                                onChange={function (e) {
                                    let newData = this.state.data;
                                    newData[row.name] = e.target.value;
                                    this.setState({data: newData});
                                }.bind(this)}
                            />)
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            onClick={function () {
                                this.props.entity.client.new(this.state.data, [], this.props.onSubmit)
                                this.setState({open: false});
                            }.bind(this)}
                            color="primary"
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

EntityNewButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    entity: PropTypes.object.isRequired
};
export default EntityNewButton;
