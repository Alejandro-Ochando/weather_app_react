import React, { Fragment } from 'react';
import './Header.css';
import { ThermalSensation, iconWeather, getWeekNumber,  getMonthNumber, 
    getDay, getHour, getMinute
} from '../helper';

const Header = ({ weather, city, temperatures }) => {

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

    const weekend = WEEKEND[getWeekNumber()];
    const day = getDay();
    const month = MESES[getMonthNumber()];
    let hour = getHour();
    let minutes = getMinute();
    
    const town = city.charAt(0).toUpperCase() + city.slice(1) ;

    if(minutes < 10 ) minutes = '0'+minutes;
    if(hour < 10 ) hour = '0' + hour;

    const { temperature, text, icon} = weather;               
    const { temperature_max, temperature_min, wind } = temperatures;

    //Sensacion termica
    const t = temperature;
    const v = wind ;
    const sensation = ThermalSensation(t,v);
    
    const weatherIcon = (hour <= 8 || hour >= 19) 
        ?
            iconWeather(icon)
        :
            iconWeather(parseInt(icon));

    const header = (Object.keys(weather).length > 0)
    ?   (<Fragment>
            <p className="city">{town}</p>
            <p className="date">{weekend}, {day} de {month} {hour}:{minutes}</p>
            <div className="box-grade">
                {/*MIRAR LOS ICONOS  DE LA WEB Y BUSCAR EN LOS INSTALADOS SU NUMERO CORRESPONDIENTE*/}
                <div className="container-wi center">
                    <i className={`wi ${weatherIcon}`} />
                </div>
                <h1 className="temperature">{temperature}</h1>
                <span className="centigrate">º</span>
            </div>
            <p className="temperatures">{temperature_max}º / {temperature_min}º Sensación térmica {sensation}º</p>
            <p className="prediction">{text}</p>
        </Fragment>)
    :   (<p>Escribe una localizacion</p>);


    return(
        <div className="center">
           {header} 
        </div>
    );
}
 
export default Header;