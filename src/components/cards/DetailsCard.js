import React from 'react';
import PropTypes from 'prop-types';
import ImagePeople from '../others/ImagePeople';

const DetailsCard = props => {

    return (
        <div class="card">
            {/* image of the people with a size of 300 */}
            <ImagePeople name={props.people.name} size={300} />
            <div class="card-body">
                <h5 class="card-title">{props.people.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Height :</b> {props.people.height}</li>
                <li class="list-group-item"><b>Mass :</b> {props.people.mass}</li>
                <li class="list-group-item"><b>Hair color :</b> {props.people.hair_color}</li>
                <li class="list-group-item"><b>Skin color :</b> {props.people.skin_color}</li>
                <li class="list-group-item"><b>Eye color :</b> {props.people.eye_color}</li>
                <li class="list-group-item"><b>Birth year :</b> {props.people.birth_year}</li>
                <li class="list-group-item"><b>Gender :</b> {props.people.gender}</li>
            </ul>
        </div>
    )
}

DetailsCard.propTypes = {
    people: PropTypes.object.isRequired
}

export default DetailsCard;