import React, { Component } from 'react';
import { apiRoot } from './config/api';
import SearchResultsList from './components/SearchResultsList';
import SavedPeopleList from './components/SavedPeopleList';
import DetailsPeople from './components/DetailsPeople';
import SearchForm from './components/SearchForm';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchValue: '',
			searchResults: [],
			savedPeopleList: [],
			selectedPeople: null
		}
	}

	// handle the search input
	handleChange = event => {
		this.setState({ searchValue: event.target.value });
	}

	// fetch data from the API according to the search input value
	searchPeople = () => {
		const url = `${apiRoot}/people/?search=${this.state.searchValue}`;
		fetch(url)
			.then(response => response.json())
			.then(json =>
				this.setState({
					searchResults: json.results
				})
			);
	}

	// append people to the saved people list
	addToList = people => {
		this.setState({ savedPeopleList: [...this.state.savedPeopleList, people] });
	}

	// remove people from the saved people list
	removeFromList = peopleToRemove => {
		this.setState({
			savedPeopleList: this.state.savedPeopleList.filter(people => peopleToRemove != people)
		})
	}

	// set the focus on a specific people to get details about him
	selectPeople = people => {
		this.setState({ selectedPeople: people })
	}

	// General template of the app 
	render() {
		return (
			<div class="container">
				<header>
					<h1>Web test</h1>
					<h2>Play with SWAPI</h2>
				</header>
				<main>
					<div className="row">
						<div className="col-8">
							<div className="row">
								<div className="card col sector">
									<div className="card-body">
										<h3>Search people</h3>
										<SearchForm searchValue={this.state.searchValue} handleChange={this.handleChange} searchPeople={this.searchPeople} />
										<SearchResultsList
											searchResults={this.state.searchResults}
											savedPeopleList={this.state.savedPeopleList}
											addToList={this.addToList}
											selectPeople={this.selectPeople} />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="card col sector">
									<div className="card-body">
										<h3>Saved people</h3>
										<SavedPeopleList savedPeopleList={this.state.savedPeopleList} removeFromList={this.removeFromList} selectPeople={this.selectPeople} />
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="row">
								<div className="card col sector">
									<div className="card-body">
										<h3>Information about...</h3>
										<DetailsPeople selectedPeople={this.state.selectedPeople} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
