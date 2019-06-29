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
        ]
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
