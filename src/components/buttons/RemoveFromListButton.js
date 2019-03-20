import React from 'react';
import PropTypes from 'prop-types';

const RemoveFromListButton = props => <button type="button" className="btn btn-primary" onClick={() => props.removeFromList(props.people)}>Remove</button>

RemoveFromListButton.propTypes = {
    people: PropTypes.object.isRequired,
    removeFromList: PropTypes.func.isRequired
}
    
export default RemoveFromListButton;