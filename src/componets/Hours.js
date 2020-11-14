import React, { Fragment } from 'react';
import ShowTime from './ShowTime';
import './Hours.css';
import Fade from 'react-reveal/Fade';


const Hours = ({ hours }) => {
    if(hours.length === 0 || hours.length === '') return null;
    
    const screen = (window.screen.width);
    let  forecastByHours = Object.values(hours).slice(0, 6);
    let sizeForecast = 6;

    if(screen < 900 ){
        sizeForecast = 4;
        forecastByHours = Object.values(hours).slice(0, 4);
    }
   
    return ( 
        <Fragment>
            <Fade left>
                <div className="container glass center">
                    <div className="row m12" >
                            {forecastByHours.map( day => (
                                <ShowTime 
                                    sizeForecast={sizeForecast}
                                    day={day}
                                    key={day.hour_data}
                                />
                            ))}
                    </div>   
                </div>
            </Fade>
        </Fragment>
    );
}
 
export default Hours;