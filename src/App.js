import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Fedarations from './Fedarations';
import Aboutus from './Aboutus'
import Leagues from './Leagues'
import { Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			///setting State for data being brought in below
			data: [],
		};
	}
	componentDidMount() {
		axios('https://jsonplaceholder.typicode.com/posts/1/comments')
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
						return <Fedarations data={this.state.data} />; /// sending data down to fedarations component
					}}
				/>
				<Route
					exact
					path='/leagues'
					render={() => {
						return <Leagues data={this.state.data} />; /// sending data down to fedarations component
					}}
				/>
				<Route
					path='/about-us'
					render={() => {
						return <Aboutus />;
					}}
				/>
			</div>
		);
	}
}

export default App;
