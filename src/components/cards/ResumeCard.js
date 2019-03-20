import React from 'react';
import PropTypes from 'prop-types';
import ImagePeople from '../others/ImagePeople';
import SelectPeopleButton from '../buttons/SelectPeopleButton';
import RemoveFromListButton from '../buttons/RemoveFromListButton';

const ResumeCard = props => {

    return (
        <div class="card text-center">
            {/* image of the people with a size of 100 */}
            <ImagePeople name={props.people.name} size={100} />
            <div class="card-body">
                <h5 class="card-title">{props.people.name}</h5>
                <div class="btn-group">
                    {/* Buttons to select (details) the people or remove him from the saved people list */}
                    <SelectPeopleButton people={props.people} selectPeople={props.selectPeople} />
                    <RemoveFromListButton people={props.people} removeFromList={props.removeFromList} />
                </div>
            </div>
        </div>
    )
}

ResumeCard.propTypes = {
    people: PropTypes.object.isRequired,
    selectPeople: PropTypes.func.isRequired,
    removeFromList: PropTypes.func.isRequired
}

export default ResumeCard;