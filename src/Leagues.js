// display every league on site. Organize it with region 

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Teams from './Teams'

class Leagues extends Component {
		render()  {
		return (
			<div>
				{this.props.data.map((data, index) => (
					<div key={index}>
						<h1>{data.name}</h1>
					</div>
				))}
				<Route
					exact
					path='/teams'
					render={() => {
						return <Teams data={this.props.data} />; /// sending data down to teams component
					}}
				/>
			</div>
		);
	}
}

export default Leagues;
