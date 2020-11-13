import React from 'react';
import { iconWeather, getHour, iconWind } from '../helper';
import './ShowTime.css';

const ShowTime = ({day, sizeForecast}) => {

    const { hour_data, icon, temperature, icon_wind } = day
    let hour = getHour();
    const weatherIcon = (hour <= 8 || hour >= 19) 
        ?
            iconWeather(icon)
        :
            iconWeather(parseInt(icon));

    const windIcon = iconWind(icon_wind);
    const sizeColumn = (sizeForecast === 4) ? ("s3") : ("s2");


    return ( 
    <div className={`col ${sizeColumn}`}>{/*Modificar columnas movil */}
        <div className="wi-static">
            <p className="hour-data">{hour_data}</p>
            <i className={`wi ${weatherIcon}`} />            
            <div className="a">
                <div className="prueba" style={{height: temperature +20+ 'px'}}>
                    <p className="tem">{temperature}º</p>
                </div>
            </div>
            <div>
                <i className={`wi wi-wind ${windIcon}`} />
            </div>
        </div>
    </div>
        
        );
}
 
export default ShowTime;