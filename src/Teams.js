import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class Team extends Component {
	constructor() {
		super();
		this.state = {
			///setting State for data being brought in below
			data: [],
		};
	}

	componentDidMount() {
		axios('https://whispering-garden-05173.herokuapp.com/team/')
			.then((json) => {
				this.setState({ data: json.data });
			})
			.catch(console.error);
	}

	render() {
		return (
			<div>
				{this.state.data.map((data) => (
					<div key={data.id}>
						<h1>{data.name}</h1>
						<h2>{data.league}</h2>
						<img src={data.photo_url} alt='League badge' />
					</div>
				))}
			</div>
		);
	}
}

export default Team;
