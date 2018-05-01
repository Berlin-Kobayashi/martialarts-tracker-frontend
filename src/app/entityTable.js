import React, {Component} from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';

class EntityTable extends Component {
    constructor(props, context) {
        super(props, context);
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
                        {this.props.data[this.props.entity.dialogName].map((row, i) =>
                            <TableRow key={i} hover>
                                {this.props.entity.columns.map((column, i) =>
                                    <TableCell key={i}>{row.data[column]}</TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

EntityTable.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    entity: PropTypes.object.isRequired
};

export default EntityTable;
