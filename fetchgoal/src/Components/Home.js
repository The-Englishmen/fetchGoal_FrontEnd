// Home page - this will include 3 featured teams and navbar. Plus information on the site.


import React, { Component } from 'react';
import Leagues from './Leagues';

class Home extends Component {

    render(){
        return (
            // header with links and data to pass down
            // map through list of each league and display 1 team in random 
            <div>

                <Leagues />
                

            </div>

        );
    }
}


export default Home;