import React from 'react';
import {connect} from 'react-redux'
import EntityTable from "../components/entityTable";
import {openUpdateDialog} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    data: state.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRowClick: function (entity, data) {
        dispatch(openUpdateDialog(entity, data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntityTable)
