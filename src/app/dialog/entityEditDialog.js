import React, {Component} from 'react';
import Dialog, {DialogActions, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import EntityDialogContent from "./entityDialogContent";

class EntityEditDialog extends Component {
    constructor(props, context) {
        super(props, context);

        let data = {};
        if (props.defaultData == null) {
            props.entity.data.map((row) => data[row.name] = "");
        } else {
            data = {...props.defaultData};
        }

        let references = {};
        if (props.defaultReferences == null) {
            props.entity.references.map((row) => references[row.name] = []);
        } else {
            references = {...props.defaultReferences};
        }

        this.state = {
            data: data,
            references: references
        };

        this.onDataChange = this.onDataChange.bind(this);
        this.onReferencesChange = this.onReferencesChange.bind(this);
        this.closeAndReset = this.closeAndReset.bind(this);
    }

    onDataChange(data) {
        this.setState({data: data});
    }

    onReferencesChange(references) {
        this.setState({references: references});
    }

    closeAndReset() {
        this.setState({
                data: {},
                references: {}
            }
        );
        this.props.onClose();
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.closeAndReset}
                aria-labelledby="edit-dialog-title"
                fullScreen
            >
                <DialogTitle id="edit-dialog-title">{"Edit " + this.props.entity.dialogName}</DialogTitle>
                <EntityDialogContent entity={this.props.entity} data={this.props.data} onDataChange={this.onDataChange}
                                     onReferencesChange={this.onReferencesChange}
                                     defaultReferences={this.props.defaultReferences}
                                     defaultData={this.props.defaultData}/>
                <DialogActions>
                    <Button onClick={this.closeAndReset} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={function () {
                            this.props.entity.client.update(this.props.id, this.state.data, this.state.references, this.props.onSubmit);
                            this.closeAndReset();
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

EntityEditDialog.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    entity: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    defaultData: PropTypes.object,
    defaultReferences: PropTypes.object,
    id: PropTypes.string.isRequired,
};
export default EntityEditDialog;
