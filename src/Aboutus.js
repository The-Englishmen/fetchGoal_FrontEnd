// Short description outlining technologies used and team members.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Aboutus extends Component {
	render() {
		return (
			<div>
				<Link className='text-white' exact to={`/home/`}>
					<button type='button' class='btn btn-secondary btn-sm'>
						Go Home
					</button>
				</Link>
			</div>
		);
	}
}

export default Aboutus;
