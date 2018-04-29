import React, {Component} from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';
import NewTrainingUnitButton from "./newTrainingUnitButton";

class TrainingUnitTable extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{"Date"}</TableCell>
                            <TableCell>{"Series"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((row, i) =>
                            <TableRow key={i}>
                                <TableCell>{row.data.start}</TableCell>
                                <TableCell>{row.data.series}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <NewTrainingUnitButton onSubmit={this.props.onSubmit} techniques={this.props.techniques}
                                       methods={this.props.methods} exercises={this.props.exercises}/>
            </div>
        );
    }
}

TrainingUnitTable.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    techniques: PropTypes.array.isRequired,
    methods: PropTypes.array.isRequired,
    exercises: PropTypes.array.isRequired
};

export default TrainingUnitTable;
