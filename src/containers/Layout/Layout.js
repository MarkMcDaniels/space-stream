import React, { Component } from 'react';

import Header from '../../components/Layout/Header/Header';
import Content from '../../components/Layout/Content/Content';
import Footer from '../../components/Layout/Footer/Footer';
import classes from './Layout.css';

class Layout extends Component {

    state = {
        navheader: {
            home: "/",
            nasa: "https://www.nasa.gov/",
            spaceX: "https://www.spacex.com/"
        }
    }

    render(){
        return(
            <div>
                <Header navItems={this.state.navheader} />
                <Content />
                <Footer />
            </div>
        );
    } 
    
    
}
export default Layout;
