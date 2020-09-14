import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {

	Button,
	Container,
	Card,

} from 'react-bootstrap';
class Team extends Component {
	constructor() {
		super();
		this.state = {
			///setting State for data being brought in below
			data: [],
		};
	}

	componentDidMount() {
		axios('https://whispering-garden-05173.herokuapp.com/team/')
			.then((json) => {
				this.setState({ data: json.data });
			})
			.catch(console.error);
	}

	render() {
		return (
			<>
				<Container>
					<Form onChange={this.props.handleInput}>
						<Row>
							<Col>
								<Form.Group>
									<Form.Control type='text' placeholder='Search' />
								</Form.Group>
								<Form.Text className='text-muted text-center'>
									Search by Team name
								</Form.Text>
							</Col>
						</Row>
					</Form>
				</Container>
				<div>
					<Container>
						{this.props.data.map((data) => (
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
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Button variant='primary'>Go somewhere</Button>
								</Card.Body>
							</Card>
						))}
					</Container>
				</div>
			</>
		);
	}
}

export default Team;
