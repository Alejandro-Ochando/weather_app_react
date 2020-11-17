import React from 'react';
import Fade from 'react-reveal/Fade';
import './Details.css';
import { moonIcon } from '../helper';


const Details = ({temperatures}) => {
    const { moonrise, moonset, sunrise, sunset, 
            moon_phases_icon, humidity, wind } = temperatures;
    
    const moon = moonIcon( moon_phases_icon);
    console.log(moon);
    
    return ( 
        <Fade left>
            <div className="container glass end">
                <div className="row m12">
                    <p className="title-hour">Detalles</p>
                </div>
                <div className="column">
                    <div className="row center">
                        <div className="column col s6">
                            <div className="details">
                                <i className="wi wi-moonrise"/>
                                <p className="text-details">{moonrise} h.</p>
                            </div>
                        </div>
                        <div className="column col m6">
                            <div className="details">
                                <i className="wi wi-moonset"/>
                                <p className="text-details">{moonset} h.</p>
                            </div>
                        </div>   
                    </div>
                    <div className="row center">
                        <div className="column col s6">
                            <div className="details">
                                <i className="wi wi-sunrise"/>
                                <p className="text-details">{sunrise} h.</p>
                            </div>
                        </div>
                        <div className="column col m6">
                            <div className="details">
                                <i className="wi wi-sunset"/>
                                <p className="text-details">{sunset} h.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row center">
                        <div className="column col s6">
                            <div className="details">
                                <i className="wi wi-strong-wind"/>
                                <p className="text-details">{wind} km/h</p>
                            </div>
                        </div>
                        <div className="column col m6">
                            <div className="details">
                                <i className="wi wi-humidity"/>
                                <p className="text-details">{humidity} %</p>
                                
                            </div>
                        </div>
                    </div>
                    <hr className="line"/>  
                    <div className="row center details">
                        <p className="text-details">Fase Lunar </p>
                        <i className={`wi moon ${moon} `}/>
                    </div>
                </div>
            </div>    
        </Fade>

     );
}
 
export default Details;