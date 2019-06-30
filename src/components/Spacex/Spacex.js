import React, { Component } from 'react';

import classes from "./Spacex.css";

class Spacex extends Component {

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
                    },
                "launch_site": {
                    "site_id": "ccafs_slc_40",
                    "site_name": "CCAFS SLC 40",
                    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                    }
                },
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
                    },
                "launch_site": {
                    "site_id": "ksc_lc_39a",
                    "site_name": "KSC LC 39A",
                    "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                    }
            }
        }
        ];

        return data;
    }

    getTimeZone = (site) => {

        const timeZones = {
            vafb_slc_4e: " PST",
            ksc_lc_39a: " EST",
            ccafs_slc_40: " EST"
        };

        return timeZones[site];

    }


    componentDidMount(){
        // cali site_id = "vafb_slc_4e"
        

        const sampleData = this.sampleData();
    }

    render(){
        return(
            <div>
                Spacex schedule.
            </div>
        );
    }
}

export default Spacex;