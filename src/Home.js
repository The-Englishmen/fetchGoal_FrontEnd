// Home page - this will include 3 featured teams and navbar. Plus information on the site.
import React, { Component } from 'react';
import forFans from './forfans.jpg';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
	render() {
		console.log(this.props.data[0]);
		return (
			<div>
				<h1>Featured Teams</h1>
				{this.props.data.slice(1, 4).map((data, index) => (
					<div key={index}>
						<h1>{data.name}</h1>
						<img src={data.photo_url} alt='team badge' />
					</div>
				))}
			</div>
		);
	}
}

export default Home;
