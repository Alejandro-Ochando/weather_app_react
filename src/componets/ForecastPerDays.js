import React from 'react';
import { iconWeather, getHour } from '../helper';

const ForecastPerDays = ({days}) => {
    const { date, hum,idity, icon, temeprature_max, temperature_min } = days
    let hour = getHour();
    const weatherIcon = (hour <= 8 || hour >= 19) 
        ?
            iconWeather(icon)
        :
            iconWeather(parseInt(icon));

    return ( 

        <div className="col s2">{/*Modificar columnas movil */}
        <div className="wi-static">
            <p className="hour-data">{date}</p>
            <i className={`wi ${weatherIcon}`} />      
            <div className="a">
                {/*<div className="prueba" style={{height: temperature +20+ 'px'}}>
                    <p className="tem">{temperature}º</p>
                </div>*/}
            </div>
            <div>
                {/*<i className={`wi wi-wind ${windIcon}`} />*/}
            </div>
        </div>
    </div>

     );
}
 
export default ForecastPerDays;