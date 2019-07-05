import React, { Component } from 'react';

import Navigation from '../UI/Navigation/Navigation';
import classes from "./Spacex.css";

class Spacex extends Component {

    state = {
        launchItems: null
    }


    sampleData = () => {

        const data = [
            {
                "flight_number": 82,
                'mission_name': 'CRS-18',
                "launch_date_local": "2019-07-21T19:35:00-04:00",
                "rocket": {
                    "rocket_id": "falcon9",
                    "rocket_name": "Falcon 9",
                    "rocket_type": "FT",
                    "first_stage": {
                      "cores": [
                        {
                          "core_serial": "B1056",
                          "flight": 2,
                          "block": 5,
                          "gridfins": null,
                          "legs": null,
                          "reused": true,
                          "land_success": null,
                          "landing_intent": null,
                          "landing_type": null,
                          "landing_vehicle": null
                        }
                      ]
                    }
                },
                "launch_site": {
                    "site_id": "ccafs_slc_40",
                    "site_name": "CCAFS SLC 40",
                    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                    }
                },
            
            {
                "flight_number": 83,
                "mission_name": "Amos-17",
                "launch_date_local": "2019-07-31T20:00:00-04:00",
                "rocket": {
                    "rocket_id": "falcon9",
                    "rocket_name": "Falcon 9",
                    "rocket_type": "FT",
                    "first_stage": {
                      "cores": [
                        {
                          "core_serial": null,
                          "flight": null,
                          "block": null,
                          "gridfins": null,
                          "legs": null,
                          "reused": null,
                          "land_success": null,
                          "landing_intent": null,
                          "landing_type": null,
                          "landing_vehicle": null
                        }
                      ]
                    }
                },
                "launch_site": {
                    "site_id": "ksc_lc_39a",
                    "site_name": "KSC LC 39A",
                    "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                    }
            }
        
        ];

        return data;
    }


    componentDidMount(){
        const sampleData = this.sampleData();

        const launchItems = sampleData.map((launch, index) => {
            let launchDate = new Date(launch.launch_date_local);
            let classList = [classes.LaunchItem];


            return (
            <div key={launch.flight_number} className={classList.join(' ')}>
                <div className={classes.ImgSize}>
                    <img  src={require('../../assets/images/spacex/spacex' + (index + 1) + '_427x640.jpg')} alt="SpaceX Rocket" />
                </div>
                <div className={classes.Description} >
                    <p><strong>Flight Number:&nbsp;</strong>{launch.flight_number}</p>
                    <p><strong>Date:&nbsp;</strong> {launchDate.toDateString() + " " + launchDate.toLocaleTimeString()} </p>
                    <p><strong>Rocket:&nbsp;</strong> {launch.rocket.rocket_name}</p>
                    <p><strong>Launch Site:&nbsp;</strong> { launch.launch_site.site_name_long} </p>
                </div>

            </div>
            );
        });

        this.setState({launchItems: launchItems});
    }

    render(){
        
        return(
            <React.Fragment>
                <div className={classes.Content }>
                    <p className={classes.Upcoming}>Upcoming:</p>
                    <Navigation navBar="Content" navItems={this.props.navContent} path={this.props.path} />
                </div>
                <div className={classes.Layout} >
                    {this.state.launchItems}
                </div>
            </React.Fragment>
        );
    }
}

export default Spacex;