import React from 'react';
import { iconWeather, getHour, iconWind } from '../helper';
import './ShowTime.css';

const ShowTime = ({day, sizeForecast}) => {

    const { hour_data, icon, temperature, icon_wind, humidity, wind,pressure } = day
    let hour = getHour();
    let weatherIcon = (hour <= 8 || hour >= 19) 
        ?
            iconWeather(icon)
        :
            iconWeather(parseInt(icon));

    const windIcon = iconWind(icon_wind);
    const sizeColumn = (sizeForecast === 4) ? ("s3") : ("s2");
    
    const t =temperature; 
    const HR =humidity; 
    const pr = Math.round((((HR/100)**(1/8))*(110+t)-110),2);
    if(humidity > 94 &&   temperature >= pr &&  wind <= 10 && pressure > 1019){
        weatherIcon = iconWeather(12);
    }

    return ( 
        <div className={`col ${sizeColumn}`}>
            <div className="wi-static">
                <p className="hour-data">{hour_data}</p>
                <i className={`wi ${weatherIcon}`} />            
                <div className="container-weather-hour">
                    <div className="bar" style={{height: (temperature*3)+ -20 + 'px'}}>
                        <p className="temperature-showTime">{temperature}º</p>
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