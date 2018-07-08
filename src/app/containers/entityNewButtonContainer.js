import React from 'react';
import {connect} from 'react-redux'
import {resetNew} from "../actions";
import EntityNewButton from "../components/entityNewButton";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: function () {
        dispatch(resetNew());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EntityNewButton)
