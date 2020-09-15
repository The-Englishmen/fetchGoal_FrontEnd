// display every league on site. Organize it with region 

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card,Image } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import footballAd from './Images/footballad.png';


import './Styling/Leagues.scss';


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
				<h3 className='display-4 text-center mt-3'>Featured Leagues</h3>
				<CardColumns>
					{this.state.data.slice(6, 9).map((data) => {
						///maping through data to display information
						return (
							<Card key={data.id} className='border-0 text-center mt-5'>
								<Card.Img
									src={data.photo_url}
									alt='leaguebadge'
									style={{
										maxWidth: '5em',
										maxHeight: '4em',
										margin: '0 Auto',
									}}
								/>
								<Card.Body className='mt-2'>
									<Card.Title className='mt-2'>
										<p style={{ fontSize: '0.9em' }}>{data.name}</p>
									</Card.Title>
									<Button
										style={{
											backgroundColor: '#ffdf00',
											color: '#009c3b',
											boxShadow:
												'0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
										}}
										className='border-0'>
										SEE MORE
									</Button>
								</Card.Body>
							</Card>
						); // list of chosen datasets plus link to take user to page
					})}
				</CardColumns>
				<Image src={footballAd} fluid />
				<h3 className='display-4 text-center mt-3'>All Leagues</h3>
				<CardColumns>
					{this.state.data.sort().map((data) => {
						///maping through data to display information
						return (
							<Card key={data.id} className='border-0 text-center mt-5'>
								<Card.Body className='mt-2'>
									<Card.Title className='mt-2'>
										<p style={{ fontSize: '0.7em' }}>{data.name}</p>
									</Card.Title>
									<Button
										style={{
											backgroundColor: '#ffdf00',
											color: '#009c3b',
											boxShadow:
												'0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
										}}
										className='border-0'>
										SEE MORE
									</Button>
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
