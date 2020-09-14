import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
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
		);
	}
}

export default Search; 