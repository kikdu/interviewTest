import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => {
    
    return (
        <form class="form-inline">
            <input type="text" className="form-control" placeholder="Search" value={props.searchValue} onChange={props.handleChange} />
            <button type="button" className="btn btn-primary" onClick={props.searchPeople}>Search</button>
        </form>
    )
}

SearchForm.propTypes = {
    searchValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchPeople: PropTypes.func.isRequired
}

export default SearchForm;