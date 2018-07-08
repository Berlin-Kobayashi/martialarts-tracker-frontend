import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Autocomplete from "./autocomplete";
import {getIdsByNames} from "../utils";
import {typeDate, typeNumber, typeString} from "../const";
import {DialogContent} from 'material-ui/Dialog';

class EntityDialogContent extends Component {
    constructor(props, context) {
        super(props, context);

        this.renderDataInputField = this.renderDataInputField.bind(this);
    }

    render() {
        let i = 0;
        let content = [];
        content.push(this.props.entity.data.map((row) => {
                i++;
                let inputField = this.renderDataInputField(row.type, row.name, row.options, i, this.props.selected.data[row.name]);

                return <div>{inputField}</div>;
            }
        ));

        content.push(this.props.entity.references.map((relation) => {
                i++;

                let options = [];
                let selectedItem = [];
                Object.keys(this.props.data[relation.entity]).forEach((id) => {
                        options.push(this.props.data[relation.entity][id].data.name);
                        if (this.props.selected.references[relation.name].includes(this.props.data[relation.entity][id].id)) {
                            selectedItem.push(this.props.data[relation.entity][id].data.name);
                        }
                    }
                );

                return <Autocomplete
                    placeholder={relation.name}
                    id={relation.name}
                    options={options}
                    defaultValue={selectedItem}
                    onChange={function (e) {
                        let newSelected = this.props.selected;
                        newSelected.references[relation.name] = getIdsByNames(e, this.props.data[relation.entity]);
                        this.props.onChange(newSelected);
                    }.bind(this)}
                />;
            }
        ));

        return <DialogContent>
            {content}
        </DialogContent>;
    }

    renderDataInputField(type, name, options, i, defaultValue) {
        switch (type) {
            case typeString :
                return <TextField
                    key={i}
                    margin="dense"
                    id={name}
                    label={name}
                    fullWidth
                    multiline={options.multiLine}
                    value={defaultValue}
                    onChange={function (e) {
                        let newSelected = this.props.selected;
                        newSelected.data[name] = e.target.value;
                        this.props.onChange(newSelected);
                    }.bind(this)}
                />;
            case typeNumber :
                return <TextField
                    key={i}
                    margin="dense"
                    id={name}
                    label={name}
                    type="number"
                    value={defaultValue}
                    onChange={function (e) {
                        let newSelected = this.props.selected;
                        newSelected.data[name] = e.target.value;
                        this.props.onChange(newSelected);
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
                    value={defaultValue.slice(0, -1)}
                    onChange={function (e) {
                        let d = new Date(Date.parse(e.target.value));

                        let newSelected = this.props.selected;
                        newSelected.data[name] = d.toISOString();
                        this.props.onChange(newSelected);
                    }.bind(this)}
                />;
        }
    }
}

EntityDialogContent.propTypes = {
    entity: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    selected: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default EntityDialogContent
