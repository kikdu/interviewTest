import React from 'react';
import PropTypes from 'prop-types';

const AddToListButton = props => <button type="button" className="btn btn-primary" onClick={() => props.addToList(props.people)}>Save</button>

AddToListButton.propTypes = {
    people: PropTypes.object.isRequired,
    addToList: PropTypes.func.isRequired
}
    
export default AddToListButton;