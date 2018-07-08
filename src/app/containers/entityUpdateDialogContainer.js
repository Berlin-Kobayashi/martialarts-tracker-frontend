import React from 'react';
import {connect} from 'react-redux'
import EntityUpdateDialog from "../components/entityUpdateDialog";

const mapStateToProps = (state, ownProps) => ({
    data: state.selected.data,
    entity: state.selected.entity
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(EntityUpdateDialog)
