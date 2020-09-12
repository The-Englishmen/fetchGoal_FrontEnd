// display every league on site. Organize it with region 

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Teams from './Teams';
import axios from 'axios';
import Link from 'bootstrap';

import './Leagues.css'

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
			<div className ='leagues'>
				{this.state.data.map((data, index) => (
					<div key={index} className='align-items-center'>
						{/* <h1 className='col-sm text-center'>{data.name}</h1> */}
						<img
							className='rounded mx-auto d-block'
							src={data.photo_url}
							alt='team badge'
						/>
					</div>
				))}
			</div>
		);
	}
}

export default Leagues;
