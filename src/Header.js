// put in logo and navigation bar. Nav to individual leagues and continents.

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import fetchlogo from './Images/fetchgoal.logo.png';

class Header extends Component {
	render() {
		return (
			<>
				<Navbar
					className='p-3 bg-light text-white sticky-top'
					collapseOnSelect
					variant='light'
					expand='md'>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav>
							<LinkContainer to='/home'>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/leagues'>
								<Nav.Link>Leagues</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/teams'>
								<Nav.Link>Teams</Nav.Link>
							</LinkContainer> 
							<LinkContainer to='/about-us'>
								<Nav.Link>About us</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
							<LinkContainer to='/home'>
								<Navbar.Brand>
									<img src={fetchlogo} alt='logo' height={40} />
								</Navbar.Brand>
							</LinkContainer>
				</Navbar>
			</>
		);
	}
}

export default Header;


