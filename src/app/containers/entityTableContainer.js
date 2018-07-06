import React from 'react';
import {connect} from 'react-redux'
import EntityTable from "../components/entityTable";

const mapStateToProps = (state, ownProps) => ({
    data: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(EntityTable)
