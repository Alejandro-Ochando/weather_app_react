import React from 'react';
import ForecastPerDays from './ForecastPerDays';

const Day = ({ day }) => {
    
    if(day.length === 0 || day.length === '') return null;
    const  {day1, day2, day3, day4, day5, day6 } = day;
    
    const LISTDAY = [ day1, day2, day3, day4, day5, day6]
    
    
    
    
    return ( 
    <div className="container glass center">
        <div className="row m12" >
            {Object.values(LISTDAY).map( days => (
                <ForecastPerDays
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