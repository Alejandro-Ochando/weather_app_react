//Obteniendo el número de la semana
export function getWeekNumber() {
    return new Date().getDay();
}
//Obteniendo el número del dia
export function getDay() {
    return new Date().getDate();
}
//Obteniendo el número de mes
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

//Formula sensación térmica
export function ThermalSensation(t,v){
    return (0.045*(5.27*Math.sqrt(v)+10.45-0.28*v)*(t-16)+16).toFixed(0);
}

//Busca el icono del tiempo
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
//Busca el icono de la dirección del tiempo
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

//Fondos según el tiempo
export function iconFond(icon){
    switch(icon) {

        case 1:
        case "1":
            return("sun");
        case "1n":
            return("sun");  
        case 2:
        case "2":    
            return("sun");
        case "2n":
            return("sun");    
        case 4:
        case 5:
        case "4":
        case "5":      
            return("cloudy");
        case "4n":
        case "5n":      
            return("sun");    
        case 6:
        case "6n":
        case "6":     
            return("cloudy");
        case 7:
        case "7n":
        case "7":    
            return("cloudy");
        case 3:
        case 8:
        case 12:
        case "3n":
        case "8n":
        case "12n":
        case "3":
        case "8":
        case "12":   
            return("fog");    
        case 18:
        case "18n":
        case "18":    
            return("rain");
        case 19:
        case 27:
        case "19n":
        case "27n":
        case "19":
        case "27":        
            return("rain"); 
        case 21:
        case 23:
        case 22:
        case "21n":
        case "23n":
        case "22n":
        case "21":
        case "23":
        case "22":
            return("storm");   
        case 28:
        case "28n":
        case "28":
            return("rain");
        case 29:
            return("snow");
        case "29n":
            return("snow");    
        case 30:
        case 31:
        case 32:
        case "30n":
        case "31n":
        case "32n":
        case "30":
        case "31":
        case "32":     
            return("snow");     
        case 33:
            return("rain");
        case "33n":    
            return("rain");
        default:
            return("intro");      
    }
}

//Funcion para saber fase lunar
export function moonIcon(moon_phases_icon){
    switch(moon_phases_icon) {
        case "1":
                return("wi-moon-new");
        case "2":
                return("wi-moon-waxing-crescent-1");
        case "3":
                return("wi-moon-waxing-crescent-2");
        case "4":
                return("wi-moon-waxing-crescent-3");
        case "5":
                return("wi-moon-waxing-crescent-4");
        case "6": 
            return("wi-moon-waxing-crescent-5");
        case "7":
                return("wi-moon-waxing-crescent-6");
        case "8":
            return("wi-moon-first-quarter");
        case "9": 
            return("wi-moon-waxing-gibbous-1") ;
        case "10":
            return("wi-moon-waxing-gibbous-2");
        case "11":
            return("wi-moon-waxing-gibbous-3");
        case "12":
            return("wi-moon-waxing-gibbous-4");
        case "13":
            return("wi-moon-waxing-gibbous-5");
        case "14":
            return("wi-moon-waxing-gibbous-6");
        case "15":
            return("wi-moon-full");
        case "16":
                return("wi-moon-waning-gibbous-1");
        case "17":
                return("wi-moon-waning-gibbous-2");
        case "18": 
                return("wi-moon-waning-gibbous-3");
        case "19":
                return("wi-moon-waning-gibbous-4");
        case "20":
                return("wi-moon-waning-gibbous-5");
        case "21": 
                return("wi-moon-waning-gibbous-6");
        case "22":
                return("wi-moon-third-quarter");
        case "23":
                return("wi-moon-waning-crescent-1");
        case "24": 
            return("wi-moon-waning-crescent-2");
        case "25":
                return("wi-moon-waning-crescent-3");
        case "26":
                return("wi-moon-waning-crescent-4");
        case "27": 
            return("wi-moon-waning-crescent-5");
        case "28":
                return("wi-moon-waning-crescent-6");
        case "29":
                return("wi-moon-new");
        default:
            return("na");
    }
}