export function ThermalSensation(t,v){
    return (0.045*(5.27*Math.sqrt(v)+10.45-0.28*v)*(t-16)+16).toFixed(0);
}

export function iconWeather(icon){
    switch(icon) {

        case 1:
            return("wi-day-sunny");
            break;
        case 2:
            return("wi-day-cloudy-high");
            break;
        case 4:
            return("wi-day-cloudy");
            break;
        case 7:
            return("wi-cloudy");
            break;
        case 18:
            console.log("Llovizna");
            break;
        case 4n:
            console.log("Parcialmente nuboso de noche");
            break;
        default:
            console.log("no existe");      
    }
    
}