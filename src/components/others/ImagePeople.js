import React from 'react';
import PropTypes from 'prop-types';
import { faceTheForceUrl } from '../../config/api';

const ImagePeople = props => {
    
    // to get the good URL of the image we need to isolate the first part of the name :
    // 1) get the index of the first space if there is one or get the string total length 
    const index = ( (props.name.indexOf(' ') === -1) ? props.name.length : props.name.indexOf(' '));

    // 2) then use that index to get the first word of the string and then apply lowercase and remove the '-'
    const name = props.name.substring(0, index).toLowerCase().replace('-','');

    // return the image of the people with the FaceTheForce root URL, the extracted name and the chosen size
    return <img src={faceTheForceUrl + name + '/' + props.size} class="card-img-top" />
}

ImagePeople.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}

export default ImagePeople;