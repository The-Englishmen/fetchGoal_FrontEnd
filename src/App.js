import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Fedarations from './Fedarations';
import Aboutus from './Aboutus';
import Leagues from './Leagues';
import { Route, Link } from 'react-router-dom';
import Teams from './Teams';
import Footer from './Footer';
// import Search from './Search';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			///setting State for data being brought in below
			data: [],
			teamSearch: '',
		};
	}
	componentDidMount() {
		axios('https://whispering-garden-05173.herokuapp.com/team')
			.then((json) => {
				this.setState({ data: json.data });
			})
			.catch(console.error);
	}
	handleInput = (event) => {
		this.setState({ searchTeam: event.target.value });
	};
	render() {
		let filteredTeams = this.state.data.filter((team) => {
			return team.name.includes(this.state.searchTeam);
		});
		return (
			<div>
				<Header />
				<Route
					exact
					path='/home'
					render={() => {
						return <Home data={this.state.data} />; /// sending data down to home component
					}}
				/>
				{/* <Route exact path='/about-us' component={Footer} /> */}
				<Route
					exact
					path='/fedarations'
					render={() => {
						return <Fedarations />; /// routing fedarations component
					}}
				/>
				<Route
					exact
					path='/leagues'
					component={Leagues} ///routing leagues component
				/>
				<Route
					exact
					path='/teams'
					render={() => {
						return (
							<Teams
								handleInput={this.handleInput}
								searchTeam={this.state.searchTeam}
								filteredTeams={filteredTeams}
								data={this.state.data}
							/>
						); /// sending data down to Teams component
					}}
				/>
				<Route exact path='/about-us' component={Aboutus} />
			</div>
		);
	}
}

export default App;
