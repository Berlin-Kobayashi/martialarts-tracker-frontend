import React from 'react';
import {connect} from 'react-redux'
import EntityDialogContent from "../components/entityDialogContent";
import {changeNew} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    data: state.data,
    entity: state.selected.entity,
    selected: state.selected.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: function (data) {
        dispatch(changeNew(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EntityDialogContent)
