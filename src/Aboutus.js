// Short description outlining technologies used and team members.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Card } from 'react-bootstrap';

import usHeader from './Images/aboutusheader.png';
import missingTeam from './Images/addyourteambanner.png';
import footballAd from './Images/footballad.png';
import Footer from './Footer';

class Aboutus extends Component {
	render() {
		return (
			<div>
				<Image src={usHeader} fluid />
				<Container>
					<Card className='border-0 text-center mt-3 mb-3'>
						<Card.Text className='text-bold'>
							What Teams are included in FetchGoal?
							<div className='border-0 text-left p-2'>
								<li style={{ fontSize: '1em' }}>
									All 6 main Governing body are included
								</li>
								<li>
									Top Leagues such as English Premier league, Spanish La Liga
									and if the smaller leagues like the newly formed New Zealand
									Football Championship{' '}
								</li>
								<li>
									All the top clubs in the world are included along with little
									known teams that will increase your knowledge{' '}
								</li>
							</div>
						</Card.Text>
					</Card>
				</Container>
				<Image src={missingTeam} fluid />
				<Container>
					<Card className='border-0 text-center mt-3 mb-3'>
						<Card.Text>
							Where do you get your information from?
							<div className='border-0 text-left p-2'>
								<li>We get our information from you guys the football fans</li>
								<li>
									Also such sites as Wikipedia - we search so you don't have to!
								</li>
								<li>We also have knowledge stored in the brain!</li>
							</div>
						</Card.Text>
					</Card>
				</Container>
				<Image src={footballAd} fluid />
				<Container>
					<Card className='border-0 text-center mt-3 mb-3'>
						<Card.Text>
							How do you make money?
							<div className='border-0 text-left p-2'>
								<li>The short answer is we dont</li>
								<li>
									The longer answer is we sell ad space like the ones on this
									page to help with maintenance costs etc.
								</li>
								<li>We do this for the fans</li>
							</div>
						</Card.Text>
					</Card>
				</Container>
				<Footer/>
			</div>
		);
	}
}

export default Aboutus;
