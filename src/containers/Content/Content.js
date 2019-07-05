import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Spacex from '../../components/Spacex/Spacex';
import Nasa from '../../components/Nasa/Nasa';

import classes from './Content.css';

class Content extends Component {
    
    render(){
        
        
        let classList = [classes.Content];
        return(
            <div className={classList.join(' ')}>
                
                
                <Switch>
                    
                    <Route path='/nasa-schedule' component={Nasa} />
                    <Route path="/spacex-schedule" render={(props) => <Spacex {...this.props} path={'/spacex-schedule'} />}  />
                    <Route path='/' component={Nasa} />

                </Switch>
                
                
            </div>
        );
    }
    
}

export default Content;