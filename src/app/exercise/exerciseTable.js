import React, {Component} from 'react';
import Table, {TableBody, TableHead, TableRow, TableCell} from 'material-ui/Table';
import PropTypes from 'prop-types';
import NewExerciseButton from "./newExerciseButton";

class ExerciseTable extends Component {
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
                        {this.props.data.map((row,i) =>
                            <TableRow key={i} hover>
                                <TableCell>{row.data.name}</TableCell>
                                <TableCell>{row.data.kind}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <NewExerciseButton onSubmit={this.props.onSubmit}/>
            </div>
        );
    }
}

ExerciseTable.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};

export default ExerciseTable;
