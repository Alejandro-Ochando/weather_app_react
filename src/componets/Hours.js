import React from 'react';
import ShowTime from './ShowTime';
import './Hours.css';


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
        <div className="container glass center">
            <div className="row m12" >
                    {Object.values(forecastByHours).map( day => (
                        <ShowTime 
                            /*key={day.hour_data}*/
                            sizeForecast={sizeForecast}
                            day={day}
                            key={day.hour_data}
                        />
                    ))}
            </div>   
        </div>
    );
}
 
export default Hours;