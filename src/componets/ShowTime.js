import React from 'react';

const ShowTime = ({day}) => {
    console.log("__________")
    console.log(day);
    const { hour_data, wind_direction, icon, temperature } = day
    
    return ( 
    <div className="col">
        <p>{hour_data}</p>
        <p>{icon}</p>
        <p>{temperature}</p>
        <p>Barra temperatura</p>
        <p>{wind_direction}</p>
    </div>
        
        );
}
 
export default ShowTime;