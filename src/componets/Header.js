import React from 'react';

const Header = ({ weather, city }) => {
    
    const MESES = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    const WEEKEND = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"
    ];

    const nWeekend = new Date().getDay();
    const day = new Date().getDate();
    const nMonth = new Date().getMonth();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    
    const month = MESES[nMonth];
    const weekend = WEEKEND[nWeekend];

    const town = city.charAt(0).toUpperCase() + city.slice(1) ;

    const { temperature, text} = weather;
    
    if(weather.length === 0) return null;
    

    return(
        <div>
            <h2>{town}</h2>
            <p>{weekend}, {day} de {month} {hour}:{minutes}</p>
            <h1>{temperature}º</h1>
            <p>{text}</p>
        </div>
    );
        
    

   
}
 
export default Header;