// Home page - this will include 3 featured teams and navbar. Plus information on the site.
import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				{this.props.data.map((data, index) => (
					<p>
						Hello, {data.name} from {data.email}!
					</p>
				))}
			</div>
		);
	}
}

export default Home;
