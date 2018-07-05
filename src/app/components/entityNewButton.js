import React, {Component} from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import PropTypes from 'prop-types';
import EntityNewDialog from "./dialog/entityNewDialog";

class EntityNewButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <div>
                <Button variant="fab" color="primary" aria-label="new" onClick={this.handleOpen}>
                    <AddIcon/>
                </Button>
                <EntityNewDialog entity={this.props.entity}
                                 open={this.state.open} onClose={this.handleClose}/>
            </div>
        );
    }
}

EntityNewButton.propTypes = {
    entity: PropTypes.object.isRequired,
};
export default EntityNewButton;
