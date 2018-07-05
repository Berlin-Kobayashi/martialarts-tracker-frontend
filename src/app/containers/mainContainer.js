import Main from "../components/main";
import {entities} from "../const";
import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    entities: entities
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps,mapDispatchToProps)(Main)
