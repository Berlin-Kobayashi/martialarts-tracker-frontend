import React from 'react';
import {connect} from 'react-redux'
import EntityNewDialog from "../components/entityNewDialog";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps,mapDispatchToProps)(EntityNewDialog)
