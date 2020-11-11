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

//Formula sensacion termica
export function ThermalSensation(t,v){
    return (0.045*(5.27*Math.sqrt(v)+10.45-0.28*v)*(t-16)+16).toFixed(0);
}

export function iconWeather(icon){
    switch(icon) {

        case 1:
        case "1":
            return("wi-day-sunny");
        case "1n":
            return("wi-night-clear");  
        case 2:
        case "2":    
            return("wi-day-cloudy-high");
        case "2n":
            return("wi-night-alt-cloudy-high");    
        case 4:
        case 5:
        case "4":
        case "5":      
            return("wi-day-cloudy");
        case "4n":
        case "5n":      
            return("wi-night-alt-cloudy");    
        case 6:
        case "6n":
        case "6":     
            return("wi-cloud");
        case 7:
        case "7n":
        case "7":    
            return("wi-cloudy");
        case 3:
        case 8:
        case 12:
        case "3n":
        case "8n":
        case "12n":
        case "3":
        case "8":
        case "12":   
            return("wi-fog");    
        case 18:
        case "18n":
        case "18":    
            return("wi-showers");
        case 19:
        case 27:
        case "19n":
        case "27n":
        case "19":
        case "27":        
            return("wi-rain"); 
        case 21:
        case 23:
        case 22:
        case "21n":
        case "23n":
        case "22n":
        case "21":
        case "23":
        case "22":
            return("wi-lightning");   
        case 28:
        case "28n":
        case "28":
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
        case "30":
        case "31":
        case "32":     
            return("wi-snow");     
        case 33:
            return("wi-day-showers");
        case "33n":    
            return("wi-night-alt-showers");
        default:
            return("wi-na");      
    }
}

export function iconWind(iconwind){
    switch(iconwind) {
    case"N":
        return("wi-towards-n");
    case"NE":
        return("wi-towards-ene");
    case"E":
        return("wi-towards-e");
    case"SE":
        return("wi-towards-se");
    case"S":
        return("wi-towards-s");
    case"SO":
        return("wi-towards-sw");
    case"O":
        return("wi-towards-w");
    case"NO":
        return("wi-towards-nw");
    }
}    