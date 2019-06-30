import React, { Component } from 'react';

import Header from '../../components/Layout/Header/Header';
import Content from '../Content/Content';
import Footer from '../../components/Layout/Footer/Footer';
import classes from './Layout.css';

class Layout extends Component {

    state = {
        navheader: [
            ['home', "/"],
            ['nasa', "https://www.nasa.gov/"],
            ['spaceX', "https://www.spacex.com/"]
        ],
        navContent: [
            ['NASA', '/nasa-schedule'],
            ['SpaceX', '/spacex-schedule']
        ],
        hourCoverter: {
            0: 12, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11,
            12: 12, 13: 1, 14: 2, 15: 3, 16: 4, 17: 5, 18: 6, 19: 7, 20: 8, 21: 9, 22: 10, 23: 11
        }
    }

    render(){
        return(
            <div>
                <Header navItems={this.state.navheader} />
                <Content navContent={this.state.navContent} />
                <Footer />
            </div>
        );
    } 
    
    
}
export default Layout;
