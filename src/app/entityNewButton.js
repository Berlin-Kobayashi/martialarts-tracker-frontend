import React, {Component} from 'react';
import Dialog, {DialogActions, DialogContent, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';
import Autocomplete from "./util/autocomplete";
import {getIdsByNames} from "./util/utils";
import {typeDate, typeNumber, typeString} from "./const";

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
        this.renderDataInputField = this.renderDataInputField.bind(this);
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
                let inputField = this.renderDataInputField(row.type, row.name, row.options, i);

                return <div>{inputField}</div>;
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
                        newReferences[row.name] = getIdsByNames(e, this.props.data[row.entity]);
                        this.setState({references: newReferences});
                    }.bind(this)}
                />;
            }
        ));

        return content;
    }

    renderDataInputField(type, name, options, i) {
        switch (type) {
            case typeString :
                return <TextField
                    key={i}
                    margin="dense"
                    id={name}
                    label={name}
                    fullWidth
                    multiline={options.multiLine}
                    onChange={function (e) {
                        let newData = this.state.data;
                        newData[name] = e.target.value;
                        this.setState({data: newData});
                    }.bind(this)}
                />;
            case typeNumber :
                return <TextField
                    key={i}
                    margin="dense"
                    id={name}
                    label={name}
                    type="number"
                    onChange={function (e) {
                        let newData = this.state.data;
                        newData[name] = e.target.value;
                        this.setState({data: newData});
                    }.bind(this)}
                />;
            case typeDate :
                return <TextField
                    key={i}
                    margin="dense"
                    id={name}
                    label={name}
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={function (e) {
                        let d = new Date(Date.parse(e.target.value));

                        let newData = this.state.data;
                        newData[name] = d.toISOString();
                        this.setState({data: newData});
                    }.bind(this)}
                />;
        }
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
