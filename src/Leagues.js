// display every league on site. Organize it with region 

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Teams from './Teams';
import axios from 'axios';
import Row from 'bootstrap';

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
		return (
			<div className='row'>
				{this.state.data.map((data) => (
					<div key={data.id} className='align-items-center'>
						<div className='col-lg-4 col-sm-6'>
							
								<div className='box'>
						 <p className='col-sm text-center'>{data.name}</p> 
									<img className='img-fluid' src={data.photo_url} alt='leaguebadge' />
								</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Leagues;
