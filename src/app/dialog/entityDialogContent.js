import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Autocomplete from "./../util/autocomplete";
import {getIdsByNames} from "./../util/utils";
import {typeDate, typeNumber, typeString} from "./../const";
import {DialogContent} from 'material-ui/Dialog';

class EntityDialogContent extends Component {
    constructor(props, context) {
        super(props, context);

        // TODO manage data in parent
        let data = {};
        if (props.defaultData == null) {
            props.entity.data.map((row) => data[row.name] = "");
        } else {
            data = this.props.defaultData;
        }

        let references = {};
        if (props.defaultReferences == null) {
            props.entity.references.map((row) => references[row.name] = []);
        } else {
            references = props.defaultReferences;
        }

        this.state = {
            data: data,
            references: references
        };

        this.renderDataInputField = this.renderDataInputField.bind(this);
    }

    render() {
        let i = 0;
        let content = [];
        content.push(this.props.entity.data.map((row) => {
                i++;
                let inputField = this.renderDataInputField(row.type, row.name, row.options, i, this.state.data[row.name]);

                return <div>{inputField}</div>;
            }
        ));

        content.push(this.props.entity.references.map((relation) => {
                i++;

                let options = [];
                let selectedItem = [];
                this.props.data[relation.entity].forEach((row) => {
                        options.push(row.data.name);
                        if (this.state.references[relation.name].includes(row.id)) {
                            selectedItem.push(row.data.name);
                        }
                    }
                );

                return <Autocomplete
                    placeholder={relation.name}
                    id={relation.name}
                    options={options}
                    defaultValue={selectedItem}
                    onChange={function (e) {
                        let newReferences = this.state.references;
                        newReferences[relation.name] = getIdsByNames(e, this.props.data[relation.entity]);
                        this.setState({references: newReferences});
                        this.props.onReferencesChange(newReferences);
                    }.bind(this)}
                />;
            }
        ));

        return <DialogContent>
            {content}
        </DialogContent>;
    }

    renderDataInputField(type, name, options, i, defaultValue) {
        console.log(this.state.data[name]);
        switch (type) {
            case typeString :
                return <TextField
                    key={i}
                    margin="dense"
                    id={name}
                    label={name}
                    fullWidth
                    multiline={options.multiLine}
                    value={this.state.data[name]}
                    onChange={function (e) {
                        let newData = this.state.data;
                        newData[name] = e.target.value;
                        this.setState({data: newData});
                        this.props.onDataChange(newData);
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
                        let newData = this.state.data;
                        newData[name] = e.target.value;
                        this.setState({data: newData});
                        this.props.onDataChange(newData);
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

                        let newData = this.state.data;
                        newData[name] = d.toISOString();
                        this.setState({data: newData});
                        this.props.onDataChange(newData);
                    }.bind(this)}
                />;
        }
    }
}

EntityDialogContent.propTypes = {
    entity: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    onDataChange: PropTypes.func.isRequired,
    onReferencesChange: PropTypes.func.isRequired,
    defaultData: PropTypes.object,
    defaultReferences: PropTypes.object,
};
export default EntityDialogContent;
