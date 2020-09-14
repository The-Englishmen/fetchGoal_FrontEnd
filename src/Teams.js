import React, { Component } from 'react';
import Search from './Search.js';
import { Button, Container, Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
class Teams extends Component {
	render() {
		if (this.props.searchTeam) {
			return (
				<>
				<Search />
					
					<CardColumns>
						

						{this.props.filteredTeams.map((data) => {
							///maping through data to display information
							return (
								<Card
									key={data.id}
									className='justify-content-center align-content-center border-0 '>
									<img
										src={data.photo_url}
										alt='club'
										style={{ maxWidth: '9em' }}></img>
									<Card.Body className=''>
										<Card.Title>{data.name}</Card.Title>
										<Card.Text>
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
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
				<Search />

					<CardColumns>
						{this.props.data.map((data) => {
							///maping through data to display information
							return (
								<Card key={data.id} className='border-0 text-center mt-5'>
									<Card.Img
										src={data.photo_url}
										alt='club'
										style={{ maxWidth: '5em', maxHeight: '6em', margin: '0 Auto'}}
									/>
									<Card.Body className=''>
										<Card.Title className=''>
											<p
											style={{ fontSize: '0.3em' }}>{data.name}</p>
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
}

export default Teams;
