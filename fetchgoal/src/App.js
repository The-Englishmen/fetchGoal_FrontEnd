import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import axios from 'axios';
import { Route } from 'react-router';
import Home from './Components/Home';

const key = process.env.REACT_APP_MYAPI_KEY; /// api key in a varible for use later
const url = 'http://localhost:8000/artists/';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			///setting State for data being brought in below
			data: [],
		};
	}
	componentDidMount() {
		axios('http://localhost:8000/artists/')
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
					path='/leagues'
					render={() => {
						return <Home data={this.state.data} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
