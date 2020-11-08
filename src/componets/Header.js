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
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    
    const month = MESES[nMonth];
    const weekend = WEEKEND[nWeekend];

    const town = city.charAt(0).toUpperCase() + city.slice(1) ;
    if(minutes < 10 ) minutes = '0'+minutes;
    if(hour < 10 ) hour = '0' + hour;

    const { temperature, text} = weather;
    
    const header = (Object.keys(weather).length !== 0)
    ?   (<div>
            <h2>{town}</h2>
            <p>{weekend}, {day} de {month} {hour}:{minutes}</p>
            <h1>{temperature}º</h1>
            <p>{text}</p>
        </div>)
    :   (<p>Escribe una localizacion</p>);


    return(
        <div>
           {header} 
        </div>
    );
}
 
export default Header;