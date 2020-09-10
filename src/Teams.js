import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Team extends Component {
	render() {
		let team; /// varible to hold information
		for (let i = 0; i < this.props.data.length; i++) {
			/// for loop to iterate over data
			if (this.props.data[i].league === this.props.match.params.league) {
				/// condition needed to display correct teams from the correct league
				team = this.props.data[i]; /// stored information to use
			}
		}
		return (
			<div>
				<Card>
					<div class='card-header'>The teams in the league</div>
					<div class='card-body'>
						<h5 class='card-title'>{team.name}</h5>
						<p class='card-text'>
							{team.name}
							{'-'}
						</p>
					</div>
					<div class='card-footer text-muted'>d</div>
				</Card>
			</div>
		);
	}
}

export default Team;
