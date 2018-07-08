import React from 'react';
import {connect} from 'react-redux'
import EntityUpdateDialog from "../components/entityUpdateDialog";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps,mapDispatchToProps)(EntityUpdateDialog)
