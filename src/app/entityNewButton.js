import React, {Component} from 'react';
import Dialog, {DialogActions, DialogContent, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';
import Autocomplete from "./util/autocomplete";
import {getIdsByNames} from "./util/utils";

class EntityNewButton extends Component {
    constructor(props, context) {
        super(props, context);

        let data = {};
        this.props.entity.data.map((row) => data[row.name] = []);

        let references = {};
        this.props.entity.references.map((row) => references[row.name] = []);

        this.state = {
            open: false,
            data: data,
            references: references
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderDialogContent = this.renderDialogContent.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    renderDialogContent() {
        let i = 0;
        let content = [];
        content.push(this.props.entity.data.map((row) => {
                i++;
                return <TextField
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
                />;
            }
        ));

        content.push(this.props.entity.references.map((row) => {
                i++;

                let options = [];

                this.props.data[row.entity].forEach((row) =>
                    options.push(row.data.name)
                );

                options = options.filter((elem, pos, arr) => {
                    return arr.indexOf(elem) === pos;
                });

                return <Autocomplete
                    placeholder={row.name}
                    id={row.name}
                    options={options}
                    onChange={function (e) {
                        let newReferences = this.state.references;
                        newReferences[row.name] = getIdsByNames(e,this.props.data[row.entity]);
                        this.setState({references: newReferences});
                    }.bind(this)}
                />;
            }
        ));

        return content;
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
                        {this.renderDialogContent()}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            onClick={function () {
                                this.props.entity.client.new(this.state.data, this.state.references, this.props.onSubmit);
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
    entity: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};
export default EntityNewButton;
