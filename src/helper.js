//Obteniendo numero de la semana
export function getWeekNumber() {
    return new Date().getDay();
}
//Obteniendo el numero del dia
export function getDay() {
    return new Date().getDate();
}
//Obteniendo el numero de mes
export function getMonthNumber() {
    return new Date().getMonth();
}
//Obteniendo la hora
export function getHour() {
    return new Date().getHours();
}
//Obteniendo los minutos
export function getMinute() {
    return new Date().getMinutes();
}


export function ThermalSensation(t,v){
    return (0.045*(5.27*Math.sqrt(v)+10.45-0.28*v)*(t-16)+16).toFixed(0);
}
/*TESTEAR ICONOS Y PONER LOS DE NOCHE*/ 
export function iconWeather(icon){
    switch(icon) {

        case 1:
            return("wi-day-sunny");
        case "1n":
            return("wi-night-clear");  
        case 2:
            return("wi-day-cloudy-high");
        case "2n":
            return("wi-night-alt-cloudy-high");    
        case 4:
        case 5:    
            return("wi-day-cloudy");
        case "4n":
        case "5n":    
            return("wi-night-alt-cloudy");    
        case 6:
        case "6n":    
            return("wi-cloud");
        case 7:
        case "7n":
            return("wi-cloudy");
        case 3:
        case 8:
        case 12:
        case "3n":
        case "8n":
        case "12n":   
            return("wi-fog");    
        case 18:
        case "18n":
            return("wi-showers");
        case 19:
        case 27:
        case "19n":
        case "27n":    
            return("wi-rain"); 
        case 21:
        case 23:
        case 22:
        case "21n":
        case "23n":
        case "22n":
            return("wi-lightning");   
        case 28:
        case "28n":
            return("wi-sleet");
        case 29:
            return("wi-day-snow");
        case "29n":
            return("wi-night-alt-snow");    
        case 30:
        case 31:
        case 32:
        case "30n":
        case "31n":
        case "32n":    
            return("wi-snow");     
        case 33:
            return("wi-day-showers");
        case "33n":    
            return("wi-night-alt-showers");
        default:
            return("wi-na");      
    }
}