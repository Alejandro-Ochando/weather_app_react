import React from 'react';
import ShowTime from './ShowTime';
import './Hours.css';


const Hours = ({ days }) => {
    console.log(days);
    /* */
    return ( 
        <div className="container mt-2 center">
            <div className="row" >
                <div className="col m-12">
                    {Object.values(days).map( day => (
                        <ShowTime 
                            /*key={day.hour_data}*/
                            day={day}
                            key={day.hour_data}
                        />
                    ))}
                </div> 
            </div>   
        </div>
    );
}
 
export default Hours;