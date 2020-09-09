import React, { Component } from 'react';
import {Card, Button} from 'bootstrap'

class Fedarations extends Component {
    
	render()  {
		return (
			<div>
				{this.props.data.map((data, index) => (
                    <div>
					<h1>{data.name}</h1>
                    </div>
				))}
			</div>
		);
	}
}

export default Fedarations;