import React from 'react';
import { iconWeather, getHour } from '../helper';
import './ForecastPerDays.css';

const ForecastPerDays = ({days,  sizeForecast, currentDate }) => {
    const { date, humidity, icon, temperature_max, temperature_min } = days
    let hour = getHour();
    
    const weatherIcon = (hour <= 8 || hour >= 19) 
        ?
            iconWeather(icon)
        :
            iconWeather(parseInt(icon));

    const sizeColumn = (sizeForecast === 4) ? ("s3") : ("s2");
    const reference = (Math.sign(temperature_min))
    const variation  = temperature_max - temperature_min;
    const baseValue = (reference < 0)?  -50 : 10;   
    const temperature = baseValue + (variation * 5);
    
    const objectDate = new Date(date);
    const index = objectDate.getUTCDay();
    const WEEKEND = [
        "Dom.",
        "Lun.",
        "Mar.",
        "Mié.",
        "Jue.",
        "Vie.",
        "Sáb."
    ]  
    
    let weekendDay=(WEEKEND[index]);
    const numDay = objectDate.getDate();
    if(numDay === currentDate){
        weekendDay="Hoy";
    }

    return ( 
        <div className={`col ${sizeColumn}`}>
            <div className="wi-static">
                <p className="hour-data">{weekendDay}</p>
                <i className={`wi ${weatherIcon}`} />      
                <p className="temperature-max-day">{temperature_max}º</p>
                <div className="container-weather-day">
                    <div className="bar" style={{height: temperature + 'px'}}></div>
                </div>
                <p className="temperature-min-day center">{temperature_min}º</p>
                <div className="container-humidity">
                    <p className="p-humidity">{humidity}</p>
                    <i className="wi wi-humidity" />
                </div>
            </div>
        </div>
     );
}
 
export default ForecastPerDays;