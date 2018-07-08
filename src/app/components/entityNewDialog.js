import React, {Component} from 'react';
import Dialog, {DialogActions, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import EntityDialogContentContainer from "../containers/entityDialogContentContainer";

class EntityNewDialog extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="new-dialog-title"
                fullScreen
            >
                <DialogTitle id="new-dialog-title">{"New " + this.props.entity.dialogName}</DialogTitle>
                <EntityDialogContentContainer/>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={function () {
                            this.props.entity.client.new(this.props.data.data, this.props.data.references, this.props.dispatch);
                            this.props.onClose();
                        }.bind(this)}
                        color="primary"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

EntityNewDialog.propTypes = {
    entity: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    dispatch:PropTypes.func.isRequired,
    data: PropTypes.object,
};

export default EntityNewDialog
