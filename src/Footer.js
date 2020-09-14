import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

class Footer extends Component {
	render() {
        return (
					<>
						<Navbar
							className='p-3 bg-light'
							collapseOnSelect
							expand='sm'>
							<Navbar.Toggle aria-controls='basic-navbar-nav' />
							<Navbar.Collapse id='basic-navbar-nav'>

							</Navbar.Collapse>
							<Navbar.Collapse className=''>
								<Navbar.Text>made with love @fetchGoal</Navbar.Text>
							</Navbar.Collapse>
						</Navbar>
					</>
				);
	}
}

export default Footer;
