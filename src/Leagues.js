// display every league on site. Organize it with region 

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card,Image } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import footballAd from './footballad.png';


import './Leagues.scss'


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
			<>
				<CardColumns>
					{this.state.data.slice(1, 2).map((data) => {
						///maping through data to display information
						return (
							<Card key={data.id} className='border-0 text-center mt-5'>
								<Card.Img
									src={data.photo_url}
									alt='leaguebadge'
									style={{
										maxWidth: '5em',
										maxHeight: '5em',
										margin: '0 Auto',
									}}
								/>
								<Card.Body className=''>
									<Card.Title className=''>
										<p style={{ fontSize: '0.9em' }}>{data.name}</p>
									</Card.Title>
									<Card.Text></Card.Text>
									<Button>See More Information</Button>
								</Card.Body>
							</Card>
						); // list of chosen datasets plus link to take user to page
					})}
				</CardColumns>
				<Image src={footballAd} fluid />
				<CardColumns>
					{this.state.data.slice(5, 8).map((data) => {
						///maping through data to display information
						return (
							<Card
								key={data.id}
								className='border-0 text-center mt-5 align-bottom'>
								<Card.Img
									src={data.photo_url}
									alt='leaguebadge'
									style={{
										maxWidth: '10em',
										margin: '0 Auto',
									}}
								/>
								<Card.Body className=''>
									<Card.Title className=''>
										<p style={{ fontSize: '0.9em' }}>{data.name}</p>
									</Card.Title>
									<Card.Text></Card.Text>
									<Button>See More Information</Button>
								</Card.Body>
							</Card>
						); // list of chosen datasets plus link to take user to page
					})}
				</CardColumns>
			</>
		);
	}
}

export default Leagues;
