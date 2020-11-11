import React from 'react';
import ShowTime from './ShowTime';
import './Hours.css';


const Hours = ({ days }) => {
    if(days.length === 0 || days.length === '') return null;
    const screen = (window.screen.width);
    
    let  sixDays = Object.values(days).slice(0, 6);
    let tamañoDias = 6;
    if(screen < 900 ){
        tamañoDias = 4;
        sixDays = Object.values(days).slice(0, 4);
    }
   
    return ( 
        <div className="container glass center">
            <div className="row m12" >
                    {Object.values(sixDays).map( day => (
                        <ShowTime 
                            /*key={day.hour_data}*/
                            tamañoDias={tamañoDias}
                            day={day}
                            key={day.hour_data}
                        />
                    ))}
            </div>   
        </div>
    );
}
 
export default Hours;