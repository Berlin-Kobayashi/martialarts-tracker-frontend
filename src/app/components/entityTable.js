import React, {Component} from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';
import EntityNewButton from "./entityNewButton";
import EntityNewDialogContainer from "../containers/entityNewDialogContainer";

class EntityTable extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            selected: {}
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            {this.props.entity.columns.map((row, i) =>
                                <TableCell key={i}>{row}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(this.props.data[this.props.entity.dialogName]).map((id, i) =>
                            <TableRow onClick={function () {
                                this.setState({
                                    open: true,
                                    selected: this.props.data[this.props.entity.dialogName][id]
                                });
                            }.bind(this)} key={i} hover>
                                {this.props.entity.columns.map((column, i) =>
                                    <TableCell key={i}>{this.props.data[this.props.entity.dialogName][id].data[column]}</TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <EntityNewButton entity={this.props.entity}/>
                <EntityNewDialogContainer entity={this.props.entity}
                                 onClose={this.handleClose} open={this.state.open} defaultData={this.state.selected.data} defaultReferences={this.state.selected.references}/>
            </div>
        );
    }
}

EntityTable.propTypes = {
    entity: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

export default EntityTable
