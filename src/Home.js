// Home page - this will include 3 featured teams and navbar. Plus information on the site.
import React, { Component } from 'react';
import forFans from './forfans.jpg';
import {
	Jumbotron,
	Button,
	Container,
	Card,
	CardGroup,
	Row,
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Home.scss';
import fetchFan from './1693.jpg';
import Footer from './Footer.js';

class Home extends Component {
	render() {
		return (
			<>
				<div>
					<Jumbotron
						style={{
							backgroundImage: `url(${forFans})`,
							backgroundSize: 'cover',
							width: '100%',
							fluid: 'yes',
						}}>
						<Container className='container'>
							<h1 className='display-2 text-white text-center text'>
								Made By Fans
							</h1>
							<h2 className='display-9 text-white text-center'>For Fans</h2>
						</Container>
					</Jumbotron>
					<h3 className=' display-4 text-center'> Featured Teams</h3>
					<div>
						<CardGroup className='p-10 mt-5'>
							{this.props.data.slice(22, 25).map((data, id) => (
								<Card
									key={data.id}
									className='justify-content-center align-items-center align-content-center border-0 '>
									<img
										src={data.photo_url}
										alt='club'
										style={{ maxWidth: '8em' }}></img>
									<Card.Body className=' p-3 mb-1 text-center'>
										<Card.Title>{data.name}</Card.Title>
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
							))}
						</CardGroup>
					</div>

					<Col>
						<img className='img-fluid' src={fetchFan} alt='Fetch user' />
					</Col>
					<Container>
						<Col className='mt-3'>
							<p>
								FetchGoal is the only(that we know of), fan run football
								information website.
							</p>
						</Col>
					</Container>

					<Container>
						<p>
							Search and find information on football clubs from across the
							globe. From huge household name like Barcalona and Manchester
							United to newly formed clubs - you can get all the information
							here.
						</p>
					</Container>
					<h3 className='display-4 text-center m-3'> Most Recent</h3>
					<div>
						<CardGroup className='p-10 mt-5'>
							{this.props.data.slice(2, 5).map((data) => (
								<Card
									key={data.id}
									className='justify-content-center align-items-center align-content-center border-0 '>
									<img
										src={data.photo_url}
										alt='club'
										style={{ maxWidth: '7em', maxHeight: '7em' }}></img>
									<Card.Body className=' p-3 mb-1 text-center'>
										<Card.Title>{data.name}</Card.Title>
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
							))}
						</CardGroup>
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default Home;
