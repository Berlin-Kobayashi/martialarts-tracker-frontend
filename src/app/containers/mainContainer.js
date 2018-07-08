import Main from "../components/main";
import React from 'react';
import {connect} from 'react-redux'
import {selectEntity} from "../actions";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: dispatch,
    onSelectEntity: function (entity) {
        dispatch(selectEntity(entity));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
