// Home page - this will include 3 featured teams and navbar. Plus information on the site.
import React, { Component } from 'react';
import forFans from './forfans.jpg';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
	render() {
		console.log(this.props.data[0]);
		return (
			<div>
				<Jumbotron
					style={{
						backgroundImage: `url(${forFans})`,
						backgroundSize: 'cover',
					}}>
					<Container className='container'>
						<h1 className='display-2 text-white text-center text'>
							Made By Fans
						</h1>
						<h2 className='display-9 text-white text-center'>For Fans</h2>
					</Container>
				</Jumbotron>
				<h3 className='featured'> Featured Teams</h3>
				<Container className='bg-light d-block'>
					{this.props.data.slice(22, 25).map((data, index) => (
						<div key={index} className='row align-items-center p-4'>
							<h4 className='col-sm text-center'>{data.name}</h4>
							<img className='col-sm' src={data.photo_url} alt='team badge' />
							<h5 className='col-sm text-center'>
								Currently playing in league {data.league}
							</h5>
							<h5 className='col-sm text-center'>
								In the 
								{data.fedaration}
							</h5>
						</div>
					))}
				</Container>
			</div>
		);
	}
}

export default Home;
