import React from 'react';
import { iconWeather, getHour } from '../helper';
import styled from 'styled-components';
import './ShowTime.css';

const ShowTime = ({day}) => {

    const { hour_data, wind_direction, icon, temperature } = day
    let hour = getHour();
    const weatherIcon = (hour <= 8 || hour >= 19 ) 
        ?
            iconWeather(parseInt(icon))
        :
            iconWeather(icon);

    
    return ( 
    <div className="col s2">
        <div className="wi-static">
            <p className="hour-data">{hour_data}</p>
            <p>{icon}</p>
            <i className={`wi ${weatherIcon}`} />            <div className="a">
                <div className="prueba" style={{height: temperature +20+ 'px'}}>
                    <p className="tem">{temperature}º</p>
                </div>
            </div>    
            <p>{wind_direction}</p>
        </div>
    </div>
        
        );
}
 
export default ShowTime;