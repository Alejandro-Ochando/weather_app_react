import React from 'react';
import ShowTime from './ShowTime';
import './Hours.css';


const Hours = ({ days }) => {
    console.log();
    if(days.length === 0 || days.length === '') return null;
    const prueba= Object.values(days).slice(0, 6);
    
    /* */
    return ( 
        <div className="container mt-2 center">
            <div className="row m12" >
                
                    {Object.values(prueba).map( day => (
                        <ShowTime 
                            /*key={day.hour_data}*/
                            day={day}
                            key={day.hour_data}
                        />
                    ))}
                
            </div>   
        </div>
    );
}
 
export default Hours;