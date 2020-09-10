import React, { Component } from 'react';
import {Card, Button} from 'bootstrap';
import axios from 'axios'

class Fedarations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			///setting State for data being brought in below
			data: [],
		};
	}
	componentDidMount() {
		axios('https://whispering-garden-05173.herokuapp.com/federation/')
			.then((json) => {
				this.setState({ data: json.data });
			})
			.catch(console.error);
	}

	render() {
		return (
			<div>
				{this.state.data.map((data, index) => (
					<div key={index}>
						<h1>{data.name}</h1>
						<img src={data.photo_url} alt='' />
					</div>
				))}
			</div>
		);
	}
}

export default Fedarations;