import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Fedarations from './Fedarations';
import Aboutus from './Aboutus';
import Leagues from './Leagues';
import { Route, Link } from 'react-router-dom';
import Teams from './Teams';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			///setting State for data being brought in below
			data: [],
		};
	}
	componentDidMount() {
		axios('https://whispering-garden-05173.herokuapp.com/team')
			.then((json) => {
				this.setState({ data: json.data });
			})
			.catch(console.error);
	}
	render() {
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
					render={(routerProps) => {
						return <Teams match={routerProps.match} data={this.state.data} />; /// sending data down to Teams component
					}}
				/>
				<Route exact path='/about-us' component={Aboutus} />
			</div>
		);
	}
}

export default App;
