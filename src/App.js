import React, { useState, useEffect } from 'react';
import Buscador from './componets/Buscador';
import Header from './componets/Header';
import Hours from './componets/Hours';
import Days from './componets/Days';
import Error from './componets/Error';
import Title from './componets/Title';
import Details from './componets/Details';
import axios from 'axios';


function App() {

  const [ city, saveCity ] = useState('');
  const [ code, saveCode ] = useState(0);
  const [ weather, saveWeather ] = useState({});
  const [ temperatures, saveTemperatures ] = useState({});
  const [ hours, saveHours] = useState([]);
  const [ day, saveDay ] = useState([]);
  const [ error, saveError ] = useState(false);
  const [ activeTitle, saveActiveTitle ] = useState(true);

  useEffect(()=> {
    
    if(code === 0 || code === '' || city === '' ){
      return;
    }

    const consultAPI = async () => {
      const lan = "es";
      const key ="zwYqaXaaX44qma1";
      const url = `https://api.tutiempo.net/json/?lan=${lan}&apid=${key}&lid=${code}`;
      const result = await axios.get(url);
      saveWeather(result.data.hour_hour.hour1);
      saveTemperatures(result.data.day1);
      saveHours(result.data.hour_hour);
      saveDay(result.data);
      console.log("primera vez");
    }
    consultAPI();
  },[code]);
  
  return (
      <div className="container">
        <Buscador 
          saveCity={saveCity}
          saveCode={saveCode}
          saveWeather={saveWeather}
          saveTemperatures={saveTemperatures}
          saveHours={saveHours}
          saveDay={saveDay}
          saveError={saveError}
          saveActiveTitle={saveActiveTitle}
        />
        { (error) ? <Error  
                      mensaje="Error al buscar la provincia" 
                    />
        : null
        }
        { (activeTitle) ? <Title /> : null}
        <Header 
          city={city}
          weather={weather}
          temperatures={temperatures}
        />
        <Hours
          hours={hours}
        />
        <Days
          day={day}
        />
        {(Object.keys(temperatures).length > 0) 
          ? <Details 
              temperatures={temperatures}
            />
          : null}
      </div>
  );
}

export default App;
