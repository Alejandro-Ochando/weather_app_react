import React from 'react';
import ForecastPerDays from './ForecastPerDays';
import Fade from 'react-reveal/Fade';

const Day = ({ day }) => {
    const date = new Date();
    const currentDate = parseInt(date.toUTCString().slice(4, 7));

    if(day.length === 0 || day.length === '') return null;

    const  {day1, day2, day3, day4, day5, day6 } = day;
    const LISTDAY = [ day1, day2, day3, day4, day5, day6]
    
    const screen = (window.screen.width);
    
    let  forecastByDays = LISTDAY.slice(0, 6);
    let sizeForecast = 6;
    
    if(screen < 900 ){
        sizeForecast = 4;
        forecastByDays = LISTDAY.slice(0, 4);
    }
    
    return (
    <Fade right>     
    <div className="container glass center">
        <div className="row m12">
            <p className="title-hour">Diario</p>
        </div>
        <div className="row m12" >
            {forecastByDays.map( days => (
                <ForecastPerDays
                    sizeForecast={ sizeForecast}
                    days={days}
                    key={days.date}
                    currentDate={currentDate}
                />
            ))}
        </div>
    </div>
    </Fade>
    );    
}
 
export default Day;