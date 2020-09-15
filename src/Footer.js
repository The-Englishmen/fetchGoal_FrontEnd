import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
	render() {
		return (
			<>
				<Navbar className='p-3 bg-light mt-4 align-center' expand='md'>
					<Navbar.Text>
						made with love @fetchGoal
					</Navbar.Text>
				</Navbar>
			</>
		);
	}
}

export default Footer;
