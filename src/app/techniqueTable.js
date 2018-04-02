import React, {Component} from 'react';
import Table, {TableBody, TableHead, TableRow, TableCell} from 'material-ui/Table';
import NewTechniqueButton from "./newTechniqueButton";
import PropTypes from 'prop-types';

class TechniqueTable extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{"Name"}</TableCell>
                            <TableCell>{"Kind"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((row) =>
                            <TableRow>
                                <TableCell>{row.data.name}</TableCell>
                                <TableCell>{row.data.kind}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <NewTechniqueButton onSubmit={this.props.onSubmit}/>
            </div>
        );
    }
}

TechniqueTable.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};

export default TechniqueTable;
