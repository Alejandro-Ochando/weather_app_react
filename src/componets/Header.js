import React, { Fragment } from 'react';
import './Header.css';
import { ThermalSensation, iconWeather, getWeekNumber,  getMonthNumber, 
    getDay, getHour, getMinute, iconFond
} from '../helper';
import Fade from 'react-reveal/Fade';

const Header = ({ weather, city, temperatures }) => {

    const MONTH = [
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
    const month = MONTH[getMonthNumber()];
    let hour = getHour();
    let minutes = getMinute();
    
    const town = city.charAt(0).toUpperCase() + city.slice(1) ;

    if(minutes < 10 ) minutes = '0'+minutes;
    if(hour < 10 ) hour = '0' + hour;

    const { temperature, text, icon, humidity, pressure} = weather;               
    const { temperature_max, temperature_min, wind } = temperatures;

    //Sensacion térmica
    const t = temperature;
    const v = wind ;
    const sensation = ThermalSensation(t,v);
    
    let weatherIcon = (hour <= 8 || hour >= 19) 
        ?
            iconWeather(icon)
        :
            iconWeather(parseInt(icon));

    
    const pr = Math.round((((humidity/100)**(1/8))*(110+temperature)-110),2);
    
    let intro = document.getElementById('intro');
    intro.className = iconFond(icon);
    
    if(humidity > 93 &&   temperature >= pr &&  wind <= 10 && pressure > 1019){
        weatherIcon = iconWeather(12);
        intro = document.getElementById('intro');
        intro.className = 'fog';
    }

    
    
    
    

    const header = (Object.keys(weather).length > 0)
    ? (
        <Fragment>
            <Fade right>
                <p className="city">{town}</p>
                <p className="date">{weekend}, {day} de {month} {hour}:{minutes}</p>
                <div className="box-grade">
                    <div className="container-wi center">
                        <i className={`wi ${weatherIcon}`} />
                    </div>
                    <h1 className="temperature">{temperature}</h1>
                    <span className="centigrate">º</span>
                </div>
                <p className="temperatures">{temperature_max}º / {temperature_min}º Sensación térmica {sensation}º</p>
                <p className="prediction">{text}</p>
                </Fade>
            </Fragment>
    ):   
        null;


    return(
        <div className="center">
           {header} 
        </div>
    );
}
 
export default Header;