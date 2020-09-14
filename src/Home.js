// Home page - this will include 3 featured teams and navbar. Plus information on the site.
import React, { Component } from 'react';
import forFans from './forfans.jpg';
import { Jumbotron, Button, Container, Card, CardGroup, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Home.css';
import CardColumns from 'react-bootstrap/CardColumns';
import fetchFan from './1693.jpg';
import Footer from './Footer.js'

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
						}}>
						<Container className='container'>
							<h1 className='display-2 text-white text-center text'>
								Made By Fans
							</h1>
							<h2 className='display-9 text-white text-center'>For Fans</h2>
						</Container>
					</Jumbotron>
					<h3 className='featured'> Featured Teams</h3>
					<div>
						<CardGroup className='p-10'>
							{this.props.data.slice(22, 25).map((data) => (
								<Card
									key={data.id}
									className='justify-content-center align-items-center align-content-center border-0 '>
									<img
										src={data.photo_url}
										alt='club'
										style={{ maxWidth: '8em' }}></img>
									<Card.Body className=' p-3 mb-1 text-center'>
										<Card.Title>{data.name}</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
									</Card.Body>
								</Card>
							))}
						</CardGroup>
					</div>

					<Row className='m-2'>
						<Col xs={12} md={8}>
							<img className='img-fluid' src={fetchFan} alt='Fetch user' />
						</Col>
						<Col xs={6} md={4} className=''>
							<p>
								FetchGoal is the only(that we know of), fan run football
								information website.
							</p>

							<p className='lead text-center'>
								Search and find information on football clubs from across the
								globe. From huge household name like Barcalona and Manchester
								United to newly formed clubs - you can get all the information
								here.
							</p>
						</Col>
					</Row>
					<h3 className='Lastest'> Most Recent added</h3>
					<div>
						<Card className='p-10'>
							{this.props.data.slice(-1).map((data) => (
								<Row >
									<Card
										key={data.id}
										className='justify-content-center align-items-center align-content-center border-0 '>
										<Col sm={4}>
											<Card.Img
												src={data.photo_url}
												alt='club'
												style={{ maxWidth: '8em' }}></Card.Img>
										</Col>
										<Col sm={4}>
											<Card.Title>{data.name}</Card.Title>
											<Card.Text>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</Card.Text>
										</Col>
										<Col sm={4}>
											<Button variant='primary'>Go somewhere</Button>
										</Col>
									</Card>
								</Row>
							))}
						</Card>
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default Home;
