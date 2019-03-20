import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResumeCard from './cards/ResumeCard';

class SavedPeopleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genders: [],
            genderSelected: null
        }
    }

    // update the state when the saved people list changed
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.savedPeopleList != this.props.savedPeopleList) {
            // filter the saved people list to get unique value of genders
            const uniqueGenders = [...new Set(this.props.savedPeopleList.map(people => people.gender))];

            // then update the state with the unique genders and reset the gender selected
            this.setState({ genders: uniqueGenders, genderSelected: null });
        }
    }

    // update the state of genderSelected
    selectGender = gender => {
        this.setState({ genderSelected: gender });
    }

    // return the filtering buttons of gender
    renderGenderButtons = () => {
        // check if there is more than a single gender
        if (this.state.genders.length <= 1)
            return null
        else {
            // map a button for each gender
            const genderButtons = this.state.genders.map((gender, i) => {
                return <button type="button" className={this.state.genderSelected === gender ? 'active btn btn-secondary' : 'btn btn-secondary'} onClick={() => this.selectGender(gender)} key={i}>{gender}</button>
            });

            // return the mapped buttons and a general 'All' (gender) button
            return (
                <div class="btn-group gender-buttons">
                    <button type="button" className={this.state.genderSelected === null ? 'active btn btn-secondary' : 'btn btn-secondary'} onClick={() => this.selectGender(null)}>All</button>
                    {genderButtons}
                </div>
            )
        }
    }

    // return the saved people list
    renderPeople = () => {
        // check if there is someone in the saved people list
        if (this.props.savedPeopleList.length === 0)
            return <div className="col">You didn't save any people yet !</div>
        else {
            // filter the genders to get only people of the selected gender
            const peopleListFilteredByGender = this.props.savedPeopleList.filter(people => people.gender === this.state.genderSelected || this.state.genderSelected === null);
            
            // then map a resume card for each people
            const cards = peopleListFilteredByGender.map((people, i) => {
                return (
                    <div className="col-4" key={i}>
                        <ResumeCard
                            people={people}
                            selectPeople={this.props.selectPeople}
                            removeFromList={this.props.removeFromList}
                        />
                    </div>
                )
            });

            return cards;
        }
    }

    // render the gender buttons and the saved people list 
    render() {
        return (
            <div>
                <div className="row">
                    {this.renderGenderButtons()}
                </div>
                <div className="row">
                    {this.renderPeople()}
                </div>
            </div>
        )
    }
}

SavedPeopleList.propTypes = {
    savedPeopleList: PropTypes.array.isRequired,
    removeFromList: PropTypes.func.isRequired,
    selectPeople: PropTypes.func.isRequired
}

export default SavedPeopleList;
