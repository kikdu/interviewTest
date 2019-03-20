import React from 'react';
import PropTypes from 'prop-types';
import DetailsCard from './cards/DetailsCard';

const DetailsPeople = props => {

    // return the details of a people
    const renderDetails = () => {
        // check if there is a selected people
        if (props.selectedPeople === null)
            return <div className="col">Choose someone to get more informations about !</div>
        else {
            //then return the details card
            return <DetailsCard people={props.selectedPeople} />
            
        }
    }

    // render the details
    return (
        <div className="row">
            {renderDetails()}
        </div>
    )
}

DetailsPeople.propTypes = {
    selectedPeople: PropTypes.object.isRequired
}

export default DetailsPeople;