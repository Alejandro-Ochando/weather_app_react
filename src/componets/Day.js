import React from 'react';
import ForecastPerDays from './ForecastPerDays';

const Day = ({ day }) => {
    
    if(day.length === 0 || day.length === '') return null;
    const  {day1, day2, day3, day4, day5, day6 } = day;
    
    const LISTDAY = [ day1, day2, day3, day4, day5, day6]
    
    const screen = (window.screen.width);
    let  forecastByHours = LISTDAY.slice(0, 6);
    let sizeForecast = 6;
    if(screen < 900 ){
        sizeForecast = 4;
        forecastByHours = LISTDAY.slice(0, 4);
    }
    
    return ( 
    <div className="container glass center">
        <div className="row m12" >
            {forecastByHours.map( days => (
                <ForecastPerDays
                    sizeForecast={ sizeForecast}
                    days={days}
                    key={days.date}
                />
            ))}
                {/* LISTAR EL ELEMENTO DIAS
                CPONER COMOPNENTE SHOW*/}
            
        </div>
    </div>
    );    
}
 
export default Day;