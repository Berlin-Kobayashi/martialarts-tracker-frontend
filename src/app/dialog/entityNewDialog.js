import React, {Component} from 'react';
import Dialog, {DialogActions, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import EntityDialogContent from "./entityDialogContent";

class EntityNewDialog extends Component {
    constructor(props, context) {
        super(props, context);

        let data = {};
        this.props.entity.data.map((row) => data[row.name] = []);

        let references = {};
        this.props.entity.references.map((row) => references[row.name] = []);

        this.state = {
            data: data,
            references: references
        };

        this.onDataChange = this.onDataChange.bind(this);
        this.onReferencesChange = this.onReferencesChange.bind(this);
    }

    onDataChange(data) {
        this.setState({data: data});
    }

    onReferencesChange(references) {
        this.setState({references: references});
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="new-dialog-title"
                fullScreen
            >
                <DialogTitle id="new-dialog-title">{"New " + this.props.entity.dialogName}</DialogTitle>
                <EntityDialogContent entity={this.props.entity} data={this.props.data} onDataChange={this.onDataChange}
                                     onReferencesChange={this.onReferencesChange} defaultData={{minutes: 1, series: "aS", start: "2018-05-12T00:02:00.000Z"}}/>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={function () {
                            this.props.entity.client.new(this.state.data, this.state.references, this.props.onSubmit);
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
    onSubmit: PropTypes.func.isRequired,
    entity: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};
export default EntityNewDialog;
