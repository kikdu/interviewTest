import React from 'react';
import PropTypes from 'prop-types';

const SelectPeopleButton = props => <button type="button" className="btn btn-primary" onClick={() => props.selectPeople(props.people)}>Details</button>

SelectPeopleButton.propTypes = {
    people: PropTypes.object.isRequired,
    selectPeople: PropTypes.func.isRequired
}

export default SelectPeopleButton;