import React from 'react';
import PropTypes from 'prop-types';
import SelectPeopleButton from './buttons/SelectPeopleButton';
import AddToListButton from './buttons/AddToListButton';

const SearchResultsList = props => {

    // return the results of the research
    const renderList = () => {
        
        // check if there are results
        if (props.searchResults.length === 0)
            return null
        else {
            // filter the results to remove the people already in the saved people list
            const searchResults = props.searchResults.filter(people => !props.savedPeopleList.includes(people));

            // then map a table row for each result
            const rows = searchResults.map((people, i) => {
                return (
                    <tr key={i}>
                        <td>{people.name}</td>
                        <td>{people.gender}</td>
                        <td>{people.birth_year}</td>
                        <td>{people.eye_color}</td>
                        <td><SelectPeopleButton people={people} selectPeople={props.selectPeople} /></td>
                        <td><AddToListButton people={people} addToList={props.addToList} /></td>
                    </tr>
                )
            });

            return rows;
        }
    }

    // render the table of the results
    return (
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birth year</th>
                    <th>Eye color</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* render the table body based on the results of the research */}
                {renderList()}
            </tbody>
        </table>
    )
}

SearchResultsList.propTypes = {
    searchResults: PropTypes.array.isRequired,
    savedPeopleList: PropTypes.array.isRequired,
    addToList: PropTypes.func.isRequired,
    selectPeople: PropTypes.func.isRequired
}

export default SearchResultsList;
