import React, { Component } from 'react';
import Search from './Search.js';
import { Button, Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
class Teams extends Component {
	render() {
		if (this.props.searchTeam) {
			return (
				<>
					<h3 className='display-4 text-center mt-3'>All Teams</h3>
					<Search />

					<CardColumns>
						{this.props.filteredTeams.map((data, id) => {
							///maping through data to display information
							return (
								<Card key={data.id} className='border-0 text-center mt-5'>
									<Card.Img
										src={data.photo_url}
										alt='club'
										style={{
											maxWidth: '5em',
											maxHeight: '3.8em',
											margin: '0 Auto',
											padding: ''

										}}
									/>
									<Card.Body className=''>
										<Card.Title className=''>
											<p >{data.name}</p>
										</Card.Title>
										<Card.Text></Card.Text>
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
		//console.log(this.props.data);
		else {
			return (
				<>
					<h3 className='display-4 text-center mt-3'>All Teams</h3>
					<Search />

					<CardColumns>
						{this.props.data.map((data, id) => {
							///maping through data to display information
							return (
								<Card key={id} className='border-0 text-center mt-5'>
									<Card.Img
										src={data.photo_url}
										alt='club'
										style={{
											maxWidth: '5em',
											maxHeight: '3.8em',
											margin: '0 Auto',
										}}
									/>
									<Card.Body className=''>
										<Card.Title className=''>
											<p style={{ fontSize: '0.8em' }}>{data.name}</p>
										</Card.Title>
										<Card.Text></Card.Text>
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
}

export default Teams;
