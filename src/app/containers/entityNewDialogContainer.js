import React from 'react';
import {connect} from 'react-redux'
import EntityNewDialog from "../components/entityNewDialog";

const mapStateToProps = (state, ownProps) => ({
    data: state.selected.data,
    entity: state.selected.entity
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(EntityNewDialog)
