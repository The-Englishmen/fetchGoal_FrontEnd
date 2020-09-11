// display every league on site. Organize it with region 

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Teams from './Teams';
import axios from 'axios';
import Link from 'bootstrap';

class Leagues extends Component {
	constructor() {
		super();
		this.state = {
			///setting State for data being brought in below
			data: [],
		};
	}

	componentDidMount() {
		axios('https://whispering-garden-05173.herokuapp.com/league/')
			.then((json) => {
				this.setState({ data: json.data });
			})
			.catch(console.error);
	}
	render() {
		console.log(this.state.data);
		return (
			<div>
				{this.state.data.map((data, index) => (
					<div key={index}>
						<h1>{data.name}</h1>
						<img src={data.photo_url} alt='League badge' />
					</div>
				))}
			</div>
		);
	}
}

export default Leagues;
