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

        let data = {};
        if (this.props.defaultData == null) {
            this.props.entity.data.map((row) => data[row.name] = []);
        } else {
            data = this.props.defaultData;
        }


        let references = {};
        if (this.props.defaultReferences == null) {
            this.props.entity.references.map((row) => references[row.name] = []);
        } else {
            references = this.props.defaultReferences;
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
                let inputField = this.renderDataInputField(row.type, row.name, row.options, i, this.props.defaultData[row.name]);

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
        switch (type) {
            case typeString :
                return <TextField
                    key={i}
                    margin="dense"
                    id={name}
                    label={name}
                    fullWidth
                    multiline={options.multiLine}
                    defaultValue={defaultValue}
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
                    defaultValue={defaultValue}
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
                    defaultValue={defaultValue}
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
