// put in logo and navigation bar. Nav to individual leagues and continents. 


import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  {LinkContainer} from 'react-router-bootstrap';


class Header extends Component {
	render() {
        return (
					<Navbar
						className='p-3 mb-3 bg-success text-white'
						collapseOnSelect
						variant='light'
						expand='md'>
						<LinkContainer to='/home'>
							<Navbar.Brand>
								<img src='' alt='logo' height={50} />
							</Navbar.Brand>
						</LinkContainer>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav>
								<LinkContainer to='/home'>
									<Nav.Link>Home</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/leagues'>
									<Nav.Link>Leagues</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/about'>
									<Nav.Link>About</Nav.Link>
								</LinkContainer>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				);
	}
}

export default Header;
