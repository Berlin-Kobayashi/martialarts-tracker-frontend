import React from 'react';
import {connect} from 'react-redux'
import EntityDialogContent from "../components/entityDialogContent";

const mapStateToProps = (state, ownProps) => ({
    data: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(EntityDialogContent)
