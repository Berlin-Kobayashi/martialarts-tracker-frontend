import Main from "../components/main";
import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
