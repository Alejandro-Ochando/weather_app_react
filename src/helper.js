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
        case 2:
            return("wi-day-cloudy-high");
        case 4:
        case 5:    
            return("wi-day-cloudy");
        case 6:    
            return("wi-cloud");
        case 7:
            return("wi-cloudy");
        case 3:
        case 8:
        case 12:
            return("wi-fog");    
        case 18:
            return("wi-showers");
        case 19:
        case  27:
            return("wi-rain"); 
        case 21:
            return("wi-day-thunderstorm");
        case 23:
        case 22:        
            return("wi-thunderstorm");
        case 28:
            return("wi-sleet");
        case 29:
            return("wi-day-snow");            
        case 30:
        case 31:
        case 32:
            return("wi-snow");     
        case 33:
            return("wi-day-showers");        
        case 4n:
            return("Parcialmente nuboso de noche");       
        default:
            console.log("no existe");      
    }
}