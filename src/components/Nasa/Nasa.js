import React, { Component } from 'react';
import axios from 'axios';

import Navigation from '../UI/Navigation/Navigation';

import classes from './Nasa.css';

import spacex1 from '../../assets/images/spacex/spacex1_427x640.jpg';
import spacex2 from '../../assets/images/spacex/spacex2_427x640.jpg';
import spacex3 from '../../assets/images/spacex/spacex3_427x640.jpg';
import spacex4 from '../../assets/images/spacex/spacex4_427x640.jpg';
import spacex5 from '../../assets/images/spacex/spacex5_427x640.jpg';
import spacex6 from '../../assets/images/spacex/spacex6_427x640.jpg';

class Nasa extends Component {

    state = {
        launchItems: <p>loading...</p>
    }

    componentDidMount(){
        axios.get("https://api.spacexdata.com/v3/launches/upcoming")
        .then(response => {
            console.log(response.data);
            let launchItems = null;
            let classList = [classes.LaunchItem];
            let itemCount = 0;

            // Creates the Launch item list from spacex api for upcoming flights not by customer nasa
            launchItems = response.data.map((launch, index) =>{
                let launchDate = new Date(launch.launch_date_local);
                const imgs = [spacex1, spacex2, spacex3, spacex4, spacex5, spacex6];

                // Gets a random image from imported image pool imgs. (need a lot more images)
                let randImg = imgs[Math.floor(Math.random() * imgs.length)];
               
                if(!launch.rocket.second_stage.payloads[0].customers[0].match(/nasa/i)){
                    return null;
                } else {

                    if(itemCount < 7){
                        itemCount += 1;
                        return (
                            <div key={launch.flight_number} className={classList.join(' ')}>
                                <div className={classes.ImgSize}>
                                    <img  src={randImg} alt="SpaceX Rocket" />
                                </div>
                                <div className={classes.Description} >
                                    <p><strong>Agency:&nbsp;</strong>{launch.rocket.second_stage.payloads[0].customers[0]}</p>
                                    <p><strong>Date:&nbsp;</strong> {launchDate.toDateString() + " " + launchDate.toLocaleTimeString()} </p>
                                    <p><strong>Rocket:&nbsp;</strong> {launch.rocket.rocket_name}</p>
                                    <p><strong>Launch Site:&nbsp;</strong> { launch.launch_site.site_name_long} </p>

                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                }
            });
            

            this.setState({
                launchItems: launchItems
            });
        })
        .catch(error => {

        });

    }
    render(){
        
        return(
            <div>
                <div className={classes.Content }>
                    <p className={classes.Upcoming}>Upcoming:</p>
                    <Navigation navBar="Content" navItems={this.props.navContent} path={this.props.path} />
                </div>
                <div className={classes.Layout} >
                    {this.state.launchItems}
                </div>
            </div>
        );
    }
}

export default Nasa;